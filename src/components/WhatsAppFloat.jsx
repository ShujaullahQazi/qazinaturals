import './WhatsAppFloat.css';

const WHATSAPP_NUMBER = '923095942096';

export default function WhatsAppFloat() {
    const message = encodeURIComponent('Salam! Mujhe Qazi Naturals Haldi ke baray mein puchna hai.');

    return (
        <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
            aria-label="Chat on WhatsApp"
        >
            💬
            <span className="whatsapp-float-tooltip">WhatsApp pe baat karein!</span>
        </a>
    );
}
