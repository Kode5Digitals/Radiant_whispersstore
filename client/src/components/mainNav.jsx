import { LiaShoppingBagSolid } from "react-icons/lia";
import { TfiSearch } from "react-icons/tfi";
import { CiHeart } from "react-icons/ci";
import Cartcontext from "../cartcontext";
import { useContext} from "react";
import Login from "./Login";
import Register from "./Register";
import { AiOutlineLogin } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiSolidUserPin } from "react-icons/bi";

import PropTypes from "prop-types";
const MainNavbar = ({ setIsOpen, isOpen }) => {
  const {
    LikeColor,
    handleLogin,
    openLogin,
    setOpenLogin,
    setOpenRegister,
    openRegister,
    handleRegister,
    cartNumber,
  } = useContext(Cartcontext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <nav
        className="text-[#fd00cd]  bg-[#f5f5f5] 
      font-bold text-sm  p-6 md:p-4   xl:p-6 flex-wrap  flex fixed w-full  z-50 border-b items-center top-0 xl:justify-around justify-between"
      >

        <RxHamburgerMenu
          className="xl:hidden block md:hidden"
          size={20}
          onClick={toggleMenu}
        />

        <div className="w-[100px] h-[20px] flex justify-center items-center  md:w-[80px]">
          <img src="logo.png" alt="" />
        </div>
        <div className="md:flex  md:flex-row-reverse   items-center  md:w-2/3 md:justify-between   ">
          <div className="xl:hidden  flex  md:flex gap-4 ">
            <div className="cursor-pointer relative xl:hidden block ">
              <LiaShoppingBagSolid size={20} />
              <div
                style={{ fontSize: "10px" }}
                className="w-4 text-sm bg-black text-white h-4 rounded-full border absolute flex justify-center items-center bottom-[-10px] left-2    md:bottom-[-10px]"
              >
                <h6>{cartNumber.length}</h6>
              </div>
            </div>
            <div className="cursor-pointer relative md:block hidden">
              <CiHeart size={22} />
              <div
                style={{ fontSize: "10px" }}
                className="w-4 text-sm bg-black text-white h-4 rounded-full border absolute flex justify-center items-center bottom-[-10px] left-2 md:bottom-[-10px]"
              >
                <p>{LikeColor.length}</p>
              </div>
            </div>
            <BiSolidUserPin size={27} className="hidden md:block"  onClick={toggleMenu}/>
          </div>

      <div className="hidden xl:block md:block">
      <div className="border  md:items-center md:mr-20 md:mt-0 xl:mr-20 flex  w-[500px]  p-2 rounded-lg border-[#fd00cd]   justify-between items-center mt-6 xl:mt-0">
            <input
              type="text"
              placeholder="Search"
              style={{ background: 0, outline: "0" }}
              className="w-3/4 "
            />
            <TfiSearch />
          </div>
      </div>
        </div>

        <div className="xl:flex gap-5 items-center hidden">
          <button onClick={handleLogin} className="flex items-center">
            <span>
              <AiOutlineLogin />
            </span>
            Login
          </button>
          <button onClick={handleRegister}>Register</button>
          <div className="cursor-pointer relative md:block">
            <CiHeart size={22} />

            <div
              style={{ fontSize: "10px" }}
              className="w-4 text-sm bg-black text-white h-4 rounded-full border absolute flex justify-center items-center bottom-[-10px] left-2"
            >
              <p>{LikeColor.length}</p>
            </div>
          </div>

          <div className="cursor-pointer relative ">
            <LiaShoppingBagSolid size={20} />
            <div
              style={{ fontSize: "10px" }}
              className="w-4 text-sm bg-black text-white h-4 rounded-full border absolute flex justify-center items-center bottom-[-10px] left-2"
            >
              <h6>{cartNumber.length}</h6>
            </div>
          </div>
        </div>
      </nav>

      {openLogin && <Login setOpenLogin={setOpenLogin} />}
      {openRegister && <Register setOpenRegister={setOpenRegister} />}
    </div>
  );
};

MainNavbar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};
export default MainNavbar;
