"""Przygotowuje zdjęcia do public/foto.

Wejście: photos-src/src-*.jpg (oryginały poza buildem).
Wyjście: public/foto/<nazwa>.webp (master; warianty robi next/image)

Cała seria dostaje tę samą korektę, żeby zdjęcia z różnych dni i telefonów
wyglądały jak jedna sesja: lekki kontrast, ciepła temperatura, winieta.

Uruchomienie:  python scripts/prepare-photos.py
"""

from pathlib import Path

from PIL import Image, ImageEnhance, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "photos-src"
OUT = ROOT / "public" / "foto"

RATIOS = {"hero": 4 / 5, "menu": 4 / 5, "lokal": 3 / 2}
# jeden master na zdjęcie; warianty responsywne generuje next/image
# pliki up-*.png to zdjęcia lokalu podbite do 4K (Higgsfield), reszta prosto z IG
MASTER_WIDTH = 1280

# nazwa wyjściowa, plik źródłowy, kadr, kotwica pionowa (0 = góra, 1 = dół)
MANIFEST = [
    ("hero-zapiekanka", "up-778586979.png", "hero", 0.50),
    ("zapiekanka-w-dloni", "src-766008182.jpg", "menu", 0.50),
    ("zapiekanki-z-gory", "src-729260042.jpg", "menu", 0.50),
    ("hot-dog", "src-753381870.jpg", "menu", 0.50),
    ("bowl-z-kukurydza", "src-773995718.jpg", "menu", 0.50),
    ("bowle-na-lezakach", "src-730515828.jpg", "menu", 0.50),
    ("lokal-zewnatrz", "up-758328784.png", "lokal", 0.06),
]


def crop_to(image: Image.Image, ratio: float, anchor: float) -> Image.Image:
    w, h = image.size
    target_h = int(w / ratio)
    if target_h <= h:
        top = int((h - target_h) * anchor)
        return image.crop((0, top, w, top + target_h))
    target_w = int(h * ratio)
    left = int((w - target_w) / 2)
    return image.crop((left, 0, left + target_w, h))


def vignette(image: Image.Image, strength: float = 0.22) -> Image.Image:
    w, h = image.size
    mask = Image.new("L", (w, h), 0)
    inner = Image.new("L", (int(w * 1.35), int(h * 1.35)), 255)
    inner = inner.filter(ImageFilter.GaussianBlur(min(w, h) * 0.18))
    mask.paste(inner.resize((w, h)), (0, 0))
    dark = Image.new("RGB", (w, h), (0, 0, 0))
    return Image.composite(image, Image.blend(image, dark, strength), mask)


def warm(image: Image.Image, amount: float = 1.04) -> Image.Image:
    r, g, b = image.split()
    r = r.point(lambda v: min(255, int(v * amount)))
    b = b.point(lambda v: int(v / amount))
    return Image.merge("RGB", (r, g, b))


def grade(image: Image.Image) -> Image.Image:
    image = warm(image)
    image = ImageEnhance.Contrast(image).enhance(1.07)
    image = ImageEnhance.Color(image).enhance(1.05)
    image = ImageEnhance.Brightness(image).enhance(0.99)
    return vignette(image)


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    written = 0

    for name, filename, kind, anchor in MANIFEST:
        path = SRC / filename
        if not path.exists():
            print(f"brak pliku: {filename}")
            continue

        image = Image.open(path).convert("RGB")
        image = crop_to(image, RATIOS[kind], anchor)
        image = grade(image)

        width = min(MASTER_WIDTH, image.width * 2)
        height = round(width / RATIOS[kind])
        resized = image.resize((width, height), Image.LANCZOS)
        resized = resized.filter(ImageFilter.UnsharpMask(radius=1.2, percent=55, threshold=3))
        resized.save(OUT / f"{name}.webp", "WEBP", quality=82, method=6)
        written += 1

        print(f"{name:22} {image.size[0]}x{image.size[1]} -> {width}x{height}")

    # tło karty Open Graph, 1200x630, czytane przy buildzie przez opengraph-image
    og_src = SRC / "up-778586979.png"
    if og_src.exists():
        og = grade(crop_to(Image.open(og_src).convert("RGB"), 1200 / 630, 0.45))
        og = og.resize((1200, 630), Image.LANCZOS)
        og.save(OUT / "og-background.jpg", "JPEG", quality=86, optimize=True)
        written += 1
        print("og-background          1200x630")

    print(f"zapisano plików: {written}")


if __name__ == "__main__":
    main()
