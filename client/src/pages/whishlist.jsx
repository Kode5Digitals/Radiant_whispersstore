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
import { LiaShoppingBagSolid } from 'react-icons/lia';
import { CiCircleRemove } from 'react-icons/ci';



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
    <div className='xl:min-w-32  h-40   mb-2  overflow-hidden'>
    <img src={item.productId.image} alt="" className='w-full h-full' />
    </div>
   
   <div className='flex justify-between items-center'>
   <button   id={item.productId?._id} className=' text-[13px] text-black ' onClick={()=>handleAddToCart(item.productId._id)}>
   <LiaShoppingBagSolid className='text-[#891984]' size={20}/>

   </button>
   <div className="flex items-center border-2 p-2 rounded-sm ">
<TbCurrencyNaira /> 
<span  className=' text-[16px] '>{formatAmount(Number(item.productId?.price))}</span>
  </div>
    <button id={item._id}  className=' text-[13px] hover:bg-red-600 hover:text-white ' onClick={() => handleRemoveFromWishlist(item.productId?._id)}><CiCircleRemove  size={24}/></button>
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
