import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Defaultlayout from "../layout/Defaultlayout"
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6"
import { useDispatch, useSelector } from "react-redux"
import {addWishlist, deleteWishlist} from"../stores/features/whishlist/wishlistSlice"
import {  addItemToCart } from "../stores/features/cart/cartSlice";
import { TbCurrencyNaira } from "react-icons/tb";
import { formatPrice } from "../utils/utils";
import { ToastContainer } from "react-toastify";
import Cartcontext from "../cartcontext";
import { LiaShoppingBagSolid } from "react-icons/lia";

const ProductDetails = () => {
const [productDetail,setProductDetail] =useState()
const params=useParams()
const productid=params.product_id
const wishlistItems= useSelector((state)=>state?.wishlist.items); 
const cartItems= useSelector((state)=>state?.cart.items); 
const dispatch = useDispatch()
const {user,sessionId,loadUser}=useContext(Cartcontext)


useEffect(()=>{
  loadUser(); 
},[])
useEffect(()=>{
    axios({
    url:`https://radiant-whispersstore.onrender.com/api/products/getProduct/${productid}`,
    method:"get"
}).then((res)=>{
setProductDetail(res.data.product)
}).catch((err)=>{
console.log(err)
})
},[productid])



const handleAddToWishlist = (product) => {
  dispatch(addWishlist({ userId:user?._id, sessionId, productId:product?._id}));
}
const handleRemoveToWishlist = (product) => {
  if (!wishlistItems) return false;
  dispatch(deleteWishlist({ userId:user?._id, sessionId,productId:product?._id}));
}


 
const isProductInWishlist = (productId) => {
  const wish= wishlistItems.some((item) => item.productId._id === productId)
 return wish
}
const isProductInCart = (productId) => {
  const wish= cartItems.some((item) => item.productId._id === productId)
 return wish
}
const handleAddToCart = (product) => {
  const selectedQuantity =  1
  dispatch(addItemToCart({ userId:user?._id,sessionId,productId: product._id,quantity:selectedQuantity }))
  
}
  return (
   < Defaultlayout>
    <div className="mt-40 h-full p-3 xl:p-0 xl:flex xl:w-3/4  m-auto mb-16 justify-center xl:mr-32 xl:gap-10  ">
<div className=" w-1/4 rounded-2xl border overflow-hidden shadow-lg  ">
    <img src={productDetail?.image} className="w-full h-full" alt="" /></div>

<div className="p-2  ">
<div className="xl:p-3 bg-[#EEDCF9] text-black xl:w-full p-1  ">
<h2 className="xl:text-3xl">{productDetail?.name}</h2>
</div>
<h3 className="xl:text-sm text-[12px] mt-3">{productDetail?.description}</h3>


<div className="flex items-center mt-3">
                <TbCurrencyNaira/>
<h3 className="xl:text-lg ">{formatPrice(Number(productDetail?.price))}</h3>
                </div>
                <div className="flex items-end gap-3">
<div className="flex w-12 border rounded border-[#891980] mt-3 cursor-pointer">
{!isProductInWishlist(productDetail?._id)?(
                  <CiHeart
                    size={20}
                    className="ml-6"
                    onClick={() => handleAddToWishlist(productDetail)}
                  />
                ) : (
                  <FaHeart
                    size={18}
                    className=" text-[#891980] mr-2"
                    onClick={() => handleRemoveToWishlist(productDetail)}
                  />
                )}
</div>
{!isProductInWishlist(productDetail?._id) ? (<p>
Add to whishlist
</p>):(<p>Item added to wishlist</p>)}
</div>

             <div className="flex mt-4 gap-9">
             <button className="" onClick={()=>handleAddToCart(productDetail)}>
               <LiaShoppingBagSolid size={24} className={`${!isProductInCart(productDetail?._id)?'text-black':'text-[#891980]'}`}/></button>
                {!isProductInCart(productDetail?._id) ? (<p>
Add to cart
</p>):(<p>Item in cart</p>) }
             </div>
                
</div>

<ToastContainer
            position="bottom-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
             />

    </div>
   

    </Defaultlayout>
  )
}

export default ProductDetails