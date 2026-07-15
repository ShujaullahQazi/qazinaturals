import Link from 'next/link';
import { EMAIL, WHATSAPP_BASE_URL } from '@/lib/constants';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <p className={styles.logo}>
            Qazi <span>Naturals</span>
          </p>
          <p>
            Peesi hui khalis haldi - bina milawat ke, seedha khet se aapke ghar tak. Delivery across
            Pakistan.
          </p>
        </div>

        <div className={styles.col}>
          <h4>Explore</h4>
          <Link href="/">Home</Link>
          <Link href="/#products">Shop</Link>
          <Link href="/khalis-haldi">Khalis Haldi</Link>
          <Link href="/haldi-doodh">Haldi Doodh</Link>
          <Link href="/faq">FAQ</Link>
        </div>

        <div className={styles.col}>
          <h4>Contact</h4>
          <a href={WHATSAPP_BASE_URL} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          <a href="https://instagram.com/qazinaturals" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href={`mailto:${EMAIL}`}>Email</a>
        </div>
      </div>
      <p className={styles.copy}>
        © {new Date().getFullYear()} Qazi Naturals. Khalis Haldi, Khalis Bharosa.
      </p>
    </footer>
  );
}
