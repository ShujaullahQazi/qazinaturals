import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import PurityProof from './components/PurityProof';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <CartProvider>
      <Navbar onCartOpen={() => setCartOpen(true)} />
      <main>
        <Hero />
        <Products />
        <PurityProof />
        <Benefits />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      <WhatsAppFloat />
    </CartProvider>
  );
}

export default App;
