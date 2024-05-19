import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Defaultlayout from "../layout/Defaultlayout"
import Cartcontext from "../cartcontext"
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
const ProductDetails = () => {
const [productDetail,setProductDetail] =useState()
const { handleWishlist,wishlist } = useContext(Cartcontext);
const params=useParams()
const productid=params.product_id
console.log(productid)

useEffect(()=>{
    axios({
    url:`http://localhost:4000/api/products/getProduct/${productid}`,
    method:"get"
}).then((res)=>{
    console.log(res.data?.product)
setProductDetail(res.data.product)
}).catch((err)=>{
console.log(err)
})

},[productid])


  return (
   < Defaultlayout>
    <div className="mt-32 flex justify-center mr-32 gap-10 ">
<div className="w-96 h-96 rounded-2xl overflow-hidden">
    <img src={productDetail?.image} className="w-full h-full" alt="" /></div>

<div>
<div className="p-3 bg-pink-200 text-black w-96">
<h2 className="text-3xl">{productDetail?.name}</h2>
</div>
<h3 className="text-lg">{productDetail?.description}</h3>
<h3 className="text-lg">{productDetail?.price}</h3>
{!wishlist.includes(productDetail?.name) ? (
                  <CiHeart
                    size={22}
                    className=""
                    onClick={() => handleWishlist(productDetail?.name)}
                  />
                ) : (
                  <FaHeart
                    size={20}
                    className=" text-[#fd00cd]"
                    onClick={() => handleWishlist(productDetail?.name)}
                  />
                )}
</div>



    </div>
    </Defaultlayout>
  )
}

export default ProductDetails