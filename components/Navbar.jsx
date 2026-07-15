'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/components/CartContext';
import styles from './Navbar.module.css';

const links = [
  { label: 'Shop', href: '/#products' },
  { label: 'Kahani', href: '/#purity' },
  { label: 'Khalis Haldi', href: '/khalis-haldi' },
  { label: 'Haldi Doodh', href: '/haldi-doodh' },
  { label: 'FAQ', href: '/faq' },
];

export default function Navbar({ onCartOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cartCount } = useCart();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header className={`${styles.nav} ${scrolled || pathname !== '/' ? styles.solid : ''}`}>
        <Link href="/" className={styles.brand} aria-label="Qazi Naturals home">
          <span className={styles.brandMark}>Qazi</span>
          <span className={styles.brandSub}>Naturals</span>
        </Link>

        <nav className={styles.links} aria-label="Primary">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
          <button type="button" className={styles.cartBtn} onClick={onCartOpen} aria-label="Open cart">
            Cart
            {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
          </button>
        </nav>

        <div className={styles.mobileControls}>
          <button type="button" className={styles.cartBtn} onClick={onCartOpen} aria-label="Open cart">
            Cart
            {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
          </button>
          <button
            type="button"
            className={styles.menuBtn}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            Menu
          </button>
        </div>
      </header>

      <div
        className={`${styles.overlay} ${mobileOpen ? styles.open : ''}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden={!mobileOpen}
      />
      <aside className={`${styles.drawer} ${mobileOpen ? styles.open : ''}`} aria-hidden={!mobileOpen}>
        <button type="button" className={styles.closeBtn} onClick={() => setMobileOpen(false)}>
          Close
        </button>
        {links.map((link) => (
          <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
            {link.label}
          </Link>
        ))}
      </aside>
    </>
  );
}
