import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="py-24 lg:py-32 bg-charcoal text-warm-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-block mb-6">
            <span className="text-sm font-medium tracking-widest uppercase text-coral-pink">
              Your Business. Our Commitment.
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl text-warm-ivory mb-6 leading-tight">
            Ready to Delegate with Confidence?
          </h2>
          <p className="text-xl text-warm-ivory/70 mb-10 max-w-3xl mx-auto">
            Book a consultation and discover how AUREVANT can give you back the time to lead,
            grow, and focus on what matters most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-premium bg-coral-pink text-white px-8 py-4 text-base font-medium hover:bg-warm-ivory hover:text-charcoal transition-colors"
            >
              Book a Consultation
            </Link>
            <Link
              href="/services"
              className="border-2 border-warm-ivory/40 text-warm-ivory px-8 py-4 text-base font-medium hover:border-coral-pink hover:text-coral-pink transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
