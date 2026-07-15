import { SITE_URL } from '@/lib/constants';

export default function sitemap() {
  const now = new Date();
  const routes = ['', '/khalis-haldi', '/haldi-doodh', '/faq'];

  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.8,
  }));
}
