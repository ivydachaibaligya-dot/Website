import { Metadata } from 'next';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import PricingCalculator from '@/components/sections/PricingCalculator';

export const metadata: Metadata = {
  title: 'Pricing & Custom Quote | AUREVANT',
  description:
    'Build your own virtual support plan. Select services, set your preferred working hours, and request a custom quote from AUREVANT.',
  openGraph: {
    title: 'Build Your Own Support Plan | AUREVANT',
    description:
      'Customize your virtual support package based on your business needs, preferred working hours, and selected services.',
  },
};

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <PricingCalculator headingLevel="h1" />
      </main>
      <Footer />
    </div>
  );
}
