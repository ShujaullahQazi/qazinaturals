import { useCart } from '../context/CartContext';
import './Products.css';

import sampleImg from '../assets/products/sample-50g.webp';
import gharImg from '../assets/products/ghar-100g.webp';
import familyImg from '../assets/products/family-250g.webp';
import valueImg from '../assets/products/value-500g.webp';

const products = [
    {
        id: 'sample-50g',
        name: 'Sample Pack',
        urduName: 'Pehle Try Kijiye!',
        weight: '50g',
        price: 150,
        image: sampleImg,
        highlight: true,
    },
    {
        id: 'ghar-100g',
        name: 'Ghar Ka Pack',
        urduName: 'Rozana Istemaal',
        weight: '100g',
        price: 280,
        image: gharImg,
        highlight: false,
    },
    {
        id: 'family-250g',
        name: 'Family Pack',
        urduName: 'Poore Ghar Ke Liye',
        weight: '250g',
        price: 650,
        image: familyImg,
        highlight: false,
    },
    {
        id: 'value-500g',
        name: 'Value Pack',
        urduName: 'Best Value',
        weight: '500g',
        price: 1200,
        image: valueImg,
        highlight: false,
    },
];

export default function Products() {
    const { dispatch, cart } = useCart();

    const getCartItem = (id) => cart.find(item => item.id === id);

    const handleAdd = (product) => {
        dispatch({ type: 'ADD_ITEM', payload: { ...product, image: undefined } });
    };

    const handleQuantity = (id, newQty) => {
        dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity: newQty } });
    };

    return (
        <section className="products-section" id="products">
            <div className="section-header">
                <p className="section-label">Hamari Products</p>
                <h2 className="section-title">Khalis Haldi Ka Intekhaab</h2>
                <p className="section-subtitle" style={{ margin: '0 auto' }}>
                    Har pack mein wahi asli aur khalis haldi — koi milawat nahi.
                </p>
            </div>

            <div className="products-grid">
                {products.map(product => {
                    const cartItem = getCartItem(product.id);
                    return (
                        <div
                            key={product.id}
                            className={`product-card ${product.highlight ? 'product-card-highlight' : ''}`}
                        >
                            <span className="product-highlight-tag">✨ Pehle Try Kijiye!</span>
                            <div className="product-image">
                                <img src={product.image} alt={product.name} loading="lazy" width="800" height="600" />
                            </div>
                            <div className="product-info">
                                <h3 className="product-name">{product.name}</h3>
                                <p className="product-weight">{product.urduName} · {product.weight}</p>
                                <p className="product-price">
                                    Rs. {product.price.toLocaleString()} <span>/ {product.weight}</span>
                                </p>
                                {cartItem ? (
                                    <div className="product-qty-control">
                                        <button
                                            className="product-qty-btn product-qty-minus"
                                            onClick={() => handleQuantity(product.id, cartItem.quantity - 1)}
                                            aria-label="Decrease quantity"
                                        >
                                            −
                                        </button>
                                        <span className="product-qty-value">{cartItem.quantity}</span>
                                        <button
                                            className="product-qty-btn product-qty-plus"
                                            onClick={() => handleQuantity(product.id, cartItem.quantity + 1)}
                                            aria-label="Increase quantity"
                                        >
                                            +
                                        </button>
                                    </div>
                                ) : (
                                    <button
                                        className="product-add-btn"
                                        onClick={() => handleAdd(product)}
                                    >
                                        🛒 Add to Cart
                                    </button>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
