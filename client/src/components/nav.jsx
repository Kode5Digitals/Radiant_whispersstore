import { useState } from "react";
import { setProducts } from "../stores/features/product/productSlice";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useDispatch} from "react-redux";
import httpAuth from "../utils/https";
import { BiSolidCategoryAlt } from "react-icons/bi";
const Navbar = () => {
  const dispatch = useDispatch()
  const [hovereddivItem, setHovereddivItem] = useState(null);

const fetchCategory = async (name) => {
      try {
        const response = await httpAuth.get(`/api/products/category/${name}`);
        console.log(response)
dispatch(setProducts(response.data));

      } catch (error) {
        console.error('Error fetching products:', error);
      }
    
    };
    const handleAllProducts=async()=>{
      try {
        const response= await httpAuth.get(`/api/products/allProducts`);
        dispatch(setProducts(response.data.products));

        }
        catch (error) {
        console.log(error)
        }
       
     }
  const handledivItemHover = (itemName) => {
    setHovereddivItem(itemName);
  };

  const handleMouseLeave = () => {
    if (!document.querySelector(".hovered-div-item:hover")) {
      setHovereddivItem(null);
    }
  };
  // #fd00cd
  return (
    <div
      className="bg-[#fd00cd] opacity-8 text-white
      font-bold text-sm   flex  items-center justify-around "
    >
      <div className="flex gap-10 items-center ">
        <div
          className="group relative  px-4 py-2  hover:bg-white hover:text-black"
          onMouseEnter={() => handledivItemHover("Item 1") }
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex  cursor-pointer text-lg items-center ">
          <BiSolidCategoryAlt /><h4>Products</h4>
            <span>
              <MdKeyboardArrowDown />
            </span>
          </div>
          {hovereddivItem === "Item 1" && (
            <div className="absolute cursor-pointer  left-0  w-36  text-white bg-pink-400 max-w-72 xl:bg-white  z-30 py-2">
               <div onClick={()=>handleAllProducts()} className="px-4 py-2  hover:bg-[#f4e4f2]  hover:text-black">
                All products
              </div>

              <div onClick={()=>fetchCategory("body cream")} className="px-4 py-2  hover:bg-[#f4e4f2]  hover:text-black">
                Body Cream
              </div>

              <div  onClick={()=>fetchCategory("face cream")} className="px-4 py-2   hover:bg-[#f4e4f2]  hover:text-black">
                Face Cream
              </div> 
               <div onClick={()=>fetchCategory("body oil")}  className="px-4 py-2   hover:bg-[#f4e4f2] hover:text-black">
                Body oil
              </div> 
               <div  onClick={()=>fetchCategory("body Wash")} className="px-4 py-2  hover:bg-[#f4e4f2]  hover:text-black">
                Body Wash
              </div>
            </div>
          )}
        </div>

       
      </div>
      
      {/* <ToastContainer
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
             /> */}
    </div>
  );
};

export default Navbar;
