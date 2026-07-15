import Link from 'next/link';
import styles from '../content.module.css';

export const metadata = {
  title: 'Haldi Doodh Recipe | Golden Milk with Khalis Haldi',
  description:
    'Haldi doodh banana seekhein Qazi Naturals peesi hui khalis haldi ke sath. Simple golden milk recipe for night routine in Pakistan.',
  alternates: { canonical: '/haldi-doodh' },
  openGraph: {
    title: 'Haldi Doodh Recipe | Qazi Naturals',
    description: 'Easy golden milk with pure turmeric powder. Night routine for Pakistani kitchens.',
    url: '/haldi-doodh',
  },
};

const howToLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Haldi Doodh (Golden Milk) with Qazi Naturals Khalis Haldi',
  description: 'Simple warm turmeric milk using freshly ground pure turmeric powder.',
  totalTime: 'PT10M',
  supply: [
    { '@type': 'HowToSupply', name: '1 cup milk' },
    { '@type': 'HowToSupply', name: '1/4 tsp Qazi Naturals peesi hui khalis haldi' },
    { '@type': 'HowToSupply', name: 'Optional honey or pinch of black pepper' },
  ],
  step: [
    {
      '@type': 'HowToStep',
      name: 'Warm the milk',
      text: 'Ek cup doodh halka garam karein. Ubalna zaroori nahi.',
    },
    {
      '@type': 'HowToStep',
      name: 'Add turmeric',
      text: '1/4 teaspoon peesi hui khalis haldi mix karein taake lumps na banain.',
    },
    {
      '@type': 'HowToStep',
      name: 'Finish',
      text: 'Optional honey aur thodi si kali mirch add karein. Warm serve karein.',
    },
  ],
};

export default function HaldiDoodhPage() {
  return (
    <article className={styles.article}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToLd) }}
      />
      <div className={styles.hero}>
        <p className={styles.kicker}>Recipe</p>
        <h1>Haldi doodh with peesi hui khalis haldi</h1>
        <p className={styles.lead}>
          Raat ka simple nuskha. Market wali artificial colored powder ki jagah fresh ground
          turmeric use karein. taste aur aroma dono clear farq dikhate hain.
        </p>
      </div>

      <div className={styles.body}>
        <h2>Ingredients</h2>
        <ul>
          <li>1 cup doodh (dairy ya plant milk)</li>
          <li>1/4 teaspoon Qazi Naturals peesi hui khalis haldi</li>
          <li>Optional: shahad, thodi kali mirch, ya ginger</li>
        </ul>

        <h2>Method</h2>
        <ol className={styles.steps}>
          <li>Doodh ko halka warm karein.</li>
          <li>Haldi add karke achhe se mix karein.</li>
          <li>Taste ke hisaab se honey ya mirch add karein.</li>
          <li>Turant warm piyein.</li>
        </ol>

        <h2>Kyun peesi hui haldi better hai</h2>
        <p>
          Fresh grind ka mean aroma strong rehta hai. Artificial color wali powder doodh ko unnatural
          neon bana deti hai. khalis haldi natural golden tone deti hai.
        </p>

        <div className={styles.ctaRow}>
          <Link href="/#products" className="btn btn-primary">
            Get sample pack
          </Link>
          <Link href="/khalis-haldi" className="btn btn-dark">
            Learn about purity
          </Link>
        </div>
      </div>
    </article>
  );
}
