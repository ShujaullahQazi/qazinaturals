import './WhatsAppFloat.css';
import { WHATSAPP_NUMBER } from '../config/constants';

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
