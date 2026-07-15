import Link from 'next/link';
import styles from '../content.module.css';

export const metadata = {
  title: 'Peesi Hui Khalis Haldi | Pure Turmeric Powder Pakistan',
  description:
    'Qazi Naturals peesi hui khalis haldi kya hai, milawat kaise pehchanein, curcumin kyun matter karta hai, aur Pakistan mein pure turmeric powder kaise order karein.',
  alternates: { canonical: '/khalis-haldi' },
  openGraph: {
    title: 'Peesi Hui Khalis Haldi | Qazi Naturals',
    description:
      'Pure turmeric powder guide for Pakistan: purity signs, process, packs, and WhatsApp ordering.',
    url: '/khalis-haldi',
  },
};

export default function KhalisHaldiPage() {
  return (
    <article className={styles.article}>
      <div className={styles.hero}>
        <p className={styles.kicker}>Guide</p>
        <h1>Peesi hui khalis haldi: asal pure turmeric powder</h1>
        <p className={styles.lead}>
          Pakistan mein “khalis haldi” bohat brands likhte hain. Farq process, peesai, aur milawat
          se free rehna hai. Yeh page batata hai Qazi Naturals ki peesi hui haldi kyun alag hai.
        </p>
      </div>

      <div className={styles.body}>
        <h2>khalis haldi ka matlab</h2>
        <p>
          khalis haldi wo turmeric powder hai jisme artificial color, lead chromate, ya flour fillers
          nahi hote. Asli powder ki khushboo strong hoti hai, rang deep golden hota hai, aur pani
          mein unnatural neon shine nahi aati.
        </p>

        <h2>Hamari process</h2>
        <p>
          Raw bulbs khet se aate hain, boil hote hain, 7-10 din dhoop mein sukhte hain, phir fresh
          grind hote hain. Isi liye hum ise peesi hui khalis haldi kehte hain - peesai fresh, stash
          pe stale powder nahi.
        </p>

        <h2>Kis ke liye best hai</h2>
        <ul>
          <li>Rozana cooking aur salan ke rang ke liye</li>
          <li>Haldi doodh aur simple home routines</li>
          <li>Log jo market wali “cheap bright yellow” powder se distrust karte hain</li>
        </ul>

        <h2>Pakistan delivery</h2>
        <p>
          Order WhatsApp pe confirm hota hai. Lahore, Karachi, Islamabad, Rawalpindi mein aksar 1-2
          din. Baaki shehron mein 2-4 din. Sample pack se shuru karna easy hai.
        </p>

        <div className={styles.ctaRow}>
          <Link href="/#products" className="btn btn-primary">
            Shop khalis haldi packs
          </Link>
          <Link href="/faq" className="btn btn-dark">
            Read FAQ
          </Link>
        </div>
      </div>
    </article>
  );
}
