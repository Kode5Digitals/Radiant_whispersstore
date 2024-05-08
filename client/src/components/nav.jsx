import { useState } from "react";

import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  const [hovereddivItem, setHovereddivItem] = useState(null);
  const handledivItemHover = (itemName) => {
    setHovereddivItem(itemName);
  };

  const handleMouseLeave = () => {
    if (!document.querySelector(".hovered-div-item:hover")) {
      setHovereddivItem(null);
    }
  };
  // #fd00cd
  return (
    <div
      className="bg-[#fd00cd] opacity-8 text-white
      font-bold text-sm   flex xl:mt-[80px] mt-[68px] sm:mt-[66px] md:mt-[70px]  items-center justify-around "
    >
      <div className="flex gap-10 items-center ">
        <div
          className="group relative  px-4 py-2  hover:bg-[#f3a7a7] hover:text-black"
          onMouseEnter={() => handledivItemHover("Item 1") }
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex items-end cursor-pointer  ">
            <h4>Products</h4>
            <span>
              <MdKeyboardArrowDown />
            </span>
          </div>
          {hovereddivItem === "Item 1" && (
            <div className="absolute cursor-pointer  left-0 w-full  min-w-72 bg-white  z-30 py-2">
              <div className="px-4 py-2 text-[#403f40] hover:bg-[#f4e4f2]  hover:text-black">
                Sub Items
              </div>

              <div className="px-4 py-2  text-[#403f40] hover:bg-[#f4e4f2]  hover:text-black">
                Sub Items
              </div>  <div className="px-4 py-2  text-[#403f40] hover:bg-[#f4e4f2] hover:text-black">
                Sub Items
              </div>  <div className="px-4 py-2  text-[#403f40] hover:bg-[#f4e4f2]  hover:text-black">
                Sub Items
              </div>
            </div>
          )}
        </div>

        <div className="flex items-end cursor-pointer ">
          <h4>About Us</h4>
        </div>

        <div className="flex items-end cursor-pointer ">
          <h4>Contact Us</h4>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
