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
    }
    catch (error) {
      if (!error.response) {
        // Network error (no response from server)
        toast.error("Network error: Please check your internet connection.");
      } else if (error.response.status >= 500) {
        // Server error (status code 5xx)
        toast.error("Server error: Please try again later.");
      } else if (error.response.status >= 400) {
        // Client error (status code 4xx)
        toast.error(`Error: ${error.response.data.message || "An error occurred."}`);
      } else {
        // Other errors
        toast.error("An unexpected error occurred.");
      }
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
        state.items =action.payload;
      });
  },
});

export default wishlistSlice.reducer;


































