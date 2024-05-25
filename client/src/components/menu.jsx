import { Link } from "@mui/material";
import { CiLogin } from "react-icons/ci";
import { FaRegRegistered } from "react-icons/fa6";
import { LiaTimesSolid } from "react-icons/lia";
import { MdContactPage } from "react-icons/md";
import { RiProfileLine } from "react-icons/ri";
import Cartcontext from "../cartcontext";
import { useContext } from "react";

const SideMenu = () => {
  const { isOpen, Back, handleLogin, handleRegister } = useContext(Cartcontext);

  return (
    <div className="xl:hidden  lg:hidden md:hidden block sm:block">
      <div
        className={
          `menu fixed z-[10000] top-0 bg-white p-2 w-1/3 h-full overflow-hidden left-0 transition-all duration-300
      ${ isOpen? "translate-x-0" : "-translate-x-full"}
  `}
      >
        <div className="mt-3 flex justify-between items-center ">
          <div className="w-[80px] h-[30px] flex justify-center items-center  md:w-[80px]">
            <img src="/Logo2.png" alt="" />
          </div>
          <div></div>

          <p>
            <LiaTimesSolid onClick={Back} />
          </p>
        </div>
        <div className="mt-10 text-[#545353]">
          <ul className="mt-20 ">
            <li
              onClick={handleRegister}
              className="flex items-center gap-1 mb-4 "
            >
              {" "}
              <span>
                <FaRegRegistered />
              </span>
              Register
            </li>

            <li onClick={handleLogin} className="flex items-center gap-1 mb-4">
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
      </div>
    </div>
  );
};

export default SideMenu;
