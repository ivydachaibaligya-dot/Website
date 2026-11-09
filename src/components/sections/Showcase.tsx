'use client';

import { useState } from 'react';
import Link from 'next/link';

type Category = 'Web Development' | 'Graphic Design' | 'Social Media' | 'Operations';

type Concept = {
  title: string;
  category: Category;
  description: string;
  preview: 'website' | 'brand' | 'social' | 'dashboard' | 'inbox' | 'landing';
};

const concepts: Concept[] = [
  { title: 'Boutique Service Website', category: 'Web Development', preview: 'website', description: 'A responsive, multi-page website with clear service pages and an integrated enquiry form.' },
  { title: 'Brand Identity Kit', category: 'Graphic Design', preview: 'brand', description: 'Logo mark, colour palette, and typography rules packaged for consistent use across channels.' },
  { title: 'Monthly Content Calendar', category: 'Social Media', preview: 'social', description: 'A planned month of branded posts with captions, scheduled across platforms.' },
  { title: 'Sales Pipeline Dashboard', category: 'Operations', preview: 'dashboard', description: 'A CRM pipeline organised by stage, with tasks and follow-ups that keep deals moving.' },
  { title: 'Executive Inbox System', category: 'Operations', preview: 'inbox', description: 'Labels, priorities, and response templates that turn a crowded inbox into a clear daily brief.' },
  { title: 'Campaign Landing Page', category: 'Web Development', preview: 'landing', description: 'A focused, fast-loading landing page designed around a single call to action.' },
];

const filters: ('All' | Category)[] = ['All', 'Web Development', 'Graphic Design', 'Social Media', 'Operations'];

function Preview({ type }: { type: Concept['preview'] }) {
  switch (type) {
    case 'website':
      return (
        <div className="w-full h-full bg-warm-ivory flex flex-col">
          <div className="h-6 bg-white border-b border-soft-beige flex items-center gap-1.5 px-3">
            <span className="w-2 h-2 rounded-full bg-coral-pink" /><span className="w-2 h-2 rounded-full bg-soft-beige" /><span className="w-2 h-2 rounded-full bg-charcoal/20" />
            <span className="ml-3 h-2 flex-1 max-w-[50%] bg-soft-beige/60 rounded-full" />
          </div>
          <div className="flex-1 p-5 grid grid-cols-2 gap-4 items-center">
            <div className="space-y-2">
              <div className="h-3 w-4/5 bg-charcoal rounded-sm" />
              <div className="h-3 w-3/5 bg-coral-pink rounded-sm" />
              <div className="h-1.5 w-full bg-charcoal/20 rounded-full mt-3" />
              <div className="h-1.5 w-5/6 bg-charcoal/20 rounded-full" />
              <div className="h-5 w-1/2 bg-coral-pink mt-3" />
            </div>
            <div className="aspect-[4/3] bg-soft-beige/60 relative"><div className="absolute inset-4 border border-coral-pink/50" /></div>
          </div>
          <div className="grid grid-cols-3 gap-3 px-5 pb-5">{[0, 1, 2].map((i) => <div key={i} className="h-10 bg-white border border-soft-beige/60" />)}</div>
        </div>
      );
    case 'brand':
      return (
        <div className="w-full h-full bg-charcoal p-6 grid grid-cols-2 gap-4">
          <div className="bg-warm-ivory flex items-center justify-center"><div className="w-16 h-16 bg-coral-pink text-white flex items-center justify-center text-3xl font-semibold">A</div></div>
          <div className="grid grid-rows-4 gap-2">
            <div className="bg-coral-pink" /><div className="bg-warm-ivory" /><div className="bg-soft-beige" /><div className="bg-white" />
          </div>
          <div className="col-span-2 bg-warm-ivory/10 p-3 space-y-2">
            <div className="h-3 w-1/2 bg-warm-ivory rounded-sm" /><div className="h-1.5 w-4/5 bg-warm-ivory/40 rounded-full" /><div className="h-1.5 w-3/5 bg-warm-ivory/40 rounded-full" />
          </div>
        </div>
      );
    case 'social':
      return (
        <div className="w-full h-full bg-white p-5 grid grid-cols-3 gap-2">
          {Array.from({ length: 9 }, (_, i) => (
            <div key={i} className={`relative ${['bg-coral-pink', 'bg-soft-beige', 'bg-charcoal', 'bg-warm-ivory border border-soft-beige', 'bg-coral-pink/40', 'bg-soft-beige/60'][i % 6]}`}>
              {i % 4 === 0 && <div className="absolute inset-3 border border-white/60" />}
            </div>
          ))}
        </div>
      );
    case 'dashboard':
      return (
        <div className="w-full h-full bg-warm-ivory p-4 grid grid-cols-3 gap-3">
          {['New', 'Proposal', 'Won'].map((stage, col) => (
            <div key={stage} className="bg-white/70 p-2 space-y-2">
              <div className="text-[10px] uppercase tracking-widest text-charcoal/60">{stage}</div>
              {Array.from({ length: 3 - col + 1 }, (_, i) => (
                <div key={i} className={`h-8 border-l-2 ${col === 2 ? 'border-coral-pink' : 'border-soft-beige'} bg-white p-1.5 space-y-1`}>
                  <div className="h-1.5 w-3/4 bg-charcoal/60 rounded-full" /><div className="h-1 w-1/2 bg-charcoal/20 rounded-full" />
                </div>
              ))}
            </div>
          ))}
        </div>
      );
    case 'inbox':
      return (
        <div className="w-full h-full bg-white flex">
          <div className="w-1/4 bg-warm-ivory p-3 space-y-2">
            {['Priority', 'Clients', 'Finance', 'Later'].map((label, i) => (
              <div key={label} className="flex items-center gap-1.5"><span className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-coral-pink' : 'bg-soft-beige'}`} /><span className="text-[9px] text-charcoal/70">{label}</span></div>
            ))}
          </div>
          <div className="flex-1 p-3 space-y-2">
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} className="flex items-center gap-2 border-b border-soft-beige/50 pb-2">
                <span className={`w-5 h-5 rounded-full ${i < 2 ? 'bg-coral-pink/70' : 'bg-soft-beige'}`} />
                <div className="flex-1 space-y-1"><div className="h-1.5 w-2/3 bg-charcoal/60 rounded-full" /><div className="h-1 w-full bg-charcoal/15 rounded-full" /></div>
              </div>
            ))}
          </div>
        </div>
      );
    case 'landing':
      return (
        <div className="w-full h-full bg-coral-pink/90 p-6 flex flex-col items-center justify-center text-center gap-3">
          <div className="h-3 w-2/3 bg-white rounded-sm" />
          <div className="h-3 w-1/2 bg-white/70 rounded-sm" />
          <div className="h-1.5 w-3/5 bg-white/50 rounded-full mt-2" />
          <div className="mt-3 bg-white w-3/5 p-3 space-y-2">
            <div className="h-4 border border-soft-beige" /><div className="h-4 border border-soft-beige" /><div className="h-5 bg-charcoal" />
          </div>
        </div>
      );
  }
}

export default function Showcase() {
  const [active, setActive] = useState<(typeof filters)[number]>('All');
  const visible = concepts.filter((c) => active === 'All' || c.category === active);

  return (
    <section id="work" className="relative py-24 lg:py-32 bg-soft-beige/30 section-transition overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12" data-reveal>
          <div className="inline-block mb-6">
            <span className="text-sm font-medium tracking-widest uppercase text-coral-pink">Capabilities Showcase</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-charcoal mb-6 leading-tight">
            What We Can
            <span className="block text-coral-pink">Create for You</span>
          </h2>
          <p className="text-xl text-charcoal/70 max-w-3xl">
            Illustrative concepts that show the kind of creative, web, and operations work we deliver.
            These are sample previews, not client projects.
          </p>
        </div>

        <div role="tablist" aria-label="Filter concepts" className="flex flex-wrap gap-2 mb-10" data-reveal>
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={active === filter}
              onClick={() => setActive(filter)}
              className={`px-4 py-2 text-sm font-medium border transition-colors ${
                active === filter
                  ? 'bg-charcoal border-charcoal text-warm-ivory'
                  : 'border-soft-beige bg-white text-charcoal hover:border-coral-pink hover:text-coral-pink'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((concept) => (
            <article key={concept.title} className="showcase-card group bg-white border border-soft-beige/50 overflow-hidden" tabIndex={0}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="showcase-preview absolute inset-0">
                  <Preview type={concept.preview} />
                </div>
                <div className="showcase-overlay absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/90 to-transparent p-5 pt-16">
                  <p className="text-sm text-warm-ivory/90 leading-relaxed">{concept.description}</p>
                </div>
              </div>
              <div className="p-6 flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-medium tracking-widest uppercase text-coral-pink mb-1">{concept.category}</div>
                  <h3 className="text-xl font-semibold text-charcoal">{concept.title}</h3>
                </div>
                <span className="text-xs text-charcoal/50 border border-soft-beige px-2 py-1 whitespace-nowrap">Concept</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center" data-reveal>
          <Link href="/contact" className="btn-lift inline-block border-2 border-charcoal text-charcoal px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-charcoal hover:text-warm-ivory">
            Discuss Your Project
          </Link>
        </div>
      </div>
    </section>
  );
}
