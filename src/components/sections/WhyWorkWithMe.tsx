export default function WhyWorkWithMe() {
  const advantages = [
    {
      title: 'Industry Knowledge',
      description: 'I understand roofing operations, not just general admin tasks. I know how to manage leads, coordinate crews, and handle customer communications effectively.',
    },
    {
      title: 'Adaptability',
      description: 'Quick to learn new systems and processes. I adapt to your workflow and become an integral part of your team.',
    },
    {
      title: 'Organization',
      description: 'Exceptional attention to detail and organization skills ensure nothing falls through the cracks.',
    },
    {
      title: 'Communication',
      description: 'Clear, professional communication with customers, team members, and stakeholders keeps everyone aligned.',
    },
    {
      title: 'Ownership',
      description: 'I take ownership of daily operations and proactively identify areas for improvement.',
    },
    {
      title: 'Reliability',
      description: 'Consistent, dependable support you can count on every day to keep your business running smoothly.',
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-warm-ivory section-transition">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <div className="inline-block mb-6">
            <span className="text-sm font-medium tracking-widest uppercase text-coral-pink">
              Why Work With Me
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl text-charcoal mb-6 leading-tight">
            The Ivy Advantage
          </h2>
          <p className="text-xl text-charcoal/70 max-w-3xl">
            What sets me apart from other virtual assistants is my combination of
            industry expertise, adaptability, and genuine commitment to your success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="card-premium bg-soft-beige/20 p-8 hover:bg-warm-ivory transition-colors border border-soft-beige/30"
            >
              <div className="w-12 h-12 bg-coral-pink text-white rounded-sm flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-3">
                {advantage.title}
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
