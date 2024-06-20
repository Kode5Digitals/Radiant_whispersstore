import {  toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import httpAuth from "../../../utils/https"
   

export const fetchUserCart = createAsyncThunk(
  'cart/fetchUserCart',
async ({userId,sessionId}, thunkAPI) => {
    try {
      const response = await httpAuth.get(`/api/cart/getCart`,{ params: { userId, sessionId }})
      toast.success(response.data.message)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message })
    }
  }
)


export const addItemToCart = createAsyncThunk(
  'cart/addItemToCart',
  async  ({ userId, productId,sessionId,quantity},  { rejectWithValue })=> {
    try{
      const response = await httpAuth.post(`/api/cart/add`, { productId,sessionId,userId,quantity })
      if(response.data.Added){
        toast.success(response.data.message)
      }else if (response.data.error_type === 2) {
        toast.error('Item already in cart')}
      else{
        if(response.data.error_type===1){
          toast.error(response.data.message)
          return rejectWithValue(response.data.message); 
        }
      }
return response.data
    }
    catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }

  }
)

export const increaseCartItemQuantity = createAsyncThunk('cart/increaseCartItemQuantity', async ({ userId, productId, quantity,sessionId }, thunkAPI) => {
  try {
    const response = await httpAuth.post(`/api/cart/increase`, { userId, productId, quantity,sessionId })
    return response.data.cart
  } catch (error) {
console.log(error)
    return thunkAPI.rejectWithValue(error.response.data)
  }
})

export const decreaseCartItemQuantity = createAsyncThunk(
  'cart/decreaseCartItemQuantity',
   async ({ userId, productId, quantity,sessionId }, thunkAPI) => {
  try {
    const response = await httpAuth.post(`/api/cart/decrease`, { userId, productId, quantity,sessionId })
    return response.data.cart
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data)
  }
})



export const removeItemFromCart = createAsyncThunk(
  'cart/removeItemFromCart',
  async ({ userId, productId ,sessionId}, thunkAPI) => {
    try {
      const response = await httpAuth.post(`/api/cart/remove`, { userId, productId,sessionId });
      return response.data.cart
    } catch (error) {
      console.error(error)
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);


export const clearCart = createAsyncThunk(
  'cart/clearCart',
  async ( {userId ,sessionId}, thunkAPI) => {
    try {
      const response = await httpAuth.post(`/api/cart/clearAll`,{userId ,sessionId});
      toast.success('All products removed from cart successfully!');
      return response.data.cart;
    } catch (error) {
      toast.error('Failed to clear cart.');
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  
  reducers: {},

  extraReducers: (builder) => {
    builder
    .addCase(addItemToCart.fulfilled, (state, action) => {
      const { cart } = action.payload || {};
      if (cart) {
        state.items = cart.products || [];
        state.totalQuantity = cart.totalQuantity || 0;
        state.totalPrice = cart.totalPrice || 0;
      }
    })
    .addCase(addItemToCart.rejected, (state, action) => {
      state.error = action.payload
    })
  .addCase(fetchUserCart.fulfilled, (state, action) => {
      const { products, totalQuantity, totalPrice } = action.payload;
        state.items = products || [];
        state.totalQuantity = totalQuantity || 0;
        state.totalPrice = totalPrice || 0;
    })
    .addCase(fetchUserCart.rejected, (state, action) => {
      state.error = action.payload
    })
    .addCase(increaseCartItemQuantity.fulfilled, (state, action) => {
      state.items = action.payload.products
      state.totalQuantity = action.payload.totalQuantity
      state.totalPrice = action.payload.totalPrice
    })
    .addCase(increaseCartItemQuantity.rejected, (state, action) => {
      state.error = action.payload
    })
  .addCase(decreaseCartItemQuantity.fulfilled, (state, action) => {
      state.items = action.payload.products
      state.totalQuantity = action.payload.totalQuantity
      state.totalPrice = action.payload.totalPrice
    })
    .addCase(decreaseCartItemQuantity.rejected, (state, action) => {
      state.error = action.payload
    })
    .addCase(removeItemFromCart.fulfilled, (state, action) => {
      state.items = action.payload.products;
      state.totalQuantity = action.payload.totalQuantity;
      state.totalPrice = action.payload.totalPrice;
    })
    .addCase(removeItemFromCart.rejected, (state, action) => {
      state.error = action.payload;
    })
    .addCase(clearCart.fulfilled, (state, action) => {
      state.items = action.payload.products;
      state.totalQuantity = action.payload.totalQuantity;
      state.totalPrice = action.payload.totalPrice;
    })
    .addCase(clearCart.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
})

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, removeAllFromCart, } = cartSlice.actions
export default cartSlice.reducer

export const selectCart = (state) => state.cart
export const selectCartLength = (state) => state.cart.totalQuantity
