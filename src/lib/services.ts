export type Service = {
  id: string;
  number: string;
  title: string;
  summary: string;
  description: string;
  features: string[];
};

export const services: Service[] = [
  {
    id: 'administrative-executive-support',
    number: '01',
    title: 'Administrative & Executive Support',
    summary:
      'Inbox, calendar, travel, and document management handled with the discretion and precision your leadership time deserves.',
    description:
      'Reclaim your day with a dedicated assistant who keeps your inbox, calendar, and paperwork in order. We manage the details behind the scenes so you and your leadership team can stay focused on decisions that move the business forward.',
    features: [
      'Inbox triage and email management',
      'Calendar, meeting, and travel coordination',
      'Document preparation, formatting, and filing',
      'Data entry, reporting, and record keeping',
      'Research and project coordination',
    ],
  },
  {
    id: 'roofing-home-services-support',
    number: '02',
    title: 'Roofing & Home Services Support',
    summary:
      'Specialized back-office support for roofing and home services companies, from estimates and job files to crew scheduling.',
    description:
      'Purpose-built support for roofing contractors and home services businesses. We understand the workflow from first inquiry to final invoice, and we keep your office running so your crews can stay on the job.',
    features: [
      'Inspection and estimate scheduling',
      'Estimate, proposal, and job file preparation',
      'Crew scheduling and job coordination',
      'Photo documentation and project records',
      'Homeowner status updates and follow-ups',
    ],
  },
  {
    id: 'lead-generation',
    number: '03',
    title: 'Lead Generation',
    summary:
      'Targeted prospect research, list building, and outreach support that keeps your pipeline full of qualified opportunities.',
    description:
      'Consistent growth starts with a healthy pipeline. We research, qualify, and organize prospects that fit your ideal customer profile, then support the outreach and follow-up that turns interest into conversations.',
    features: [
      'Ideal customer profile and prospect research',
      'Contact list building and data verification',
      'Outreach sequence support and follow-ups',
      'Lead qualification and handoff to your team',
      'Pipeline tracking and reporting',
    ],
  },
  {
    id: 'crm-management',
    number: '04',
    title: 'CRM Management',
    summary:
      'Clean, current, and well-structured CRM data, so every lead, deal, and customer record is accurate and actionable.',
    description:
      'Your CRM is only as valuable as the data inside it. We keep records accurate, pipelines up to date, and reporting reliable, giving you clear visibility into every lead, deal, and customer relationship.',
    features: [
      'Contact, deal, and pipeline updates',
      'Data cleanup, deduplication, and organization',
      'Task, reminder, and follow-up management',
      'Workflow and automation support',
      'Pipeline and activity reporting',
    ],
  },
  {
    id: 'customer-support-appointment-setting',
    number: '05',
    title: 'Customer Support & Appointment Setting',
    summary:
      'Warm, professional customer communication and appointment setting that represents your brand with care.',
    description:
      'Every interaction is a reflection of your brand. We respond to inquiries, confirm appointments, and follow up with customers promptly and professionally, so no opportunity or client slips through the cracks.',
    features: [
      'Email, chat, and inquiry management',
      'Appointment setting, confirmations, and reminders',
      'Customer follow-ups and status updates',
      'Help desk and ticket management',
      'Review and feedback request support',
    ],
  },
  {
    id: 'digital-website-support',
    number: '06',
    title: 'Digital & Website Support',
    summary:
      'Website updates, content publishing, and social media support that keep your digital presence polished and current.',
    description:
      'Keep your online presence as professional as your service. We handle routine website updates, content publishing, and social media coordination so your brand always looks current and credible.',
    features: [
      'Website content updates and maintenance',
      'Social media scheduling and coordination',
      'Branded graphics and content in Canva',
      'Online listings and profile management',
      'Email newsletter preparation',
    ],
  },
];

export const contactEmail = 'ivydachaibaligya@gmail.com';
export const linkedInUrl = 'https://linkedin.com/in/ivy-embone-1a6445323';
