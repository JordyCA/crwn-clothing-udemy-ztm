//** Libraries */
import { useContext } from "react";

//** Components */
import Button from "../button/button.component.jsx";
import CartItem from "../cart-item/cart-item.component.jsx";

//** Context */
import { CartContext } from "../../contexts/cart.context.jsx";

//** Styles */
import "./cart-dropdown.style.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems &&
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
