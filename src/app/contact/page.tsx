import { Metadata } from 'next';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/sections/ContactForm';
import { contactEmail, linkedInUrl } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Contact | AUREVANT',
  description: 'Contact AUREVANT to book a consultation and discover how our premium virtual assistant services can support your US business.',
  openGraph: {
    title: 'Contact | AUREVANT',
    description: 'Book a consultation with AUREVANT. Your Business. Our Commitment.',
  },
};

export default function ContactPage() {
  const contactInfo = [
    {
      title: 'Email',
      value: contactEmail,
      link: `mailto:${contactEmail}`,
      detail: 'The fastest way to reach our team.',
      external: false,
    },
    {
      title: 'LinkedIn',
      value: 'Connect on LinkedIn',
      link: linkedInUrl,
      detail: 'Follow along and send us a message.',
      external: true,
    },
    {
      title: 'Location',
      value: 'Philippines',
      link: null,
      detail: 'Supporting US-based businesses remotely.',
      external: false,
    },
  ];

  const nextSteps = [
    'We review your inquiry and respond within one business day.',
    'We schedule a consultation to understand your goals and priorities.',
    'You receive a tailored support plan and proposal.',
  ];

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
                  Contact AUREVANT
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl text-charcoal mb-6 leading-[1.1]">
                Let&apos;s Talk About
                <span className="block text-coral-pink">Your Business</span>
              </h1>
              <p className="text-xl md:text-2xl text-charcoal/70 leading-relaxed max-w-3xl">
                Book a consultation and discover how dedicated, premium support can give you back
                your time. Your business. Our commitment.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-24 lg:py-32 bg-soft-beige/30 section-transition">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div>
                <h2 className="text-4xl md:text-5xl text-charcoal mb-6 leading-tight">
                  Get in Touch
                </h2>
                <p className="text-xl text-charcoal/70 mb-10 leading-relaxed">
                  Tell us about your business and the support you are looking for. We will take it
                  from there.
                </p>

                <div className="space-y-8">
                  {contactInfo.map((info) => (
                    <div key={info.title}>
                      <div className="text-sm font-medium tracking-widest uppercase text-coral-pink mb-2">
                        {info.title}
                      </div>
                      {info.link ? (
                        <a
                          href={info.link}
                          {...(info.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                          className="text-2xl font-semibold text-charcoal hover:text-coral-pink transition-colors link-hover break-all"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-2xl font-semibold text-charcoal">{info.value}</div>
                      )}
                      <div className="text-charcoal/70 mt-1">{info.detail}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 bg-warm-ivory p-8 shadow-sm border-l-4 border-coral-pink">
                  <div className="text-sm font-medium tracking-widest uppercase text-coral-pink mb-4">
                    What Happens Next
                  </div>
                  <ol className="space-y-4">
                    {nextSteps.map((step, index) => (
                      <li key={step} className="flex items-start space-x-4">
                        <span className="font-serif text-2xl text-coral-pink/60 leading-none">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="text-charcoal/80">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white p-8 lg:p-12 shadow-xl h-fit">
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
