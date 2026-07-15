import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="hero" aria-label="Qazi Naturals hero">
      <div className={styles.media}>
        <Image
          src="/purity/final-product.webp"
          alt="Freshly ground Qazi Naturals khalis haldi powder"
          fill
          priority
          sizes="100vw"
          className={styles.image}
        />
        <div className={styles.shade} />
      </div>

      <div className={styles.content}>
        <p className={`${styles.brand} reveal`}>Qazi Naturals</p>
        <h1 className={`${styles.title} reveal-delay`}>
          Peesi hui
          <span>khalis haldi</span>
        </h1>
        <p className={`${styles.lead} reveal-delay`}>
          Freshly ground pure turmeric from farm to kitchen. No milawat, no artificial color.
          Seedha khet se aapke ghar tak.
        </p>
        <div className={`${styles.actions} reveal-delay`}>
          <Link href="/#products" className="btn btn-primary">
            Shop packs
          </Link>
          <Link href="/khalis-haldi" className={styles.ghost}>
            Why it is khalis
          </Link>
        </div>
      </div>
    </section>
  );
}
