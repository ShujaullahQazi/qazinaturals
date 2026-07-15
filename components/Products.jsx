'use client';

import Image from 'next/image';
import { PRODUCTS } from '@/lib/constants';
import { useCart } from '@/components/CartContext';
import styles from './Products.module.css';

export default function Products() {
  const { dispatch, cart } = useCart();

  const getCartItem = (id) => cart.find((item) => item.id === id);

  return (
    <section className={`section ${styles.section}`} id="products">
      <div className="section-inner">
        <p className="section-kicker">Packs</p>
        <h2 className="section-title">Khalis haldi ka intekhaab</h2>
        <p className="section-lead">
          Har pack mein wahi peesi hui asli haldi. Sample se shuru karein, phir ghar ka size choose karein.
        </p>

        <div className={styles.grid}>
          {PRODUCTS.map((product) => {
            const cartItem = getCartItem(product.id);
            return (
              <article
                key={product.id}
                className={`${styles.card} ${product.highlight ? styles.highlight : ''}`}
              >
                {product.highlight && <span className={styles.tag}>Start here</span>}
                <div className={styles.imageWrap}>
                  <Image
                    src={product.image}
                    alt={`${product.name} ${product.weight} peesi hui khalis haldi`}
                    fill
                    sizes="(max-width: 700px) 100vw, 25vw"
                    className={styles.image}
                  />
                </div>
                <div className={styles.info}>
                  <h3>{product.name}</h3>
                  <p className={styles.meta}>
                    {product.urduName} · {product.weight}
                  </p>
                  <p className={styles.price}>
                    Rs. {product.price.toLocaleString()}
                    <span> / {product.weight}</span>
                  </p>
                  {cartItem ? (
                    <div className={styles.qty}>
                      <button
                        type="button"
                        aria-label="Decrease quantity"
                        onClick={() =>
                          dispatch({
                            type: 'UPDATE_QUANTITY',
                            payload: { id: product.id, quantity: cartItem.quantity - 1 },
                          })
                        }
                      >
                        -
                      </button>
                      <span>{cartItem.quantity}</span>
                      <button
                        type="button"
                        aria-label="Increase quantity"
                        onClick={() =>
                          dispatch({
                            type: 'UPDATE_QUANTITY',
                            payload: { id: product.id, quantity: cartItem.quantity + 1 },
                          })
                        }
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-dark btn-full"
                      onClick={() =>
                        dispatch({
                          type: 'ADD_ITEM',
                          payload: {
                            id: product.id,
                            name: product.name,
                            weight: product.weight,
                            price: product.price,
                            image: product.image,
                          },
                        })
                      }
                    >
                      Add to cart
                    </button>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
