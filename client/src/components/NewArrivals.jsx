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
      left: -100, // Adjust scroll amount as needed
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    flexContainerRef.current.scrollBy({
      left: 100, // Adjust scroll amount as needed
      behavior: "smooth",
    });
  };

  return ( 
    <div className="">

<div className={`font-bold text-3xl   justify-center mt-10 gap-12 items-center border-0 flex `}>
    <hr  className="text-black w-1/3 "/>
<h4>
New Arrivals
</h4>
<hr  className="text-black w-1/3 "/>

</div>




     <div className="flex  justify-between ">
     {showLeftIndicator && (
        <div className="  w-12 h-12 flex justify-center bg-[#ebadd2]  items-center rounded-full ">
          <button className="scroll-left bg-red" onClick={scrollLeft}>
          <PiLessThanLight />
          </button>
        </div>
      )}

        <div className="  w-12 h-12 flex justify-center bg-[#ebadd2]  items-center rounded-full ">
          <button className="scroll-right" onClick={scrollRight}>
            <PiGreaterThanLight />
          </button>
        </div>

     </div>
      
      <div
        className="flex  justify-between  gap-12 p-3 scroll "
        ref={flexContainerRef}
        onScroll={handleScroll}
      >
      
       <div className="mb-10">
<div className="w-52 h-52 shadow-lg border-2 rounded-lg mb-3 relative ">
            <img
              src="/cream3.jpeg"
              className="w-full h-full"
              alt=""
            />
            {!LikeColor.includes(12) ? (
              <CiHeart
                size={22}
                className={` m-2 absolute top-1 right-2 cursor-pointer  'text-[#080808]`}
                onClick={() => handleLikes(12)}
              />
            ) : (
              LikeColor.includes(12) && (
                <FaHeart
                  size={20}
                  className={` m-2 absolute top-1 right-2 cursor-pointer text-[#fd00cd]`}
                  onClick={() => handleLikes(12)}
                />
              )
            )}
          </div>
          <h3>Product Name</h3>
<p className="text-[12px]">Product discription</p>
<h4 className="text-[14px]">Product price</h4>

        <div className="flex justify-between mt-2">
    <div className="border rounded-sm">
    <button className="w-6 h-6  ">+</button>
          <button className="w-6 h-6  cursor-text text-[12px]">2</button>
          <button className="w-6 h-6 ">-</button>
    </div>
    <button className="border text-[12px]  px-2 rounded-md bg-gray-50">Add Cart</button>
        </div>
          </div>


          <div className="mb-10">
<div className="w-52 h-52 shadow-lg border-2 rounded-lg mb-3 relative ">
            <img
              src="/cream1.jpeg"
              className="w-full h-full"
              alt=""
            />
            {!LikeColor.includes(13) ? (
              <CiHeart
                size={22}
                className={` m-2 absolute top-1 right-2 cursor-pointer  'text-[#080808]`}
                onClick={() => handleLikes(13)}
              />
            ) : (
              LikeColor.includes(13) && (
                <FaHeart
                  size={20}
                  className={` m-2 absolute top-1 right-2 cursor-pointer text-[#fd00cd]`}
                  onClick={() => handleLikes(13)}
                />
              )
            )}
          </div>
          <h3>Product Name</h3>
<p className="text-[12px]">Product discription</p>
<h4 className="text-[14px]">Product price</h4>

        <div className="flex justify-between mt-2">
    <div className="border rounded-sm">
    <button className="w-6 h-6  ">+</button>
          <button className="w-6 h-6  cursor-text text-[12px]">2</button>
          <button className="w-6 h-6 ">-</button>
    </div>
    <button className="border text-[12px]  px-2 rounded-md bg-gray-50">Add Cart</button>
        </div>
          </div>




          <div className="mb-10">
<div className="w-52 h-52 shadow-lg border-2 rounded-lg mb-3 relative ">
            <img
              src="/cream4.jpeg"
              className="w-full h-full"
              alt=""
            />
            {!LikeColor.includes(14) ? (
              <CiHeart
                size={22}
                className={` m-2 absolute top-1 right-2 cursor-pointer  'text-[#080808]`}
                onClick={() => handleLikes(14)}
              />
            ) : (
              LikeColor.includes(1) && (
                <FaHeart
                  size={20}
                  className={` m-2 absolute top-1 right-2 cursor-pointer text-[#fd00cd]`}
                  onClick={() => handleLikes(14)}
                />
              )
            )}
          </div>
          <h3>Product Name</h3>
<p className="text-[12px]">Product discription</p>
<h4 className="text-[14px]">Product price</h4>

        <div className="flex justify-between mt-2">
    <div className="border rounded-sm">
    <button className="w-6 h-6  ">+</button>
          <button className="w-6 h-6  cursor-text text-[12px]">2</button>
          <button className="w-6 h-6 ">-</button>
    </div>
    <button className="border text-[12px]  px-2 rounded-md bg-gray-50">Add Cart</button>
        </div>
          </div>


          <div className="mb-10">
<div className="w-52 h-52 shadow-lg border-2 rounded-lg mb-3 relative ">
            <img
              src="/cream6.jpeg"
              className="w-full h-full"
              alt=""
            />
            {!LikeColor.includes(15) ? (
              <CiHeart
                size={22}
                className={` m-2 absolute top-1 right-2 cursor-pointer  'text-[#080808]`}
                onClick={() => handleLikes(15)}
              />
            ) : (
              LikeColor.includes(15) && (
                <FaHeart
                  size={20}
                  className={` m-2 absolute top-1 right-2 cursor-pointer text-[#fd00cd]`}
                  onClick={() => handleLikes(15)}
                />
              )
            )}
          </div>
          <h3>Product Name</h3>
<p className="text-[12px]">Product discription</p>
<h4 className="text-[14px]">Product price</h4>

        <div className="flex justify-between mt-2">
    <div className="border rounded-sm">
    <button className="w-6 h-6  ">+</button>
          <button className="w-6 h-6  cursor-text text-[12px]">2</button>
          <button className="w-6 h-6 ">-</button>
    </div>
    <button className="border text-[12px]  px-2 rounded-md bg-gray-50">Add Cart</button>
        </div>
          </div>

          <div className="mb-10">
<div className="w-52 h-52 shadow-lg border-2 rounded-lg mb-3 relative ">
            <img
              src="/cream5.jpeg"
              className="w-full h-full"
              alt=""
            />
            {!LikeColor.includes(16) ? (
              <CiHeart
                size={22}
                className={` m-2 absolute top-1 right-2 cursor-pointer  'text-[#080808]`}
                onClick={() => handleLikes(16)}
              />
            ) : (
              LikeColor.includes(16) && (
                <FaHeart
                  size={20}
                  className={` m-2 absolute top-1 right-2 cursor-pointer text-[#fd00cd]`}
                  onClick={() => handleLikes(16)}
                />
              )
            )}
          </div>
          <h3>Product Name</h3>
<p className="text-[12px]">Product discription</p>
<h4 className="text-[14px]">Product price</h4>

        <div className="flex justify-between mt-2">
    <div className="border rounded-sm">
    <button className="w-6 h-6  ">+</button>
          <button className="w-6 h-6  cursor-text text-[12px]">2</button>
          <button className="w-6 h-6 ">-</button>
    </div>
    <button className="border text-[12px]  px-2 rounded-md bg-gray-50">Add Cart</button>
        </div>
          </div>

          <div className="mb-10">
<div className="w-52 h-52 shadow-lg border-2 rounded-lg mb-3 relative ">
            <img
              src="/cream4.jpeg"
              className="w-full h-full"
              alt=""
            />
            {!LikeColor.includes(17) ? (
              <CiHeart
                size={22}
                className={` m-2 absolute top-1 right-2 cursor-pointer  'text-[#080808]`}
                onClick={() => handleLikes(17)}
              />
            ) : (
              LikeColor.includes(1) && (
                <FaHeart
                  size={20}
                  className={` m-2 absolute top-1 right-2 cursor-pointer text-[#fd00cd]`}
                  onClick={() => handleLikes(17)}
                />
              )
            )}
          </div>
          <h3>Product Name</h3>
<p className="text-[12px]">Product discription</p>
<h4 className="text-[14px]">Product price</h4>

        <div className="flex justify-between mt-2">
    <div className="border rounded-sm">
    <button className="w-6 h-6  ">+</button>
          <button className="w-6 h-6  cursor-text text-[12px]">2</button>
          <button className="w-6 h-6 ">-</button>
    </div>
    <button className="border text-[12px]  px-2 rounded-md bg-gray-50">Add Cart</button>
        </div>
          </div>

          <div className="mb-10">
<div className="w-52 h-52 shadow-lg border-2 rounded-lg mb-3 relative ">
            <img
              src="/cream3.jpeg"
              className="w-full h-full"
              alt=""
            />
            {!LikeColor.includes(18) ? (
              <CiHeart
                size={22}
                className={` m-2 absolute top-1 right-2 cursor-pointer  'text-[#080808]`}
                onClick={() => handleLikes(18)}
              />
            ) : (
              LikeColor.includes(1) && (
                <FaHeart
                  size={20}
                  className={` m-2 absolute top-1 right-2 cursor-pointer text-[#fd00cd]`}
                  onClick={() => handleLikes(18)}
                />
              )
            )}
          </div>
          <h3>Product Name</h3>
<p className="text-[12px]">Product discription</p>
<h4 className="text-[14px]">Product price</h4>

        <div className="flex justify-between mt-2">
    <div className="border rounded-sm">
    <button className="w-6 h-6  ">+</button>
          <button className="w-6 h-6  cursor-text text-[12px]">2</button>
          <button className="w-6 h-6 ">-</button>
    </div>
    <button className="border text-[12px]  px-2 rounded-md bg-gray-50">Add Cart</button>
        </div>
          </div>

          <div className="mb-10">
<div className="w-52 h-52 shadow-lg border-2 rounded-lg mb-3 relative ">
            <img
              src="/cream2.jpeg"
              className="w-full h-full"
              alt=""
            />
            {!LikeColor.includes(19) ? (
              <CiHeart
                size={22}
                className={` m-2 absolute top-1 right-2 cursor-pointer  'text-[#080808]`}
                onClick={() => handleLikes(19)}
              />
            ) : (
              LikeColor.includes(19) && (
                <FaHeart
                  size={20}
                  className={` m-2 absolute top-1 right-2 cursor-pointer text-[#fd00cd]`}
                  onClick={() => handleLikes(19)}
                />
              )
            )}
          </div>
          <h3>Product Name</h3>
<p className="text-[12px]">Product discription</p>
<h4 className="text-[14px]">Product price</h4>

        <div className="flex justify-between mt-2">
    <div className="border rounded-sm">
    <button className="w-6 h-6  ">+</button>
          <button className="w-6 h-6  cursor-text text-[12px]">2</button>
          <button className="w-6 h-6 ">-</button>
    </div>
    <button className="border text-[12px]  px-2 rounded-md bg-gray-50">Add Cart</button>
        </div>
          </div>

          <div className="mb-10">
<div className="w-52 h-52 shadow-lg border-2 rounded-lg mb-3 relative ">
            <img
              src="/cream1.jpeg"
              className="w-full h-full"
              alt=""
            />
            {!LikeColor.includes(10) ? (
              <CiHeart
                size={22}
                className={` m-2 absolute top-1 right-2 cursor-pointer  'text-[#080808]`}
                onClick={() => handleLikes(10)}
              />
            ) : (
              LikeColor.includes(10) && (
                <FaHeart
                  size={20}
                  className={` m-2 absolute top-1 right-2 cursor-pointer text-[#fd00cd]`}
                  onClick={() => handleLikes(1)}
                />
              )
            )}
          </div>
          <h3>Product Name</h3>
<p className="text-[12px]">Product discription</p>
<h4 className="text-[14px]">Product price</h4>

        <div className="flex justify-between mt-2">
    <div className="border rounded-sm">
    <button className="w-6 h-6  ">+</button>
          <button className="w-6 h-6  cursor-text text-[12px]">2</button>
          <button className="w-6 h-6 ">-</button>
    </div>
    <button className="border text-[12px]  px-2 rounded-md bg-gray-50">Add Cart</button>
        </div>
          </div>


       
    
      </div>
    </div>
  )
}
export default NewArrivals;
