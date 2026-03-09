import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import './Navbar.css';

export default function Navbar({ onCartOpen }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const { cartCount } = useCart();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: 'Home', href: '#hero' },
        { label: 'Products', href: '#products' },
        { label: 'Hamari Kahani', href: '#purity' },
        { label: 'Faiday', href: '#benefits' },
        { label: 'Contact', href: '#contact' },
    ];

    const handleLinkClick = () => setMobileOpen(false);

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <a href="#hero" className="navbar-logo">
                    <span className="navbar-logo-icon">🌿</span>
                    <span className="navbar-logo-text">Qazi <span>Naturals</span></span>
                </a>

                <div className="navbar-links">
                    {navLinks.map(link => (
                        <a key={link.href} href={link.href}>{link.label}</a>
                    ))}
                    <button className="navbar-cart-btn" onClick={onCartOpen} aria-label="Open cart">
                        🛒
                        {cartCount > 0 && <span className="navbar-cart-badge">{cartCount}</span>}
                    </button>
                </div>

                <div className="navbar-mobile-controls">
                    <button className="navbar-cart-btn" onClick={onCartOpen} aria-label="Open cart">
                        🛒
                        {cartCount > 0 && <span className="navbar-cart-badge">{cartCount}</span>}
                    </button>
                    <button className="navbar-hamburger" onClick={() => setMobileOpen(true)} aria-label="Open menu">
                        ☰
                    </button>
                </div>
            </nav>

            <div className={`mobile-menu-overlay ${mobileOpen ? 'open' : ''}`} onClick={() => setMobileOpen(false)} />
            <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
                <button className="mobile-menu-close" onClick={() => setMobileOpen(false)}>✕</button>
                <div className="mobile-menu-links">
                    {navLinks.map(link => (
                        <a key={link.href} href={link.href} onClick={handleLinkClick}>{link.label}</a>
                    ))}
                </div>
            </div>
        </>
    );
}
