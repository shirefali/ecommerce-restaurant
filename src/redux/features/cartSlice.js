import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
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
      // updating localStorage after adding the Product
      localStorage.setItem("cart", JSON.stringify(state.products));
    },

    removeFromCart: (state, action) => {
      state.products = state.products.filter((product) => {
        return product.id !== action.payload.id;
      });

      localStorage.setItem("cart", JSON.stringify(state.products));
    },

    reduceQuantity: (state, action) => {
      const existingProduct = state.products.find((product) => {
        return product.id === action.payload.id;
      });
      if (existingProduct) {
        existingProduct.qnty -= 1;
      }
      //updating localStorage after reduce our Quantity
      localStorage.setItem("cart", JSON.stringify(state.products));
    },

    clearCart: (state) => {
      state.products = [];
      // updating the localStorage after clear the cart
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, clearCart, reduceQuantity } =
  cartSlice.actions;
