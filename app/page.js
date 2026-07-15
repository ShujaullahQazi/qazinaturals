import Hero from '@/components/Hero';
import Products from '@/components/Products';
import PurityProof from '@/components/PurityProof';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import Faq from '@/components/Faq';
import Contact from '@/components/Contact';
import { PRODUCTS, SITE_URL } from '@/lib/constants';

const productListLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Qazi Naturals Haldi Products',
  itemListElement: PRODUCTS.map((product, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Product',
      name: `${product.name} - Khalis Haldi ${product.weight}`,
      description: product.description,
      image: `${SITE_URL}${product.image}`,
      brand: { '@type': 'Brand', name: 'Qazi Naturals' },
      offers: {
        '@type': 'Offer',
        price: String(product.price),
        priceCurrency: 'PKR',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/#products`,
      },
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productListLd) }}
      />
      <Hero />
      <Products />
      <PurityProof />
      <Benefits />
      <Testimonials />
      <Faq compact />
      <Contact />
    </>
  );
}
