import {  toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import httpAuth from "../../../utils/https";
   

export const fetchUserCart = createAsyncThunk(
  'cart/fetchUserCart',
  async (userId, thunkAPI) => {
    try {
      const response = await httpAuth.get(`/api/cart/${userId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);


export const addItemToCart = createAsyncThunk(
  'cart/addItemToCart',
  async ({ userId, productId, quantity }) => {
    console.log(userId, productId, quantity)
    const response = await httpAuth.post(`/api/cart/${userId}/add`, { productId, quantity });
    console.log(response.data)
    return response.data;
  }
);

export const increaseCartItemQuantity = createAsyncThunk('cart/increaseCartItemQuantity', async ({ userId, productId, quantity }, thunkAPI) => {
  try {
    const response = await httpAuth.post(`/api/cart/${userId}/increase`, { userId, productId, quantity });
    return response.data.cart;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const decreaseCartItemQuantity = createAsyncThunk('cart/decreaseCartItemQuantity', async ({ userId, productId, quantity }, thunkAPI) => {
  try {
    const response = await httpAuth.post(`/api/cart/${userId}/decrease`, { userId, productId, quantity });
    return response.data.cart;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
})
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  // initialState: {
  //   items: localStorage.getItem("cartItem")?JSON.parse(localStorage.getItem("cartItem")):[],
  //   totalQuantity:  localStorage.getItem("totalQuantity")?JSON.parse(localStorage.getItem("totalQuantity")):Number(0),
  //   totalPrice: localStorage.getItem("totalPrice")?JSON.parse(localStorage.getItem("totalPrice")):Number(0) ,
  // },
  reducers: {
    addToCart: (state, action) => {
        const newItem = action.payload
        const existingItemIndex = state.items.findIndex((item) => item._id === newItem._id)
        if (existingItemIndex === -1) {
          const updatedItems = [...state.items, { ...newItem, quantity: newItem.quantity }]
          const updatedTotalQuantity = state.totalQuantity + newItem.quantity
          const updatedTotalPrice = state.totalPrice + (Number(newItem.price) * newItem.quantity)
          localStorage.setItem("cartItem",JSON.stringify(state.items))
          localStorage.setItem("totalPrice",JSON.stringify(state.totalPrice))
          localStorage.setItem("totalQuantity",JSON.stringify(state.totalQuantity))
          toast.success("item added")
          return {
            ...state,
            items: updatedItems,
            totalQuantity: updatedTotalQuantity,
            totalPrice: updatedTotalPrice
          }
        }else{
            toast.error("item already added ,view Cart")
        }
        
      },
   
    removeFromCart: (state, action) => {
        const idToRemove = action.payload
        const existingItemIndex = state.items.findIndex((item) => item._id === idToRemove)
        if (existingItemIndex !== -1) {
          const removedItem = state.items[existingItemIndex]
          const removeditemTotalprice=Number(removedItem.price*removedItem.quantity)
          state.totalPrice = (state.totalPrice) - (removeditemTotalprice)
          state.totalQuantity -= removedItem.quantity
          state.items.splice(existingItemIndex, 1)
          localStorage.setItem("cartItem",JSON.stringify(state.items))
          localStorage.setItem("totalPrice",JSON.stringify(state.totalPrice))
          localStorage.setItem("totalQuantity",JSON.stringify(state.totalQuantity))
        }
      },
      increaseQuantity: (state, action) => {
        const updatedProduct = action.payload
        const existingItemIndex = state.items.findIndex((item) => item._id === updatedProduct)
        if (existingItemIndex >= 0) {
          state.items[existingItemIndex].quantity++
          state.totalQuantity++
          state.totalPrice +=parseFloat( state.items[existingItemIndex].price)
          localStorage.setItem('cartItem', JSON.stringify(state.items))
          localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice))
          localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity))
        }
      },
    
   
    decreaseQuantity: (state, action) => {
      const idToDecrease = action.payload
      const existingItem = state.items.find((item) => item._id === idToDecrease)
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--
        existingItem.totalPrice -=parseFloat(existingItem.price)
        state.totalQuantity--
        state.totalPrice -= existingItem.price
        localStorage.setItem("cartItem",JSON.stringify(state.items))
        localStorage.setItem("totalPrice",JSON.stringify(state.totalPrice))
        localStorage.setItem("totalQuantity",JSON.stringify(state.totalQuantity))


      }
    },
    removeAllFromCart: (state) => {
        state.items = []
        state.totalQuantity = 0
        state.totalPrice = 0
        localStorage.removeItem("cartItem")
      
      }

      
  },

  extraReducers: (builder) => {
    builder.addCase(addItemToCart.fulfilled, (state, action) => {
      state.items = action.payload.products;
      state.totalQuantity = action.payload.totalQuantity;
      state.totalPrice = action.payload.totalPrice;
    });

   builder.addCase(fetchUserCart.fulfilled, (state, action) => {
      state.items = action.payload.products;
      state.totalQuantity = action.payload.totalQuantity;
      state.totalPrice = action.payload.totalPrice;
    })

     builder.addCase(increaseCartItemQuantity.fulfilled, (state, action) => {
      state.items = action.payload.products;
      state.totalQuantity = action.payload.totalQuantity;
      state.totalPrice = action.payload.totalPrice;
    });
    builder.addCase(decreaseCartItemQuantity.fulfilled, (state, action) => {
      state.items = action.payload.products;
      state.totalQuantity = action.payload.totalQuantity;
      state.totalPrice = action.payload.totalPrice;
    })
  },
})

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, removeAllFromCart, } = cartSlice.actions
export default cartSlice.reducer

export const selectCart = (state) => state.cart
export const selectCartLength = (state) => state.cart.totalQuantity
// export const selectCartLength = (state) => state.cart.items.length
