export default function Services() {
  const services = [
    {
      title: 'Roofing Operations Support',
      description: 'Manage day-to-day roofing operations including job scheduling, crew coordination, and workflow optimization.',
      icon: '01',
    },
    {
      title: 'Appointment Setting',
      description: 'Schedule inspections, consultations, and follow-up meetings with prospective and existing customers.',
      icon: '02',
    },
    {
      title: 'Lead Management & Follow-ups',
      description: 'Track and nurture leads through the sales pipeline with timely follow-ups and detailed documentation.',
      icon: '03',
    },
    {
      title: 'Customer Communication',
      description: 'Handle all customer inquiries, status updates, and professional correspondence on behalf of your business.',
      icon: '04',
    },
    {
      title: 'Roof Estimates & Proposals',
      description: 'Prepare and send professional estimates, proposals, and bid packages to potential clients.',
      icon: '05',
    },
    {
      title: 'Scheduling & Crew Coordination',
      description: 'Coordinate crew schedules, job assignments, and material deliveries to ensure smooth project execution.',
      icon: '06',
    },
    {
      title: 'CRM Management',
      description: 'Maintain accurate customer records, update CRM systems, and generate reports for business insights.',
      icon: '07',
    },
    {
      title: 'Social Media Management',
      description: 'Create and schedule content, engage with followers, and grow your online presence across platforms.',
      icon: '08',
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-warm-ivory section-transition">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <div className="inline-block mb-6">
            <span className="text-sm font-medium tracking-widest uppercase text-coral-pink">
              What I Do
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl text-charcoal mb-6 leading-tight">
            Services Tailored for
            <span className="block text-coral-pink">Roofing Businesses</span>
          </h2>
          <p className="text-xl text-charcoal/70 max-w-3xl">
            Specialized virtual assistant services designed specifically for roofing companies.
            I understand your workflow, your customers, and what it takes to keep operations running smoothly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-premium bg-soft-beige/20 p-8 hover:bg-warm-ivory transition-colors group border border-soft-beige/30"
            >
              <div className="text-5xl font-bold text-coral-pink/30 mb-4 group-hover:text-coral-pink/50 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-3">
                {service.title}
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
