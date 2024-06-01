import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist } from '../stores/features/whishlist/wishlistSlice';
import Defaultlayout from '../layout/Defaultlayout';
import {  addToCart } from "../stores/features/cart/cartSlice";
import { clearWishlist  } from "../stores/features/whishlist/wishlistSlice";
import { ToastContainer } from 'react-toastify';
import {Capitalize, formatAmount} from '../utils/utils';
import HoverDescription from '../components/HoverDescription';
import { useState } from 'react';
import { TbCurrencyNaira } from 'react-icons/tb';
import { FaShoppingCart } from 'react-icons/fa';
function Wishlist() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const {wishlistItems }= useSelector((state)=>state?.whishlist);      
const handleRemoveFromWishlist = (itemId) => {
    dispatch(removeFromWishlist(itemId));
  };

  
const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };


  const HandleEmptyAllwishlist=()=>{
    dispatch(clearWishlist());

  }
  const handleBack = () => {
    setIsOpen(!isOpen)
  };
  
  return (
   <Defaultlayout  setIsOpen={setIsOpen} isOpen={isOpen} Back={handleBack}>
     <div className='xl:mt-[70px] mt-36 md:mt-16 lg:mt-16  min-h-[350px]'>
      <h2 className='text-center text-xl w-full z-30 fixed bg-slate-100 p-2'>
      {wishlistItems.length <=0 &&
      <span >No </span>
    }
       {wishlistItems.length ==1? "Wishlist":"Wishlists"}</h2>
      

     {wishlistItems.length >=1 &&

<div>
<div className='flex flex-wrap justify-center gap-10 xl:w-3/4 w-full md:px-12 sm:p-4 m-auto mb-9 pt-2'>

{wishlistItems?.map((item) => (
  <div key={item._id} className='  mt-20 xl:w-60  max-w-60 p-3 h-84   hover:border-white  border-2 rounded-lg relative group bg-whit shadow-lg '>
    <span className='text-sm'>{(Capitalize(item.name))}</span>
    <div className='xl:min-w-32  h-42  mb-2 '>
    <img src={item.image} alt="" className='w-full h-full' />
    </div>
    <div className="flex items-center mb-2">

                <TbCurrencyNaira /> 
    <span  className='p-1 rounded-sm text-[13px]'>{formatAmount(Number(item.price))}</span>

                  </div>
   <div className='flex justify-between'>
   <button   id={item._id} className='p-3 rounded-sm text-[13px] text-black    bg-pink-300' onClick={()=>handleAddToCart(item)}>
   <FaShoppingCart size={16}/>

   </button>
    <button id={item._id}  className='p-1 text-[13px]  rounded-sm w-19 text-white bg-red-400' onClick={() => handleRemoveFromWishlist(item._id)}>Remove from whishlist</button>
  <HoverDescription description={item.description}/>
   </div>
  </div>

))}
</div>
      
<div className='flex justify-end mt-12 p-3'>
<button onClick={HandleEmptyAllwishlist} className='bg-black text-white text-[13px] rounded-sm p-2'>Empty all whishlist</button>
  </div>
  </div>

     }
   
    </div>
  
    {/* <span className='text-[12px]'>{item.description}</span> */}

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
   </Defaultlayout>
  );
}

export default Wishlist;
