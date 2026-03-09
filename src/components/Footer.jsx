import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <p className="footer-brand-logo">🌿 Qazi <span>Naturals</span></p>
                    <p className="footer-brand-desc">
                        Peesi hui khalis haldi — bina kisi milawat ke, seedha khet se aapke ghar tak.
                    </p>
                    <div className="footer-social">
                        <a href="https://instagram.com/qazinaturals" target="_blank" rel="noopener noreferrer">📸</a>
                        <a href="https://facebook.com/qazinaturals" target="_blank" rel="noopener noreferrer">📘</a>
                        <a href="https://tiktok.com/@qazinaturals" target="_blank" rel="noopener noreferrer">🎵</a>
                        <a href="https://wa.me/923095942096" target="_blank" rel="noopener noreferrer">💬</a>
                    </div>
                </div>

                <div className="footer-column">
                    <h4>Quick Links</h4>
                    <a href="#hero">Home</a>
                    <a href="#products">Products</a>
                    <a href="#purity">Hamari Kahani</a>
                    <a href="#benefits">Faiday</a>
                    <a href="#contact">Contact</a>
                </div>

                <div className="footer-column">
                    <h4>Contact</h4>
                    <a href="https://wa.me/923095942096" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
                    <a href="https://instagram.com/qazinaturals" target="_blank" rel="noopener noreferrer">📸 Instagram</a>
                    <a href="mailto:hello@qazinaturals.pk">📧 Email</a>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Qazi Naturals — Khalis Haldi, Khalis Bharosa</p>
            </div>
        </footer>
    );
}
