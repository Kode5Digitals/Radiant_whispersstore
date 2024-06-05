import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Defaultlayout from "../layout/Defaultlayout"
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6"
import { useDispatch, useSelector } from "react-redux"
import {toggleWishlistItem} from"../stores/features/whishlist/wishlistSlice"
import {  addItemToCart } from "../stores/features/cart/cartSlice";
import { TbCurrencyNaira } from "react-icons/tb";
import { formatPrice } from "../utils/utils";
import { FaShoppingCart } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import Cartcontext from "../cartcontext";

const ProductDetails = () => {
const [productDetail,setProductDetail] =useState()
const params=useParams()
const productid=params.product_id
const {wishlistItems}= useSelector((state)=>state?.whishlist); 
const dispatch = useDispatch()
const {user,sessionId}=useContext(Cartcontext)

 
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

const handleAddToWishlist=(Id)=>{
  dispatch(toggleWishlistItem(Id))
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
<div className="flex w-12 border rounded border-[#fd00cd] mt-3">
{!wishlistItems.includes(productDetail) ? (
                  <CiHeart
                    size={20}
                    className="ml-6"
                    onClick={() => handleAddToWishlist(productDetail)}
                  />
                ) : (
                  <FaHeart
                    size={18}
                    className=" text-[#fd00cd] mr-2"
                    onClick={() => handleAddToWishlist(productDetail)}
                  />
                )}
</div>
{!wishlistItems.includes(productDetail) ? (<p>
Add to whishlist
</p>):(<p>Item added to wishlist</p>)}
</div>

                <button className="mt-4" onClick={()=>handleAddToCart(productDetail)}>
               <FaShoppingCart size={24}/>
                </button>
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

    </Defaultlayout>
  )
}

export default ProductDetails