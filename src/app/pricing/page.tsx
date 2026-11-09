import { Metadata } from 'next';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import PricingCalculator from '@/components/sections/PricingCalculator';

export const metadata: Metadata = {
  title: 'Pricing Calculator & Custom Quote',
  description:
    'Build your own support plan. Select services, set hours per day and days per week, see estimated hourly, weekly, and monthly pricing, and request a custom quote.',
  alternates: { canonical: '/pricing' },
  openGraph: {
    title: 'Pricing Calculator & Custom Quote | AUREVANT',
    description:
      'Build your own support plan. Select services, set hours per day and days per week, see estimated hourly, weekly, and monthly pricing, and request a custom quote.',
    url: '/pricing',
  },
};

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main id="main-content" className="pt-20">
        <PricingCalculator headingLevel="h1" />
      </main>
      <Footer />
    </div>
  );
}
