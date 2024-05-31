import { useState } from "react";
import { setProducts } from "../stores/features/product/productSlice";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useDispatch} from "react-redux";
import httpAuth from "../utils/https";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaSpinner } from "react-icons/fa";
const Navbar = () => {
  const dispatch = useDispatch()
  const [hovereddivItem, setHovereddivItem] = useState(null);
  const [currentCat,setCurrentCat]=useState("Products");
const[loading,setLoading]=useState(false)

const fetchCategory = async (name,text) => {
      try {
  setLoading(true)
        const response = await httpAuth.get(`/api/products/category/${name}`);
        console.log(response)
dispatch(setProducts(response.data));
setCurrentCat(text)

      } catch (error) {
        console.error('Error fetching products:', error);
      }finally{
  setLoading(false)
      }
    
    };
    const handleAllProducts=async()=>{
      try {
  setLoading(true)
        const response= await httpAuth.get(`/api/products/allProducts`);
        dispatch(setProducts(response.data.products));
        setCurrentCat("All Products")

        }
        catch (error) {
        console.log(error)
        }finally{
  setLoading(false)
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
      className="bg-[#571283] opacity-8 text-white
      font-bold text-sm   flex  items-center justify-around "
    >
      <div className="flex gap-10 items-center ">
        <div
          className="group relative  px-4 py-2   w-44  hover:bg-white hover:text-black"
          onMouseEnter={() => handledivItemHover("Item 1") }
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex  cursor-pointer text-md items-center justify-around ">
          <BiSolidCategoryAlt /><h4>{currentCat}
          </h4>
          {loading && <FaSpinner  className="animate-spin"/>}

            <span>
              <MdKeyboardArrowDown />
            </span>
          </div>
          {hovereddivItem === "Item 1" && (
            <div className="absolute cursor-pointer  left-0  w-44 border-t-0 bg-[#571283] max-w-72 xl:bg-white border top-8 z-30 py-2">
               <div onClick={()=>handleAllProducts()} className="px-4 py-2  hover:bg-[#f4e4f2]  hover:text-black">
                All products
              </div>

              <div onClick={()=>fetchCategory("body cream","Body Cream")} className="px-4 py-2  hover:bg-[#f4e4f2]  hover:text-black">
                Body Cream
              </div>

              <div  onClick={()=>fetchCategory("face cream","Face Cream")} className="px-4 py-2   hover:bg-[#f4e4f2]  hover:text-black">
                Face Cream
              </div> 
               <div onClick={()=>fetchCategory("body oil", "Body Oil")}  className="px-4 py-2   hover:bg-[#f4e4f2] hover:text-black">
                Body oil
              </div> 
               <div  onClick={()=>fetchCategory("body Wash","Body Wash")} className="px-4 py-2  hover:bg-[#f4e4f2]  hover:text-black">
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
