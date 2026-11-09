'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import { services, contactEmail } from '@/lib/services';
import { EMAIL_PATTERN, submitNetlifyForm } from '@/lib/forms';

const FORM_NAME = 'contact';

const initialData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  message: '',
};

type Data = typeof initialData;
type Errors = Partial<Record<keyof Data, string>>;

const inputClass =
  'w-full px-4 py-3 border focus:border-coral-pink focus:outline-none transition-colors bg-warm-ivory';

function validate(data: Data): Errors {
  const errors: Errors = {};
  if (data.name.trim().length < 2) errors.name = 'Please enter your full name.';
  if (!EMAIL_PATTERN.test(data.email.trim())) errors.email = 'Please enter a valid email address.';
  if (!data.message.trim()) errors.message = 'Please tell us how we can help.';
  if (data.message.length > 2000) errors.message = 'Please keep this under 2,000 characters.';
  return errors;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<Data>(initialData);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const key = e.target.name as keyof Data;
    setFormData((current) => ({ ...current, [key]: e.target.value }));
    if (errors[key]) setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors = validate(formData);
    setErrors(nextErrors);
    const firstError = Object.keys(nextErrors)[0];
    if (firstError) {
      document.getElementById(`contact-${firstError}`)?.focus();
      return;
    }

    const honeypot = (e.currentTarget.elements.namedItem('bot-field') as HTMLInputElement | null)?.value ?? '';
    const serviceTitle =
      formData.service === 'multiple'
        ? 'Multiple services / Not sure yet'
        : services.find((s) => s.id === formData.service)?.title ?? '';

    setStatus('submitting');
    try {
      await submitNetlifyForm(FORM_NAME, {
        subject: `AUREVANT inquiry from ${formData.name.trim()} (%{submissionId})`,
        'bot-field': honeypot,
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        company: formData.company.trim(),
        service: serviceTitle,
        message: formData.message.trim(),
      });
      setFormData(initialData);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div role="status" className="text-center py-8">
        <div className="w-14 h-14 mx-auto mb-5 bg-coral-pink text-white rounded-full flex items-center justify-center">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-charcoal mb-3">Thank you for contacting AUREVANT.</h3>
        <p className="text-charcoal/70 mb-6">Your inquiry has been received. We will be in touch within one business day.</p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="text-sm font-semibold tracking-widest uppercase text-coral-pink hover:text-charcoal transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  const fieldProps = (key: keyof Data) => ({
    id: `contact-${key}`,
    name: key,
    value: formData[key],
    onChange: handleChange,
    'aria-invalid': !!errors[key],
    'aria-describedby': errors[key] ? `contact-${key}-error` : undefined,
    className: `${inputClass} ${errors[key] ? 'border-coral-pink' : 'border-soft-beige'}`,
  });

  const fieldError = (key: keyof Data) =>
    errors[key] ? (
      <p id={`contact-${key}-error`} className="mt-2 text-sm text-coral-pink font-medium">
        {errors[key]}
      </p>
    ) : null;

  return (
    <form name={FORM_NAME} onSubmit={handleSubmit} noValidate className="space-y-6">
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <p className="hidden" aria-hidden="true">
        <label>
          Leave this field empty <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-charcoal mb-2">
            Full Name *
          </label>
          <input type="text" autoComplete="name" placeholder="John Doe" {...fieldProps('name')} />
          {fieldError('name')}
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-charcoal mb-2">
            Email Address *
          </label>
          <input type="email" autoComplete="email" placeholder="john@example.com" {...fieldProps('email')} />
          {fieldError('email')}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="contact-phone" className="block text-sm font-medium text-charcoal mb-2">
            Phone Number
          </label>
          <input type="tel" autoComplete="tel" placeholder="+1 (555) 000-0000" {...fieldProps('phone')} />
        </div>
        <div>
          <label htmlFor="contact-company" className="block text-sm font-medium text-charcoal mb-2">
            Company Name
          </label>
          <input type="text" autoComplete="organization" placeholder="Your Company" {...fieldProps('company')} />
        </div>
      </div>

      <div>
        <label htmlFor="contact-service" className="block text-sm font-medium text-charcoal mb-2">
          Service Interested In
        </label>
        <select {...fieldProps('service')}>
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
        <label htmlFor="contact-message" className="block text-sm font-medium text-charcoal mb-2">
          Message *
        </label>
        <textarea
          rows={5}
          maxLength={2000}
          placeholder="Tell us about your business and the support you need..."
          {...fieldProps('message')}
          className={`${fieldProps('message').className} resize-none`}
        />
        {fieldError('message')}
      </div>

      {status === 'error' && (
        <p role="alert" className="p-4 bg-coral-pink/10 border border-coral-pink text-charcoal text-sm">
          Sorry, your message could not be sent. Please try again, or email us at{' '}
          <a href={`mailto:${contactEmail}`} className="font-semibold text-coral-pink underline">
            {contactEmail}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-premium w-full bg-coral-pink text-white px-8 py-4 text-base font-medium hover:bg-charcoal transition-colors disabled:opacity-60 disabled:cursor-wait"
      >
        {status === 'submitting' ? 'Sending…' : 'Send Inquiry'}
      </button>
    </form>
  );
}
