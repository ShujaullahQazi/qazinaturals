import { useState } from 'react';
import './Contact.css';

const WHATSAPP_NUMBER = '923095942096';

export default function Contact() {
    const [form, setForm] = useState({ name: '', phone: '', message: '' });

    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const msg = `Salam! Mera naam ${form.name} hai.\nPhone: ${form.phone}\n\n${form.message}`;
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
    };

    return (
        <section className="contact-section" id="contact">
            <div className="section-header">
                <p className="section-label">Rabta</p>
                <h2 className="section-title">Humse Rabta Kijiye</h2>
                <p className="section-subtitle" style={{ margin: '0 auto' }}>
                    Koi bhi sawal ho ya order karna ho — hum aapki khidmat mein haazir hain.
                </p>
            </div>

            <div className="contact-wrapper">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="contact-input-group">
                        <label htmlFor="contact-name">Aapka Naam</label>
                        <input
                            id="contact-name"
                            type="text"
                            name="name"
                            placeholder="Full name"
                            value={form.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="contact-input-group">
                        <label htmlFor="contact-phone">Phone Number</label>
                        <input
                            id="contact-phone"
                            type="tel"
                            name="phone"
                            placeholder="03XX-XXXXXXX"
                            value={form.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="contact-input-group">
                        <label htmlFor="contact-message">Message</label>
                        <textarea
                            id="contact-message"
                            name="message"
                            rows="4"
                            placeholder="Apna sawal ya order yahan likhen..."
                            value={form.message}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="contact-submit-btn">
                        📩 Message Bhejiye
                    </button>
                </form>

                <div className="contact-info">
                    <div className="contact-info-card">
                        <h4>📍 Delivery Information</h4>
                        <p>
                            Hum Pakistan bhar mein delivery karte hain. Lahore, Karachi, Islamabad,
                            Rawalpindi aur baaki sheher — sab jagah delivery available hai.
                        </p>
                    </div>
                    <div className="contact-info-card">
                        <h4>⏰ Delivery Time</h4>
                        <p>
                            Order ke baad 2-4 din mein aapke ghar tak pohoncha di jayegi.
                            Major cities mein 1-2 din mein delivery possible hai.
                        </p>
                    </div>
                    <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Salam! Mujhe Qazi Naturals Haldi order karni hai.')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-wa-btn"
                    >
                        💬 WhatsApp Pe Order Kijiye
                    </a>
                </div>
            </div>
        </section>
    );
}
