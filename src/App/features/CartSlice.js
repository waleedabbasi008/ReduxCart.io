import { createSlice } from "@reduxjs/toolkit";
import ProductData from "../../ProductData";
const initialState = {
    cart: [],
    items: ProductData,
    totalQuantity: 0,
    totalPrice: 0,
}
const productSlice = createSlice({
    name: "carts",
    initialState,
    reducers: {
        add: (state, action) => {
            let find = state.cart.findIndex((item) => item.id === action.payload.id);
            if (find >= 0) {
                state.cart[find].quantity += 1;
            }
            else {

                state.cart.push(action.payload)
            }
        },
        getCartTotal: (state) => {
            let { totalQuantity, totalPrice } = state.cart.reduce(
                (cartTotal, cartItem) => {
                    console.log("carttotal", cartTotal);
                    console.log("cartitem", cartItem);
                    const { price, quantity } = cartItem;
                    console.log(price, quantity);
                    const itemTotal = price * quantity;
                    cartTotal.totalPrice += itemTotal;
                    cartTotal.totalQuantity += quantity;
                    return cartTotal;
                },
                {
                    totalPrice: 0,
                    totalQuantity: 0,
                }
            );
            state.totalPrice = parseInt(totalPrice.toFixed(2));
            state.totalQuantity = totalQuantity;
        },
        removeItem: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
        },
    }
});
export const { add, getCartTotal, removeItem } = productSlice.actions;  //, increaseItemQuantity, decreaseItemQuantity, removeItem 
export default productSlice.reducer;