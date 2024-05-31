import Defaultlayout from "../layout/Defaultlayout"
import { Link, Outlet } from "react-router-dom"
import { IoSettingsOutline } from "react-icons/io5"
import { MdAccountCircle } from "react-icons/md"
import { useContext} from "react"
import Cartcontext from "../cartcontext"
import { Capitalize } from "../utils/utils"
import { AiOutlineLogout } from "react-icons/ai"
import { toast } from "react-toastify"

const MyAccount = () => {
const {user}=useContext(Cartcontext)


const handleSetLogOut=async()=>{
  localStorage.removeItem("Login")
   localStorage.removeItem("token")
  localStorage.removeItem("refreshToken")
 await  toast.success("successfully loggged out")
  window.location.href = "/"
}




  return (
  <Defaultlayout>
   <div className=" mb-32   ">
   <div className="w-full p-4 xl:mt-16 mt-36 md:mt-[60px] lg:mt-16  bg-[#9da4b0] text-center text-white text-lg">
     My Account
    </div>
    <div className="w-5/6 border-2 bg-white  shadow-xl mx-auto h-[500px]  mt-10 mb-12">

<div className="w-3/4 border mx-auto h-3/4 flex mt-14">
  <div className="h-full w-1/4 p-2 border-8 shadow-xl "> 
<h3 className="mt-3">{Capitalize(user?.fullname)}</h3>
<ul className="mt-16 text-[12px] ">
<li className="cursor-pointer  flex items-center gap-2">
<MdAccountCircle />
<Link to="/myaccount/dashboard">
Dashboard
  </Link>
  </li>
  <li className="mt-4 cursor-pointer  flex items-center gap-2">
  <IoSettingsOutline />
<Link to="/myaccount/settings">
Account settings
</Link>
   </li>
   <li className="mt-40 flex items-center gap-1" onClick={handleSetLogOut}>
          <AiOutlineLogout />
          <Link >
            Logout
            </Link>
          </li>
  </ul>
  </div>
<div className="w-full h-full  bg-[#9da4b0] border ">
  <Outlet/>
</div>

</div>
    </div>
   </div>
  
  </Defaultlayout>
  )
}


export default MyAccount