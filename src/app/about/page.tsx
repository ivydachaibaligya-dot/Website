import { Metadata } from 'next';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import CallToAction from '@/components/sections/CallToAction';

export const metadata: Metadata = {
  title: 'About AUREVANT',
  description:
    'Meet AUREVANT, a boutique virtual assistant and creative digital agency providing global business support to US companies. Our mission, vision, and values.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About AUREVANT | AUREVANT',
    description:
      'Meet AUREVANT, a boutique virtual assistant and creative digital agency providing global business support to US companies. Our mission, vision, and values.',
    url: '/about',
  },
};

export default function AboutPage() {
  const values = [
    {
      title: 'Commitment',
      description: 'We take ownership of every responsibility entrusted to us and follow through with consistency and care.',
    },
    {
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and discretion, protecting your business as if it were our own.',
    },
    {
      title: 'Excellence',
      description: 'We hold ourselves to a premium standard, with attention to detail in every email, record, and interaction.',
    },
    {
      title: 'Partnership',
      description: 'We work as an extension of your team, aligned with your goals and invested in your long-term success.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main id="main-content" className="pt-20">
        {/* Hero Section */}
        <section className="py-24 lg:py-32 bg-warm-ivory">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl animate-fade-in-up">
              <div className="inline-block mb-6">
                <span className="text-sm font-medium tracking-widest uppercase text-coral-pink">
                  About AUREVANT
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl text-charcoal mb-6 leading-[1.1]">
                Global Business Support,
                <span className="block text-coral-pink">Delivered with Commitment</span>
              </h1>
              <p className="text-xl md:text-2xl text-charcoal/70 leading-relaxed max-w-3xl">
                AUREVANT is a boutique international virtual assistant agency helping US businesses
                operate with more focus, structure, and confidence.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-24 lg:py-32 bg-soft-beige/30 section-transition overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block mb-6">
                  <span className="text-sm font-medium tracking-widest uppercase text-coral-pink">
                    Who We Are
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl text-charcoal mb-6 leading-tight">
                  An Extension of
                  <span className="block text-coral-pink">Your Team</span>
                </h2>
                <div className="space-y-6 text-charcoal/80 text-lg leading-relaxed">
                  <p>
                    Business owners and executives spend too many hours on work that keeps the
                    business running but keeps them from growing it. AUREVANT exists to change that.
                  </p>
                  <p>
                    We provide dedicated, remote support across virtual assistance, graphic design,
                    web development, social media management, and digital solutions, including
                    specialized back-office support for roofing and home services companies.
                  </p>
                  <p>
                    Our boutique model means you are never just another account. We take the time to
                    understand your business, work within your systems, and represent your brand
                    with the professionalism your clients expect.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-warm-ivory p-8 lg:p-12 shadow-xl space-y-8">
                  <div>
                    <div className="text-sm font-medium tracking-widest uppercase text-coral-pink mb-3">
                      Our Mission
                    </div>
                    <p className="text-xl text-charcoal leading-relaxed">
                      To give US businesses reliable, high-caliber support that frees leaders to
                      focus on growth, strategy, and the clients they serve.
                    </p>
                  </div>
                  <div className="border-t border-soft-beige pt-8">
                    <div className="text-sm font-medium tracking-widest uppercase text-coral-pink mb-3">
                      Our Vision
                    </div>
                    <p className="text-xl text-charcoal leading-relaxed">
                      To be the trusted global support partner businesses turn to when they need
                      work done right, consistently, and with genuine care.
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-coral-pink/20 rounded-sm"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 lg:py-32 bg-warm-ivory section-transition">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-16">
              <div className="inline-block mb-6">
                <span className="text-sm font-medium tracking-widest uppercase text-coral-pink">
                  Our Values
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl text-charcoal mb-6 leading-tight">
                The Principles Behind
                <span className="block text-coral-pink">Every Engagement</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="card-premium bg-soft-beige/20 p-8 hover:bg-warm-ivory transition-colors border border-soft-beige/30"
                >
                  <div className="text-5xl font-bold text-coral-pink/30 mb-4">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal mb-3">
                    {value.title}
                  </h3>
                  <p className="text-charcoal/70 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
