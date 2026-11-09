'use client';

import { useState, type FormEvent } from 'react';
import { pricingConfig } from '@/config/pricing';
import { formatCurrency, formatHours, type BillingType, type Estimate } from '@/lib/pricing';
import { contactEmail } from '@/lib/services';

type Props = {
  estimate: Estimate;
  hoursPerDay: number;
  daysPerWeek: number;
  billing: BillingType;
  onClose: () => void;
};

type Fields = {
  fullName: string;
  businessName: string;
  email: string;
  country: string;
  budget: string;
  requirements: string;
  consent: boolean;
};

type Errors = Partial<Record<keyof Fields | 'services', string>>;

const initialFields: Fields = {
  fullName: '',
  businessName: '',
  email: '',
  country: '',
  budget: '',
  requirements: '',
  consent: false,
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const inputClass =
  'w-full px-4 py-3 border focus:border-coral-pink focus:outline-none transition-colors bg-warm-ivory';

export function validateQuote(fields: Fields, serviceCount: number): Errors {
  const errors: Errors = {};
  if (serviceCount === 0) errors.services = 'Select at least one service in Step 1.';
  if (fields.fullName.trim().length < 2) errors.fullName = 'Please enter your full name.';
  if (!fields.businessName.trim()) errors.businessName = 'Please enter your business name.';
  if (!EMAIL_PATTERN.test(fields.email.trim())) errors.email = 'Please enter a valid email address.';
  if (!fields.country.trim()) errors.country = 'Please enter your country.';
  if (fields.requirements.length > 2000) errors.requirements = 'Please keep this under 2,000 characters.';
  if (!fields.consent) errors.consent = 'Please agree so we can contact you about your quote.';
  return errors;
}

export default function QuoteRequestForm({ estimate, hoursPerDay, daysPerWeek, billing, onClose }: Props) {
  const [fields, setFields] = useState<Fields>(initialFields);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [submittedName, setSubmittedName] = useState('');

  const servicesText = estimate.services.map((s) => s.name).join(', ');
  const scheduleText = `${formatHours(hoursPerDay)} per day, ${daysPerWeek} days per week (${formatHours(
    estimate.weeklyHours,
  )} weekly, ~${formatHours(estimate.monthlyHours)} monthly)`;
  const billingText = billing === 'hourly' ? 'Hourly billing' : 'Monthly billing';
  const money = (amount: number | null) => (amount === null ? 'Available on request' : formatCurrency(amount));
  const rateText = estimate.rate === null ? 'Available on request' : `${formatCurrency(estimate.rate)} / hr`;

  const update = <K extends keyof Fields>(key: K, value: Fields[K]) => {
    setFields((current) => ({ ...current, [key]: value }));
    if (errors[key]) setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateQuote(fields, estimate.services.length);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const first = Object.keys(nextErrors)[0];
      document.getElementById(`quote-${first}`)?.focus();
      return;
    }

    const honeypot = (event.currentTarget.elements.namedItem('bot-field') as HTMLInputElement | null)?.value ?? '';

    const payload = new URLSearchParams({
      'form-name': pricingConfig.quoteRequest.formName,
      'bot-field': honeypot,
      fullName: fields.fullName.trim(),
      businessName: fields.businessName.trim(),
      email: fields.email.trim(),
      country: fields.country.trim(),
      services: servicesText,
      schedule: scheduleText,
      billing: billingText,
      hoursPerDay: String(hoursPerDay),
      daysPerWeek: String(daysPerWeek),
      weeklyHours: estimate.weeklyHours.toFixed(2),
      monthlyHours: estimate.monthlyHours.toFixed(2),
      estimatedRate: `${estimate.rateLabel}: ${rateText}`,
      estimatedWeeklyCost: money(estimate.weeklyCost),
      estimatedMonthlyCost: money(estimate.monthlyCost),
      budget: fields.budget.trim(),
      requirements: fields.requirements.trim(),
      consent: 'yes',
    });

    setStatus('submitting');
    try {
      const response = await fetch(pricingConfig.quoteRequest.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: payload.toString(),
      });
      if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
      setSubmittedName(fields.fullName.trim().split(/\s+/)[0]);
      setFields(initialFields);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div role="status" className="bg-warm-ivory p-8 md:p-12 shadow-sm border border-coral-pink/40 text-center max-w-3xl mx-auto">
        <div className="w-16 h-16 mx-auto mb-6 bg-coral-pink text-white rounded-full flex items-center justify-center">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-3xl font-semibold text-charcoal mb-4">Thank you{submittedName ? `, ${submittedName}` : ''}.</h3>
        <p className="text-lg text-charcoal/70 mb-2">Your custom quote request has been received.</p>
        <p className="text-charcoal/70 mb-8">
          We will review your selected services and schedule and reply by email with a tailored proposal.
        </p>
        <button
          type="button"
          onClick={onClose}
          className="btn-premium bg-charcoal text-warm-ivory px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-coral-pink transition-colors"
        >
          Back to Calculator
        </button>
      </div>
    );
  }

  const fieldError = (key: keyof Errors) =>
    errors[key] ? (
      <p id={`quote-${key}-error`} className="mt-2 text-sm text-coral-pink font-medium">
        {errors[key]}
      </p>
    ) : null;

  const describedBy = (key: keyof Errors) => (errors[key] ? `quote-${key}-error` : undefined);
  const borderFor = (key: keyof Errors) => (errors[key] ? 'border-coral-pink' : 'border-soft-beige');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
      {/* Package summary */}
      <div className="lg:col-span-2 bg-white p-6 md:p-10 shadow-sm border border-soft-beige/30">
        <div className="text-sm font-medium tracking-widest uppercase text-coral-pink mb-2">Your Package</div>
        <h3 className="text-2xl font-semibold text-charcoal mb-6">Quote Summary</h3>
        <dl className="space-y-4 text-sm">
          {[
            ['Selected services', servicesText || '—'],
            ['Preferred schedule', scheduleText],
            ['Billing preference', billingText],
            [estimate.rateLabel, rateText],
            ['Estimated weekly cost', money(estimate.weeklyCost)],
            [billing === 'hourly' ? 'Estimated monthly cost' : 'Estimated monthly package', money(estimate.monthlyCost)],
          ].map(([label, value]) => (
            <div key={label}>
              <dt className="text-charcoal/60">{label}</dt>
              <dd className="font-semibold text-charcoal mt-0.5">{value}</dd>
            </div>
          ))}
        </dl>
        {fieldError('services')}
        <p className="mt-6 text-xs text-charcoal/50 leading-relaxed">
          These figures are estimates, not a guaranteed final quotation. Adjust the calculator above to
          update this summary.
        </p>
      </div>

      {/* Form */}
      <div className="lg:col-span-3 bg-white p-6 md:p-10 shadow-sm border border-soft-beige/30">
        <div className="text-sm font-medium tracking-widest uppercase text-coral-pink mb-2">Step 05</div>
        <h3 className="text-2xl font-semibold text-charcoal mb-2">Request Your Custom Quote</h3>
        <p className="text-charcoal/70 mb-8">Fields marked * are required.</p>

        <form name={pricingConfig.quoteRequest.formName} onSubmit={handleSubmit} noValidate className="space-y-6">
          <input type="hidden" name="form-name" value={pricingConfig.quoteRequest.formName} />
          <p className="hidden" aria-hidden="true">
            <label>
              Leave this field empty <input name="bot-field" tabIndex={-1} autoComplete="off" />
            </label>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="quote-fullName" className="block text-sm font-medium text-charcoal mb-2">Full name *</label>
              <input
                id="quote-fullName"
                type="text"
                autoComplete="name"
                value={fields.fullName}
                onChange={(e) => update('fullName', e.target.value)}
                aria-invalid={!!errors.fullName}
                aria-describedby={describedBy('fullName')}
                className={`${inputClass} ${borderFor('fullName')}`}
              />
              {fieldError('fullName')}
            </div>
            <div>
              <label htmlFor="quote-businessName" className="block text-sm font-medium text-charcoal mb-2">Business name *</label>
              <input
                id="quote-businessName"
                type="text"
                autoComplete="organization"
                value={fields.businessName}
                onChange={(e) => update('businessName', e.target.value)}
                aria-invalid={!!errors.businessName}
                aria-describedby={describedBy('businessName')}
                className={`${inputClass} ${borderFor('businessName')}`}
              />
              {fieldError('businessName')}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="quote-email" className="block text-sm font-medium text-charcoal mb-2">Email address *</label>
              <input
                id="quote-email"
                type="email"
                autoComplete="email"
                value={fields.email}
                onChange={(e) => update('email', e.target.value)}
                aria-invalid={!!errors.email}
                aria-describedby={describedBy('email')}
                className={`${inputClass} ${borderFor('email')}`}
              />
              {fieldError('email')}
            </div>
            <div>
              <label htmlFor="quote-country" className="block text-sm font-medium text-charcoal mb-2">Country *</label>
              <input
                id="quote-country"
                type="text"
                autoComplete="country-name"
                value={fields.country}
                onChange={(e) => update('country', e.target.value)}
                aria-invalid={!!errors.country}
                aria-describedby={describedBy('country')}
                className={`${inputClass} ${borderFor('country')}`}
              />
              {fieldError('country')}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="quote-services-display" className="block text-sm font-medium text-charcoal mb-2">Selected services</label>
              <input id="quote-services-display" type="text" readOnly value={servicesText} className={`${inputClass} border-soft-beige text-charcoal/70`} />
            </div>
            <div>
              <label htmlFor="quote-schedule-display" className="block text-sm font-medium text-charcoal mb-2">Preferred schedule</label>
              <input
                id="quote-schedule-display"
                type="text"
                readOnly
                value={`${formatHours(hoursPerDay)}/day, ${daysPerWeek} days/week`}
                className={`${inputClass} border-soft-beige text-charcoal/70`}
              />
            </div>
          </div>

          <div>
            <label htmlFor="quote-budget" className="block text-sm font-medium text-charcoal mb-2">Estimated budget</label>
            <input
              id="quote-budget"
              type="text"
              placeholder="e.g. monthly budget range"
              value={fields.budget}
              onChange={(e) => update('budget', e.target.value)}
              className={`${inputClass} border-soft-beige`}
            />
          </div>

          <div>
            <label htmlFor="quote-requirements" className="block text-sm font-medium text-charcoal mb-2">Additional requirements</label>
            <textarea
              id="quote-requirements"
              rows={5}
              maxLength={2000}
              placeholder="Tools you use, time zone, start date, or anything else we should know."
              value={fields.requirements}
              onChange={(e) => update('requirements', e.target.value)}
              aria-invalid={!!errors.requirements}
              aria-describedby={describedBy('requirements')}
              className={`${inputClass} ${borderFor('requirements')} resize-none`}
            />
            {fieldError('requirements')}
          </div>

          <div>
            <label className="flex items-start gap-3 text-sm text-charcoal/80 cursor-pointer">
              <input
                id="quote-consent"
                type="checkbox"
                checked={fields.consent}
                onChange={(e) => update('consent', e.target.checked)}
                aria-invalid={!!errors.consent}
                aria-describedby={describedBy('consent')}
                className="mt-1 w-4 h-4 accent-coral-pink"
              />
              <span>
                I agree that AUREVANT may use these details only to prepare and send my quote. My information
                will not be shared or sold. *
              </span>
            </label>
            {fieldError('consent')}
          </div>

          {status === 'error' && (
            <p role="alert" className="p-4 bg-coral-pink/10 border border-coral-pink text-charcoal text-sm">
              Sorry, your request could not be sent. Please try again, or email us at{' '}
              <a href={`mailto:${contactEmail}`} className="font-semibold text-coral-pink underline">
                {contactEmail}
              </a>
              .
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="btn-premium flex-1 bg-coral-pink text-white px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-charcoal transition-colors disabled:opacity-60 disabled:cursor-wait"
            >
              {status === 'submitting' ? 'Sending…' : 'Submit Quote Request'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-8 py-4 text-sm font-semibold tracking-widest uppercase border border-charcoal text-charcoal hover:bg-charcoal hover:text-warm-ivory transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
