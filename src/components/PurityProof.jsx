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
                        📸 Instagram
                    </a>
                    <a href="https://facebook.com/qazinaturals" target="_blank" rel="noopener noreferrer" className="purity-social-link">
                        📘 Facebook
                    </a>
                    <a href="https://tiktok.com/@qazinaturals" target="_blank" rel="noopener noreferrer" className="purity-social-link">
                        🎵 TikTok
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
