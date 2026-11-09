import Link from 'next/link';
import AmbientBackground from '@/components/visuals/AmbientBackground';
import WorkspaceVisual from '@/components/visuals/WorkspaceVisual';
import { services } from '@/lib/services';

const delay = (ms: number) => ({ ['--enter-delay' as string]: `${ms}ms` });

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-20 flex items-center bg-warm-ivory overflow-hidden">
      <AmbientBackground grid />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-12 items-center">
          <div>
            <div className="hero-enter inline-flex items-center gap-3 mb-6" style={delay(100)}>
              <span className="hero-line block w-10 h-px bg-coral-pink" />
              <span className="text-sm font-medium tracking-widest uppercase text-coral-pink">
                AUREVANT &middot; Global Business Support
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl xl:text-7xl text-charcoal mb-6 leading-[1.1]">
              <span className="hero-enter block" style={{ ...delay(250), fontFamily: 'inherit' }}>
                Your Business.
              </span>
              <span className="hero-enter block text-coral-pink" style={delay(450)}>
                Our Commitment.
              </span>
            </h1>

            <p className="hero-enter text-xl md:text-2xl text-charcoal/70 mb-8 leading-relaxed max-w-xl" style={delay(650)}>
              A premium virtual and creative agency for US businesses: dedicated assistants, design,
              websites, and social media, delivered with care and precision.
            </p>

            <div className="hero-enter flex flex-col sm:flex-row gap-4 mb-12" style={delay(850)}>
              <Link
                href="/contact"
                className="btn-premium btn-lift bg-coral-pink text-white px-8 py-4 text-base font-medium hover:bg-charcoal text-center"
              >
                Book a Consultation
              </Link>
              <Link
                href="/pricing"
                className="btn-lift border-2 border-coral-pink text-coral-pink px-8 py-4 text-base font-medium hover:bg-coral-pink hover:text-white text-center"
              >
                Build Your Support Plan
              </Link>
            </div>

            <div className="hero-enter flex flex-wrap gap-x-6 gap-y-3 border-t border-soft-beige pt-8" style={delay(1050)}>
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={`/services#${service.id}`}
                  className="text-sm text-charcoal/70 hover:text-coral-pink transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-coral-pink" />
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="hero-enter px-6 sm:px-10 lg:px-0 pb-12" style={delay(500)}>
            <WorkspaceVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
