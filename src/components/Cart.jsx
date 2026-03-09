import { useCart } from '../context/CartContext';
import './Cart.css';

const WHATSAPP_NUMBER = '923095942096';

export default function Cart({ isOpen, onClose }) {
    const { cart, dispatch, cartTotal } = useCart();

    const handleOrder = () => {
        if (cart.length === 0) return;

        const items = cart.map(item =>
            `• ${item.name} (${item.weight}) x${item.quantity} = Rs.${(item.price * item.quantity).toLocaleString()}`
        ).join('\n');

        const msg = `Salam! Mujhe ye order karna hai:\n\n${items}\n\n*Total: Rs.${cartTotal.toLocaleString()}*\n\nPlease confirm karein!`;
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
    };

    return (
        <>
            <div className={`cart-overlay ${isOpen ? 'open' : ''}`} onClick={onClose} />
            <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
                <div className="cart-header">
                    <h3>🛒 Aapka Cart</h3>
                    <button className="cart-close-btn" onClick={onClose}>✕</button>
                </div>

                <div className="cart-items">
                    {cart.length === 0 ? (
                        <div className="cart-empty">
                            <span className="cart-empty-icon">🛒</span>
                            <p>Cart khaali hai</p>
                            <p style={{ fontSize: '0.82rem', marginTop: '0.5rem' }}>Products section se items add kijiye</p>
                        </div>
                    ) : (
                        cart.map(item => (
                            <div className="cart-item" key={item.id}>
                                <div className="cart-item-emoji">{item.emoji}</div>
                                <div className="cart-item-details">
                                    <p className="cart-item-name">{item.name}</p>
                                    <p className="cart-item-weight">{item.weight}</p>
                                    <div className="cart-item-controls">
                                        <button
                                            className="cart-qty-btn"
                                            onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity: item.quantity - 1 } })}
                                        >
                                            −
                                        </button>
                                        <span className="cart-item-qty">{item.quantity}</span>
                                        <button
                                            className="cart-qty-btn"
                                            onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity: item.quantity + 1 } })}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <span className="cart-item-price">Rs.{(item.price * item.quantity).toLocaleString()}</span>
                                <button
                                    className="cart-item-remove"
                                    onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
                                >
                                    🗑️
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {cart.length > 0 && (
                    <div className="cart-footer">
                        <div className="cart-total">
                            <span className="cart-total-label">Total:</span>
                            <span className="cart-total-price">Rs. {cartTotal.toLocaleString()}</span>
                        </div>
                        <button className="cart-order-btn" onClick={handleOrder}>
                            💬 WhatsApp Pe Order Kijiye
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}
