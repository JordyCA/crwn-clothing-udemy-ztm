//** Libraries */
import { useContext } from "react";

//** Libraries */
import { useNavigate } from "react-router-dom";

//** Components */
import Button from "../button/button.component.jsx";
import CartItem from "../cart-item/cart-item.component.jsx";

//** Context */
import { CartContext } from "../../contexts/cart.context.jsx";

//** Styles */
import {CartDropdownContainer, EmptyMessage, CartItems} from "./cart-dropdown.style.jsx";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
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
