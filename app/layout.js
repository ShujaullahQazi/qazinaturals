import './globals.css';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { CartProvider } from '@/components/CartContext';
import SiteChrome from '@/components/SiteChrome';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Qazi Naturals | Peesi Hui Khalis Haldi Pakistan',
    template: '%s | Qazi Naturals',
  },
  description:
    'Peesi hui khalis haldi - 100% pure turmeric powder, bina milawat ke, seedha khet se aapke ghar tak. High curcumin. WhatsApp order. Delivery all over Pakistan.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'Qazi Naturals | Peesi Hui Khalis Haldi Pakistan',
    description:
      '100% pure turmeric powder, farm fresh, high curcumin. No added colors. Order via WhatsApp. Delivery across Pakistan.',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Qazi Naturals peesi hui khalis haldi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Qazi Naturals | Khalis Haldi',
    description: 'Peesi hui khalis haldi - 100% pure, farm fresh. Order via WhatsApp.',
    images: ['/og-image.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'uySzHjVqinflUnFJy3rOfEI59QTkUyRHzft5s4qFt_E',
  },
};

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/og-image.webp`,
  sameAs: [
    'https://instagram.com/qazinaturals',
    'https://facebook.com/qazinaturals',
    'https://tiktok.com/@qazinaturals',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+923095942096',
    contactType: 'customer service',
    areaServed: 'PK',
    availableLanguage: ['en', 'ur'],
  },
};

const businessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE_NAME,
  description:
    'Premium peesi hui khalis haldi (pure turmeric powder) delivered across Pakistan. No adulteration, high curcumin.',
  url: SITE_URL,
  telephone: '+923095942096',
  image: `${SITE_URL}/og-image.webp`,
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'PK',
    addressRegion: 'Punjab',
  },
  areaServed: [
    { '@type': 'City', name: 'Lahore' },
    { '@type': 'City', name: 'Karachi' },
    { '@type': 'City', name: 'Islamabad' },
    { '@type': 'City', name: 'Rawalpindi' },
    { '@type': 'Country', name: 'Pakistan' },
  ],
  priceRange: 'PKR 150 - 1200',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-PK">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
      </head>
      <body>
        <CartProvider>
          <SiteChrome>{children}</SiteChrome>
        </CartProvider>
      </body>
    </html>
  );
}
