export type ServiceIcon = 'assistant' | 'design' | 'web' | 'social' | 'digital';

export type Service = {
  id: string;
  number: string;
  title: string;
  icon: ServiceIcon;
  tagline: string;
  summary: string;
  description: string;
  features: string[];
};

export const services: Service[] = [
  {
    id: 'virtual-assistance',
    number: '01',
    title: 'Virtual Assistance',
    icon: 'assistant',
    tagline: 'Administration, customer care & operations',
    summary:
      'Dedicated assistants for executive administration, customer support, appointment setting, lead generation, CRM upkeep, and roofing & home services back-office work.',
    description:
      'A dedicated assistant who learns your business and handles the daily operations that keep it running: inboxes, calendars, customer communication, appointments, prospect research, and CRM records. We also offer specialized back-office support for roofing and home services companies, from estimates and job files to crew scheduling.',
    features: [
      'Executive inbox, calendar, and travel management',
      'Customer support and appointment setting',
      'Lead generation and prospect research',
      'CRM updates, data cleanup, and reporting',
      'Roofing & home services back-office support',
      'Document preparation, data entry, and research',
    ],
  },
  {
    id: 'graphic-design',
    number: '02',
    title: 'Graphic Design',
    icon: 'design',
    tagline: 'Brand-consistent visuals for every channel',
    summary:
      'Polished, on-brand graphics for social media, marketing campaigns, presentations, and print, designed to make your business look as professional as it is.',
    description:
      'Consistent, high-quality visuals build trust. We design social media graphics, marketing collateral, presentations, and brand assets that follow your brand guidelines, or help you define them if you are just getting started.',
    features: [
      'Social media graphics and templates',
      'Marketing collateral, flyers, and brochures',
      'Pitch decks and presentation design',
      'Brand kits, color palettes, and style guides',
      'Print-ready and digital ad creatives',
    ],
  },
  {
    id: 'web-development',
    number: '03',
    title: 'Web Development',
    icon: 'web',
    tagline: 'Fast, responsive, conversion-focused websites',
    summary:
      'Modern, mobile-first websites and landing pages built for speed, search visibility, and turning visitors into enquiries, plus ongoing updates and maintenance.',
    description:
      'Your website is often the first impression of your business. We design and build responsive websites and landing pages with clean code, strong technical SEO foundations, and clear calls to action, then keep them current with ongoing updates and maintenance.',
    features: [
      'Responsive website design and development',
      'Landing pages for campaigns and lead capture',
      'Technical SEO foundations and page speed',
      'Contact, booking, and quote form integration',
      'Website updates, content, and maintenance',
    ],
  },
  {
    id: 'social-media-management',
    number: '04',
    title: 'Social Media Management',
    icon: 'social',
    tagline: 'Consistent content and engaged communities',
    summary:
      'Content calendars, captions, scheduling, and community engagement that keep your brand visible and consistent across the platforms your customers use.',
    description:
      'Showing up consistently is what builds an audience. We plan content calendars, write captions, design and schedule posts, and respond to comments and messages, so your social presence stays active and on-brand without taking over your week.',
    features: [
      'Content strategy and monthly calendars',
      'Caption writing and post design',
      'Scheduling across major platforms',
      'Comment, message, and community management',
      'Monthly performance summaries',
    ],
  },
  {
    id: 'digital-solutions',
    number: '05',
    title: 'Digital Solutions',
    icon: 'digital',
    tagline: 'Systems, automation & digital operations',
    summary:
      'CRM setup, workflow automation, email marketing, and online listings that connect your tools and remove repetitive manual work.',
    description:
      'The right systems save hours every week. We set up and organize CRMs, connect your tools with automations, prepare email campaigns, and keep your online listings and profiles accurate, so your digital operations run smoothly in the background.',
    features: [
      'CRM setup, pipelines, and workflow automation',
      'Tool integrations with Zapier and native connectors',
      'Email newsletters and campaign preparation',
      'Online listings and business profile management',
      'Process documentation and SOPs',
    ],
  },
];

export const contactEmail = 'ivydachaibaligya@gmail.com';
export const linkedInUrl = 'https://linkedin.com/in/ivy-embone-1a6445323';
