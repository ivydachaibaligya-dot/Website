import Link from 'next/link';

export default function Hero() {
  const deliverables = [
    'Executive inbox & calendar management',
    'Lead generation & follow-ups',
    'CRM kept accurate and current',
    'Appointments set and confirmed',
    'Roofing & home services back office',
    'Website & digital updates',
  ];

  return (
    <section className="relative isolate overflow-hidden bg-warm-ivory pt-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <div className="relative z-10 animate-fade-in-up">
          <span className="mb-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-coral-pink">
            <span className="h-px w-8 bg-coral-pink" />
            AUREVANT · Global Business Support
          </span>

          <h1 className="mb-7 max-w-2xl text-5xl leading-[1.02] text-charcoal sm:text-6xl lg:text-7xl">
            Your Business.
            <span className="mt-2 block text-coral-pink">Our Commitment.</span>
          </h1>

          <p className="mb-9 max-w-xl text-lg leading-8 text-charcoal/70 sm:text-xl">
            A boutique virtual assistant agency providing dedicated, detail-driven support to
            US businesses, so you can lead, grow, and focus on what matters most.
          </p>

          <div className="mb-12 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-premium inline-flex items-center justify-center bg-coral-pink px-8 py-4 text-center text-base font-medium text-white transition-colors hover:bg-charcoal">
              Book a Consultation <span className="ml-3" aria-hidden="true">↗</span>
            </Link>
            <Link href="#services" className="inline-flex items-center justify-center border border-coral-pink px-8 py-4 text-center text-base font-medium text-coral-pink transition-colors hover:bg-coral-pink hover:text-white">
              Explore Our Services
            </Link>
          </div>

          <div className="grid max-w-xl grid-cols-3 gap-4 border-t border-soft-beige pt-7">
            <div><div className="font-serif text-3xl text-charcoal">06</div><div className="mt-1 text-xs leading-5 text-charcoal/60 sm:text-sm">Core service areas</div></div>
            <div><div className="font-serif text-3xl text-charcoal">US</div><div className="mt-1 text-xs leading-5 text-charcoal/60 sm:text-sm">Business focused</div></div>
            <div><div className="font-serif text-3xl text-charcoal">Global</div><div className="mt-1 text-xs leading-5 text-charcoal/60 sm:text-sm">Remote delivery</div></div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-2xl animate-fade-in lg:pl-5">
          <div className="absolute -right-3 -top-5 h-28 w-28 border border-soft-beige sm:-right-5 sm:-top-7 sm:h-40 sm:w-40" />
          <div className="absolute -bottom-5 -left-4 h-28 w-28 bg-coral-pink/20 sm:-bottom-7 sm:-left-7 sm:h-40 sm:w-40" />
          <div
            className="relative aspect-[5/4] overflow-hidden bg-soft-beige bg-cover bg-center shadow-2xl sm:aspect-[4/3]"
            role="img"
            aria-label="Virtual assistant working remotely on a laptop in a bright home workspace"
            style={{ backgroundImage: "url('https://images.pexels.com/photos/7901763/pexels-photo-7901763.jpeg?auto=compress&cs=tinysrgb&w=1500')" }}
          >
            <div className="absolute inset-0 bg-charcoal/10" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/80 via-charcoal/35 to-transparent p-6 pt-24 sm:p-9 sm:pt-28">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">The AUREVANT difference</p>
              <p className="mt-2 max-w-sm font-serif text-2xl leading-tight text-white sm:text-3xl">Thoughtful support. Room to grow.</p>
            </div>
          </div>
          <div className="relative mx-4 -mt-8 bg-warm-ivory p-5 shadow-xl sm:mx-8 sm:p-7">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div><p className="text-xs uppercase tracking-[0.18em] text-coral-pink">Your dedicated support</p><h2 className="mt-1 font-serif text-2xl text-charcoal">The AUREVANT Desk</h2></div>
              <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-coral-pink text-2xl font-semibold text-white">A</div>
            </div>
            <p className="mb-4 text-sm text-charcoal/65">Handled with care, every business day.</p>
            <div className="grid grid-cols-1 gap-x-5 gap-y-2 sm:grid-cols-2">
              {deliverables.map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm leading-5 text-charcoal/80">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral-pink" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}