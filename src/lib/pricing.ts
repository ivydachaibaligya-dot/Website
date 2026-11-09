import { pricingConfig, type BlendedRateMethod, type PricedService } from '@/config/pricing';

export type BillingType = 'hourly' | 'monthly';

export type EstimateInput = {
  serviceIds: string[];
  hoursPerDay: number;
  daysPerWeek: number;
  billing: BillingType;
};

export type Estimate = {
  services: PricedService[];
  weeklyHours: number;
  monthlyHours: number;
  /** null when no service is selected or any selected service has no configured rate */
  rate: number | null;
  rateLabel: 'Hourly rate' | 'Blended rate';
  servicesWithoutRate: PricedService[];
  weeklyCost: number | null;
  monthlyCost: number | null;
};

export function blendRates(rates: number[], method: BlendedRateMethod): number {
  if (method === 'highest') return Math.max(...rates);
  return rates.reduce((sum, rate) => sum + rate, 0) / rates.length;
}

export function calculateEstimate(
  { serviceIds, hoursPerDay, daysPerWeek, billing }: EstimateInput,
  config = pricingConfig,
): Estimate {
  const services: PricedService[] = config.services.filter((service) => serviceIds.includes(service.id));
  const weeklyHours = hoursPerDay * daysPerWeek;
  const monthlyHours = weeklyHours * config.weeksPerMonth;
  const servicesWithoutRate = services.filter((service) => service.hourlyRate === null);

  let rate: number | null = null;
  if (services.length > 0 && servicesWithoutRate.length === 0) {
    rate = blendRates(
      services.map((service) => service.hourlyRate as number),
      config.blendedRateMethod,
    );
    if (billing === 'monthly') {
      rate *= 1 - config.monthlyPackageDiscountPercent / 100;
    }
  }

  return {
    services,
    weeklyHours,
    monthlyHours,
    rate,
    rateLabel: services.length > 1 ? 'Blended rate' : 'Hourly rate',
    servicesWithoutRate,
    weeklyCost: rate === null ? null : weeklyHours * rate,
    monthlyCost: rate === null ? null : monthlyHours * rate,
  };
}

/** Rounds to 2 decimals, half up, avoiding binary float errors (97.425 -> 97.43). */
export function roundTo2(value: number): number {
  return Math.round(Number((value * 100).toPrecision(12))) / 100;
}

export function formatCurrency(amount: number, config = pricingConfig): string {
  return new Intl.NumberFormat(config.locale, {
    style: 'currency',
    currency: config.currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(roundTo2(amount));
}

export function formatHours(hours: number): string {
  return `${roundTo2(hours).toLocaleString('en-US')} hrs`;
}
