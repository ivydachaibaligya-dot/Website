const tools = [
  { name: 'Google Workspace', category: 'Productivity', domain: 'workspace.google.com' },
  { name: 'Microsoft 365', category: 'Productivity', domain: 'microsoft.com' },
  { name: 'GoHighLevel', category: 'CRM & Marketing', domain: 'gohighlevel.com' },
  { name: 'Apollo', category: 'Lead Generation', domain: 'apollo.io' },
  { name: 'Roofr', category: 'Roofing Software', domain: 'roofr.com' },
  { name: 'CompanyCam', category: 'Photo Documentation', domain: 'companycam.com' },
  { name: 'Zuper', category: 'Field Service Management', domain: 'zuper.co' },
  { name: 'QuickBooks', category: 'Accounting', domain: 'quickbooks.intuit.com' },
  { name: 'Trello', category: 'Project Management', domain: 'trello.com' },
  { name: 'Notion', category: 'Knowledge & Planning', domain: 'notion.so' },
  { name: 'Zapier', category: 'Automation', domain: 'zapier.com' },
  { name: 'Canva', category: 'Design', domain: 'canva.com' },
];

export default function Tools() {
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
              className="bg-charcoal/50 p-5 sm:p-7 hover:bg-coral-pink transition-colors group border border-soft-beige/20"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-warm-ivory p-2.5 shadow-sm transition-transform duration-300 group-hover:scale-105 sm:h-14 sm:w-14">
                <img
                  src={`https://www.google.com/s2/favicons?domain=${tool.domain}&sz=128`}
                  alt={`${tool.name} logo`}
                  width="48"
                  height="48"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="text-coral-pink text-sm mb-2 group-hover:text-white transition-colors">
                {tool.category}
              </div>
              <div className="text-lg sm:text-xl font-semibold text-warm-ivory group-hover:text-white transition-colors">
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
