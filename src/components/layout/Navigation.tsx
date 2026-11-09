'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/components/brand/Logo';

const navLinks = [
  { name: 'Services', href: '/services' },
  { name: 'Work', href: '/#work' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Approach', href: '/#approach' },
  { name: 'About', href: '/about' },
  { name: 'FAQ', href: '/#faq' },
  { name: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setIsOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  const isCurrent = (href: string) => !href.includes('#') && pathname === href;

  return (
    <nav
      aria-label="Main"
      className={`nav-shell fixed w-full backdrop-blur-md border-b border-soft-beige z-50 ${
        scrolled || isOpen ? 'bg-warm-ivory/95 shadow-[0_10px_30px_-20px_rgba(36,36,36,0.35)]' : 'bg-warm-ivory/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Logo />

          <div className="hidden lg:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                aria-current={isCurrent(link.href) ? 'page' : undefined}
                className={`nav-link text-sm hover:text-coral-pink transition-colors font-medium tracking-wide ${
                  isCurrent(link.href) ? 'text-coral-pink' : 'text-charcoal'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="btn-lift bg-coral-pink text-white px-6 py-3 text-sm font-medium hover:bg-charcoal tracking-wide btn-premium"
            >
              Book a Consultation
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-charcoal hover:text-coral-pink"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div id="mobile-menu" className="menu-in lg:hidden bg-warm-ivory border-t border-soft-beige max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="px-6 py-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                aria-current={isCurrent(link.href) ? 'page' : undefined}
                className={`block hover:text-coral-pink transition-colors font-medium py-2 text-lg ${
                  isCurrent(link.href) ? 'text-coral-pink' : 'text-charcoal'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block bg-coral-pink text-white px-6 py-3 font-medium hover:bg-charcoal transition-colors text-center mt-6 btn-premium"
              onClick={() => setIsOpen(false)}
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
