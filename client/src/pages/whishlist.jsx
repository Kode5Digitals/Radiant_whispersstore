import { useDispatch, useSelector } from 'react-redux';
import { clearWishlist, deleteWishlist, fetchWishlists} from '../stores/features/whishlist/wishlistSlice';
import Defaultlayout from '../layout/Defaultlayout';
import {  addItemToCart} from "../stores/features/cart/cartSlice";
import { ToastContainer } from 'react-toastify';
import {Capitalize, formatAmount} from '../utils/utils';
import HoverDescription from '../components/HoverDescription';
import { useContext, useEffect, useState } from 'react';
import { TbCurrencyNaira } from 'react-icons/tb';
import { FaShoppingCart } from 'react-icons/fa';
import Cartcontext from '../cartcontext';



function Wishlist() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const wishlist = useSelector((state)=>state?.wishlist.items); 
const {user,sessionId,loadUser}=useContext(Cartcontext)
const userId=user?._id


useEffect(()=>{
  loadUser(); 
},[])


useEffect(() => {
  try{
        if (user?._id || sessionId) {
          dispatch(fetchWishlists({ userId: user?._id, sessionId }));
          console.log("fetched")
        }
      }catch(err){
    console.error(err)}

  }, [user,sessionId, dispatch])


const handleRemoveFromWishlist = (itemId) => {
    dispatch(deleteWishlist({productId:itemId,sessionId,userId}));
  };


  const handleAddToCart = (productId) => {
    dispatch(addItemToCart({ userId:user?._id,sessionId,productId,quantity:1 }))
    
  }

  const HandleEmptyAllwishlist = () => {
    const wishlistData = {
      userId: user ? user._id : null,
      sessionId: user ? null : sessionId,
    };
    dispatch(clearWishlist(wishlistData));
  };

  const handleBack = () => {
    setIsOpen(!isOpen)
  };
  
  return (
   <Defaultlayout  setIsOpen={setIsOpen} isOpen={isOpen} Back={handleBack}>
     <div className='xl:mt-[70px] mt-36 md:mt-16 lg:mt-16  min-h-[350px]'>
      <h2 className='text-center text-xl w-full z-30 fixed bg-slate-100 p-2'>
      { wishlist.length <=0 &&
      <span >No </span>
    }
       { wishlist.length ==1? "Wishlist":"Wishlists"}</h2>
      

     { wishlist?.length >=1 &&

<div>
<div className='flex flex-wrap justify-center gap-10 xl:w-3/4 w-full md:px-12 sm:p-4 m-auto mb-9 pt-2'>

{wishlist?.map((item) => (
  <div key={item.productId?._id} className='  mt-20 xl:w-60  max-w-60 p-3 h-84   hover:border-white  border-2 rounded-lg relative group bg-whit shadow-lg '>
    <span className='text-sm'>{Capitalize(item.productId?.name)}</span>
    <div className='xl:min-w-32  h-42  mb-2 '>
    <img src={item.productId.image} alt="" className='w-full h-full' />
    </div>
    <div className="flex items-center mb-2">

                <TbCurrencyNaira /> 
    <span  className='p-1 rounded-sm text-[13px]'>{formatAmount(Number(item.productId?.price))}</span>

                  </div>
   <div className='flex justify-between'>
   <button   id={item.productId?._id} className='p-3 rounded-sm text-[13px] text-black    bg-pink-300' onClick={()=>handleAddToCart(item.productId._id)}>
   <FaShoppingCart size={16}/>

   </button>
    <button id={item._id}  className='p-1 text-[13px]  rounded-sm w-19 text-white bg-red-400' onClick={() => handleRemoveFromWishlist(item.productId?._id)}>Remove from whishlist</button>
  <HoverDescription description={item.productId?.description}/>
   </div>
  </div>

))}
</div>
      
<div className='flex justify-end mt-12 p-3'>
<button  className='bg-black text-white text-[13px] rounded-sm p-2' onClick={HandleEmptyAllwishlist}>Empty all whishlist</button>
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
