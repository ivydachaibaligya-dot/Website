import Link from 'next/link';
import { services } from '@/lib/services';

const serviceImages = [
  'https://images.pexels.com/photos/19915766/pexels-photo-19915766/free-photo-of-making-a-schedule-on-the-laptop.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/7710092/pexels-photo-7710092.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/8297058/pexels-photo-8297058.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/7651812/pexels-photo-7651812.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/8866740/pexels-photo-8866740.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/6016365/pexels-photo-6016365.jpeg?auto=compress&cs=tinysrgb&w=900',
];

export default function Services() {
  return (
    <section id="services" className="section-transition bg-warm-ivory py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 max-w-3xl sm:mb-16">
          <span className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-coral-pink"><span className="h-px w-8 bg-coral-pink" />Our Services</span>
          <h2 className="mb-6 text-4xl leading-tight text-charcoal sm:text-5xl">Comprehensive Support for <span className="block text-coral-pink">Growing US Businesses</span></h2>
          <p className="text-lg leading-8 text-charcoal/70 sm:text-xl">Six focused service areas, delivered by dedicated professionals who learn your business, adopt your systems, and uphold your standards.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link key={service.id} href={`/services#${service.id}`} className="group card-premium flex flex-col overflow-hidden border border-soft-beige/50 bg-warm-ivory shadow-sm">
              <div className="image-zoom relative aspect-[16/10] overflow-hidden bg-soft-beige">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" role="img" aria-label={`${service.title} virtual assistant at work`} style={{ backgroundImage: `url('${serviceImages[index]}')` }} />
                <div className="absolute inset-0 bg-charcoal/15 transition-colors duration-500 group-hover:bg-charcoal/5" />
                <span className="absolute bottom-4 left-5 font-serif text-4xl text-white/90">{service.number}</span>
              </div>
              <div className="flex flex-1 flex-col p-7 sm:p-8">
                <h3 className="mb-3 text-xl font-semibold text-charcoal transition-colors group-hover:text-coral-pink">{service.title}</h3>
                <p className="mb-6 flex-1 text-sm leading-7 text-charcoal/70 sm:text-base">{service.summary}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-coral-pink">Explore service <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}