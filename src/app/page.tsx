import { Metadata } from 'next';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/ServicesOverview';
import Showcase from '@/components/sections/Showcase';
import Approach from '@/components/sections/Approach';
import Tools from '@/components/sections/Tools';
import WhyAurevant from '@/components/sections/WhyAurevant';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';

export const metadata: Metadata = {
  title: { absolute: 'AUREVANT | Virtual Assistant & Creative Digital Agency' },
  description:
    'Premium virtual assistance, graphic design, web development, social media management, and digital solutions for US businesses. Your Business. Our Commitment.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'AUREVANT | Virtual Assistant & Creative Digital Agency',
    description:
      'Premium virtual assistance, graphic design, web development, social media management, and digital solutions for US businesses. Your Business. Our Commitment.',
    url: '/',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Showcase />
        <Approach />
        <Tools />
        <WhyAurevant />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
