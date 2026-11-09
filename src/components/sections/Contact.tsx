import { contactEmail, linkedInUrl } from '@/lib/services';
import ContactForm from '@/components/sections/ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-warm-ivory section-transition">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div>
            <div className="inline-block mb-6">
              <span className="text-sm font-medium tracking-widest uppercase text-coral-pink">
                Get in Touch
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl text-charcoal mb-6 leading-tight">
              Let&apos;s Build Your
              <span className="block text-coral-pink">Support Team</span>
            </h2>

            <p className="text-xl text-charcoal/70 mb-10 leading-relaxed">
              Tell us where your time is going and we will show you how AUREVANT can take it
              off your plate. Your business. Our commitment.
            </p>

            <div className="space-y-6">
              <div>
                <div className="text-sm font-medium tracking-widest uppercase text-coral-pink mb-2">
                  Email
                </div>
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-2xl font-semibold text-charcoal hover:text-coral-pink transition-colors link-hover"
                >
                  {contactEmail}
                </a>
              </div>

              <div>
                <div className="text-sm font-medium tracking-widest uppercase text-coral-pink mb-2">
                  LinkedIn
                </div>
                <a
                  href={linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-semibold text-charcoal hover:text-coral-pink transition-colors link-hover"
                >
                  Connect on LinkedIn
                </a>
              </div>

              <div>
                <div className="text-sm font-medium tracking-widest uppercase text-coral-pink mb-2">
                  Location
                </div>
                <div className="text-2xl font-semibold text-charcoal">
                  Philippines
                </div>
                <div className="text-charcoal/70">
                  Supporting US-based businesses remotely
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Contact Form Visual */}
          <div className="bg-white p-8 lg:p-12 shadow-xl">
            <h3 className="text-2xl font-semibold text-charcoal mb-6">
              Request a Consultation
            </h3>

            <ContactForm />

            <p className="text-sm text-charcoal/60 mt-6">
              We typically respond within one business day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
