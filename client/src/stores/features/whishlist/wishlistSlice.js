import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {  toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import httpAuth from '../../../utils/https';

export const fetchWishlists = createAsyncThunk(
  'wishlist/fetchWishlists',
  async ({userId,sessionId}, thunkAPI,) => {
    try {
      const response = await httpAuth.get(`/api/wishlists/wishlistsItems`,{ params: { userId, sessionId }})
      // toast.success(response.data.message)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message })
    }
  }
)


export const addWishlist = createAsyncThunk(
  'wishlist/addWishlist',
  async ({ productId, userId, sessionId }, thunkAPI) => {
    try {
      const response = await httpAuth.post('/api/wishlists/addwishlist',{ productId ,userId, sessionId})
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
)


export const clearWishlist = createAsyncThunk(
  'wishlist/clearWishlist',
  async (wishlistData, thunkAPI) => {
    try {
      const response = await httpAuth.delete('/api/wishlists/clear', { data: wishlistData });
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const deleteWishlist = createAsyncThunk(
  'wishlist/deleteWishlist',
  async ({ productId, userId, sessionId }, thunkAPI) => {
    try {
    const response = await httpAuth.post(`/api/wishlists/removewishlist`,{productId,userId, sessionId});
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);


const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState : {
    items: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWishlists.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload.wishlists?.items|| []
      })
      .addCase(addWishlist.fulfilled, (state, action) => {
        state.items =action.payload?.wishlists?.items|| []
      })
      .addCase(deleteWishlist.fulfilled, (state, action) => {
        state.items =  action.payload?.wishlists?.items|| []
      })
      .addCase(clearWishlist.fulfilled, (state, action) => {
        state.items =action.payload|| [];
      });
  },
});

export default wishlistSlice.reducer;


































