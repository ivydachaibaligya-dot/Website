'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Who does AUREVANT work with?',
      answer: 'We support US-based businesses of all sizes, from founders and executives who need dependable administrative support to roofing, home services, and service-based companies that need help with leads, CRM, scheduling, and customer communication.',
    },
    {
      question: 'How do we get started?',
      answer: 'Book a consultation through our contact page. We will learn about your business and goals, recommend the right mix of services, and prepare a tailored support plan before onboarding begins.',
    },
    {
      question: 'How is pricing structured?',
      answer: 'Every engagement is scoped to your needs. After your consultation, we provide a clear proposal based on the services and level of support you require, with no obligation.',
    },
    {
      question: 'Can you work in our existing tools and time zone?',
      answer: 'Yes. We work inside the platforms you already use, such as your CRM, project management, and communication tools, and we align our working hours with your US business schedule.',
    },
    {
      question: 'Can we combine multiple services?',
      answer: 'Absolutely. Many businesses start with one service area, such as administrative support or appointment setting, and expand into lead generation, CRM management, or digital support as they grow.',
    },
    {
      question: 'How do you protect our data?',
      answer: 'Confidentiality is central to how we work. We are happy to sign your NDA, we follow your access and security protocols, and we only use the accounts and permissions you grant.',
    },
  ];

  return (
    <section id="faq" className="py-24 lg:py-32 bg-soft-beige/30 section-transition">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div>
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
              className="btn-premium inline-block bg-coral-pink text-white px-8 py-4 text-base font-medium hover:bg-charcoal transition-colors"
            >
              Ask Us Anything
            </Link>
          </div>

          <div className="lg:col-span-2 space-y-4">
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
