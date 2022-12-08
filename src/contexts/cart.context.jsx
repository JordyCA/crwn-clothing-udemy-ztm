//** Libraries */
import {
    createContext,
    useState,
    useEffect
} from "react";

//** Add a item in checkout */
const addCardItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
}

//** Remove a item in checkout */
const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItems => cartItems.id !== cartItemToRemove.id);
    }

    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    )
}

//** Remove a item group in checkout */
const clearCartItem = (cartItem, cartItemToRemove) => cartItem.filter(cartItems => cartItems.id !== cartItemToRemove.id);

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    decrementItemToCart: () => { },
    clearItemFromCart: () => {},
    cartCount: 0, 
    cartTotals: 0,
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotals, setCartTotals] = useState(0);

    //** Item quantity */
    useEffect(() => {
        const newCartCount = cartItems.reduce((acc, cc) => acc + cc.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems]);

    //** Total cart */
    useEffect(() => {
        const newCartTotal = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity * cartItem.price, 0
        )
        setCartTotals(newCartTotal);
        console.log('%ccart.context.jsx line:72 newCartTotal', 'color: #007acc;', newCartTotal);
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCardItem(cartItems, productToAdd));
    }

    const decrementItemToCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove));
    }
    
    const clearItemFromCart = (productToClear) => {
        setCartItems(clearCartItem(cartItems, productToClear));
    }

    const value = {
        //** General values */
        isCartOpen,
        cartItems, 
        cartCount,
        cartTotals,
        //** Functions */
        setIsCartOpen, 
        addItemToCart,  
        decrementItemToCart,
        clearItemFromCart
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
