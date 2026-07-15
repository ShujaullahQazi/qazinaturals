import { FAQS } from '@/lib/constants';
import styles from './Faq.module.css';

export default function Faq({ compact = false }) {
  const items = compact ? FAQS.slice(0, 3) : FAQS;

  return (
    <section className={`section ${styles.section}`} id="faq">
      <div className="section-inner">
        <p className="section-kicker">Sawalat</p>
        <h2 className="section-title">Aksar pooche jane wale sawal</h2>
        <p className="section-lead">
          Pure turmeric, delivery, aur order process ke bare mein seedhe jawab.
        </p>
        <div className={styles.list}>
          {items.map((item) => (
            <details key={item.q} className={styles.item}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
