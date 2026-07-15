import styles from './Testimonials.module.css';

const reviews = [
  {
    name: 'Ayesha B.',
    city: 'Lahore',
    text: 'Bilkul asli haldi. Rang aur khushboo se hi pata chal jata hai ke ye pure hai. Haldi doodh ka maza alag ho gaya.',
  },
  {
    name: 'Ahmed K.',
    city: 'Karachi',
    text: 'Market ki haldi se bohat farq hai. Ammi ne kaha ye wahi haldi hai jo gaon mein milti thi.',
  },
  {
    name: 'Fatima R.',
    city: 'Islamabad',
    text: 'Sample pack order kiya tha pehle, ab 500g wala pack hi order karte hain. Family ko pasand aayi.',
  },
  {
    name: 'Usman S.',
    city: 'Rawalpindi',
    text: 'Delivery time pe aayi. Packaging achi thi. Quality zabardast. Ab doosri haldi use nahi karunga.',
  },
];

export default function Testimonials() {
  return (
    <section className={`section ${styles.section}`} id="testimonials">
      <div className="section-inner">
        <p className="section-kicker">Customers</p>
        <h2 className="section-title">Jo ghar ghar pohanchi</h2>
        <p className="section-lead">
          WhatsApp par milne wali feedback. Lahore, Karachi, Islamabad aur Rawalpindi se.
        </p>
        <div className={styles.grid}>
          {reviews.map((review) => (
            <blockquote key={review.name} className={styles.card}>
              <p>“{review.text}”</p>
              <footer>
                <strong>{review.name}</strong>
                <span>{review.city}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
