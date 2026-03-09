import { useState } from 'react';
import { useCart } from '../context/CartContext';
import './Products.css';

import sampleImg from '../assets/products/sample-50g.png';
import gharImg from '../assets/products/ghar-100g.png';
import familyImg from '../assets/products/family-250g.png';
import valueImg from '../assets/products/value-500g.png';

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
    const [addedId, setAddedId] = useState(null);

    const handleAdd = (product) => {
        dispatch({ type: 'ADD_ITEM', payload: { ...product, image: undefined } });
        setAddedId(product.id);
        setTimeout(() => setAddedId(null), 1200);
    };

    const isInCart = (id) => cart.some(item => item.id === id);

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
                {products.map(product => (
                    <div
                        key={product.id}
                        className={`product-card ${product.highlight ? 'product-card-highlight' : ''}`}
                    >
                        <span className="product-highlight-tag">✨ Pehle Try Kijiye!</span>
                        <div className="product-image">
                            <img src={product.image} alt={product.name} loading="lazy" />
                        </div>
                        <div className="product-info">
                            <h3 className="product-name">{product.name}</h3>
                            <p className="product-weight">{product.urduName} · {product.weight}</p>
                            <p className="product-price">
                                Rs. {product.price.toLocaleString()} <span>/ {product.weight}</span>
                            </p>
                            <button
                                className={`product-add-btn ${addedId === product.id || isInCart(product.id) ? 'product-added-btn' : ''}`}
                                onClick={() => handleAdd(product)}
                            >
                                {addedId === product.id ? '✓ Added!' : isInCart(product.id) ? '+ Add More' : '🛒 Add to Cart'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
