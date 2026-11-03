export default function Portfolio() {
  const workItems = [
    {
      title: 'Lead Management System',
      description: 'Implemented a structured lead tracking process that improved response times and conversion rates.',
      category: 'Operations',
      featured: true,
    },
    {
      title: 'Customer Communication Workflow',
      description: 'Created standardized templates and processes for consistent, professional customer interactions.',
      category: 'Communication',
      featured: false,
    },
    {
      title: 'CRM Optimization',
      description: 'Streamlined CRM data entry and reporting to provide better visibility into sales pipeline.',
      category: 'CRM',
      featured: false,
    },
    {
      title: 'Scheduling Coordination',
      description: 'Managed complex crew schedules and job assignments to maximize efficiency and minimize conflicts.',
      category: 'Operations',
      featured: false,
    },
    {
      title: 'Documentation Standards',
      description: 'Established clear documentation protocols for job files, estimates, and project records.',
      category: 'Administration',
      featured: false,
    },
    {
      title: 'Process Improvement',
      description: 'Identified bottlenecks and implemented solutions to streamline daily operations.',
      category: 'Strategy',
      featured: false,
    },
  ];

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-soft-beige/30 section-transition">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <div className="inline-block mb-6">
            <span className="text-sm font-medium tracking-widest uppercase text-coral-pink">
              Experience & Portfolio
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl text-charcoal mb-6 leading-tight">
            Real Results from
            <span className="block text-coral-pink">Real Work</span>
          </h2>
          <p className="text-xl text-charcoal/70 max-w-3xl">
            Examples of how I've helped roofing businesses improve their operations,
            streamline processes, and deliver better customer experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Featured Item */}
          <div className="lg:col-span-2 card-premium bg-warm-ivory p-10 lg:p-14 shadow-lg border-l-4 border-coral-pink">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="flex-1">
                <div className="inline-block px-3 py-1 bg-coral-pink/10 text-sm font-medium text-coral-pink mb-4">
                  {workItems[0].category}
                </div>
                <h3 className="text-3xl font-semibold text-charcoal mb-4">
                  {workItems[0].title}
                </h3>
                <p className="text-charcoal/70 text-lg leading-relaxed">
                  {workItems[0].description}
                </p>
              </div>
              <div className="w-16 h-16 bg-coral-pink/10 rounded-sm flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-coral-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workItems.slice(1).map((item, index) => (
            <div
              key={index}
              className="card-premium bg-warm-ivory p-8 shadow-sm border border-soft-beige/30"
            >
              <div className="inline-block px-3 py-1 bg-soft-beige/50 text-sm font-medium text-charcoal/60 mb-4">
                {item.category}
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-3">
                {item.title}
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-warm-ivory p-8 lg:p-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl text-charcoal mb-4">
                Ready to See More?
              </h3>
              <p className="text-charcoal/70 text-lg mb-6">
                I can provide detailed case studies, workflow examples, and specific metrics
                from my work with roofing companies. Let's discuss how I can bring similar
                results to your business.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <a
                href="#contact"
                className="btn-premium bg-coral-pink text-white px-8 py-4 text-base font-medium hover:bg-charcoal transition-colors inline-block"
              >
                Request Portfolio Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
