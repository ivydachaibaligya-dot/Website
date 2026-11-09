export default function WhyAurevant() {
  const advantages = [
    {
      title: 'Commitment First',
      description: 'Your priorities become our priorities. We take ownership of every task and follow through until it is done right.',
    },
    {
      title: 'Industry Understanding',
      description: 'From executive offices to roofing and home services companies, we learn the workflows behind your business, not just the task list.',
    },
    {
      title: 'Discretion & Security',
      description: 'Your data, accounts, and client information are handled confidentially, with access managed on your terms.',
    },
    {
      title: 'Clear Communication',
      description: 'Proactive updates, clear reporting, and responsive communication keep you informed without having to ask.',
    },
    {
      title: 'Proactive Ownership',
      description: 'We do not wait to be told. We anticipate needs, flag issues early, and recommend improvements to how work gets done.',
    },
    {
      title: 'Support That Scales',
      description: 'Start with the support you need today and expand into additional service areas as your business grows.',
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-warm-ivory section-transition">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <div className="inline-block mb-6">
            <span className="text-sm font-medium tracking-widest uppercase text-coral-pink">
              Why AUREVANT
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl text-charcoal mb-6 leading-tight">
            The AUREVANT Standard
          </h2>
          <p className="text-xl text-charcoal/70 max-w-3xl">
            Premium support is defined by the details. Here is what you can expect from every
            AUREVANT engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage) => (
            <div
              key={advantage.title}
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
