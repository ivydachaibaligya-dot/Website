/**
 * Site-wide SEO settings. Update `url` when the custom domain is connected;
 * canonical URLs, the sitemap, robots.txt and structured data all use it.
 */
export const siteConfig = {
  name: 'AUREVANT',
  descriptor: 'Global Business Support',
  tagline: 'Your Business. Our Commitment.',
  url: 'https://cool-sundae-1d5d6e.netlify.app',
  locale: 'en_US',
  description:
    'AUREVANT is a premium virtual assistant and creative digital agency for US businesses, offering virtual assistance, graphic design, web development, social media management, and digital solutions.',
  keywords: [
    'AUREVANT',
    'virtual assistant agency',
    'virtual assistant services for US businesses',
    'executive virtual assistant',
    'graphic design services',
    'web development agency',
    'website design for small business',
    'social media management services',
    'digital solutions agency',
    'CRM management',
    'lead generation virtual assistant',
    'appointment setting services',
    'roofing virtual assistant',
    'global business support',
  ],
};

export function absoluteUrl(path = '/') {
  return new URL(path, siteConfig.url).toString();
}
