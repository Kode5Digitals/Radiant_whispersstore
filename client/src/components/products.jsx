
import { CiHeart } from "react-icons/ci";
// import { FaHeart } from "react-icons/fa6";
import { useEffect, useState } from "react";
import httpAuth from "../utils/https";
import { Link} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import LoadingSpinner from "./loaderSpinner";
import { CircularProgress, Typography } from '@mui/material';
import Navbar from "./nav";
import {  useDispatch, useSelector } from 'react-redux';
import { setProducts } from "../stores/features/product/productSlice";
import {  addToCart } from "../stores/features/cart/cartSlice";
import {toggleWishlistItem} from"../stores/features/whishlist/wishlistSlice"
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { TbCurrencyNaira } from "react-icons/tb";
import { Truncate, formatPrice } from "../utils/utils";
import cors from "cors"

import {
  increaseQuantity,
  decreaseQuantity,
  
} from "../stores/features/cart/cartSlice";
cors()
function Products() {
  const dispatch = useDispatch()
const [loading, setLoading] = useState(false);
const [moreLoading, setMoreLoading] = useState(false);
const products = useSelector((state) => state.products);
const [visibleProducts, setVisibleProducts] = useState(10);
const {wishlistItems}= useSelector((state)=>state?.whishlist); 
const cartItems = useSelector((state) => state.cart.items);

const getCartItemQuantity = (productId) => {
  const item = cartItems.find(item => item._id === productId);
  return item ? item.quantity : 1;
};




 const handleAllProducts=async()=>{
  try {
    setLoading(true);
    const response= await httpAuth.get(`/api/products/allProducts`);
    const  data = await response.data.products;
  return data
    }
    catch (error) {
    console.log(error)
    }
    finally {
      setLoading(false);
    }
 }

 useEffect(() => {
  handleAllProducts().then((products) => {
    dispatch(setProducts(products));
  });
}, [dispatch]);


 const handleLoadMore = () => {
  setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 3) 
};

const handleAddToWishlist=(Id)=>{
  dispatch(toggleWishlistItem(Id))
}

//add to cart
const handleAddToCart = (product) => {
  dispatch(addToCart(product));
};

const isProductInWishlist = (productId) => {
  const wish =wishlistItems.some(item => item._id === productId)
  return wish
};






const handleIncreaseQuantity = (item) => {
  
    const existingItem = cartItems.findIndex((cartItem) => cartItem._id === item._id);

  if (!existingItem) {
    dispatch(addToCart(item));
  } 
if (existingItem)
  {
    dispatch(increaseQuantity(item));
  }
  
};

const handleDecreaseQuantity = (item) => {
  dispatch(decreaseQuantity(item));
  
};



return (
  <main className="mb-10 ">
    <Navbar />

    {loading && <LoadingSpinner />}
    <div className="xl:w-4/5 lg:w-3/4 w-full mt-12 mx-auto ">
      {!loading  && products.length === 0? (
        <div className="flex flex-col items-center justify-center h-screen">
          <Typography variant="h6" className='text-pink-700 text-xl'>
            No products available
          </Typography>
        </div>
      ) : (
        <div className="flex p-2 xl:p-0 gap-3 flex-shrink-0 productscale flex-wrap w-full sm:gap-5 sm:flex-wrap justify-evenly xl:justify-center 2xl:justify-between ">
          {!loading && products.slice(0, visibleProducts).map((prod, index) => (
            <div key={index} className="mb-20  w-48 xl:w-48 h-84 ">
              <div className="w-full h-52 shadow-xl overflow-hidden rounded-lg mb-3  border relative">
                <img src={prod?.image} className="w-full h-full" alt="" />
                {!isProductInWishlist(prod._id) ? (
                  <CiHeart
                    size={22}
                    id={prod._id}
                    className="m-2 absolute top-1 right-2 cursor-pointer text-[#080808]"
                    onClick={() => handleAddToWishlist(prod)}
                  />
                ) : (
                  <FaHeart
                    size={20}
                    id={prod._id}
                    className="m-2 absolute top-1 right-2 cursor-pointer text-[#fd00cd]"
                    onClick={() => handleAddToWishlist(prod)}
                  />
                )}
              </div>
              <div className="p-1 ">
                <h3 className="text-sm">{Truncate(prod?.name, 25)}</h3>
                <p className="text-[12px] w-full ">{Truncate(prod?.description, 25)}</p>
                <div className="flex items-center">
                <TbCurrencyNaira /> 
                <h4 className="text-md"><span></span>{formatPrice(Number(prod?.price))}</h4>
                </div>
                <h4 className="text-[12px]">{prod?.category}</h4>
                <button className="text-[12px] border px-2 rounded-md bg-white border-pink-500">
                    <Link to={`/ProductDetails/${prod?._id}`}>
                      Click For More
                    </Link>
                  </button>
              </div>
              <div className="flex justify-between items-cente items-end ">
                  

                <div className="flex justify-between border-black mt-3 border rounded-lg">
                  <div className="flex ">
                    <button
                      className="w-7 h-7  text-sm bg-white text-black flex justify-center items-center rounded-md"
                      onClick={() => handleIncreaseQuantity(prod)}
                    >
                      +
                    </button>
                    <h4 className="w-5 h-7 border-black border text-sm flex justify-center items-center  ">
                      {getCartItemQuantity(prod?._id)}
                    </h4>
                    <button
                      className="w-7 h-7    bg-white border   text-sm flex  text-black  justify-center items-center rounded-md"
                      onClick={() => handleDecreaseQuantity(prod._id)}
                    >
                      -
                    </button>
                  </div>
                </div>

                <button
                  id={prod._id}
                  className="border text-sm  w-14 h-7 flex justify-center items-center   rounded-md bg-pink-300 border-pink-600 hover:text-white hover:bg-pink-950"
                  onClick={() => handleAddToCart(prod)}
                >
               <FaShoppingCart/>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {moreLoading && (
        <div className="flex flex-col items-center justify-center h-screen">
          <CircularProgress size={80} style={{ marginBottom: 20, color: '#F13DA6' }} />
          <Typography variant="h6" className='text-pink-700 text-xl absolute' style={{ textAlign: 'center' }}>
            Radiantwhispersstore products...
          </Typography>
        </div>
      )}
      <div className="m-auto w-44">
        {!loading && visibleProducts < products.length && (
          <button onClick={handleLoadMore} className="w-52 border p-2 rounded-xl bg-[#fd00cd] text-white font-bold">
            {loading ? 'Loading...' : 'Load More'}
          </button>
        )}
      </div>
    </div>

    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  </main>
);

}

export default Products;
