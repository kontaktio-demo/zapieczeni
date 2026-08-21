import { SiteNav } from '@/components/sections/SiteNav';
import { Hero } from '@/components/sections/Hero';
import { InfoBar } from '@/components/sections/InfoBar';
import { MenuSection } from '@/components/sections/MenuSection';
import { Ratings } from '@/components/sections/Ratings';
import { Contact } from '@/components/sections/Contact';
import { SiteFooter } from '@/components/sections/SiteFooter';
import { CallBar } from '@/components/CallBar';

export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <InfoBar />
        <MenuSection />
        <Ratings />
        <Contact />
      </main>
      <SiteFooter />
      <CallBar />
    </>
  );
}
