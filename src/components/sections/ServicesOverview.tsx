import Link from 'next/link';
import { services } from '@/lib/services';

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-warm-ivory section-transition">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <div className="inline-block mb-6">
            <span className="text-sm font-medium tracking-widest uppercase text-coral-pink">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl text-charcoal mb-6 leading-tight">
            Comprehensive Support for
            <span className="block text-coral-pink">Growing US Businesses</span>
          </h2>
          <p className="text-xl text-charcoal/70 max-w-3xl">
            Six focused service areas, delivered by dedicated professionals who learn your
            business, adopt your systems, and uphold your standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services#${service.id}`}
              className="card-premium bg-soft-beige/20 p-8 hover:bg-warm-ivory transition-colors group border border-soft-beige/30 flex flex-col"
            >
              <div className="text-5xl font-bold text-coral-pink/30 mb-4 group-hover:text-coral-pink/50 transition-colors">
                {service.number}
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-3">
                {service.title}
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-6 flex-1">
                {service.summary}
              </p>
              <span className="text-sm font-medium tracking-wide text-coral-pink">
                Learn more &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
