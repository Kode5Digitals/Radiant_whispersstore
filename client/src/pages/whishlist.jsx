import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist } from '../stores/features/whishlist/wishlistSlice';
import Defaultlayout from '../layout/Defaultlayout';
import {  addToCart } from "../stores/features/cart/cartSlice";
import { clearWishlist  } from "../stores/features/whishlist/wishlistSlice";
import { ToastContainer } from 'react-toastify';
import {Capitalize} from '../utils/utils';
import HoverDescription from '../components/HoverDescription';
function Wishlist() {
  const dispatch = useDispatch();
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
  
  
  return (
   <Defaultlayout>
     <div className='mt-[85px] min-h-[350px]'>
      <h2 className='text-center text-xl w-full z-30 fixed bg-slate-100 p-2'>
      {wishlistItems.length <=0 &&
      <span >No </span>
    }
        wishlist</h2>
      

     {wishlistItems.length >=1 &&

<>
<div className='flex justify-center gap-16 overflow-auto '>

{wishlistItems?.map((item) => (
  <div key={item._id} className=' mt-20 w-72 p-3 text-white hover:border-pink-600  border-2 rounded-lg relative group bg-[#a82f73] '>
    <span className='text-xl'>{Capitalize (item.name)}</span>
    <div className='min-w-32 mb-2 '>
    <img src={item.image} alt="" />
    </div>
    <p  className='p-1 rounded-sm text-[13px] mb-2 ' ># {item.price}</p>
   <div className='flex justify-between'>
   <button   id={item._id} className='p-1 rounded-sm text-[13px] text-black    bg-pink-300' onClick={()=>handleAddToCart(item)}>Add to cart</button>
    <button id={item._id}  className='p-1 text-[13px]  rounded-sm w-19  bg-red-400' onClick={() => handleRemoveFromWishlist(item._id)}>Remove from whishlist</button>
  <HoverDescription description={item.description}/>
   </div>
  </div>

))}
</div>
      
<div className='flex justify-end mt-12 p-3'>
<button onClick={HandleEmptyAllwishlist} className='bg-black text-white text-[13px] rounded-sm p-2'>Empty all whishlist</button>
  </div></>

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
