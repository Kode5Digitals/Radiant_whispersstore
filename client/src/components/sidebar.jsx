import { IoClose } from 'react-icons/io5';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import Cartcontext from '../cartcontext';
import { Link } from 'react-router-dom';
import { RiProfileLine } from 'react-icons/ri';
import { MdContactPage } from 'react-icons/md';
import { CiLogin } from 'react-icons/ci';
import { FaRegRegistered } from 'react-icons/fa';

const Sidebar = ({isSideOpen, toggleSidebar}) => {
    const { handleLogin, handleRegister } = useContext(Cartcontext);
  
   const Register=()=>{
    handleRegister()
    toggleSidebar()
   }
   const Login=()=>{
    handleLogin()
    toggleSidebar()
   }
  return (
    <div className="relative h-full">
      <div
        className=
        {`fixed top-0 z-[5000000000]  md:right-0 w-64 h-full bg-white transform ${
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
        <div className="mt-10 text-[#545353]  p-2">
          <ul className="mt-20 ">
            <li
              onClick={Register}
              className="flex items-center gap-1 mb-4 "
            >
              {" "}
              <span>
                <FaRegRegistered />
              </span>
              Register
            </li>

            <li onClick={Login} className="flex items-center gap-1 mb-4">
              {" "}
              <span>
                <CiLogin />
              </span>
              Login
            </li>

            <li className="flex items-center gap-1 mb-4">
              {" "}
              <span>
                <MdContactPage />
              </span>
              <Link to={"/"}>
                <span>Contact</span>
              </Link>
            </li>
            <li className="flex items-center gap-1 mb-4 ">
              {" "}
              <span>
                <RiProfileLine />
              </span>
              <Link to={"/"}>
                <span>About</span>
              </Link>
            </li>
          </ul>
        </div>
      
        {/* <div className="p-4">
          <button onClick={toggleSidebar} className="mb-4">
            <IoClose size={24} />
          </button>
          <h2 className="text-2xl font-bold mb-4">Sidebar</h2>
          <ul>
            <li className="mb-2"><a href="#item1">Item 1</a></li>
            <li className="mb-2"><a href="#item2">Item 2</a></li>
            <li className="mb-2"><a href="#item3">Item 3</a></li>
            <li className="mb-2"><a href="#item4">Item 4</a></li>
          </ul>
        </div> */}
      </div>

      {isSideOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-50 z-30"
        ></div>
      )}
    </div>
  );

};
Sidebar.propTypes =  {
    isSideOpen: PropTypes.bool.isRequired,
    toggleSidebar: PropTypes.func.isRequired,
}
  
export default Sidebar;
