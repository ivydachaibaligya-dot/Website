import Link from 'next/link';

export default function Approach() {
  const steps = [
    {
      number: '01',
      title: 'Discovery Consultation',
      description:
        'We start with a focused conversation about your business, your goals, and the tasks that are taking time away from growth.',
    },
    {
      number: '02',
      title: 'Tailored Support Plan',
      description:
        'We recommend the right mix of services and outline clear responsibilities, communication rhythms, and expectations.',
    },
    {
      number: '03',
      title: 'Onboarding & Integration',
      description:
        'Your assistant is onboarded into your tools and processes, with workflows documented so nothing depends on memory.',
    },
    {
      number: '04',
      title: 'Ongoing Support & Refinement',
      description:
        'We deliver consistently, report progress clearly, and refine processes as your business evolves and grows.',
    },
  ];

  return (
    <section id="approach" className="py-24 lg:py-32 bg-soft-beige/30 section-transition">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16" data-reveal>
          <div className="inline-block mb-6">
            <span className="text-sm font-medium tracking-widest uppercase text-coral-pink">
              Our Approach
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl text-charcoal mb-6 leading-tight">
            A Seamless Path to
            <span className="block text-coral-pink">Dependable Support</span>
          </h2>
          <p className="text-xl text-charcoal/70 max-w-3xl">
            A structured, white-glove onboarding process designed to get you supported quickly
            without disrupting the way your business already runs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Featured Step */}
          <div data-reveal className="lg:col-span-2 card-premium bg-warm-ivory p-10 lg:p-14 shadow-lg border-l-4 border-coral-pink">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="flex-1">
                <div className="inline-block px-3 py-1 bg-coral-pink/10 text-sm font-medium text-coral-pink mb-4">
                  Step {steps[0].number}
                </div>
                <h3 className="text-3xl font-semibold text-charcoal mb-4">
                  {steps[0].title}
                </h3>
                <p className="text-charcoal/70 text-lg leading-relaxed">
                  {steps[0].description}
                </p>
              </div>
              <div className="w-16 h-16 bg-coral-pink/10 rounded-sm flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-coral-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.slice(1).map((step, index) => (
            <div
              key={step.number}
              data-reveal
              style={{ ['--reveal-delay' as string]: `${index * 100}ms` }}
              className="card-premium bg-warm-ivory p-8 shadow-sm border border-soft-beige/30"
            >
              <div className="inline-block px-3 py-1 bg-soft-beige/50 text-sm font-medium text-charcoal/60 mb-4">
                Step {step.number}
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-3">
                {step.title}
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div data-reveal className="mt-16 bg-warm-ivory p-8 lg:p-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl text-charcoal mb-4">
                Ready to Delegate with Confidence?
              </h3>
              <p className="text-charcoal/70 text-lg mb-6">
                Book a complimentary consultation and we will map out exactly where AUREVANT can
                take work off your plate, starting this month.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Link
                href="/contact"
                className="btn-premium btn-lift bg-coral-pink text-white px-8 py-4 text-base font-medium hover:bg-charcoal inline-block"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
