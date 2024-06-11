import { LiaShoppingBagSolid } from "react-icons/lia"
import { TfiSearch } from "react-icons/tfi"
import { CiHeart } from "react-icons/ci"
import Cartcontext from "../cartcontext"
import { useCallback, useContext, useEffect, useRef, useState } from "react"
import Login from "../pages/Login"
import Register from "../pages/Register"
import { RxHamburgerMenu } from "react-icons/rx"
import { BiSolidRegistered, BiSolidUserPin } from "react-icons/bi"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import httpAuth from "../utils/https"
import HoverInfo from "./hoverInfo"
import { MdAccountCircle, MdArrowBackIos, MdOutlineCancel } from "react-icons/md"
import { IoLogoWhatsapp, IoMdLogIn } from "react-icons/io"
import { IoMail, IoReload } from "react-icons/io5"
import { FaFacebook, FaInstagramSquare } from "react-icons/fa"
import { AiOutlineLogout } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux"
import { fetchUserCart } from "../stores/features/cart/cartSlice"
import { fetchWishlists } from "../stores/features/whishlist/wishlistSlice"



const MainNavbar = ({  logoSrc,toggleSidebar }) => {
  const {
    isOpen,
    setIsOpen,
    openLogin,
    setOpenLogin, 
    setOpenRegister,
    openRegister,
    login,
    isadmin,
    setisadmin,
    setLogin,
    cartLength,
    setCartLength
  } = useContext(Cartcontext)
  const [query, setQuery] = useState("")
  const [searchedProducts, setSearchedProducts] = useState([])
  const [showProducts, setShowProducts] = useState(false)
  const productRef = useRef(null)
  const  wishlists  = useSelector((state) => state?.wishlist.items)
   const[openNavMenu,setOpenNavMenu]=useState(false)
   const[openContact,setOpenContact]=useState(false)
   const[loading,setLoading]=useState(false)
   const totalQuantity = useSelector((state) => state.cart.totalQuantity);
   const dispatch=useDispatch()
   const {user,sessionId}=useContext(Cartcontext)

  // console.log("wishlists:",wishlists)
    
   
    useEffect(() => {
      try{
        if (user?._id || sessionId) {
          dispatch(fetchUserCart({ userId: user?._id, sessionId }));
        }
      }catch(err){
    console.error(err)
      }}, [dispatch, user,sessionId]);

   useEffect(() => {
     setCartLength(totalQuantity);
   }, [totalQuantity,setCartLength]);
  

  useEffect(() => {
  try{
        if (user?._id || sessionId) {
          dispatch(fetchWishlists({ userId: user?._id, sessionId }));
        }
      }catch(err){
    console.error(err)}

  }, [user,sessionId, dispatch])

  const handleSearch = useCallback(async () => {
    setLoading(true)
    try {
      const response = await httpAuth.get(`/api/products/?search=${query}`)
      const data = await response.data
      setSearchedProducts(data)
    } catch (error) {
      console.error("Error fetching products:", error)
    }finally{
      setLoading(false)
    }
  }, [query])

  //clear all products
  const clearProducts = useCallback(() => {
    setSearchedProducts([])
  }, [])

  useEffect(() => {
    const words = query
    if (words.length > 3) {
      handleSearch()
      setShowProducts(true)
    } else {
      clearProducts()
    }
  }, [query, handleSearch, clearProducts])

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleClickBack = () => {
      setShowProducts(false)
      setQuery("")
  }

  const HandleOpenNavMenu=()=>{
    setOpenNavMenu(!openNavMenu)
   setOpenContact (false)

  }
  const ToggleContact=()=>{
   setOpenContact (!openContact)
   setOpenNavMenu(false)

  }
  const cancelContact=()=>{
    setOpenContact (false) 
  }
  const cancelNavMenu=()=>{
    setOpenNavMenu(false)
  }

  const handleOpenRegister=()=>{
setOpenRegister(true)
setOpenContact (false)
setOpenNavMenu(false)

  }

  const handleOpenLogin =()=>{
    setOpenLogin(true)
    setOpenNavMenu(false)
setOpenContact (false)

      }
      const handleSetLogOut=()=>{
        localStorage.removeItem("Login")
        localStorage.removeItem("Admin")
         localStorage.removeItem("token")
        localStorage.removeItem("refreshToken")
        setisadmin(false)
        setLogin(false)
        location.reload("/")
      }
    
  // useEffect(() => {
  //   document.addEventListener('click', handleClickOutside)
  //   return () => {
  //     document.removeEventListener('click', handleClickOutside)
  //   }
  // }, [])
  const handleNavigation = (path) => {
    window.location.href = path; // Use window.location.href for full page reload
  };

  return (
    <div className="relative">
     
      <nav
        className="text-[#891980]  
      font-bold text-sm   p-3 sm:px-5  flex-wrap xl:flex-nowrap  bg-white border-b shadow-md flex fixed w-full  z-50  items-end top-0 xl:justify-around justify-between"
      >
        <RxHamburgerMenu
          className="xl:hidden block md:hidden"
          size={20}
          onClick={toggleMenu}
        />
        <Link to={"/"}>
          <div className="xl:ml-4 w-52  md:w-40">
            <img src={logoSrc} alt="Radiantwhispersstore Logo" className="" />
          </div>
        </Link>

        <div className="md:flex  md:flex-row-reverse   items-center  md:w-2/3 md:justify-between   ">
          <div className="xl:hidden  flex   md:flex gap-4 ">
          <div className="flex items-center gap-1 ">
           <div className="relative">
           <Link to={"/whishlist"}> 
            <span>
                <CiHeart size={22} />
              </span>
            </Link>
            <div
                style={{ fontSize: "10px" }}
                className="w-4 text-sm  bg-black text-white h-4 rounded-full border absolute flex justify-center items-center bottom-[-10px] left-2    md:bottom-[-10px]"
              >
                <h6>{wishlists?.length||0}</h6>
              </div>
              
           </div>
           
            </div>
            
            <div className="cursor-pointer relative xl:hidden block ">
              <Link to={"/cart"}>
                {" "}
                <LiaShoppingBagSolid size={20} />
              </Link>
              <div
                style={{ fontSize: "10px" }}
                className="w-4 text-sm  bg-black text-white h-4 rounded-full border absolute flex justify-center items-center bottom-[-10px] left-2    md:bottom-[-10px]"
              >
                <h6>{cartLength}</h6>
              
              </div>
            </div>          
            <div className="cursor-pointer relative  hidden ">
              <CiHeart size={22} />
              <div
                style={{ fontSize: "10px" }}
                className="w-4 text-sm text-white  h-4 rounded-full border absolute flex justify-center items-center bottom-[-10px] left-2 md:bottom-[-10px]"
              >
                <p>{wishlists?.length||0}</p>
              </div>
            </div>
            <BiSolidUserPin
              size={27}
              className="hidden md:block "
              onClick={toggleSidebar} 
            />
          </div>
          <div className="">
           <div className=" hidden xl:block md:block lg:block  ">
           <div className=" border  md:items-center md:mr-10 md:mt-0 xl:mr-20 flex  w-[500px] md:w-[400px]  p-2 rounded-lg border-[#891980]   gap-3 items-center mt-6 xl:mt-0">
              <TfiSearch />

              <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search"
                style={{ background: 0, outline: "0" }}
                className="w-full"
              />
             {loading&&<IoReload className="animate-spin"/> }
                {showProducts && searchedProducts.length > 0 && (
              <div
                ref={productRef}
                className="absolute  searchcase xl:top-16 bg-white right-[500px]  xl:w-[418px]  xl:max-h-[300px]   h-screen pb-10 border-b-black border-3  top-[140px]   overflow-y-auto p-2"
              >
               <div className="flex items-center justify-around">
               <MdArrowBackIos onClick={handleClickBack} size={20}/>
               <h4 className="text-center">Radiantwhispersstore</h4>
               <div></div>
               </div>
                {searchedProducts.map((product, index) => (
                  <Link to={`/ProductDetails/${product?._id}`} key={index}>
                    <div className=" flex  xl:gap-8 mt-8 text-black hover:bg-[#e8e8e8]">
                      <div className="w-1/2">
                        <img src={product.image} className="xl:w-16 xl:h-16" alt="" />
                      </div>
                      <div>
                        <p>{product.name}</p>
                        <p className="text-[10px]">{product.description}</p>

                        <p>#{product.price}</p>
                      </div>
                    </div>{" "}
                  </Link>
                ))}
              </div>
            )}
            </div>
            
            
           </div>
          
          </div>
        </div>


        <div className=" xl:hidden md:hidden w-full  pl-2">
            <div className="border  md:items-center md:mr-10 md:mt-0 xl:mr-20 flex w-full  p-2 rounded-lg border-[#891980]   gap-3 items-center mt-6 xl:mt-0">
              <TfiSearch />
              <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search"
                style={{ background: 0, outline: "0" }}
                className="w-full"
              />
             {loading&&<IoReload className="animate-spin"/> }

            </div>
            </div>

        <div className="xl:flex gap-3  items-center hidden pr-10">
          <div className="relative group ">
            <button
             onMouseEnter={()=>setOpenContact(false)}
             className="border-2 p-2  xl:w-20   text-[12px]    rounded-lg border-[#891980] hover:bg-[#891980] hover:text-white">
              About us
            </button>
            <HoverInfo
              name="About us"
              right="0px"
              info="  At Radiant Whispers, we believe that every individual deserves to feel confident and comfortable in their own skin. 

That's why we're dedicated to providing high-quality, natural body creams that moisturize, soothe, and protect your skin."
            />
          </div>
          <div className="relative group">
            <button onClick={ToggleContact} className="border-2 p-2  xl:w-24 text-[12px]    rounded-lg border-[#891980] bg-[#891980] text-white shadow-lg hover:bg-white hover:text-[#891980]">
              Contact us
            </button>
          </div>

        <div className="flex gap-4 ml-12 border border-[#891980] p-2 rounded-md">
        <Link to={"/whishlist"}>
            <div className="cursor-pointer relative md:block">
              <CiHeart size={22} />

              <div
                style={{ fontSize: "10px" }}
                className="w-4 text-sm bg-black text-white h-4 rounded-full border absolute flex justify-center items-center bottom-[-10px] left-2"
              >
                <p>{wishlists?.length||0}</p>
              </div>
            </div>
          </Link>

          <Link to={"/cart"}>
            <div className="cursor-pointer relative ">
              <LiaShoppingBagSolid size={20} />
              <div
                style={{ fontSize: "10px" }}
                className="w-4 text-sm bg-black text-white h-4 rounded-full border absolute flex justify-center items-center bottom-[-10px] left-2"
              >
                <h6>{cartLength}</h6>
              </div>
            </div>
          </Link>
          <BiSolidUserPin
              size={27}
              className="hidden md:block cursor-pointer"
              onClick={HandleOpenNavMenu}
            />
          
           {openNavMenu && <div className="w-40 md:block lg:block   bg-white border absolute xl:top-[72px] 2xl:top-[68px] p-3 pb-4 rounded-lg">
           <span className="text-black cursor-pointer flex justify-end" onClick={cancelNavMenu}>
        <MdOutlineCancel />
        </span>
      {!login &&
           (<ul>
           <li  className="mt-3 flex items-center gap-1 " onClick={handleOpenLogin}>
           <IoMdLogIn />
           <Link>
               Login
               </Link>
           </li>
             <li className="mt-3 flex items-center gap-1" onClick={handleOpenRegister}>
             <BiSolidRegistered />
             <Link > 
               Signup
               </Link>
             </li> </ul>
      )}
          <div>
          { login &&
         ( 
          <ul>
             <li className="mt-3 flex items-center cursor-pointer gap-1"  onClick={() => handleNavigation('/myaccount')}>
          <MdAccountCircle />
          {/* <Link to={"/myaccount"} > */}
            My Account
            {/* </Link> */}
          </li>
          
          <li className="mt-3 flex items-center cursor-pointer gap-1" onClick={handleSetLogOut}>
          <AiOutlineLogout />
          <Link >
            Logout
            </Link>
          </li>
          </ul>
        )}        

{ login && isadmin==true && ( <button className="mt-3 flex items-center gap-1">
          <Link to={"/adminHome"}>
            Switch to Admin
            </Link>

          </button>)}
      
          </div>
      </div>}

      {openContact && <div className="w-40 text-[12px] text-[#878787]  bg-white border absolute 2xl:top-[68px] xl:top-[70px] right-44 p-3 pb-4 rounded-lg">
       <div className="flex items-center justify-between ">
       <p >Conatct-Us</p>
        <span className="text-black cursor-pointer" onClick={cancelContact}>
        <MdOutlineCancel />
        </span> 
       </div>
        <hr />
         <ul>
         <a href="https://wa.link/m4ypbh">
         <li className="mt-3 flex gap-1 items-center cursor-pointer hover:bg-slate-400 hover:p-2 hover:text-white rounded-lg">
         <IoLogoWhatsapp />
         0707789800099
          </li>
         </a>

        <li  className="mt-3 flex gap-1 items-center cursor-pointer  hover:bg-slate-400 hover:p-2 hover:text-white rounded-lg">
        <FaInstagramSquare />  Instagram
        </li>
          <li className="mt-3 flex gap-1 items-center cursor-pointer  hover:bg-slate-400 hover:p-2 hover:text-white rounded-lg">
          <FaFacebook />  Facebook
          </li>
         
          <li className="mt-3 flex gap-1 items-center cursor-pointer  hover:bg-slate-400 hover:p-2 hover:text-white rounded-lg">
          <IoMail /> Email
          </li>
         </ul>
      </div>}



        </div>
        </div>
      </nav>

      {openLogin && <Login setOpenLogin={setOpenLogin} />}
      {openRegister && <Register setOpenRegister={setOpenRegister} />}
    </div>
  )
}

MainNavbar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  logoSrc: PropTypes.string.isRequired,
toggleSidebar: PropTypes.func.isRequired,
}
export default MainNavbar
