import {createSelector} from 'reselect';

export const newCartCount = cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity
);

export const newCartTotal = cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price
);