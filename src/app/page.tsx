import { Metadata } from 'next';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/ServicesOverview';
import Approach from '@/components/sections/Approach';
import Tools from '@/components/sections/Tools';
import WhyAurevant from '@/components/sections/WhyAurevant';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';

export const metadata: Metadata = {
  title: 'AUREVANT | Global Business Support',
  description: 'AUREVANT is a boutique virtual assistant agency providing premium global business support to US companies. Your Business. Our Commitment.',
  openGraph: {
    title: 'AUREVANT | Global Business Support',
    description: 'Your Business. Our Commitment. Premium virtual assistant support for US businesses.',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
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
