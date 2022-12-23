//** Libraries */
import { useContext } from 'react';

//** Contexts */
import { CartContext } from '../../contexts/cart.context';

//** Styles */
import {CartIconContainer, ShoppingIcon, ItemCount} from './cart-icon.style.jsx';

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon' /> 
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
}

export default CartIcon;