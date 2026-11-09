import Link from 'next/link';
import Logo from '@/components/brand/Logo';
import { services, contactEmail } from '@/lib/services';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: 'About AUREVANT', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Pricing & Quote', href: '/pricing' },
    { name: 'Our Approach', href: '/#approach' },
    { name: 'FAQ', href: '/#faq' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-charcoal text-warm-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <Logo variant="light" />
            </div>
            <p className="font-serif text-2xl text-warm-ivory mb-4">
              Your Business. <span className="text-coral-pink">Our Commitment.</span>
            </p>
            <p className="text-warm-ivory/70 mb-6 leading-relaxed max-w-md">
              A boutique virtual assistant agency delivering premium global business support to
              US companies, so leaders can focus on growth while we handle the details.
            </p>
            <a
              href={`mailto:${contactEmail}`}
              className="text-warm-ivory/70 hover:text-coral-pink transition-colors"
            >
              {contactEmail}
            </a>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold mb-4 tracking-wide uppercase text-coral-pink">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-warm-ivory/70 hover:text-coral-pink transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold mb-4 tracking-wide uppercase text-coral-pink">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="text-warm-ivory/70 hover:text-coral-pink transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-soft-beige/20 mt-12 pt-8 flex flex-col md:flex-row justify-between gap-4 text-warm-ivory/60 text-sm">
          <p>&copy; {currentYear} AUREVANT. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase text-xs">Global Business Support</p>
        </div>
      </div>
    </footer>
  );
}
