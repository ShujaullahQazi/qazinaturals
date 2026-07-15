'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Cart from '@/components/Cart';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export default function SiteChrome({ children }) {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <Navbar onCartOpen={() => setCartOpen(true)} />
      <main className="site-main">{children}</main>
      <Footer />
      <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      <WhatsAppFloat />
    </>
  );
}
