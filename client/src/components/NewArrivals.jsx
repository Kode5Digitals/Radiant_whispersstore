import { PiGreaterThanLight } from "react-icons/pi";
import { PiLessThanLight } from "react-icons/pi";
import { useContext, useRef, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import Cartcontext from "../cartcontext";
function NewArrivals() {
  const flexContainerRef = useRef(null);
  const [showLeftIndicator, setShowLeftIndicator] = useState(false);
  const { LikeColor, setLikeColor } = useContext(Cartcontext);

  const handleLikes = (index) => {
    setLikeColor((prevState) => {
      const isActive = prevState.includes(index);
      const newState = isActive
        ? prevState.filter((item) => item !== index)
        : [...prevState, index];
      localStorage.setItem("Likes", JSON.stringify(newState));
      console.log(newState);
      return newState;
    });
  };



  const handleScroll = () => {
    const container = flexContainerRef.current;
    const scrollPosition = container.scrollLeft;

    setShowLeftIndicator(scrollPosition > 0);
  };

  const scrollLeft = () => {
    flexContainerRef.current.scrollBy({
      left: -100, 
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    flexContainerRef.current.scrollBy({
      left: 100, 
      behavior: "smooth",
    });
  };

  return ( 
    <div className="mt-24">

<div className={`font-bold text-3xl   justify-center xl:mt-10 mt-12 xl:mb-0 mb-7 xl:gap-12 gap-6  items-center border-0 flex `}>
    <hr  className="text-black  xl:w-1/3  w-3/12"/>
<h4 className="xl:text-2xl text-lg ">
New Arrivals
</h4>
<hr  className="text-black xl:w-1/3   w-3/12"/>

</div>

     <div className="flex  justify-between ">
     {showLeftIndicator && (
        <div className="  w-12 h-12 flex justify-center bg-[#ebadd2]  items-center rounded-full cursor-pointer "  onClick={scrollLeft}>
          <button className="scroll-left bg-red">
          <PiLessThanLight />
          </button>
        </div>
      )}

        <div className=" cursor-pointer  w-12 h-12 flex justify-center bg-[#ebadd2]  items-center rounded-full  " onClick={scrollRight}>
          <button className="scroll-right" >
            <PiGreaterThanLight />
          </button>
        </div>

     </div>
      
      <div
        className="flex  justify-between xl:gap-12 gap-2 p-3 scroll "
        ref={flexContainerRef}
        onScroll={handleScroll}
      >
          {[...Array(12).keys()].map((index) => (
            <div key={index} className="mb-10">
              <div className="w-52 h-52 shadow-lg border-2 rounded-lg mb-3 relative">
                <img src={`cream${(index % 3) + 1}.jpeg`} className="w-full h-full" alt="" />
                {!LikeColor.includes(index) ? (
                  <CiHeart
                    size={22}
                    className="m-2 absolute top-1 right-2 cursor-pointer text-[#080808]"
                    onClick={() => handleLikes(index)}
                  />
                ) : (
                  <FaHeart
                    size={20}
                    className="m-2 absolute top-1 right-2 cursor-pointer text-[#fd00cd]"
                    onClick={() => handleLikes(index)}
                  />
                )}
              </div>
              <h3 className="text-xl">Product Name</h3>
              <p className="text-sm">Product description</p>
              <h4 className="text-lg">Product price</h4>
              <div className="flex justify-between mt-2">
                <div className="border rounded-sm">
                  <button className="w-6 h-6">+</button>
                  <button className="w-6 h-6 cursor-text text-sm">2</button>
                  <button className="w-6 h-6">-</button>
                </div>
                <button
                  className="border text-sm px-2 rounded-md bg-gray-50"
                >
                  Add Cart
                </button>
              </div>
            </div>
          ))}
            </div>
  
    </div>
  )
}
export default NewArrivals;
