'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from '@/components/brand/Logo';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Approach', href: '/#approach' },
    { name: 'About', href: '/about' },
    { name: 'FAQ', href: '/#faq' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed w-full bg-warm-ivory/90 backdrop-blur-md border-b border-soft-beige z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-charcoal hover:text-coral-pink transition-colors font-medium tracking-wide link-hover"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="bg-coral-pink text-white px-6 py-3 text-sm font-medium hover:bg-charcoal transition-colors tracking-wide btn-premium"
            >
              Book a Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-charcoal hover:text-coral-pink"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-warm-ivory border-t border-soft-beige">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-charcoal hover:text-coral-pink transition-colors font-medium py-2 text-lg"
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
