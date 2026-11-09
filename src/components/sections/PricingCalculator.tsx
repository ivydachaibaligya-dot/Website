'use client';

import { useMemo, useRef, useState } from 'react';
import { pricingConfig } from '@/config/pricing';
import { calculateEstimate, formatCurrency, formatHours, type BillingType } from '@/lib/pricing';
import QuoteRequestForm from '@/components/sections/QuoteRequestForm';

const { schedule } = pricingConfig;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function StepHeading({ step, title, description }: { step: string; title: string; description: string }) {
  return (
    <div className="mb-6">
      <div className="text-sm font-medium tracking-widest uppercase text-coral-pink mb-2">Step {step}</div>
      <h3 className="text-2xl font-semibold text-charcoal mb-2">{title}</h3>
      <p className="text-charcoal/70">{description}</p>
    </div>
  );
}

type PricingCalculatorProps = {
  headingLevel?: 'h1' | 'h2';
};

export default function PricingCalculator({ headingLevel = 'h2' }: PricingCalculatorProps) {
  const Heading = headingLevel;
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [hoursPerDay, setHoursPerDay] = useState<number>(schedule.defaultHoursPerDay);
  const [hoursInput, setHoursInput] = useState<string>(String(schedule.defaultHoursPerDay));
  const [daysPerWeek, setDaysPerWeek] = useState<number>(schedule.defaultDaysPerWeek);
  const [billing, setBilling] = useState<BillingType>('monthly');
  const [showQuote, setShowQuote] = useState(false);
  const quoteRef = useRef<HTMLDivElement>(null);

  const estimate = useMemo(
    () => calculateEstimate({ serviceIds: selectedIds, hoursPerDay, daysPerWeek, billing }),
    [selectedIds, hoursPerDay, daysPerWeek, billing],
  );

  const toggleService = (id: string) => {
    setSelectedIds((current) => (current.includes(id) ? current.filter((s) => s !== id) : [...current, id]));
  };

  const updateHours = (value: number) => {
    const next = clamp(Math.round(value / schedule.hoursStep) * schedule.hoursStep, schedule.minHoursPerDay, schedule.maxHoursPerDay);
    setHoursPerDay(next);
    setHoursInput(String(next));
  };

  const onHoursInputChange = (raw: string) => {
    setHoursInput(raw);
    const parsed = parseFloat(raw);
    if (!Number.isNaN(parsed) && parsed >= schedule.minHoursPerDay && parsed <= schedule.maxHoursPerDay) {
      setHoursPerDay(parsed);
    }
  };

  const openQuote = () => {
    setShowQuote(true);
    requestAnimationFrame(() => quoteRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  };

  const days = Array.from(
    { length: schedule.maxDaysPerWeek - schedule.minDaysPerWeek + 1 },
    (_, i) => schedule.minDaysPerWeek + i,
  );

  const rateText =
    estimate.rate !== null ? `${formatCurrency(estimate.rate)} / hr` : 'Available on request';
  const costText = (amount: number | null) => (amount !== null ? formatCurrency(amount) : 'Available on request');

  return (
    <section id="pricing" className="py-24 lg:py-32 bg-soft-beige/30 section-transition">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <div className="inline-block mb-6">
            <span className="text-sm font-medium tracking-widest uppercase text-coral-pink">
              Pricing &amp; Custom Quote
            </span>
          </div>
          <Heading className="text-4xl md:text-5xl text-charcoal mb-6 leading-tight">
            Build Your Own
            <span className="block text-coral-pink">Support Plan</span>
          </Heading>
          <p className="text-xl text-charcoal/70 max-w-3xl">
            Customize your virtual support package based on your business needs, preferred working
            hours, and selected services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Steps 1-3 */}
          <div className="lg:col-span-3 space-y-8">
            {/* Step 1 */}
            <fieldset className="bg-warm-ivory p-6 md:p-10 shadow-sm border border-soft-beige/30">
              <legend className="sr-only">Select services</legend>
              <StepHeading step="01" title="Select Services" description="Choose one or more services for your support plan." />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pricingConfig.services.map((service) => {
                  const selected = selectedIds.includes(service.id);
                  return (
                    <label
                      key={service.id}
                      className={`flex items-start gap-3 p-4 border cursor-pointer transition-colors ${
                        selected
                          ? 'border-coral-pink bg-coral-pink/10'
                          : 'border-soft-beige bg-white hover:border-coral-pink/60'
                      }`}
                    >
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={selected}
                        onChange={() => toggleService(service.id)}
                      />
                      <span
                        aria-hidden="true"
                        className={`w-5 h-5 mt-0.5 flex-shrink-0 rounded-sm border flex items-center justify-center peer-focus-visible:ring-2 peer-focus-visible:ring-coral-pink ${
                          selected ? 'bg-coral-pink border-coral-pink text-white' : 'border-soft-beige bg-white'
                        }`}
                      >
                        {selected && (
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </span>
                      <span>
                        <span className="block font-semibold text-charcoal">{service.name}</span>
                        <span className="block text-sm text-charcoal/60 mt-0.5">{service.description}</span>
                      </span>
                    </label>
                  );
                })}
              </div>
            </fieldset>

            {/* Step 2 */}
            <fieldset className="bg-warm-ivory p-6 md:p-10 shadow-sm border border-soft-beige/30">
              <legend className="sr-only">Working schedule</legend>
              <StepHeading step="02" title="Working Schedule" description="Tell us how many hours of support you need." />

              <div className="space-y-8">
                <div>
                  <label htmlFor="hours-per-day" className="block text-sm font-medium text-charcoal mb-3">
                    Hours per day
                  </label>
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-stretch border border-soft-beige bg-white">
                      <button
                        type="button"
                        onClick={() => updateHours(hoursPerDay - schedule.hoursStep)}
                        disabled={hoursPerDay <= schedule.minHoursPerDay}
                        className="px-4 text-xl text-charcoal hover:text-coral-pink disabled:opacity-30"
                        aria-label="Decrease hours per day"
                      >
                        &minus;
                      </button>
                      <input
                        id="hours-per-day"
                        type="number"
                        inputMode="decimal"
                        min={schedule.minHoursPerDay}
                        max={schedule.maxHoursPerDay}
                        step={schedule.hoursStep}
                        value={hoursInput}
                        onChange={(e) => onHoursInputChange(e.target.value)}
                        onBlur={() => updateHours(parseFloat(hoursInput) || schedule.minHoursPerDay)}
                        className="w-20 text-center py-3 text-lg font-semibold text-charcoal bg-white focus:outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                      />
                      <button
                        type="button"
                        onClick={() => updateHours(hoursPerDay + schedule.hoursStep)}
                        disabled={hoursPerDay >= schedule.maxHoursPerDay}
                        className="px-4 text-xl text-charcoal hover:text-coral-pink disabled:opacity-30"
                        aria-label="Increase hours per day"
                      >
                        +
                      </button>
                    </div>
                    {schedule.hourPresets.map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => updateHours(preset)}
                        aria-pressed={hoursPerDay === preset}
                        className={`px-4 py-3 text-sm font-medium border transition-colors ${
                          hoursPerDay === preset
                            ? 'bg-coral-pink border-coral-pink text-white'
                            : 'border-soft-beige bg-white text-charcoal hover:border-coral-pink'
                        }`}
                      >
                        {preset} hrs
                      </button>
                    ))}
                  </div>
                  <p className="text-sm text-charcoal/60 mt-2">
                    Between {schedule.minHoursPerDay} and {schedule.maxHoursPerDay} hours, in {schedule.hoursStep}-hour steps.
                  </p>
                </div>

                <div>
                  <div id="days-label" className="block text-sm font-medium text-charcoal mb-3">
                    Days per week
                  </div>
                  <div role="radiogroup" aria-labelledby="days-label" className="grid grid-cols-7 gap-2 max-w-md">
                    {days.map((day) => (
                      <button
                        key={day}
                        type="button"
                        role="radio"
                        aria-checked={daysPerWeek === day}
                        onClick={() => setDaysPerWeek(day)}
                        className={`py-3 text-base font-semibold border transition-colors ${
                          daysPerWeek === day
                            ? 'bg-coral-pink border-coral-pink text-white'
                            : 'border-soft-beige bg-white text-charcoal hover:border-coral-pink'
                        }`}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 border-t border-soft-beige pt-6">
                  <div>
                    <div className="text-sm text-charcoal/60">Total weekly hours</div>
                    <div className="text-2xl font-bold text-charcoal" data-testid="weekly-hours">
                      {formatHours(estimate.weeklyHours)}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-charcoal/60">Estimated monthly hours</div>
                    <div className="text-2xl font-bold text-charcoal" data-testid="monthly-hours">
                      {formatHours(estimate.monthlyHours)}
                    </div>
                    <div className="text-xs text-charcoal/50 mt-1">Based on {pricingConfig.weeksPerMonth} weeks per month</div>
                  </div>
                </div>
              </div>
            </fieldset>

            {/* Step 3 */}
            <fieldset className="bg-warm-ivory p-6 md:p-10 shadow-sm border border-soft-beige/30">
              <legend className="sr-only">Pricing options</legend>
              <StepHeading step="03" title="Pricing Options" description="Choose how you would prefer to be billed." />
              <div role="radiogroup" aria-label="Billing type" className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(
                  [
                    { value: 'hourly', title: 'Hourly Billing', text: 'Pay for the hours worked each week.' },
                    { value: 'monthly', title: 'Monthly Billing', text: 'A predictable monthly package.' },
                  ] as const
                ).map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    role="radio"
                    aria-checked={billing === option.value}
                    onClick={() => setBilling(option.value)}
                    className={`text-left p-5 border transition-colors ${
                      billing === option.value
                        ? 'border-coral-pink bg-coral-pink/10'
                        : 'border-soft-beige bg-white hover:border-coral-pink/60'
                    }`}
                  >
                    <span className="block font-semibold text-charcoal">{option.title}</span>
                    <span className="block text-sm text-charcoal/60 mt-1">{option.text}</span>
                  </button>
                ))}
              </div>
            </fieldset>
          </div>

          {/* Step 4 - Summary */}
          <aside className="lg:col-span-2 lg:sticky lg:top-28" aria-live="polite">
            <div className="bg-charcoal text-warm-ivory p-6 md:p-10 shadow-xl">
              <div className="text-sm font-medium tracking-widest uppercase text-coral-pink mb-2">Step 04</div>
              <h3 className="text-2xl font-semibold text-warm-ivory mb-6">Your Estimate</h3>

              <div className="mb-6">
                <div className="text-sm text-warm-ivory/60 mb-2">Selected services</div>
                {estimate.services.length > 0 ? (
                  <ul className="flex flex-wrap gap-2" data-testid="selected-services">
                    {estimate.services.map((service) => (
                      <li key={service.id} className="px-3 py-1 text-sm bg-coral-pink/20 text-warm-ivory">
                        {service.name}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-warm-ivory/80">Select at least one service to begin.</p>
                )}
              </div>

              <dl className="space-y-3 border-t border-soft-beige/20 pt-6 text-sm">
                {[
                  ['Billing', billing === 'hourly' ? 'Hourly billing' : 'Monthly billing'],
                  ['Hours per day', formatHours(hoursPerDay)],
                  ['Days per week', String(daysPerWeek)],
                  ['Total weekly hours', formatHours(estimate.weeklyHours)],
                  ['Estimated monthly hours', formatHours(estimate.monthlyHours)],
                  [estimate.rateLabel, estimate.services.length ? rateText : '—'],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between gap-4">
                    <dt className="text-warm-ivory/60">{label}</dt>
                    <dd className="font-semibold text-right">{value}</dd>
                  </div>
                ))}
              </dl>

              <div className="border-t border-soft-beige/20 mt-6 pt-6 space-y-4">
                <div className="flex justify-between items-baseline gap-4">
                  <span className="text-warm-ivory/60 text-sm">Estimated weekly cost</span>
                  <span className="text-xl font-semibold text-right" data-testid="weekly-cost">
                    {estimate.services.length ? costText(estimate.weeklyCost) : '—'}
                  </span>
                </div>
                <div className="flex justify-between items-baseline gap-4">
                  <span className="text-warm-ivory/60 text-sm">
                    {billing === 'hourly' ? 'Estimated monthly cost (hourly)' : 'Estimated monthly package'}
                  </span>
                  <span className="text-2xl font-bold text-coral-pink text-right" data-testid="monthly-cost">
                    {estimate.services.length ? costText(estimate.monthlyCost) : '—'}
                  </span>
                </div>
              </div>

              {estimate.servicesWithoutRate.length > 0 && (
                <p className="mt-4 text-sm text-warm-ivory/70">
                  Rates for {estimate.servicesWithoutRate.map((s) => s.name).join(', ')} are confirmed during
                  your consultation. Request a custom quote for exact pricing.
                </p>
              )}

              <p className="mt-6 text-xs text-warm-ivory/50 leading-relaxed">
                All amounts are estimates only and are not a guaranteed final quotation. Final pricing is
                confirmed in your custom proposal.
              </p>

              <button
                type="button"
                onClick={openQuote}
                disabled={estimate.services.length === 0}
                className="btn-premium mt-6 w-full bg-coral-pink text-white px-6 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-warm-ivory hover:text-charcoal transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-coral-pink disabled:hover:text-white"
              >
                Request My Custom Quote
              </button>
            </div>
          </aside>
        </div>

        {showQuote && (
          <div ref={quoteRef} className="mt-16 scroll-mt-28">
            <QuoteRequestForm
              estimate={estimate}
              hoursPerDay={hoursPerDay}
              daysPerWeek={daysPerWeek}
              billing={billing}
              onClose={() => setShowQuote(false)}
            />
          </div>
        )}
      </div>
    </section>
  );
}
