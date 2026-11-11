import Link from 'next/link';

export default function Approach() {
  const steps = [
    { number: '01', title: 'Discovery Consultation', description: 'We start with a focused conversation about your business, your goals, and the tasks that are taking time away from growth.' },
    { number: '02', title: 'Tailored Support Plan', description: 'We recommend the right mix of services and outline clear responsibilities, communication rhythms, and expectations.' },
    { number: '03', title: 'Onboarding & Integration', description: 'Your assistant is onboarded into your tools and processes, with workflows documented so nothing depends on memory.' },
    { number: '04', title: 'Ongoing Support & Refinement', description: 'We deliver consistently, report progress clearly, and refine processes as your business evolves and grows.' },
  ];

  return (
    <section id="approach" className="section-transition bg-soft-beige/30 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 max-w-3xl sm:mb-14">
          <span className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-coral-pink"><span className="h-px w-8 bg-coral-pink" />Our Approach</span>
          <h2 className="mb-6 text-4xl leading-tight text-charcoal sm:text-5xl">A Seamless Path to <span className="block text-coral-pink">Dependable Support</span></h2>
          <p className="text-lg leading-8 text-charcoal/70 sm:text-xl">A structured, white-glove onboarding process designed to get you supported quickly without disrupting the way your business already runs.</p>
        </div>

        <div className="mb-12 grid grid-cols-3 gap-3 sm:gap-5">
          <div className="image-zoom relative aspect-[4/5] overflow-hidden bg-soft-beige">
            <div role="img" aria-label="Thoughtful planning at a modern workspace" className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80')" }} />
          </div>
          <div className="image-zoom relative mt-6 aspect-[4/5] overflow-hidden bg-soft-beige sm:mt-10">
            <div role="img" aria-label="Team collaborating on business projects" className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80')" }} />
          </div>
          <div className="image-zoom relative aspect-[4/5] overflow-hidden bg-soft-beige">
            <div role="img" aria-label="Organized professional desk and laptop" className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80')" }} />
          </div>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="card-premium border-l-4 border-coral-pink bg-warm-ivory p-8 shadow-lg sm:p-10 lg:col-span-2 lg:p-14">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex-1">
                <span className="mb-4 inline-block bg-coral-pink/10 px-3 py-1 text-sm font-medium text-coral-pink">Step {steps[0].number}</span>
                <h3 className="mb-4 text-3xl font-semibold text-charcoal">{steps[0].title}</h3>
                <p className="text-lg leading-relaxed text-charcoal/70">{steps[0].description}</p>
              </div>
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-sm bg-coral-pink/10">
                <svg className="h-8 w-8 text-coral-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {steps.slice(1).map((step) => (
            <div key={step.number} className="card-premium border border-soft-beige/30 bg-warm-ivory p-7 shadow-sm sm:p-8">
              <span className="mb-4 inline-block bg-soft-beige/50 px-3 py-1 text-sm font-medium text-charcoal/60">Step {step.number}</span>
              <h3 className="mb-3 text-xl font-semibold text-charcoal">{step.title}</h3>
              <p className="leading-relaxed text-charcoal/70">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 bg-warm-ivory p-7 shadow-lg sm:mt-16 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            <div><h3 className="mb-4 text-3xl text-charcoal">Ready to Delegate with Confidence?</h3><p className="text-lg leading-relaxed text-charcoal/70">Book a complimentary consultation and we will map out exactly where AUREVANT can take work off your plate, starting this month.</p></div>
            <div className="flex lg:justify-end"><Link href="/contact" className="btn-premium inline-block bg-coral-pink px-8 py-4 text-base font-medium text-white transition-colors hover:bg-charcoal">Book a Consultation</Link></div>
          </div>
        </div>
      </div>
    </section>
  );
}