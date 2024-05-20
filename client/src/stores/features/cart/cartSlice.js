import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";

export const fetchCart = createAsyncThunk('cart/fetchCart', async () => {
  const response = await axios.get('https://radiant-whispersstore.onrender.com/api/products/api/cart');
  return response.data;
});

// Async thunk for updating cart on the server
export const updateCart = createAsyncThunk('cart/updateCart', async (cart) => {
  const response = await axios.post('https://radiant-whispersstore.onrender.com/api/products/api/cart', cart);
  return response.data;
});
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
    status: 'idle',
    error: null
  },
  reducers: {
    addToCart: (state, action) => {
        const newItem = action.payload;
        const existingItemIndex = state.items.findIndex((item) => item._id === newItem._id);
        if (existingItemIndex === -1) {
          state.items.push({ ...newItem, quantity: 1, totalPrice: parseFloat(newItem.price) });
          state.totalQuantity++;
          state.totalPrice += parseFloat(newItem.price);
          // localStorage.setItem("cartItem",JSON.stringify(state.items))
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
          // localStorage.setItem("cartItem",JSON.stringify(state.items))
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
      }
    },
    removeAllFromCart: (state) => {
        state.items = []; // Remove all items from cart
        state.totalQuantity = 0; // Reset total quantity
        state.totalPrice = 0; // Reset total price
      },
      extraReducers: (builder) => {
        builder
          .addCase(fetchCart.fulfilled, (state, action) => {
            state.items = action.payload.items;
            state.totalPrice = action.payload.totalPrice;
            state.status = 'succeeded';
          })
          .addCase(fetchCart.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchCart.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          })
          .addCase(updateCart.fulfilled, (state, action) => {
            state.items = action.payload.items;
            state.totalPrice = action.payload.totalPrice;
          });
      }
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, removeAllFromCart } = cartSlice.actions;
export default cartSlice.reducer;

export const selectCart = (state) => state.cart;

export const selectCartLength = (state) => state.cart.items.length;
