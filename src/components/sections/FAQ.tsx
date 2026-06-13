'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What industries do you serve?',
      answer: 'We serve a wide range of industries including real estate, construction, property management, healthcare, legal, consulting, and small businesses across various sectors.',
    },
    {
      question: 'How do I get started with your services?',
      answer: 'Getting started is easy! Simply book a discovery call through our contact page. We\'ll discuss your needs, create a customized plan, and match you with the right virtual assistant for your business.',
    },
    {
      question: 'What are your pricing plans?',
      answer: 'We offer flexible pricing plans based on your needs and hours required. Our plans start from part-time support to full-time dedicated assistants. Contact us for a customized quote.',
    },
    {
      question: 'Are your virtual assistants trained?',
      answer: 'Yes, all our virtual assistants undergo rigorous training and have experience in their respective domains. We continuously provide ongoing training to ensure they stay updated with the latest tools and best practices.',
    },
    {
      question: 'Can I scale my virtual assistant team?',
      answer: 'Absolutely! Our services are designed to scale with your business. You can start with one assistant and easily add more team members as your needs grow.',
    },
    {
      question: 'How do you ensure data security?',
      answer: 'We take data security seriously. All our assistants sign NDAs, and we use secure communication channels and project management tools. We also follow industry best practices for data protection.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Have questions? We're here to help. Here are some common questions about our services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full bg-white rounded-lg p-6 text-left shadow-sm hover:shadow-md transition-shadow duration-300"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-black">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                {openIndex === index && (
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/contact"
            className="inline-block bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors"
          >
            Still Have Questions? Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
