import {
  faArrowAltCircleLeft,
  faCartPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import Footer from "../components/footer"
import { useSelector, useDispatch } from "react-redux"
import {
  selectCartLength,
  selectCart,
  fetchUserCart,
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
  removeItemFromCart,
  clearCart,
} from "../stores/features/cart/cartSlice"
import { TbCurrencyNaira } from "react-icons/tb"
import { formatPrice } from "../utils/utils"
import { useContext, useEffect, useState } from "react"
import Cartcontext from "../cartcontext"
const Cart = () => {
  const { items, totalQuantity, totalPrice } = useSelector(selectCart)
  const cartLength = useSelector(selectCartLength)
  const dispatch = useDispatch()
    const{user,sessionId}=useContext(Cartcontext)
    const[ loading,setloading]=useState()

  useEffect(() => {
  try{
    setloading(true)
    if (user?._id || sessionId) {
      dispatch(fetchUserCart({ userId: user?._id, sessionId }));
    }
  }catch(err){
console.error(err)
setloading(false)
  }finally{
    setloading(false)
  }
  }, [dispatch, user,sessionId]);


  console.log("items",items)

  const handleRemoveFromCart = (productId) => {
    dispatch(removeItemFromCart({ userId: user?._id, productId,sessionId }));
  }

  const handleIncreaseQuantity = (productId,additionalQuantity) => {
    dispatch(increaseCartItemQuantity({ userId: user?._id, productId: productId,sessionId, quantity: additionalQuantity }));
  }

  const handleDecreaseQuantity = (productId,decreaseQuantity) => {
    dispatch(decreaseCartItemQuantity({ userId: user?._id, productId: productId,sessionId, quantity: decreaseQuantity }));

  }

  const handleremoveAllFromCart = () => {
    dispatch(clearCart({ userId: user?._id ,sessionId}));
  }






  return (
    <main>
      <div className=" flex items-end justify-between   xl:justify-between mt-5 p-3">
        <Link to="/home" className="text-lg text-[#891980] xl:ml-10">
          <FontAwesomeIcon icon={faArrowAltCircleLeft} size="2x" />
        </Link>

        <div className="cursor-pointer flex  relative text-center xl:items-center text-lg xl:mr-6  text-[#891980]">
         <span className="xl:block hidden lg:block md:block"> My Shopping Cart</span> 
         <span className="xl:hidden block lg:hidden md:hidden">
          Cart
         </span>
         <FontAwesomeIcon icon={faCartPlus}  />
          <div
            style={{ fontSize: "10px" }}
            className="w-4 text-sm bg-[#891980] text-white border-2 h-4 rounded-full border-[#891980] absolute flex justify-center items-center md:left-40 lg:left-[160px] lg:-top-2 xl:left-40 xl:-top-1 left-12 -top-2"
          >
            <h6>{cartLength}</h6>
          </div>
        </div>

        <div className="xl:mr-40 flex items-center gap-3">
          <p>Total Price:</p>
          <button className="py-2 xl:px-4 px-2 text-sm bg-blue-200 text-black flex justify-center items-center rounded-md">
          <TbCurrencyNaira /> 
            <span className="">
               {formatPrice(Number(totalPrice))}
                </span>
          </button>
          
        </div>
      </div>

   {!loading&& <div>
      {items?.length > 0 && (
        <div>
          {items?.map((product, index) => (
            <div key={index} className="  mt-5 xl:w-3/4 lg:w-3/4 mx-auto p-6 flex xl:gap-14 gap-3">
              <div className="flex p-3 w-32  h-32 xl:w-72  xl:h-52 rounded-xl hover:w-[400px] overflow-hidden">
                <img
                  src={product.productId?.image}
                  className="w-full h-full"
                  alt={product.productId?.name}
                />
              </div>
              <div className=" bg-white xl:h-52 w-full border shadow-md text-black p-3">
                <h2 className="text-md text-center mb-2">{product.productId?.name}</h2>
                <h2 className="text-sm">{product.productId?.description}</h2>
                <div className="flex items-center">
                <TbCurrencyNaira /> 
                <h4 className="text-md">{formatPrice(Number(product.productId?.price))}</h4>
                </div>
              
                <div className="flex items-center">
                <TbCurrencyNaira /> 
                <h4 className="text-md"><span></span>{formatPrice(Number(product.productId?.price)*product.quantity)}</h4>
                </div>
                <div className="flex justify-between mt-3">
                  <div className="flex ">
                    <button
                      className="w-9 h-9 border text-sm bg-white text-black flex justify-center items-center rounded-md"
                      onClick={() => handleIncreaseQuantity(product.productId._id,1)}
                    >
                      +
                    </button>
                    <h4 className="w-9 h-9 text-sm flex justify-center items-center rounded-md">
                      {product.quantity}
                    </h4>
                    <button
                      className="w-9  bg-white border  h-9 text-sm flex  text-black  justify-center items-center rounded-md"
                      onClick={() => handleDecreaseQuantity(product.productId._id,1)}
                    >
                      -
                    </button>
                  </div>
                  <button
                    onClick={() => handleRemoveFromCart(product.productId._id)}
                    className="del-btn  text-sm"
                  >
                    <FontAwesomeIcon color="red" icon={faTrash} />
                    Remove Item
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="flex  flex-wrap 2xl:w-3/4 2xl:flex-wrap  sm:w-full sm:p-8 justify-end  xl:flex-nowrap  lg:p-3 lg:flex-nowrap md:flex-nowrap md:p-10   mt-12 xl:w-3/5 lg:w-3/4 p-2 mx-auto xl:justify-between   md:items-end lg:items-end mb-20">
            <div className="w-[500px] h-[300px] sm:w-full bg-pink-white border-black  sm:mb-10 mb-9 border-2 rounded-md p-4">
              <h1 className="text-xl text-center">Cart Summary</h1>
              <hr className="" style={{ borderColor: "black" }} />
              <div className="mt-3">
                <ul>
                  <li className="mb-3 flex items-center justify-between">
                    No of item <p>
                      {totalQuantity}</p>
                  </li>
                  <li className="mb-3 flex items-center justify-between">
                    Total Price <p className="flex items-center"> 
                <TbCurrencyNaira /> 
                      {totalPrice}</p>
                  </li>
                  {/* <li className="mb-3  flex items-center justify-between">
                    Total Price <p className="flex items-center">
                <TbCurrencyNaira /> 
                      {totalPrice}</p>
                  </li> */}
                
                </ul>
              </div>
              <hr />
              <div className="mt-12 ">
<div className="flex gap-2">
<input type="checkbox" name="" id="" />
<p>Agree</p>
</div>
                <label className="text-lg text-red-700" >Delivery fee  excluded!!!</label>
              </div>
              <div className="text-center mt-2  ">
                <Link to={"/paystack"}>
                <button  className=" bg-black p-4 text-white text-[12px]">
                  Proceed to Checkout
                </button>
                </Link>
              </div>
            </div>
            <div className=" mb-10 ml-32 xl:ml-0 xl:mb-0 " onClick={() => handleremoveAllFromCart()}>
              <button className="bg-red-500 text-sm  w-32 p-2 text-white rounded-lg">
                Empty Cart
              </button>
            </div>
          </div>
        </div>
      )}</div>
}

 { loading && <div>loading....</div> }
      {!loading&&items?.length === 0 && (
        <div className="w-full  h-[400px] flex justify-center items-center">
          <h1 className="text-center  text-3xl">Your cart is empty</h1>
        </div>
      )}

      <Footer logoSrc="./Logo4.png" />
    </main>
  )
}

export default Cart
