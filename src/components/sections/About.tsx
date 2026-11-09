import Link from 'next/link';

export default function About() {
  const standards = [
    'A dedicated point of contact for your account',
    'Documented processes tailored to your business',
    'Clear, consistent progress updates',
    'Confidential handling of your data and accounts',
    'Seamless onboarding into the tools you already use',
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-soft-beige/30 section-transition overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div data-reveal>
            <div className="inline-block mb-6">
              <span className="text-sm font-medium tracking-widest uppercase text-coral-pink">
                About AUREVANT
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl text-charcoal mb-6 leading-tight">
              A Boutique Agency Built on
              <span className="block text-coral-pink">Commitment</span>
            </h2>

            <div className="space-y-6 text-charcoal/80 text-lg leading-relaxed">
              <p>
                AUREVANT is an international virtual assistant and creative digital agency providing
                global business support to companies across the United States. We partner with founders, executives,
                and growing teams who need dependable support without the overhead of in-house hiring.
              </p>

              <p>
                From executive assistance and customer care to brand design, websites, and social
                media, we become a seamless extension of your team, working inside your systems,
                following your standards, and representing your brand with care.
              </p>

              <p>
                One partner for operations and creative work means fewer handoffs, a consistent
                brand everywhere your clients find you, and more time for you to lead the business.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <div className="bg-warm-ivory px-6 py-4 rounded-sm shadow-sm">
                <div className="text-2xl font-bold text-charcoal">1:1</div>
                <div className="text-sm text-charcoal/60">Dedicated Support</div>
              </div>
              <div className="bg-warm-ivory px-6 py-4 rounded-sm shadow-sm">
                <div className="text-2xl font-bold text-charcoal">US</div>
                <div className="text-sm text-charcoal/60">Time-Zone Aligned</div>
              </div>
              <div className="bg-warm-ivory px-6 py-4 rounded-sm shadow-sm">
                <div className="text-2xl font-bold text-charcoal">NDA</div>
                <div className="text-sm text-charcoal/60">Ready on Request</div>
              </div>
            </div>

            <div className="mt-10">
              <Link href="/about" className="text-coral-pink font-medium link-hover">
                More about AUREVANT
              </Link>
            </div>
          </div>

          {/* Right Content - Standards Visual */}
          <div className="relative" data-reveal style={{ ['--reveal-delay' as string]: '150ms' }}>
            <div className="bg-warm-ivory p-8 lg:p-12 shadow-xl">
              <div className="space-y-8">
                <div>
                  <div className="text-sm font-medium tracking-widest uppercase text-coral-pink mb-3">
                    Our Promise
                  </div>
                  <div className="text-2xl font-semibold text-charcoal mb-2">
                    Your Business. Our Commitment.
                  </div>
                  <div className="text-charcoal/70">
                    We treat your business as if it were our own.
                  </div>
                </div>

                <div className="border-t border-soft-beige pt-8">
                  <div className="text-sm font-medium tracking-widest uppercase text-coral-pink mb-3">
                    What Every Client Receives
                  </div>
                  <div className="space-y-3">
                    {standards.map((standard) => (
                      <div key={standard} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-coral-pink text-white rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-charcoal/80">{standard}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div aria-hidden="true" className="absolute -bottom-8 -right-8 -z-0 w-32 h-32 bg-coral-pink/20 rounded-sm float-rotate pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
