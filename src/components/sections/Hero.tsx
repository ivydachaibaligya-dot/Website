import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen pt-20 flex items-center bg-warm-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <div className="inline-block mb-6">
              <span className="text-sm font-medium tracking-widest uppercase text-coral-pink">
                Roofing Operations Virtual Assistant
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl text-charcoal mb-6 leading-[1.1]">
              More Than a
              <span className="block text-coral-pink">Virtual Assistant</span>
            </h1>

            <p className="text-xl md:text-2xl text-charcoal/70 mb-8 leading-relaxed max-w-xl">
              I understand roofing business operations—not just administrative tasks.
              Let me handle the details so you can focus on growing your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="#contact"
                className="btn-premium bg-coral-pink text-white px-8 py-4 text-base font-medium hover:bg-charcoal transition-colors text-center"
              >
                Let's Work Together
              </Link>
              <Link
                href="#about"
                className="border-2 border-coral-pink text-coral-pink px-8 py-4 text-base font-medium hover:bg-coral-pink hover:text-white transition-colors text-center"
              >
                Learn More
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 border-t border-soft-beige pt-8">
              <div>
                <div className="text-3xl font-bold text-charcoal">4+</div>
                <div className="text-sm text-charcoal/60 mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-charcoal">US</div>
                <div className="text-sm text-charcoal/60 mt-1">Based Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-charcoal">Roofing</div>
                <div className="text-sm text-charcoal/60 mt-1">Industry Expert</div>
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
                      <div className="text-sm text-charcoal/60 mb-2">Current Role</div>
                      <div className="text-xl font-semibold text-charcoal">
                        Office Admin
                      </div>
                      <div className="text-charcoal/70">
                        Texas Made Roofing and Renovations
                      </div>
                    </div>
                    <div className="w-16 h-16 bg-coral-pink rounded-sm flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">I</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-coral-pink rounded-full"></div>
                      <span className="text-charcoal/80">Lead Management & Follow-ups</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-coral-pink rounded-full"></div>
                      <span className="text-charcoal/80">Customer Communication</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-coral-pink rounded-full"></div>
                      <span className="text-charcoal/80">Scheduling & Crew Coordination</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-coral-pink rounded-full"></div>
                      <span className="text-charcoal/80">CRM & Job Documentation</span>
                    </div>
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
