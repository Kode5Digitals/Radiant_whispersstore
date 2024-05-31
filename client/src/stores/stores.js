import { configureStore } from '@reduxjs/toolkit'
import  productReducer from "./features/product/productSlice"
import  cartReducer from "./features/cart/cartSlice"
import whishlistReducer from "./features/whishlist/wishlistSlice"
const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
   whishlist: whishlistReducer,
  },
})

export default store