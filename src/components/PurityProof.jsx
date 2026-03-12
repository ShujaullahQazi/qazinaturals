import './PurityProof.css';
import rawImg from '../assets/purity/raw-turmeric.webp';
import grindingImg from '../assets/purity/grinding-process.webp';
import finalImg from '../assets/purity/final-product.webp';

const steps = [
    { icon: '🫚', num: 'STEP 01', label: 'Raw Bulbs', desc: 'Taza haldi khet se' },
    { icon: '♨️', num: 'STEP 02', label: 'Boiling', desc: '1 ghanta ubalna' },
    { icon: '☀️', num: 'STEP 03', label: 'Sun Drying', desc: '7-10 din dhoop mein' },
    { icon: '⚙️', num: 'STEP 04', label: 'Fresh Grinding', desc: 'Taaza peesai' },
];

const badges = [
    { icon: '🚫', text: 'No Lead Chromate' },
    { icon: '🚫', text: 'No Flour Fillers' },
    { icon: '🚫', text: 'No Artificial Color' },
    { icon: '✅', text: 'High Curcumin' },
];

const photos = [
    { img: rawImg, label: 'Kacchi Haldi — Raw Turmeric' },
    { img: grindingImg, label: 'Peesne Ka Tariqa — Grinding' },
    { img: finalImg, label: 'Tayaar Haldi — Final Product' },
];

export default function PurityProof() {
    return (
        <section className="purity-section" id="purity">
            <div className="section-header">
                <p className="section-label">Hamari Kahani</p>
                <h2 className="section-title">100% Khalis — Bilkul Milawat Nahi</h2>
                <p className="section-subtitle">
                    Humari poori process transparent hai. Dekhiye kaise khet se aapke ghar tak haldi pohanchti hai.
                </p>
            </div>

            <div className="purity-process">
                {steps.map((step, i) => (
                    <div className="purity-step" key={i}>
                        <div className="purity-step-icon">{step.icon}</div>
                        <p className="purity-step-num">{step.num}</p>
                        <p className="purity-step-label">{step.label}</p>
                        <p className="purity-step-desc">{step.desc}</p>
                    </div>
                ))}
            </div>

            <div className="purity-badges">
                {badges.map((badge, i) => (
                    <span className="purity-badge" key={i}>
                        {badge.icon} {badge.text}
                    </span>
                ))}
            </div>

            <div className="purity-social">
                <p className="purity-social-title">Poori Process Dekhiye Hamare Social Media Par</p>
                <div className="purity-social-links">
                    <a href="https://instagram.com/qazinaturals" target="_blank" rel="noopener noreferrer" className="purity-social-link">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                        Instagram
                    </a>
                    <a href="https://facebook.com/qazinaturals" target="_blank" rel="noopener noreferrer" className="purity-social-link">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                        Facebook
                    </a>
                    <a href="https://tiktok.com/@qazinaturals" target="_blank" rel="noopener noreferrer" className="purity-social-link">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                        TikTok
                    </a>
                </div>
            </div>

            <div className="purity-photos">
                {photos.map((photo, i) => (
                    <div className="purity-photo-slot" key={i}>
                        <img src={photo.img} alt={photo.label} loading="lazy" width="800" height="600" />
                        <span className="purity-photo-label">{photo.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
