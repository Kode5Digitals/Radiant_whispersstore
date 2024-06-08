import { IoClose, IoLogoWhatsapp, IoMail } from 'react-icons/io5';
import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import Cartcontext from '../cartcontext';
import { Link } from 'react-router-dom';
import { RiAdminFill, RiProfileLine } from 'react-icons/ri';
import { MdAccountCircle, MdContactPage } from 'react-icons/md';
import { CiLogin } from 'react-icons/ci';
import { FaFacebook, FaInstagramSquare, FaRegRegistered } from 'react-icons/fa';
import { AiOutlineLogout } from 'react-icons/ai';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

const Sidebar = ({isSideOpen, toggleSidebar}) => {
    const { handleLogin, handleRegister,setisadmin,setLogin,login,isadmin,} = useContext(Cartcontext);
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
 
   const Register=()=>{
    handleRegister()
    toggleSidebar()
   }
   const Login=()=>{
    handleLogin()
    toggleSidebar()
   }

   const handleSetLogOut=()=>{
    localStorage.removeItem("Login")
    localStorage.removeItem("Admin")
    localStorage.removeItem("token")
    localStorage.removeItem("refreshToken")
    setisadmin(false);
    setLogin(false)
    location.reload("/")
  }

  const handleNavigation = (path) => {
    window.location.href = path; // Use window.location.href for full page reload
  };

  return (
    <div className="relative h-full xl:hidden sm:hidden lg:block hidden md:block  2xl:hidden">
      <div
        className=
        {`fixed top-0 z-[5000000000]  md:right-0 w-64 h-full bg-white p-4 transform ${
            isSideOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out`}
      >
        
        <div className="mt-3 flex justify-between items-center ">

        <div className="w-[80px] h-[30px] flex justify-center items-center  md:w-[80px]">
            <img src="/Logo2.png" alt="" />
          </div>
        <p>
            <IoClose onClick={toggleSidebar} />
          </p>
        </div>


        <div className="mt-10 text-[#545353]">
          
          <ul>
              <li className= {`flex items-center gap-1 ${constactIsVisible ? 'mb-0' : 'mb-4'}  mt-32`} onClick={handleToggleContact}>
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
        className={`mb-7 fixed left-3  bg-white p-4 shadow-lg transform transition-transform duration-300 ${constactIsVisible ? 'block' : 'hidden'}`}
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
              <li className={`flex items-center gap-1 ${aboutIsVisible ? 'mb-0' : 'mb-4'} `} onClick={handleToggleAbout}>
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
        className={`mb-7 fixed left-3 bg-white p-4 w-3/4 shadow-lg transform transition-transform duration-300 ${aboutIsVisible ? 'block' : 'hidden'}`}
      >
        <p className="text-[10px]">At Radiant Whispers, we believe that every individual deserves to feel confident and comfortable in their own skin. 

That&apos;s why we&apos;re dedicated to providing high-quality, natural body creams that moisturize, soothe, and protect your skin.</p>
      </div>
            {!login && (
              <ul className="mt-3 ">
                <li
                  onClick={Register}
                  className="flex items-center gap-1 mb-4  cursor-pointer"
                >
                  <span>
                    <FaRegRegistered />
                  </span>
                  Register
                </li>
  
                <li
                  onClick={Login}
                  className="flex items-center gap-1 mb-4 cursor-pointer"
                >
                  {" "}
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
                  className="flex items-center gap-1 mb-4 cursor-pointer "
                  onClick={() => handleNavigation('/myaccount')}
                >
                  <span>
                  <MdAccountCircle/>
                  </span>
                  My Account
                  
                </li>
  
                <li
                  onClick={handleSetLogOut}
                  className="flex items-center gap-1 mb-4 cursor-pointer"
                >
                  {" "}
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

      {/* {isSideOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-50 z-30"
        ></div>
      )} */}
    </div>
  );

};
Sidebar.propTypes =  {
    isSideOpen: PropTypes.bool.isRequired,
    toggleSidebar: PropTypes.func.isRequired,

}
  
export default Sidebar;
