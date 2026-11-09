export default function Tools() {
  const tools = [
    { name: 'Google Workspace', category: 'Productivity' },
    { name: 'Microsoft 365', category: 'Productivity' },
    { name: 'GoHighLevel', category: 'CRM & Marketing' },
    { name: 'Apollo', category: 'Lead Generation' },
    { name: 'Roofr', category: 'Roofing Software' },
    { name: 'CompanyCam', category: 'Photo Documentation' },
    { name: 'Zuper', category: 'Field Service Management' },
    { name: 'QuickBooks', category: 'Accounting' },
    { name: 'Trello', category: 'Project Management' },
    { name: 'Notion', category: 'Knowledge & Planning' },
    { name: 'Zapier', category: 'Automation' },
    { name: 'Canva', category: 'Design' },
  ];

  return (
    <section id="tools" className="py-24 lg:py-32 bg-charcoal text-warm-ivory section-transition">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <div className="inline-block mb-6">
            <span className="text-sm font-medium tracking-widest uppercase text-coral-pink">
              Tools & Technology
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl text-warm-ivory mb-6 leading-tight">
            Platforms We Support
          </h2>
          <p className="text-xl text-warm-ivory/70 max-w-3xl">
            We work inside the systems that power modern US businesses, so there is no need to
            change how your team operates. We adapt to your stack, not the other way around.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="bg-charcoal/50 p-8 hover:bg-coral-pink transition-colors group border border-soft-beige/20"
            >
              <div className="text-coral-pink text-sm mb-3 group-hover:text-white transition-colors">{tool.category}</div>
              <div className="text-xl font-semibold text-warm-ivory group-hover:text-white transition-colors">
                {tool.name}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-soft-beige/20 pt-8">
          <p className="text-warm-ivory/70 text-lg">
            Using something different? We onboard quickly to new platforms and document every
            workflow along the way.
          </p>
        </div>
      </div>
    </section>
  );
}
