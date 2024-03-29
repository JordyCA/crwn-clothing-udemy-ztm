//** Libraries */
import { useSelector } from 'react-redux';

//** Components */
import CheckoutItem from '../checkout-item/checkout-item.component.jsx';

//** Redux */
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector.js';

//** Styles */
import './checkout.styles.scss';

const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotals = useSelector(selectCartTotal);

    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
            }
            <span className='total'>Total: {cartTotals}</span>
        </div>
    )

}

export default Checkout;

