import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {  toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import httpAuth from '../../../utils/https';

export const fetchWishlists = createAsyncThunk(
  'wishlist/fetchWishlists',
  async ({userId,sessionId}, thunkAPI) => {
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
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWishlists.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // state.items = action.payload.wishlists.items;
        state.items = action.payload.wishlists.items
      })
      .addCase(addWishlist.fulfilled, (state, action) => {
        state.items =action.payload.wishlists.items
      })
      .addCase(deleteWishlist.fulfilled, (state, action) => {
        state.items =  action.payload.wishlists.items
      })
      .addCase(clearWishlist.fulfilled, (state, action) => {
        state.items =action.payload;
      });
  },
});

export default wishlistSlice.reducer;
































// const wishlistSlice = createSlice({
//   name: 'wishlists',
//     initialState:{
//     wishlistItems:localStorage.getItem("whishlistItems")?JSON.parse(localStorage.getItem("whishlistItems")):[],
//     },
//   reducers: {
//     toggleWishlistItem: (state, action) => {
//       const existingItemIndex = state.wishlistItems.findIndex(item => item._id === action.payload._id)
//       if (existingItemIndex >= 0) {
//         state.wishlistItems.splice(existingItemIndex, 1)
//         toast.error("Item removed from wishlist")
//       localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistItems))
//       } else {
//         state.wishlistItems.push(action.payload)
//         toast.success("Item added to wishlist")
//       localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistItems))
//       localStorage.setItem("wishlistLnt", JSON.stringify(state.wishlistItems.length))
//         // console.log(state.wishlistItems.length)
//       }
//     },

//     removeFromWishlist: (state, action) => {
//     let filteredItem= state.wishlistItems.filter(item => item._id !==  action.payload._id)
//     state.wishlistItems?.splice(filteredItem,1) //another to do it
//     // state.wishlistItems=filteredItem
//     localStorage.setItem("whishlistItems",JSON.stringify(state.wishlistItems))
//     localStorage.setItem("whishlistLnt",JSON.stringify(state.wishlistItems.length))
//     },
//     clearWishlist: state => {
//       state.wishlistItems= []
//       localStorage.removeItem("wishlistItems")
//       localStorage.removeItem("whishlistLnt")
//       toast.info("Wishlist cleared")
//     },
//   },
// })

// export const {  toggleWishlistItem, removeFromWishlist, clearWishlist } = wishlistSlice.actions
// export default wishlistSlice.reducer
// export const isItemInWishlist = (state, productId) => {
//   return state.wishlist.wishlistItems.some(item => item._id === productId)
// }

