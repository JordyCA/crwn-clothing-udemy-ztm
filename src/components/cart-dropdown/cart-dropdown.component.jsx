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
import "./cart-dropdown.style.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToNavigate = () => {
    navigate('/checkout');
  }

  console.log(cartItems);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems &&
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)}
      </div>
      <Button onClick={goToNavigate}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
