export default function Tools() {
  const tools = [
    { name: 'Roofr', category: 'Roofing Software' },
    { name: 'CompanyCam', category: 'Photo Documentation' },
    { name: 'Zuper', category: 'Field Service Management' },
    { name: 'GoHighLevel', category: 'CRM & Marketing' },
    { name: 'Trello', category: 'Project Management' },
    { name: 'Zapier', category: 'Automation' },
    { name: 'QuickBooks', category: 'Accounting' },
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
            Software I Work With
          </h2>
          <p className="text-xl text-warm-ivory/70 max-w-3xl">
            Proficient in the tools that power modern roofing businesses.
            I can hit the ground running with systems you already use or learn new ones quickly.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
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
            And many more — I'm quick to learn new systems and adapt to your specific workflow requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
