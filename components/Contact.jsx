'use client';

import { useState } from 'react';
import { WHATSAPP_NUMBER } from '@/lib/constants';
import styles from './Contact.module.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Salam! Mera naam ${form.name} hai.\nPhone: ${form.phone}\n\n${form.message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
    setForm({ name: '', phone: '', message: '' });
  };

  return (
    <section className={`section ${styles.section}`} id="contact">
      <div className="section-inner">
        <p className="section-kicker">Rabta</p>
        <h2 className="section-title">Order ya sawal? Seedha WhatsApp</h2>
        <p className="section-lead">
          Form bhejein ya seedha chat karein. Pakistan bhar delivery available hai.
        </p>

        <div className={styles.wrap}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label>
              Aapka naam
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Full name"
              />
            </label>
            <label>
              Phone number
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="03XX-XXXXXXX"
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Apna sawal ya order yahan likhen"
              />
            </label>
            <button type="submit" className="btn btn-primary btn-full">
              Message bhejiye
            </button>
          </form>

          <aside className={styles.info}>
            <div>
              <h3>Delivery</h3>
              <p>
                Lahore, Karachi, Islamabad, Rawalpindi aur baaki Pakistan. Major cities mein
                aksar 1-2 din, baaki jagah 2-4 din.
              </p>
            </div>
            <a
              className="btn btn-wa btn-full"
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Salam! Mujhe Qazi Naturals Haldi order karni hai.')}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp pe order
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
