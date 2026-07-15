import Faq from '@/components/Faq';
import { FAQS, SITE_URL } from '@/lib/constants';
import styles from '../content.module.css';

export const metadata = {
  title: 'FAQ | Khalis Haldi Order, Delivery, Purity',
  description:
    'Qazi Naturals FAQ: milawat, delivery time Pakistan, WhatsApp order process, aur peesi hui khalis haldi ke bare mein sawalat.',
  alternates: { canonical: '/faq' },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  })),
};

export default function FaqPage() {
  return (
    <div className={styles.pagePad}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <Faq />
      <p className={styles.note}>
        More detail chahiye? WhatsApp pe poochhein ya{' '}
        <a href={`${SITE_URL}/khalis-haldi`}>khalis haldi guide</a> parhein.
      </p>
    </div>
  );
}
