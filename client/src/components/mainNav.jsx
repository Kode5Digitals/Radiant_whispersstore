
import { LiaShoppingBagSolid } from "react-icons/lia";
import { TfiSearch } from "react-icons/tfi";
import { CiHeart } from "react-icons/ci";
import Cartcontext from "../cartcontext";
import { useContext} from "react";
import Login from "./Login";
import Register from "./Register";
import { RxHamburgerMenu } from "react-icons/rx";
import PropTypes from "prop-types";
const MainNavbar = ({setIsOpen,isOpen}) => {
 const {LikeColor,handleLogin,openLogin ,setOpenLogin,setOpenRegister,openRegister,handleRegister,cartNumber} =useContext(Cartcontext)

 const toggleMenu = () => {
   setIsOpen(!isOpen);
 };

    
  return (
    <>
<nav  className="text-[#fd00cd]  bg-[#f5f5f5] 
      font-bold text-sm  p-6  xl:p-6 flex-wrap  flex fixed w-full  z-50 border-b items-center top-0 xl:justify-around justify-between">
     <RxHamburgerMenu className="xl:hidden block" size={20} onClick={toggleMenu}  />
   
      <div className="text-xl">  Radiant-whispersstore</div>
      <div className="cursor-pointer relative xl:hidden block">
<LiaShoppingBagSolid size={20} />
<div style={{fontSize:"10px"}} className="w-4 text-sm bg-black text-white h-4 rounded-full border absolute flex justify-center items-center bottom-[-10px] left-2" ><h6>{cartNumber.length}</h6></div>
</div>
     <div className="border w-[500px] xl:ml-[30px] p-2 rounded-lg border-[#fd00cd]  flex justify-between items-center mt-6 xl:mt-0">
        <input type="text" placeholder="Search" style={{background:0, outline:"0"} } className="w-3/4 "/>
        <TfiSearch />
     </div>


      <div className="xl:flex gap-5 items-center hidden">
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleRegister}>Register</button>
<div className="cursor-pointer relative">
<CiHeart  size={22}  />

<div style={{fontSize:"10px"}} className="w-4 text-sm bg-black text-white h-4 rounded-full border absolute flex justify-center items-center bottom-[-10px] left-2" ><p>{LikeColor.length}</p></div>
</div>

<div className="cursor-pointer relative ">
<LiaShoppingBagSolid size={20} />
<div style={{fontSize:"10px"}} className="w-4 text-sm bg-black text-white h-4 rounded-full border absolute flex justify-center items-center bottom-[-10px] left-2" ><h6>{cartNumber.length}</h6></div>
</div>
      </div>

     
    </nav>

{openLogin && <Login  setOpenLogin={setOpenLogin}  />}
{openRegister && <Register  setOpenRegister={setOpenRegister}  />}
    </>
  );
};

MainNavbar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};
export default MainNavbar;
