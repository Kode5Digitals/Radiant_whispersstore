import { CiHeart } from "react-icons/ci"
import { useContext, useEffect, useState } from "react"
import httpAuth from "../utils/https"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import LoadingSpinner from "./loaderSpinner"
import { Typography } from "@mui/material"
import Navbar from "./nav"
import { useDispatch, useSelector } from "react-redux"
import { setProducts } from "../stores/features/product/productSlice"
import { addItemToCart} from "../stores/features/cart/cartSlice"
import { addWishlist, deleteWishlist} from "../stores/features/whishlist/wishlistSlice"
import { FaHeart} from "react-icons/fa"
import { TbCurrencyNaira } from "react-icons/tb"
import { Truncate, formatPrice } from "../utils/utils"
import cors from "cors"

import { LiaShoppingBagSolid } from "react-icons/lia"
import Cartcontext from "../cartcontext"
import { FaSpinner } from "react-icons/fa6"
import { useNavigate } from "react-router-dom"
cors()
function Products() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
const [cartLoading, setCartLoading] = useState({})
  const products = useSelector((state) => state.products)
  const [visibleProducts, setVisibleProducts] = useState(15)
const wishlist= useSelector((state) => state?.wishlist.items)
  const [quantity, setQuantity] = useState({})
  const{user,sessionId,setCartLength}=useContext(Cartcontext)
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const[wishLoading,setWishLoading]=useState({})
const cartItems= useSelector((state)=>state?.cart.items); 
const [detailLoading, setDetailLoading] = useState({});
  const navigate=useNavigate()





useEffect(() => {
  setCartLength(totalQuantity)
}, [totalQuantity,setCartLength]);

const handleAllProducts = async () => {
    try {
      setLoading(true)
      const response = await httpAuth.get(`/api/products/allProducts`)
      const data = await response.data?.products.map((product) => ({
        ...product,
        quantity: 1,
      }))
      return data
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    handleAllProducts().then((products) => {
      dispatch(setProducts(products))
    })
  }, [dispatch])
  
  const isProductInCart = (productId) => {
    const wish= cartItems.some((item) => item.productId._id === productId)
   return wish
  }


  const handleClick = async(productId) => {
    setDetailLoading((prevLoading) => ({ ...prevLoading, [productId]: true }));
    try {
      const response = await httpAuth.get(`https://radiant-whispersstore.onrender.com/api/products/getProduct/${productId}`);
      const data = await response.data;
      console.log(data)
      
      if (data.product) {
      navigate(`/ProductDetails/${productId}`);
      }
       else if(data.status==0) {
      toast.error(data.message);
      }
    } catch (error) {
      toast.error('Check your Network connection');
    } finally {
      setDetailLoading((prevLoading) => ({ ...prevLoading, [productId]: false }));
    }
  };

  const handleLoadMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 9)
  }

  

  const handleAddClick = async (product) => {
    setWishLoading((prev) => ({ ...prev, [product._id]: true }));
    try {
      await dispatch(addWishlist({ userId: user?._id, sessionId, productId: product._id })).unwrap();
    } catch (error) {
      console.error("Failed to add to wishlist:", error);
    } finally {
      setWishLoading((prev) => ({ ...prev, [product._id]: false }));
    }

  };

  const handleRemoveClick = async (product) => {
    setWishLoading((prev) => ({ ...prev, [product._id]: true }));
    try {
      await dispatch(deleteWishlist({ userId: user?._id, sessionId, productId: product._id })).unwrap();
    } catch (error) {
      console.error("Failed to remove from wishlist:", error);
    } finally {
      setWishLoading((prev) => ({ ...prev, [product._id]: false }));
    }
  };

 
  const isProductInWishlist = (productId) => {
    if (Array.isArray(wishlist)) {
      return wishlist.some((item) => item.productId._id === productId)
    }
    return false
  }
  const handleIncrease = (productId) => {
    console.log(productId)
    setQuantity(prevQuantities => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 1) + 1
    }))
  }
  const handleDecrease = (productId) => {
    setQuantity(prevQuantities => ({
      ...prevQuantities,
      [productId]: Math.max((prevQuantities[productId] || 0) - 1, 1)
    }))
  }


  const handleAddToCart = async (product) => {
    setCartLoading((prevLoading) => ({ ...prevLoading, [product._id]: true }));
    try {
      const selectedQuantity = quantity[product._id] || 1;
      await dispatch(addItemToCart({ userId: user?._id, sessionId, productId: product._id, quantity: selectedQuantity }));
    } catch (err) {
      toast.error("An unexpected error occurred.");
    } finally {
      setCartLoading((prevLoading) => ({ ...prevLoading, [product._id]: false }));
    }
  };
  

 

  return (
    <main className="mb-10 ">
      <Navbar />

      {loading && <LoadingSpinner />}
      <div className="xl:w-4/5 lg:w-3/4  2xl:w-3/4 w-full mt-12 mx-auto ">
        {!loading && products.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-screen">
            <Typography variant="h6" className="text-[#891980] text-xl">
              No products available
            </Typography>
          </div>
        ) : (
          <div className="flex p-2 xl:p-0  flex-shrink-0 productscale flex-wrap w-full sm:gap-5 sm:flex-wrap justify-evenly xl:justify-center 2xl:justify-between ">
            {!loading &&
              products.slice(0, visibleProducts).map((product, index) => (
                <div key={index} className="mb-32  w-40 xl:w-48 h-96 ">
                  <div className="w-full h-56  flex justify-center items-center shadow-xl overflow-hidden rounded-lg mb-3  border relative">
                    <div className="hover:p-2 p-5 ">
                      <img src={product?.image} className="w-full h-full" alt="" />
                    </div>
                    {!isProductInWishlist(product._id) ? (
                    <div className={`m-2 absolute top-1 right-2 cursor-pointer border-2 rounded-full w-6 h-6  flex justify-centeritems-center  border-black ${wishLoading[product._id] ? 'animate-spin' : ''} `}>
                        <CiHeart
                        size={22}
                        id={product._id}
                        className=" text-[#080808]"
                        onClick={() => handleAddClick(product)}
                      />
                    </div>
                    ) : (
                     <div className={`m-2 absolute top-1 right-2 cursor-pointer  border-2 rounded-full w-6 h-6  flex justify-center  items-center border-[#891980] ${wishLoading[product._id] ? 'animate-spin' : ''} `}>
                       <FaHeart
                        size={15}
                        id={product._id}
                        className=" text-[#891980]"
                        onClick={() => handleRemoveClick(product)}
                      />
                     </div>
                    )}
                  </div>
                  <div className="p-1 ">
                    <h3 className="text-sm">{Truncate(product?.name, 16)}</h3>
                    <p className="text-[12px] w-full ">
                      {Truncate(product?.description, 20)}
                    </p>
                    <div className="flex items-center">
                      <TbCurrencyNaira />
                      <h4 className="text-md">
                        <span></span>
                        {formatPrice(Number(product?.price))}
                      </h4>
                    </div>
                    <h4 className="text-[12px]">{product?.category}</h4>
                    <button      
      onClick={() => handleClick(product._id)}
      disabled={detailLoading[product._id]}
      
      className="text-[12px] w-16 h-5  border px-1 flex justify-center items-center rounded-md bg-white border-[#891980]">
    
        <span>
        {detailLoading[product._id]  ? (
        <FaSpinner  className="animate-spin"/>
      ):"More info"}
         </span>

                  
                    </button>
                  </div>
                  <div className="flex justify-between items-cente items-end ">
                    <div className="flex justify-between border-black mt-3 border rounded-lg">
                      <div className="flex ">
                        <button
                         onClick={()=>handleIncrease(product._id)}
                         className="w-7 h-7  text-sm bg-white text-black flex justify-center items-center rounded-md"
                        >
                          +
                        </button>
                        <h4 className="w-5 h-7 border-black border text-sm flex justify-center items-center  ">
                        {quantity[product._id] || 1}
                        </h4>
                        <button
                        onClick={()=>handleDecrease(product._id)}
                          className="w-7 h-7  bg-white border   text-sm flex  text-black  justify-center items-center rounded-md"
                        >
                          -
                        </button>
                      </div>
                    </div>

                    <button
                      id={product._id}
                      className={`border text-sm  w-14 h-7 flex justify-center items-center   rounded-md  border-[#C683EF]   ${isProductInCart(product._id)? "bg-[#C683EF] text-white":"hover:bg-pink-900 text-black hover:text-white"}`}
                      onClick={() => handleAddToCart(product)}
                    >
                    {cartLoading[product._id]==true? <FaSpinner className={` animate-spin  ${isProductInCart(product._id)?"text-white hover:text-white":"hover:text-white"}`}/>:
              <LiaShoppingBagSolid size={20}  />
            }
                    </button>
                  </div>
                </div>
              ))}
          </div>
        )}

        <div className="m-auto w-44">
          {!loading && visibleProducts < products.length && (
            <button
              onClick={handleLoadMore}
              className="w-52 border p-2 rounded-xl bg-[#891980] text-white font-bold"
            >
              {loading ? "Loading..." : "Load More"}
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
  )
}

export default Products
