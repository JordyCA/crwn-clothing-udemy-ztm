//** Libraries */
import {
    createContext,
    // useState,
    // useEffect,
    useReducer
} from "react";

//** Utils */ 
import { createAction } from "../utils/reducer/reducer.utils";

//** General Data */
export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    decrementItemToCart: () => { },
    clearItemFromCart: () => { },
    cartCount: 0,
    cartTotals: 0,
});

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotals: 0,
}

const CART_ACTION_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN'
}
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

//** Remove a item group in checkout */b
const clearCartItem = (cartItem, cartItemToRemove) => cartItem.filter(cartItems => cartItems.id !== cartItemToRemove.id);

const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            }
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload
            }
        default:
            throw new Error(`unhandled type of ${type} in cart reducer`);
    }
}

export const CartProvider = ({ children }) => {
    // const [isCartOpen, setIsCartOpen] = useState(false);
    // const [cartItems, setCartItems] = useState([]);
    // const [cartCount, setCartCount] = useState(0);
    // const [cartTotals, setCartTotals] = useState(0);

    // //** Item quantity */
    // useEffect(() => {
    //     const newCartCount = cartItems.reduce((acc, cc) => acc + cc.quantity, 0);
    //     setCartCount(newCartCount);
    // }, [cartItems]);

    // //** Total cart */
    // useEffect(() => {
    //     const newCartTotal = cartItems.reduce(
    //         (total, cartItem) => total + cartItem.quantity * cartItem.price, 0
    //     )
    //     setCartTotals(newCartTotal);
    //     console.log('%ccart.context.jsx line:72 newCartTotal', 'color: #007acc;', newCartTotal);
    // }, [cartItems]);

    const [{ cartItems, isCartOpen, cartCount, cartTotals }, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const updateCartItemsReducers = (newCartItems) => {
        const newCartCount = newCartItems.reduce((acc, cc) => acc + cc.quantity, 0);

        const newCartTotal = newCartItems.reduce(
            (total, cartItem) => total + cartItem.quantity * cartItem.price, 0
        )

        dispatch(
            createAction(
                CART_ACTION_TYPES.SET_CART_ITEMS,
                {
                    cartItems: newCartItems,
                    cartTotal: newCartTotal,
                    cartCount: newCartCount
                }
            )
        );

    };

    const addItemToCart = (productToAdd) => {
        const newCartItems = addCardItem(cartItems, productToAdd);
        updateCartItemsReducers(newCartItems);
    }

    const decrementItemToCart = (productToRemove) => {
        const newCartItems = removeCartItem(cartItems, productToRemove);
        updateCartItemsReducers(newCartItems);
    }

    const clearItemFromCart = (productToClear) => {
        const newCartItems = clearCartItem(cartItems, productToClear);
        updateCartItemsReducers(newCartItems);
    }

    const setIsCartOpen = (bool) => {
        dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));
    };

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
