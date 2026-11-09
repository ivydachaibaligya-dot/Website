'use client';

import { useState } from 'react';
import Link from 'next/link';
import { faqs } from '@/lib/faqs';
import { JsonLd } from '@/components/seo/StructuredData';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 lg:py-32 bg-soft-beige/30 section-transition">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: { '@type': 'Answer', text: faq.answer },
            })),
          }}
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div data-reveal>
            <div className="inline-block mb-6">
              <span className="text-sm font-medium tracking-widest uppercase text-coral-pink">
                FAQ
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl text-charcoal mb-6 leading-tight">
              Questions,
              <span className="block text-coral-pink">Answered</span>
            </h2>
            <p className="text-xl text-charcoal/70 mb-8">
              Everything you need to know about partnering with AUREVANT.
            </p>
            <Link
              href="/contact"
              className="btn-premium btn-lift inline-block bg-coral-pink text-white px-8 py-4 text-base font-medium hover:bg-charcoal"
            >
              Ask Us Anything
            </Link>
          </div>

          <div className="lg:col-span-2 space-y-4" data-reveal style={{ ['--reveal-delay' as string]: '120ms' }}>
            {faqs.map((faq, index) => (
              <div key={faq.question} className="bg-warm-ivory shadow-sm border border-soft-beige/30">
                <button
                  className="w-full p-6 lg:p-8 text-left"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                >
                  <div className="flex justify-between items-center gap-6">
                    <h3 className="text-xl font-semibold text-charcoal">
                      {faq.question}
                    </h3>
                    <svg
                      className={`w-5 h-5 text-coral-pink flex-shrink-0 transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  {openIndex === index && (
                    <p className="mt-4 text-charcoal/70 leading-relaxed">
                      {faq.answer}
                    </p>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
