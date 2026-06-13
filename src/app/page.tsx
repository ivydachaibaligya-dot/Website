import { Metadata } from 'next';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import ServicesOverview from '@/components/sections/ServicesOverview';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import CallToAction from '@/components/sections/CallToAction';

export const metadata: Metadata = {
  title: 'Home | BrightSide Solutions',
  description: 'BrightSide Solutions - Professional virtual assistant services helping businesses scale with administrative support, email management, CRM management, and lead generation.',
  openGraph: {
    title: 'Home | BrightSide Solutions',
    description: 'Professional virtual assistant services helping businesses scale.',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <WhyChooseUs />
        <ServicesOverview />
        <Testimonials />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
