export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-soft-beige/30 section-transition">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block mb-6">
              <span className="text-sm font-medium tracking-widest uppercase text-coral-pink">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl text-charcoal mb-6 leading-tight">
              A Virtual Assistant Who
              <span className="block text-coral-pink">Understands Your Business</span>
            </h2>

            <div className="space-y-6 text-charcoal/80 text-lg leading-relaxed">
              <p>
                I'm Ivy, a dedicated Virtual Assistant with hands-on experience in roofing operations,
                customer service, and administrative management. My background spans both corporate
                and virtual environments, giving me the flexibility and adaptability to handle a
                wide range of tasks efficiently.
              </p>

              <p>
                I've worked with international teams from the UK, Hong Kong, and Singapore, supporting
                daily operations, managing schedules, handling emails, creating reports, and maintaining
                seamless coordination. I'm proficient in tools like Google Workspace, Microsoft Office,
                Trello, Notion, Canva, Apollo, and more.
              </p>

              <p>
                What sets me apart is my deep understanding of roofing business operations—not just
                general administrative tasks. I understand how to manage leads, coordinate crews,
                handle customer communications, and keep your business running smoothly while you
                focus on growth.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <div className="bg-warm-ivory px-6 py-4 rounded-sm shadow-sm">
                <div className="text-2xl font-bold text-charcoal">4+</div>
                <div className="text-sm text-charcoal/60">Years Experience</div>
              </div>
              <div className="bg-warm-ivory px-6 py-4 rounded-sm shadow-sm">
                <div className="text-2xl font-bold text-charcoal">3+</div>
                <div className="text-sm text-charcoal/60">Countries Worked</div>
              </div>
              <div className="bg-warm-ivory px-6 py-4 rounded-sm shadow-sm">
                <div className="text-2xl font-bold text-charcoal">Roofing</div>
                <div className="text-sm text-charcoal/60">Industry Focus</div>
              </div>
            </div>
          </div>

          {/* Right Content - Story Visual */}
          <div className="relative">
            <div className="bg-warm-ivory p-8 lg:p-12 shadow-xl">
              <div className="space-y-8">
                <div>
                  <div className="text-sm font-medium tracking-widest uppercase text-coral-pink mb-3">
                    Current Position
                  </div>
                  <div className="text-2xl font-semibold text-charcoal mb-2">
                    Office Admin
                  </div>
                  <div className="text-charcoal/70">
                    Texas Made Roofing and Renovations
                  </div>
                </div>

                <div className="border-t border-soft-beige pt-8">
                  <div className="text-sm font-medium tracking-widest uppercase text-coral-pink mb-3">
                    What I Bring
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-coral-pink text-white rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-charcoal/80">Industry-specific knowledge</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-coral-pink text-white rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-charcoal/80">Proactive problem-solving</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-coral-pink text-white rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-charcoal/80">Strong communication skills</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-coral-pink text-white rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-charcoal/80">Adaptability to new systems</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-coral-pink text-white rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-charcoal/80">Ownership of daily operations</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-coral-pink/20 rounded-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
