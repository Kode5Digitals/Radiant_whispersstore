
import { LiaShoppingBagSolid } from "react-icons/lia";
import { TfiSearch } from "react-icons/tfi";
import { CiHeart } from "react-icons/ci";
import Cartcontext from "../cartcontext";
import { useContext } from "react";
const MainNavbar = () => {
    const {LikeColor} =useContext(Cartcontext)
  return (
<nav  className="bg-[#fd00cd] text-white
      font-bold text-sm   p-7  flex fixed w-full  z-50 border-b items-center top-0 justify-around">
    

      <div className="text-xl">  Radiant-whispersstore</div>

     <div className="border w-[500px] ml-[150px] p-2 rounded-lg border-white  flex justify-between items-center">
        <input type="text" placeholder="Search" style={{background:0, outline:"0",color:"white"}}/>
        <TfiSearch />
     </div>

      <div className="flex gap-5 items-center">
        <button>Login</button>
        <button>Register</button>
<div className="cursor-pointer relative">
<CiHeart  size={22}  />

<div style={{fontSize:"10px"}} className="w-4 text-sm bg-black text-white h-4 rounded-full border absolute flex justify-center items-center bottom-[-10px] left-2" ><p>{LikeColor.length}</p></div>
</div>

<div className="cursor-pointer relative">
<LiaShoppingBagSolid size={20} />
<div style={{fontSize:"10px"}} className="w-4 text-sm bg-black text-white h-4 rounded-full border absolute flex justify-center items-center bottom-[-10px] left-2" ><h6>6</h6></div>
</div>
      </div>
    </nav>
  );
};

export default MainNavbar;
