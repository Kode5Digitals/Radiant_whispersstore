import { CiLogin } from "react-icons/ci"
import { FaRegRegistered } from "react-icons/fa6"
import { LiaTimesSolid } from "react-icons/lia"
import { MdAccountCircle, MdContactPage} from "react-icons/md"
import {  RiAdminFill, RiProfileLine } from "react-icons/ri"
import Cartcontext from "../cartcontext"
import { useContext, useState } from "react"
import { AiOutlineLogout } from "react-icons/ai"
import { Link} from "react-router-dom"
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io"
import { FaFacebook, FaInstagramSquare } from "react-icons/fa"
import { IoLogoWhatsapp, IoMail } from "react-icons/io5"

const SideMenu = () => {
  const { isOpen, Back, handleLogin, handleRegister, login ,isadmin,setisadmin,setLogin} =useContext(Cartcontext)
    const [constactIsVisible, setConstactIsVisible] = useState(false);
    const [aboutIsVisible, setAboutIsVisible] = useState(false);


 

    const handleToggleContact= () => {
      setConstactIsVisible(!constactIsVisible);
      setAboutIsVisible(false);

    }
    const handleToggleAbout = () => {
      setAboutIsVisible(!aboutIsVisible);
      setConstactIsVisible(false);
    }
  const HandleLogin = () => {
    handleLogin()
    Back()
  }
  const HandleRegister = () => {
    handleRegister()
    Back()
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

  const handleNavigation = (path) => {
    window.location.href = path; // Use window.location.href for full page reload
  };

  return (
    <div className="xl:hidden  lg:hidden md:hidden block sm:block">
      <div
        className={`menu fixed z-[10000] top-0 bg-white p-2 w-2/3 h-full overflow-hidden left-0 transition-all duration-300
      ${isOpen ? "translate-x-0" : "-translate-x-full"}
  `}
      >
        <div className="mt-3 flex justify-between items-center ">
          <div className="w-[80px] h-[30px] flex justify-center items-center  md:w-[80px]">
            <img src="/RadiantwhispersstoreLogo.png" alt="" />
          </div>
          <div></div>

          <p>
            <LiaTimesSolid onClick={Back} />
          </p>
        </div>
        <div className="mt-10 text-[#545353] relative">
          
        <ul>
            <li className={`flex items-center gap-1 ${constactIsVisible ? 'mb-0' : 'mb-4'}  mt-32`} onClick={handleToggleContact}>
              <span>
                <MdContactPage />
              </span>
              <Link to={"/"}>
                <span>Contact</span>
              </Link>
              <span className="icon">{constactIsVisible ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}</span>
            </li>
             </ul>
            <div 
        className={`mb-7 fixed  bg-white p-4 shadow-lg transform transition-transform duration-300 ${constactIsVisible ? 'block' : 'hidden'}`}
      >
         
         <ul className="text-[10px]">
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
     
      </div>

      <ul>
            <li className= {`flex items-center gap-1 ${aboutIsVisible ? 'mb-0' : 'mb-4'} `} onClick={handleToggleAbout}>
              <span>
                <RiProfileLine />
              </span>
              <Link to={"/"}>
                <span>About</span>
              </Link>
              <span className="icon">{aboutIsVisible  ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}</span>
            </li>
          </ul>


          <div 
        className={`mb-7 fixed  w-3/4 bg-white p-2 shadow-lg transform transition-transform duration-300 ${aboutIsVisible ? 'block' : 'hidden'}`}
      >
        <p className="text-[10px]">At Radiant Whispers, we believe that every individual deserves to feel confident and comfortable in their own skin. 

That&apos;s why we&apos;re dedicated to providing high-quality, natural body creams that moisturize, soothe, and protect your skin.</p>
      </div>

          {!login && (
            <ul className="mt-3 ">
              <li
                onClick={HandleRegister}
                className="flex items-center gap-1 mb-4 cursor-pointer"
              >
                <span>
                  <FaRegRegistered />
                </span>
                Register
              </li>

              <li
                onClick={HandleLogin}
                className="flex items-center gap-1 mb-4 cursor-pointer"
              >
                <span>
                  <CiLogin />
                </span>
                Login
              </li>
            </ul>
          )}

          {login && (
            <ul className="mt-5 ">
              <li
                className="flex items-center gap-1 mb-4 cursor-pointer"
                onClick={() => handleNavigation('/myaccount')}
              >
                <span>
                <MdAccountCircle/>
                </span>
                
                
                My Account
                
              </li>

             
              <li
                onClick={handleSetLogOut}
                className="flex items-center gap-1 mb-4 cursor-pointer "
              >
                <span>
          <AiOutlineLogout />
                  
                </span>
                Log Out
              </li>
            </ul>
          )}
   {login && isadmin &&

(<ul>
  <li className="flex items-center gap-1 mb-4 cursor-pointer">
  <RiAdminFill />
<Link to={"/adminHome"}>
Switch to Admin
</Link>
  </li>
</ul>)
}
         
        </div>
      </div>
    </div>
  )
}

export default SideMenu
