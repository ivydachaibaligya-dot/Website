import Link from 'next/link';
import { services } from '@/lib/services';
import ServiceIcon from '@/components/brand/ServiceIcon';
import Spotlight from '@/components/motion/Spotlight';

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-warm-ivory section-transition overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
          <div data-reveal>
            <div className="inline-block mb-6">
              <span className="text-sm font-medium tracking-widest uppercase text-coral-pink">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-charcoal leading-tight">
              Creative, Digital &amp;
              <span className="block text-coral-pink">Virtual Support</span>
            </h2>
          </div>
          <p data-reveal className="text-xl text-charcoal/70 max-w-xl" style={{ ['--reveal-delay' as string]: '120ms' }}>
            Five integrated service areas, delivered by dedicated professionals who learn your business,
            work inside your systems, and uphold your standards.
          </p>
        </div>

        <Spotlight className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              data-reveal
              className={index < 2 ? 'lg:col-span-3' : 'lg:col-span-2'}
              style={{ ['--reveal-delay' as string]: `${index * 90}ms` }}
            >
              <Link
                href={`/services#${service.id}`}
                className="service-card group h-full bg-white p-8 border border-soft-beige/50 flex flex-col"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="service-icon w-14 h-14 bg-coral-pink/10 text-coral-pink flex items-center justify-center group-hover:bg-coral-pink group-hover:text-white">
                    <ServiceIcon name={service.icon} className="w-7 h-7" />
                  </div>
                  <span className="text-4xl font-bold text-coral-pink/25 group-hover:text-coral-pink/50 transition-colors">
                    {service.number}
                  </span>
                </div>
                <div className="text-xs font-medium tracking-widest uppercase text-charcoal/50 mb-2">{service.tagline}</div>
                <h3 className="text-2xl font-semibold text-charcoal mb-3">{service.title}</h3>
                <div className="service-rule h-px w-full bg-coral-pink mb-4" />
                <p className="text-charcoal/70 leading-relaxed mb-6 flex-1">{service.summary}</p>
                <span className="text-sm font-medium tracking-wide text-coral-pink inline-flex items-center gap-2">
                  Explore service <span className="service-arrow" aria-hidden="true">&rarr;</span>
                </span>
              </Link>
            </div>
          ))}
        </Spotlight>
      </div>
    </section>
  );
}
