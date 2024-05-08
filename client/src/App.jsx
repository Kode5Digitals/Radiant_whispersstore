import { useState } from "react";
import NewArrivals from "./components/NewArrivals";
import Banner from "./components/banner";
import Banner2 from "./components/banner2";
import Footer from "./components/footer";
import MainNavbar from "./components/mainNav";
import Products from "./components/products";
import { LiaTimesSolid } from "react-icons/lia";
import "./index.css";
import { CiLogin } from "react-icons/ci";
import { FaRegRegistered } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const Back = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className="">
      <div
        className={`menu fixed z-[10000] top-0 


    bg-white p-2 w-1/3 h-full overflow-hidden transition-all duration-300
 
    ${isOpen && window.innerWidth < 768 ? "left" : "left-0"}
      ${
        isOpen && window.innerWidth < 768
          ? "translate-x-0"
          : "-translate-x-full"
      }
      
  `}
      >
        <div className="mt-3 flex justify-between items-center ">
          <div className="w-[80px] h-[30px] flex justify-center items-center  md:w-[80px]">
            <img src="logo.png" alt="" />
          </div>
          <div></div>

          <p>
            <LiaTimesSolid onClick={Back} />
          </p>
        </div>
        <div className="mt-10 text-[#545353]">
          <ul className="mt-20 ">
            <li className="flex items-center gap-1 mb-4 ">
              {" "}
              <span>
                <FaRegRegistered />
              </span>
              Register
            </li>
            <li className="flex items-center gap-1 mb-4">
              {" "}
              <span>
                <CiLogin />
              </span>
              Login
            </li>
            <li className="flex items-center gap-1 mb-4">
              {" "}
              <span>
                <CiHeart size={22} />
              </span>
              Whislist
            </li>
          </ul>
        </div>
      </div>

      <MainNavbar setIsOpen={setIsOpen} isOpen={isOpen} />
      <Banner />
      <Products />
      <Banner2 />
      <NewArrivals />
      <Footer />
    </main>
  );
}

export default Home;
// ${
//   isOpen && window.innerWidth >= 768 ? 'right-0' : '-right-full'
// }
// ${
//   isOpen  && window.innerWidth >= 768 ?  "translate-x-0"  :"translate-x-full"
// }
