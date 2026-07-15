import Image from 'next/image';
import styles from './PurityProof.module.css';

const steps = [
  { num: '01', label: 'Raw bulbs', desc: 'Taza haldi khet se' },
  { num: '02', label: 'Boiling', desc: 'Ek ghanta ubalna' },
  { num: '03', label: 'Sun drying', desc: '7-10 din dhoop mein' },
  { num: '04', label: 'Fresh grinding', desc: 'Taaza peesai' },
];

const photos = [
  { src: '/purity/raw-turmeric.webp', label: 'Kacchi haldi - raw turmeric' },
  { src: '/purity/grinding-process.webp', label: 'Peesne ka tariqa - grinding' },
  { src: '/purity/final-product.webp', label: 'Tayaar haldi - final powder' },
];

export default function PurityProof() {
  return (
    <section className={`section ${styles.section}`} id="purity">
      <div className="section-inner">
        <p className={`${styles.kicker} section-kicker`}>Hamari kahani</p>
        <h2 className={styles.title}>Khet se peesai tak, bilkul khalis</h2>
        <p className={styles.lead}>
          Humari process transparent hai. Dekhiye kaise peesi hui khalis haldi aapke kitchen tak pohanchti hai.
        </p>

        <ol className={styles.steps}>
          {steps.map((step) => (
            <li key={step.num}>
              <span className={styles.num}>{step.num}</span>
              <strong>{step.label}</strong>
              <span>{step.desc}</span>
            </li>
          ))}
        </ol>

        <ul className={styles.checks}>
          <li>No lead chromate</li>
          <li>No flour fillers</li>
          <li>No artificial color</li>
          <li>High curcumin</li>
        </ul>

        <div className={styles.photos}>
          {photos.map((photo) => (
            <figure key={photo.src} className={styles.photo}>
              <Image
                src={photo.src}
                alt={photo.label}
                fill
                sizes="(max-width: 800px) 100vw, 33vw"
                className={styles.img}
              />
              <figcaption>{photo.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
