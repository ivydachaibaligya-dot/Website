import { Metadata } from 'next';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/sections/ContactForm';
import CallToAction from '@/components/sections/CallToAction';
import { services, contactEmail } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Services | AUREVANT',
  description: 'Explore AUREVANT services: Administrative & Executive Support, Roofing & Home Services Support, Lead Generation, CRM Management, Customer Support & Appointment Setting, and Digital & Website Support for US businesses.',
  openGraph: {
    title: 'Services | AUREVANT',
    description: 'Premium virtual assistant services for US businesses. Your Business. Our Commitment.',
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 lg:py-32 bg-warm-ivory">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl animate-fade-in-up">
              <div className="inline-block mb-6">
                <span className="text-sm font-medium tracking-widest uppercase text-coral-pink">
                  Our Services
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl text-charcoal mb-6 leading-[1.1]">
                Premium Support,
                <span className="block text-coral-pink">Tailored to Your Business</span>
              </h1>
              <p className="text-xl md:text-2xl text-charcoal/70 leading-relaxed max-w-3xl">
                Six specialized service areas designed to help US businesses operate with more
                clarity, consistency, and time to focus on growth.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
              {services.map((service) => (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className="px-4 py-2 border border-soft-beige text-sm text-charcoal/80 hover:border-coral-pink hover:text-coral-pink transition-colors"
                >
                  {service.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-24 lg:py-32 bg-soft-beige/30 section-transition">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="card-premium scroll-mt-28 bg-warm-ivory p-8 lg:p-12 shadow-sm border border-soft-beige/30"
              >
                <div className="image-zoom relative mb-8 aspect-[16/5] overflow-hidden bg-soft-beige">
                  <div role="img" aria-label={`${service.title} in a professional business environment`} className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105" style={{ backgroundImage: `url(https://images.unsplash.com/${["photo-1497366216548-37526070297c", "photo-1486406146926-c627a92ad1ab", "photo-1556761175-b413da4baf72", "photo-1460925895917-afdab827c52f", "photo-1551836022-d5d88e9218df", "photo-1498050108023-c5249f4df085"][index]}?auto=format&fit=crop&w=1400&q=80)` }} />
                  <div className="absolute inset-0 bg-charcoal/10" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                  <div className="lg:col-span-3">
                    <div className="text-5xl font-bold text-coral-pink/30 mb-4">
                      {service.number}
                    </div>
                    <h2 className="text-3xl md:text-4xl text-charcoal mb-4 leading-tight">
                      {service.title}
                    </h2>
                    <p className="text-lg text-charcoal/70 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="lg:col-span-2 lg:border-l lg:border-soft-beige lg:pl-10">
                    <div className="text-sm font-medium tracking-widest uppercase text-coral-pink mb-4">
                      What&apos;s Included
                    </div>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-coral-pink text-white rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-charcoal/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <CallToAction />

        {/* Contact Form Section */}
        <section id="inquiry" className="py-24 lg:py-32 bg-warm-ivory">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <div className="inline-block mb-6">
                  <span className="text-sm font-medium tracking-widest uppercase text-coral-pink">
                    Get in Touch
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl text-charcoal mb-6 leading-tight">
                  Find the Right
                  <span className="block text-coral-pink">Support for You</span>
                </h2>
                <p className="text-xl text-charcoal/70 mb-10 leading-relaxed">
                  Share a few details about your business and we will recommend the services that
                  will make the biggest difference.
                </p>
                <div>
                  <div className="text-sm font-medium tracking-widest uppercase text-coral-pink mb-2">
                    Email
                  </div>
                  <a
                    href={`mailto:${contactEmail}`}
                    className="text-2xl font-semibold text-charcoal hover:text-coral-pink transition-colors link-hover break-all"
                  >
                    {contactEmail}
                  </a>
                </div>
              </div>
              <div className="bg-white p-8 lg:p-12 shadow-xl">
                <h3 className="text-2xl font-semibold text-charcoal mb-6">
                  Request a Consultation
                </h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
