import { createSlice } from '@reduxjs/toolkit';
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const initialState={
// }
const wishlistSlice = createSlice({
  name: 'wishlists',
    initialState:{
    wishlistItems:localStorage.getItem("whishlistItems")?JSON.parse(localStorage.getItem("whishlistItems")):[]
    },
  reducers: {
    toggleWishlistItem: (state, action) => {
      const existingItemIndex = state.wishlistItems.findIndex(item => item._id === action.payload._id);
      if (existingItemIndex >= 0) {
        state.wishlistItems.splice(existingItemIndex, 1);
        toast.info("Item removed from wishlist");
      localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistItems));
      } else {
        state.wishlistItems.push(action.payload);
        toast.success("Item added to wishlist");
      localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistItems));
        // console.log(state.wishlistItems.length)
      }
    },

    removeFromWishlist: (state, action) => {
    let filteredItem= state.wishlistItems.filter(item => item._id !==  action.payload._id);
    state.wishlistItems?.splice(filteredItem,1) //another to do it
    // state.wishlistItems=filteredItem
    localStorage.setItem("whishlistItems",JSON.stringify(state.wishlistItems))
    },
    clearWishlist: state => {
      state.wishlistItems= [];
      localStorage.removeItem("wishlistItems");
      toast.info("Wishlist cleared");
    },
  },
});

export const {  toggleWishlistItem, removeFromWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
export const isItemInWishlist = (state, productId) => {
  return state.wishlist.wishlistItems.some(item => item._id === productId);
};

