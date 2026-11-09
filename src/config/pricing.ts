/**
 * AUREVANT pricing configuration.
 *
 * This is the single place to manage calculator rates. To publish prices,
 * set `hourlyRate` for each service (in `currency`, per hour). A service with
 * `hourlyRate: null` is shown as "Available on request" and no estimate is
 * displayed while it is selected.
 */

export type BlendedRateMethod = 'average' | 'highest';

export type PricedService = {
  id: string;
  name: string;
  description: string;
  hourlyRate: number | null;
};

export const pricingConfig = {
  currency: 'USD',
  locale: 'en-US',
  weeksPerMonth: 4.33,
  /** How to combine rates when several services are selected. */
  blendedRateMethod: 'average' as BlendedRateMethod,
  /** Optional discount applied to monthly billing (0 = same as hourly). */
  monthlyPackageDiscountPercent: 0,
  schedule: {
    minHoursPerDay: 1,
    maxHoursPerDay: 12,
    hoursStep: 0.5,
    defaultHoursPerDay: 4,
    hourPresets: [2, 4, 6, 8],
    minDaysPerWeek: 1,
    maxDaysPerWeek: 7,
    defaultDaysPerWeek: 5,
  },
  services: [
    {
      id: 'administrative-support',
      name: 'Administrative Support',
      description: 'Inbox, data entry, documents, and daily admin.',
      hourlyRate: null,
    },
    {
      id: 'executive-assistance',
      name: 'Executive Assistance',
      description: 'Calendar, travel, and leadership support.',
      hourlyRate: null,
    },
    {
      id: 'lead-generation',
      name: 'Lead Generation',
      description: 'Prospect research, lists, and outreach support.',
      hourlyRate: null,
    },
    {
      id: 'crm-management',
      name: 'CRM Management',
      description: 'Pipeline updates, data hygiene, and reporting.',
      hourlyRate: null,
    },
    {
      id: 'customer-support',
      name: 'Customer Support',
      description: 'Email, chat, and inquiry management.',
      hourlyRate: null,
    },
    {
      id: 'appointment-setting',
      name: 'Appointment Setting',
      description: 'Booking, confirmations, and reminders.',
      hourlyRate: null,
    },
    {
      id: 'roofing-home-services-va',
      name: 'Roofing & Home Services VA',
      description: 'Estimates, job files, and crew scheduling.',
      hourlyRate: null,
    },
    {
      id: 'graphic-design',
      name: 'Graphic Design',
      description: 'Branded graphics and marketing materials.',
      hourlyRate: null,
    },
    {
      id: 'social-media-management',
      name: 'Social Media Management',
      description: 'Content scheduling and community engagement.',
      hourlyRate: null,
    },
    {
      id: 'website-management',
      name: 'Website Management',
      description: 'Content updates and routine site maintenance.',
      hourlyRate: null,
    },
  ] satisfies PricedService[],
  /**
   * Where quote requests are sent. The default posts to Netlify Forms using
   * the static form definition in `public/__forms.html`.
   */
  quoteRequest: {
    endpoint: '/__forms.html',
    formName: 'quote-request',
  },
};
