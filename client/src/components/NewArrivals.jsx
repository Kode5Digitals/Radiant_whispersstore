import { PiGreaterThanLight } from "react-icons/pi";
import { PiLessThanLight } from "react-icons/pi";
import { useRef, useState } from "react";

function NewArrivals() {
  const flexContainerRef = useRef(null);
  const [showLeftIndicator, setShowLeftIndicator] = useState(false);

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

            {/* <PiGreaterThanLight  className="text-white font-bold"/> */}
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
        <div className="min-w-52 h-52 border-2 rounded-lg mb-10">
        <img src="../public/images/cream4.jpeg" className="w-full h-full" alt="" />
        </div>
        <div className="min-w-52 h-52 border-2 rounded-lg mb-10">
        <img src="../public/images/cream5.jpeg" className="w-full h-full" alt="" />
        </div>
        <div className="min-w-52 h-52 border-2 rounded-lg mb-10">
        <img src="../public/images/cream6.jpeg" className="w-full h-full" alt="" />
        </div>
        <div className="min-w-52 h-52 border-2 rounded-lg mb-10">
        <img src="../public/images/cream1.jpeg" className="w-full h-full" alt="" />
        </div>
        <div className="min-w-52 h-52 border-2 rounded-lg mb-10">
        <img src="../public/images/cream2.jpeg" className="w-full h-full" alt="" />
        </div>
        <div className="min-w-52 h-52 border-2 rounded-lg mb-10">
        <img src="../public/images/cream3.jpeg" className="w-full h-full" alt="" />
        </div>
        <div className="min-w-52 h-52 border-2 rounded-lg mb-10">
        <img src="../public/images/cream1.jpeg" className="w-full h-full" alt="" />     
        </div>
        <div className="min-w-52 h-52 border-2 rounded-lg mb-10">
        <img src="../public/images/cream6.jpeg" className="w-full h-full" alt="" />
        </div>
        <div className="min-w-52 h-52 border-2 rounded-lg mb-10">
        <img src="../public/images/cream2.jpeg" className="w-full h-full" alt="" />
        </div>
        <div className="min-w-52 h-52 border-2 rounded-lg mb-10">
        <img src="../public/images/cream4.jpeg" className="w-full h-full" alt="" />
        </div>
        <div className="min-w-52 h-52 border-2 rounded-lg mb-10">
        <img src="../public/images/cream6.jpeg" className="w-full h-full" alt="" />
        </div>
      </div>
    </div>
  );
}
export default NewArrivals;
