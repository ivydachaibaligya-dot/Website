import { Metadata } from 'next';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/ServicesOverview';
import Tools from '@/components/sections/Tools';
import Portfolio from '@/components/sections/Portfolio';
import WhyWorkWithMe from '@/components/sections/WhyWorkWithMe';
import Contact from '@/components/sections/Contact';

export const metadata: Metadata = {
  title: 'Ivy | Roofing Operations Virtual Assistant',
  description: 'Expert Virtual Assistant specializing in roofing operations, administrative support, and business management for US-based roofing companies.',
  openGraph: {
    title: 'Ivy | Roofing Operations Virtual Assistant',
    description: 'Expert Virtual Assistant specializing in roofing operations and administrative support.',
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
        <Tools />
        <Portfolio />
        <WhyWorkWithMe />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
