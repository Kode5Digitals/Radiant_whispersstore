import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: localStorage.getItem("cartItem")?JSON.parse(localStorage.getItem("cartItem")):[],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
        const newItem = action.payload;
        const existingItemIndex = state.items.findIndex((item) => item._id === newItem._id);
        if (existingItemIndex === -1) {
          state.items.push({ ...newItem, quantity: 1, totalPrice: parseFloat(newItem.price) });
          state.totalQuantity++;
          state.totalPrice += parseFloat(newItem.price);
          localStorage.setItem("cartItem",JSON.stringify(state.items))
          toast.success("item added")
        }else{
            toast.error("item already added ,view Cart")
        }
        
      },
   
    removeFromCart: (state, action) => {
        const idToRemove = action.payload;
       
        const existingItemIndex = state.items.findIndex((item) => item._id === idToRemove);
        if (existingItemIndex !== -1) {
          const removedItem = state.items[existingItemIndex];
          const removedItemTotalPrice = parseFloat(removedItem.totalPrice* removedItem.quantity);
          state.totalPrice -= removedItemTotalPrice;
      
          state.totalQuantity -= removedItem.quantity;
          state.items.splice(existingItemIndex, 1);
          localStorage.setItem("cartItem",JSON.stringify(state.items))
        }
      },
      
    
    increaseQuantity: (state, action) => {
      const idToIncrease = action.payload;
      const existingItem = state.items.find((item) => item._id === idToIncrease);
      if (existingItem) {
        existingItem.quantity+=1;
        existingItem.totalPrice += existingItem.price;
        state.totalQuantity+=1;
        state.totalPrice  += parseFloat(existingItem.price );
        // localStorage.setItem("cartItem",JSON.stringify(state.items))

      }
    },
    decreaseQuantity: (state, action) => {
      const idToDecrease = action.payload;
      const existingItem = state.items.find((item) => item._id === idToDecrease);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
        state.totalQuantity--;
        state.totalPrice -= existingItem.price;
        // localStorage.setItem("cartItem",JSON.stringify(state.items))

      }
    },
    removeAllFromCart: (state) => {
        state.items = []; // Remove all items from cart
        state.totalQuantity = 0; // Reset total quantity
        state.totalPrice = 0; // Reset total price
        localStorage.removeItem("cartItem")

      },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, removeAllFromCart } = cartSlice.actions;
export default cartSlice.reducer;

export const selectCart = (state) => state.cart;

export const selectCartLength = (state) => state.cart.items.length;
