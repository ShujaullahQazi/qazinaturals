'use client';

import Image from 'next/image';
import { WHATSAPP_NUMBER } from '@/lib/constants';
import { useCart } from '@/components/CartContext';
import styles from './Cart.module.css';

export default function Cart({ isOpen, onClose }) {
  const { cart, dispatch, cartTotal } = useCart();

  const handleOrder = () => {
    if (!cart.length) return;
    const items = cart
      .map(
        (item) =>
          `• ${item.name} (${item.weight}) x${item.quantity} = Rs.${(item.price * item.quantity).toLocaleString()}`
      )
      .join('\n');
    const msg = `Salam! Mujhe ye order karna hai:\n\n${items}\n\n*Total: Rs.${cartTotal.toLocaleString()}*\n\nPlease confirm karein!`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <>
      <div className={`${styles.overlay} ${isOpen ? styles.open : ''}`} onClick={onClose} />
      <aside className={`${styles.drawer} ${isOpen ? styles.open : ''}`} aria-hidden={!isOpen}>
        <div className={styles.header}>
          <h3>Aapka cart</h3>
          <button type="button" onClick={onClose} aria-label="Close cart">
            Close
          </button>
        </div>

        <div className={styles.items}>
          {!cart.length ? (
            <div className={styles.empty}>
              <p>Cart khaali hai</p>
              <p>Products se pack add karein</p>
            </div>
          ) : (
            cart.map((item) => (
              <div className={styles.item} key={item.id}>
                <div className={styles.thumb}>
                  {item.image ? (
                    <Image src={item.image} alt={item.name} fill sizes="56px" />
                  ) : null}
                </div>
                <div className={styles.details}>
                  <p className={styles.name}>{item.name}</p>
                  <p className={styles.weight}>{item.weight}</p>
                  <div className={styles.controls}>
                    <button
                      type="button"
                      onClick={() =>
                        dispatch({
                          type: 'UPDATE_QUANTITY',
                          payload: { id: item.id, quantity: item.quantity - 1 },
                        })
                      }
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() =>
                        dispatch({
                          type: 'UPDATE_QUANTITY',
                          payload: { id: item.id, quantity: item.quantity + 1 },
                        })
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className={styles.side}>
                  <span>Rs.{(item.price * item.quantity).toLocaleString()}</span>
                  <button
                    type="button"
                    onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className={styles.footer}>
            <div className={styles.total}>
              <span>Total</span>
              <strong>Rs. {cartTotal.toLocaleString()}</strong>
            </div>
            <button type="button" className="btn btn-wa btn-full" onClick={handleOrder}>
              WhatsApp pe order
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
