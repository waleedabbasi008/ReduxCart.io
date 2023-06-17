import { configureStore } from "@reduxjs/toolkit";
import productReducer from './features/CartSlice';
export const Store = configureStore({
    reducer: {
        cart: productReducer,
    },
})