import { PiGreaterThanLight } from "react-icons/pi";
import { PiLessThanLight } from "react-icons/pi";
import {  useEffect, useRef, useState } from "react";
import { CiHeart } from "react-icons/ci";
import httpAuth from "../utils/https";
import {  addToCart } from "../stores/features/cart/cartSlice";
import {toggleWishlistItem} from"../stores/features/whishlist/wishlistSlice"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {Truncate} from "../utils/utils"
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { TfiMore } from "react-icons/tfi";
function NewArrivals() {
  const flexContainerRef = useRef(null);
  const [showLeftIndicator, setShowLeftIndicator] = useState(false);
const {wishlistItems }= useSelector((state)=>state?.whishlist);      

  const [products, setProducts] = useState([]);
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        const response = await httpAuth.get('/admin/product/new-arrivals');
        const data = await response.data;
        setProducts(data);
        console.log("new arrivals :",data)
      } catch (error) {
        console.error('Error fetching new arrivals:', error);
      }
    };

    fetchNewArrivals();
  }, []);



  const handleScroll = () => {
    const container = flexContainerRef.current;
    const scrollPosition = container.scrollLeft;
    setShowLeftIndicator(scrollPosition > 0);
  };

  const scrollLeft = () => {
    flexContainerRef.current.scrollBy({
      left: -100, 
      behavior: "smooth",
    });
  };


  const scrollRight = () => {
    flexContainerRef.current.scrollBy({
      left: 100, 
      behavior: "smooth",
    });
  };


  const handleAddToWishlist=(Id)=>{
    dispatch(toggleWishlistItem(Id))
  }
  const isProductInWishlist = (productId) => {
    const wish =wishlistItems.some(item => item._id === productId)
    return wish
  };
  
  
  //add to cart
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  
  

  return ( 
    <div className="mt-24">

<div className={`font-bold text-3xl   justify-center xl:mt-10 mt-12 xl:mb-0 mb-7 xl:gap-12 gap-6  items-center border-0 flex `}>
    <hr  className="text-black  xl:w-1/3  w-3/12"/>
<h4 className="xl:text-2xl text-lg ">
New Arrivals
</h4>
<hr  className="text-black xl:w-1/3   w-3/12"/>

</div>

     <div className="flex  justify-between ">
     {showLeftIndicator && (
        <div className="  w-12 h-12 flex justify-center bg-[#ebadd2]  items-center rounded-full cursor-pointer "  onClick={scrollLeft}>
          <button className="scroll-left bg-red">
          <PiLessThanLight />
          </button>
        </div>
      )}

        <div className=" cursor-pointer  w-12 h-12 flex justify-center bg-[#ebadd2]  items-center rounded-full  " onClick={scrollRight}>
          <button className="scroll-right" >
            <PiGreaterThanLight />
          </button>
        </div>

     </div>
      
      <div
        className="flex  justify-between xl:gap-12 gap-2 p-3 scroll "
        ref={flexContainerRef}
        onScroll={handleScroll}
      >
          {products?.map((item,index) => (
            <div key={index} className="mb-10">
              <div className="w-52 h-52 shadow-lg border-2 rounded-lg mb-3 relative">
                <img src={item.image} className="w-full h-full" alt="" />
              
                {!isProductInWishlist(item._id)? ( 
                  <CiHeart
                    size={22}
                    id={item._id}
                    className="m-2 absolute top-1 right-2 cursor-pointer text-[#080808]"
                    onClick={() => handleAddToWishlist(item)}
                  />
                ) : (
                  <FaHeart
                    size={20}
                    id={item._id}
                    className="m-2 absolute top-1 right-2 cursor-pointer text-[#fd00cd]"
                    onClick={() => handleAddToWishlist(item)}
                  />
                )}

              </div>
              <h3 className="text-lg">{item.name}</h3>
              <p className="text-[13px]">{Truncate(item?.description,30)}</p>
              <h4 className="text-[13px]">#{item.price}</h4>
              <div className="flex justify-between mt-2">
               


                <button className="text-[12px]   border  px-3 rounded-md  bg-white border-pink-500 ">
             <Link  to={`/ProductDetails/${item?._id}`} className="flex items-end gap-2">
             More<TfiMore />
                </Link></button> 
                <button
                     id={item._id}
                  className="border text-sm px-8 py-2 rounded-md  bg-pink-300 border-pink-600 hover:text-white hover:bg-pink-950"
                  onClick={()=>handleAddToCart(item)}
                >
                <FaShoppingCart />
                </button>
              
              </div>
            </div>
          ))}
            </div>
  
    </div>
  )
}
export default NewArrivals;
