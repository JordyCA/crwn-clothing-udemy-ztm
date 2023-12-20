//** Libraries */
// import { useContext } from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector.js";

//** Libraries */
import { useNavigate } from "react-router-dom";

//** Components */
import Button from "../button/button.component.jsx";
import CartItem from "../cart-item/cart-item.component.jsx";

//** Redux */
import { selectCartItems } from "../../store/cart/cart.selector.js";

//** Styles */
import {CartDropdownContainer, EmptyMessage, CartItems} from "./cart-dropdown.style.jsx";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToNavigate = () => {
    navigate('/checkout');
  }

  //console.log(cartItems);

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? 
          (cartItems.map((item) => <CartItem key={item.id} cartItem={item} />))
          : ( <EmptyMessage>Your cart is empty</EmptyMessage>)
        }
      </CartItems>
      <Button onClick={goToNavigate}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
