import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-warm-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-coral-pink rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-xl">I</span>
              </div>
              <span className="text-xl font-semibold tracking-tight">Ivy</span>
            </div>
            <p className="text-warm-ivory/70 mb-6 leading-relaxed max-w-md">
              Roofing Operations Virtual Assistant helping US-based roofing companies streamline operations, manage leads, and grow their business.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4 tracking-wide uppercase text-coral-pink">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-warm-ivory/70 hover:text-coral-pink transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-warm-ivory/70 hover:text-coral-pink transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#tools" className="text-warm-ivory/70 hover:text-coral-pink transition-colors">
                  Tools
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-warm-ivory/70 hover:text-coral-pink transition-colors">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold mb-4 tracking-wide uppercase text-coral-pink">Expertise</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#services" className="text-warm-ivory/70 hover:text-coral-pink transition-colors">
                  Roofing Operations
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-warm-ivory/70 hover:text-coral-pink transition-colors">
                  Lead Management
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-warm-ivory/70 hover:text-coral-pink transition-colors">
                  CRM Management
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-warm-ivory/70 hover:text-coral-pink transition-colors">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-soft-beige/20 mt-12 pt-8 text-center text-warm-ivory/60 text-sm">
          <p>&copy; {currentYear} Ivy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
