import './Testimonials.css';

const reviews = [
    {
        name: 'Ayesha B.',
        city: 'Lahore',
        stars: 5,
        text: 'Bilkul asli haldi! Rang aur khushboo se hi pata chal jata hai ke ye pure hai. Haldi doodh ka maza hi alag ho gya.',
        time: '2:34 PM',
    },
    {
        name: 'Ahmed K.',
        city: 'Karachi',
        stars: 5,
        text: 'Market ki haldi se bohat farq hai. Meri ammi ne kaha ye wahi haldi hai jo gaon mein milti thi. Best quality!',
        time: '6:15 PM',
    },
    {
        name: 'Fatima R.',
        city: 'Islamabad',
        stars: 5,
        text: 'Sample pack order kiya tha pehle, ab toh 500g wala pack hi order karte hain. Family ko bohat pasand aayi.',
        time: '11:20 AM',
    },
    {
        name: 'Usman S.',
        city: 'Rawalpindi',
        stars: 4,
        text: 'Delivery time pe aayi. Packaging bhi bohat achi thi. Quality zabardast — ab doosri haldi use nahi karunga.',
        time: '9:45 PM',
    },
];

export default function Testimonials() {
    return (
        <section className="testimonials-section" id="testimonials">
            <div className="section-header">
                <p className="section-label">Reviews</p>
                <h2 className="section-title">Hamare Customers Kya Kehte Hain</h2>
                <p className="section-subtitle">
                    WhatsApp par mil'ne wali asli feedback — bina kisi editing ke.
                </p>
            </div>

            <div className="testimonials-grid">
                {reviews.map((review, i) => (
                    <div className="testimonial-card" key={i}>
                        <div className="testimonial-stars">
                            {'⭐'.repeat(review.stars)}
                        </div>
                        <p className="testimonial-text">"{review.text}"</p>
                        <div className="testimonial-author">
                            <div>
                                <p className="testimonial-name">{review.name}</p>
                                <p className="testimonial-city">📍 {review.city}</p>
                            </div>
                            <span className="testimonial-time">{review.time}</span>
                        </div>
                        <div className="testimonial-wa-badge">
                            💬 WhatsApp Review
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
