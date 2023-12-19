import {createSelector} from 'reselect';

const selectCartReducer = state => state.cart;

export const selectCartItems = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems
)

export const selectIsCartOpen = createSelector(
    [selectCartReducer],
    (cart) => cart.isCartOpen
)

export const selectIsCartCount = createSelector(
    [selectCartReducer],
    (cartItems) => cartItems.reduce(
        (total, cartItem) => total + cartItem.quantity
    )
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce(
        (total, cartItem) => total + cartItem.quantity * cartItem.price, 0
    )

);