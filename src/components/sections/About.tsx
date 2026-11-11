import Link from 'next/link';

export default function About() {
  const standards = [
    'A dedicated point of contact for your account',
    'Documented processes tailored to your business',
    'Clear, consistent progress updates',
    'Confidential handling of your data and accounts',
    'Seamless onboarding into the tools you already use',
  ];

  return (
    <section id="about" className="section-transition reveal-on-scroll overflow-hidden bg-soft-beige/30 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div className="relative">
          <div className="relative aspect-[4/5] max-h-[680px] overflow-hidden bg-soft-beige shadow-2xl">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105" role="img" aria-label="Collaborative team working together in a bright modern office" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85')" }} />
            <div className="absolute inset-0 bg-charcoal/10" />
            <div className="absolute bottom-5 left-5 right-5 bg-warm-ivory/95 p-5 shadow-lg sm:bottom-7 sm:left-7 sm:right-7 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral-pink">Our promise</p>
              <p className="mt-2 font-serif text-2xl leading-tight text-charcoal sm:text-3xl">Your business is in thoughtful hands.</p>
            </div>
          </div>
          <div className="absolute -bottom-5 -right-4 -z-10 h-32 w-32 bg-coral-pink/20 sm:-bottom-7 sm:-right-7 sm:h-44 sm:w-44" />
        </div>

        <div>
          <span className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-coral-pink"><span className="h-px w-8 bg-coral-pink" />About AUREVANT</span>
          <h2 className="mb-6 text-4xl leading-tight text-charcoal sm:text-5xl">A Boutique Agency Built on <span className="block text-coral-pink">Commitment</span></h2>
          <div className="space-y-5 text-base leading-8 text-charcoal/80 sm:text-lg">
            <p>AUREVANT is an international virtual assistant agency providing global business support to companies across the United States. We partner with founders, executives, and growing teams who need dependable support without the overhead of in-house hiring.</p>
            <p>From executive administration and CRM management to lead generation and customer care, we become a seamless extension of your team, working inside your systems, following your standards, and representing your brand with care.</p>
            <p>We bring particular depth to roofing and home services businesses, where we understand the rhythm of inspections, estimates, crews, and homeowner communication, not just general administrative tasks.</p>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3">
            <div className="border-l-2 border-coral-pink bg-warm-ivory px-3 py-4 sm:px-5"><div className="font-serif text-2xl text-charcoal">1:1</div><div className="mt-1 text-xs leading-5 text-charcoal/60 sm:text-sm">Dedicated support</div></div>
            <div className="border-l-2 border-coral-pink bg-warm-ivory px-3 py-4 sm:px-5"><div className="font-serif text-2xl text-charcoal">US</div><div className="mt-1 text-xs leading-5 text-charcoal/60 sm:text-sm">Time-zone aligned</div></div>
            <div className="border-l-2 border-coral-pink bg-warm-ivory px-3 py-4 sm:px-5"><div className="font-serif text-2xl text-charcoal">NDA</div><div className="mt-1 text-xs leading-5 text-charcoal/60 sm:text-sm">Ready on request</div></div>
          </div>
          <Link href="/about" className="link-hover mt-8 inline-block font-medium text-coral-pink">More about AUREVANT <span aria-hidden="true">→</span></Link>
        </div>

        <div className="lg:col-span-2 grid grid-cols-1 gap-4 border-t border-soft-beige pt-8 sm:grid-cols-2 lg:grid-cols-5">
          {standards.map((standard, index) => (
            <div key={standard} className="flex items-start gap-3 text-sm leading-6 text-charcoal/75">
              <span className="font-serif text-lg text-coral-pink">0{index + 1}</span><span>{standard}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}