'use client';

import { useState } from 'react';
import { services } from '@/lib/services';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for contacting AUREVANT. We will be in touch within one business day.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-soft-beige focus:border-coral-pink focus:outline-none transition-colors bg-warm-ivory"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-soft-beige focus:border-coral-pink focus:outline-none transition-colors bg-warm-ivory"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-soft-beige focus:border-coral-pink focus:outline-none transition-colors bg-warm-ivory"
            placeholder="+1 (555) 000-0000"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-charcoal mb-2">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-soft-beige focus:border-coral-pink focus:outline-none transition-colors bg-warm-ivory"
            placeholder="Your Company"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-charcoal mb-2">
          Service Interested In
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-soft-beige focus:border-coral-pink focus:outline-none transition-colors bg-warm-ivory"
        >
          <option value="">Select a service</option>
          {services.map((service) => (
            <option key={service.id} value={service.id}>
              {service.title}
            </option>
          ))}
          <option value="multiple">Multiple services / Not sure yet</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-soft-beige focus:border-coral-pink focus:outline-none transition-colors bg-warm-ivory resize-none"
          placeholder="Tell us about your business and the support you need..."
        />
      </div>

      <button
        type="submit"
        className="btn-premium w-full bg-coral-pink text-white px-8 py-4 text-base font-medium hover:bg-charcoal transition-colors"
      >
        Send Inquiry
      </button>
    </form>
  );
}
