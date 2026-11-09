import Link from 'next/link';

export default function Hero() {
  const deliverables = [
    'Executive inbox & calendar management',
    'Lead generation & follow-ups',
    'CRM kept accurate and current',
    'Appointments set and confirmed',
    'Roofing & home services back office',
    'Website & digital updates',
  ];

  return (
    <section className="min-h-screen pt-20 flex items-center bg-warm-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <div className="inline-block mb-6">
              <span className="text-sm font-medium tracking-widest uppercase text-coral-pink">
                AUREVANT &middot; Global Business Support
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl text-charcoal mb-6 leading-[1.1]">
              Your Business.
              <span className="block text-coral-pink">Our Commitment.</span>
            </h1>

            <p className="text-xl md:text-2xl text-charcoal/70 mb-8 leading-relaxed max-w-xl">
              A boutique virtual assistant agency providing dedicated, detail-driven support to
              US businesses, so you can lead, grow, and focus on what matters most.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/contact"
                className="btn-premium bg-coral-pink text-white px-8 py-4 text-base font-medium hover:bg-charcoal transition-colors text-center"
              >
                Book a Consultation
              </Link>
              <Link
                href="#services"
                className="border-2 border-coral-pink text-coral-pink px-8 py-4 text-base font-medium hover:bg-coral-pink hover:text-white transition-colors text-center"
              >
                Explore Our Services
              </Link>
            </div>

            {/* Brand Pillars */}
            <div className="flex flex-wrap gap-8 border-t border-soft-beige pt-8">
              <div>
                <div className="text-3xl font-bold text-charcoal">6</div>
                <div className="text-sm text-charcoal/60 mt-1">Core Service Areas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-charcoal">US</div>
                <div className="text-sm text-charcoal/60 mt-1">Business Focused</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-charcoal">Global</div>
                <div className="text-sm text-charcoal/60 mt-1">Remote Delivery</div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="relative animate-fade-in">
            <div className="relative">
              {/* Main card */}
              <div className="bg-soft-beige/30 p-8 lg:p-12 relative">
                <div className="bg-warm-ivory p-8 shadow-xl">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="text-sm text-charcoal/60 mb-2">Your Dedicated Support</div>
                      <div className="text-xl font-semibold text-charcoal">
                        The AUREVANT Desk
                      </div>
                      <div className="text-charcoal/70">
                        Handled with care, every business day
                      </div>
                    </div>
                    <div className="w-16 h-16 bg-coral-pink rounded-sm flex items-center justify-center">
                      <span className="text-white font-serif font-semibold text-2xl">A</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {deliverables.map((item) => (
                      <div key={item} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-coral-pink rounded-full"></div>
                        <span className="text-charcoal/80">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-soft-beige rounded-sm"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-coral-pink/20 rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
