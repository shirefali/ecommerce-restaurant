import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cartslice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.qnty += 1;
      } else {
        const newProduct = { ...action.payload, qnty: 1 };
        state.products.push(newProduct);
      }
    },

    removeFromCart: (state, action) => {
      state.products = state.products.filter((product) => {
        return product.id !== action.payload.id;
      });
    },

    reduceQuantity: (state, action) => {
      const existingProduct = state.products.find((product) => {
        return product.id === action.payload.id;
      });
      if (existingProduct) {
        existingProduct.qnty -= 1;
      }
    },

    clearCart: (state, action) => {
      state.products = [];
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, clearCart, reduceQuantity } =
  cartSlice.actions;
