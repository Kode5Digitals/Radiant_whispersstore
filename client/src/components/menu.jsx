import { CiLogin } from "react-icons/ci"
import { FaRegRegistered } from "react-icons/fa6"
import { LiaTimesSolid } from "react-icons/lia"
import { MdAccountCircle, MdContactPage } from "react-icons/md"
import { RiAdminFill, RiProfileLine } from "react-icons/ri"
import Cartcontext from "../cartcontext"
import { useContext } from "react"
import { AiOutlineLogout } from "react-icons/ai"
import { Link } from "react-router-dom"

const SideMenu = () => {
  const { isOpen, Back, handleLogin, handleRegister, login ,isadmin,setisadmin,setLogin} =
    useContext(Cartcontext)

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
        className={`menu fixed z-[10000] top-0 bg-white p-2 w-1/3 h-full overflow-hidden left-0 transition-all duration-300
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
        <div className="mt-10 text-[#545353]">
          
        <ul>
            <li className="flex items-center gap-1 mb-4 mt-32">
              <span>
                <MdContactPage />
              </span>
              <Link to={"/"}>
                <span>Contact</span>
              </Link>
            </li>
            <li className="flex items-center gap-1  ">
              <span>
                <RiProfileLine />
              </span>
              <Link to={"/"}>
                <span>About</span>
              </Link>
            </li>
          </ul>
          {!login && (
            <ul className="mt-3 ">
              <li
                onClick={HandleRegister}
                className="flex items-center gap-1 mb-4 "
              >
                <span>
                  <FaRegRegistered />
                </span>
                Register
              </li>

              <li
                onClick={HandleLogin}
                className="flex items-center gap-1 mb-4"
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
                className="flex items-center gap-1 mb-4 "
                onClick={() => handleNavigation('/myaccount')}
              >
                <span>
                <MdAccountCircle/>
                </span>
                
                
                My Account
                
              </li>

             
              <li
                onClick={handleSetLogOut}
                className="flex items-center gap-1 mb-4"
              >
                <span>
          <AiOutlineLogout />
                  
                </span>
                Log Out
              </li>
            </ul>
          )}

          {login && isadmin==true&&

            <ul>
              <li >
          <Link to={"/adminHome"} className=" mb-4">

            Switch to Admin
            </Link>
              </li>
            </ul>
          }

        </div>
      </div>
    </div>
  )
}

export default SideMenu
