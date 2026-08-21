import { SiteNav } from '@/components/sections/SiteNav';
import { Hero } from '@/components/sections/Hero';
import { Marquee } from '@/components/sections/Marquee';
import { Origin } from '@/components/sections/Origin';
import { MenuSection } from '@/components/sections/MenuSection';
import { Ratings } from '@/components/sections/Ratings';
import { Contact } from '@/components/sections/Contact';
import { SiteFooter } from '@/components/sections/SiteFooter';
import { CallBar } from '@/components/CallBar';
import { Reveal } from '@/components/Reveal';

export default function Page() {
  return (
    <>
      <span aria-hidden="true" className="grain" />
      <SiteNav />
      <main>
        <Hero />
        <Marquee />
        <Origin />
        <MenuSection />
        <Ratings />
        <Contact />
      </main>
      <SiteFooter />
      <CallBar />
      <Reveal />
    </>
  );
}
