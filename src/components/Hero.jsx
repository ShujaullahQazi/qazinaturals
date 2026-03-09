import './Hero.css';

export default function Hero() {
    return (
        <section className="hero" id="hero">
            <span className="hero-decorative hero-deco-1">🌿</span>
            <span className="hero-decorative hero-deco-2">✨</span>
            <span className="hero-decorative hero-deco-3">🍃</span>
            <span className="hero-decorative hero-deco-4">🌾</span>

            <div className="hero-content">
                <div className="hero-badge">100% Khalis · Organic</div>
                <h1 className="hero-title">
                    Peesi Hui
                    <span>Khalis Haldi</span>
                </h1>
                <p className="hero-subtitle">
                    Freshly Ground Pure Turmeric — Ghar ki yaad dilane wali asli haldi,
                    bina kisi milawat ke, seedha khet se aapke ghar tak.
                </p>
                <div className="hero-tags">
                    <span className="hero-tag">🚫 No Added Colors</span>
                    <span className="hero-tag">🌱 No Chemicals</span>
                    <span className="hero-tag">🏡 Farm Fresh</span>
                    <span className="hero-tag">💪 High Curcumin</span>
                </div>
                <a href="#products" className="hero-cta">
                    Shop Kijiye →
                </a>
            </div>
        </section>
    );
}
