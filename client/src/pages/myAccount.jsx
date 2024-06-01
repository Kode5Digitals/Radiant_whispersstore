import { Link, Outlet } from "react-router-dom"
import { IoSettingsOutline } from "react-icons/io5"
import { MdAccountCircle } from "react-icons/md"
import { useContext, useState} from "react"
import Cartcontext from "../cartcontext"
import { Capitalize } from "../utils/utils"
import { AiOutlineLogout } from "react-icons/ai"
import { toast } from "react-toastify"
import Footer from "../components/footer"
import { LiaHomeSolid } from "react-icons/lia"

const MyAccount = () => {
const {user}=useContext(Cartcontext)
const [activeButton, setActiveButton] = useState("buttonA");

const handleButtonClick = (button) => {
  setActiveButton(button);
};



const handleSetLogOut=async()=>{
  localStorage.removeItem("Login")
   localStorage.removeItem("token")
  localStorage.removeItem("refreshToken")
 await  toast.success("successfully loggged out")
  window.location.href = "/"
}




  return (
    <div>
   <div className="h-screen">
   <div className="w-full p-4 fixed top-0  bg-[#891980] flex justify-between text-white text-lg">
   <span className="bg-white rounded-xl xl:w-32 md:w-28 flex justify-center items-center xl:gap-1 ">
   <LiaHomeSolid className="text-black hidden xl:block lg:block md:block " size={15} />
   <Link to={"/home"} className="hover:text-[#9299a4] text-black xl:text-[13px] text-[12px] px-2 ">Home</Link>

   </span>
   <p className="text-[14px] xl:text-[16px]  ">My Account</p>
   <div>
   <i className="text-[12px]">
   {Capitalize(user?.email)}
   </i>
   </div>
    </div>
   
    <div className="xl:w-5/6 xl:border-2  bg-white md:p-3  md:mt-40 shadow-xl mx-auto xl:h-[500px]  xl:mt-32 mt-14 mb-12">

<div className="xl:w-3/4 w-full border mx-auto xl:h-3/4   flex sm:flex-wrap flex-wrap xl:flex-nowrap md:flex-nowrap lg:flex-nowrap xl:mt-14">
  <div className="h-full p-2 border-8 shadow-xl w-1/4 hidden xl:block md:block"> 
<h3 className="mt-3 text-[12px]">{Capitalize(user?.email)}</h3>
<ul className="mt-16 text-[12px] ">
<li className="cursor-pointer  flex items-center gap-2">
<MdAccountCircle />
<Link to="/myaccount/dashboard"   onClick={() => handleButtonClick('buttonA')} className={`${ activeButton === 'buttonA' ?"border-b-2  border-b-[#afa8b9]": ""}`}>
Dashboard
  </Link>
  </li>
  <li className="mt-4 cursor-pointer  flex items-center gap-2">
  <IoSettingsOutline />
<Link to="/myaccount/settings"   onClick={() => handleButtonClick('buttonB')}   className={` ${ activeButton === 'buttonB' ?"border-b-2  border-b-[#afa8b9]": ""}`}>
Settings
</Link>
   </li>
   <li className="mt-36 flex items-center gap-1 " onClick={handleSetLogOut}>
          <AiOutlineLogout />
          <Link className="border-b-[#afa8b9]  hover:border-b-2">
            Logout
            </Link>
          </li>
  </ul>
  </div>
<div >
<div className="block xl:hidden lg:hidden md:hidden sm:block p-2  ">
<ul className="flex justify-around text-[12px] ">
<li className="flex  items-center gap-1">
<MdAccountCircle />
<Link to="/myaccount/dashboard"   onClick={() => handleButtonClick('buttonA')} className={` ${ activeButton === 'buttonA' ?" border-b-[#afa8b9]": ""}`}>
Dashboard
  </Link>
  </li>
  <li className=" flex items-center gap-1">
  <IoSettingsOutline />
<Link to="/myaccount/settings"    onClick={() => handleButtonClick('buttonB')} className={`${ activeButton === 'buttonB' ?" border-b-[#afa8b9]": ""}`}>
Account settings
</Link>
   </li>
   <li className="flex  items-center gap-1 hover:border-b-2" onClick={handleSetLogOut}>
          <AiOutlineLogout />
          <Link className="border-b-[#afa8b9]  hover:border-b-2">
            Logout
            </Link>
          </li>
  </ul>
</div>
<div className="w-full h-full  bg-[#E5E7EB] border ">
<Outlet/>
</div>
</div>

</div>
    </div>
   </div>
  <Footer logoSrc="/RadiantwhispersstoreLogo.png"/>
  </div>

  )
}


export default MyAccount