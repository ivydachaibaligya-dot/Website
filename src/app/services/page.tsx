import { Metadata } from 'next';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/sections/ContactForm';
import CallToAction from '@/components/sections/CallToAction';
import { services, contactEmail } from '@/lib/services';
import ServiceIcon from '@/components/brand/ServiceIcon';
import AmbientBackground from '@/components/visuals/AmbientBackground';

export const metadata: Metadata = {
  title: 'Services: Virtual Assistance, Design, Web & Social',
  description:
    'Explore AUREVANT services for US businesses: virtual assistance, graphic design, web development, social media management, and digital solutions including CRM and automation.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Services: Virtual Assistance, Design, Web & Social | AUREVANT',
    description:
      'Explore AUREVANT services for US businesses: virtual assistance, graphic design, web development, social media management, and digital solutions including CRM and automation.',
    url: '/services',
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main id="main-content" className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 lg:py-32 bg-warm-ivory overflow-hidden">
          <AmbientBackground grid />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="hero-enter inline-block mb-6" style={{ ['--enter-delay' as string]: '100ms' }}>
                <span className="text-sm font-medium tracking-widest uppercase text-coral-pink">
                  Our Services
                </span>
              </div>
              <h1 className="hero-enter text-5xl md:text-6xl text-charcoal mb-6 leading-[1.1]" style={{ ['--enter-delay' as string]: '250ms' }}>
                Premium Support,
                <span className="block text-coral-pink">Tailored to Your Business</span>
              </h1>
              <p className="hero-enter text-xl md:text-2xl text-charcoal/70 leading-relaxed max-w-3xl" style={{ ['--enter-delay' as string]: '450ms' }}>
                Virtual assistance, graphic design, web development, social media management, and
                digital solutions: five integrated service areas that help US businesses operate with
                more clarity, consistency, and time to focus on growth.
              </p>
            </div>

            <div className="hero-enter mt-12 flex flex-wrap gap-3" style={{ ['--enter-delay' as string]: '650ms' }}>
              {services.map((service) => (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className="btn-lift inline-flex items-center gap-2 px-4 py-2 border border-soft-beige bg-white/60 text-sm text-charcoal/80 hover:border-coral-pink hover:text-coral-pink"
                >
                  <ServiceIcon name={service.icon} className="w-4 h-4" />
                  {service.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-24 lg:py-32 bg-soft-beige/30 section-transition">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-8">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                data-reveal
                className="card-premium scroll-mt-28 bg-warm-ivory p-8 lg:p-12 shadow-sm border border-soft-beige/30"
              >
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                  <div className="lg:col-span-3">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-coral-pink text-white flex items-center justify-center">
                        <ServiceIcon name={service.icon} className="w-7 h-7" />
                      </div>
                      <div className="text-5xl font-bold text-coral-pink/30">{service.number}</div>
                    </div>
                    <div className="text-sm font-medium tracking-widest uppercase text-charcoal/50 mb-2">
                      {service.tagline}
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
