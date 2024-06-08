// import { TfiSearch } from "react-icons/tfi"
import { LiaShoppingBagSolid } from "react-icons/lia"
import "../App.css"
import { useEffect, useState } from "react";

const Banner = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = " Skin";
  const words = texts.split('');
  useEffect(() => {
    const changeText = () => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) %  words.length);
    };
   
    
    const intervalId = setInterval(changeText, 3000);
    
    return () => clearInterval(intervalId);
  }, [words.length]);

  const  scrollDown = () => {
    window.scrollTo({
      top:550,
      behavior: 'smooth', // for smooth scrolling
    });
  };
  return (
    <div className="relative ">

    <div className="mt-36 xl:mt-[74px]  md:mt-[70px] flex h-[300px] bannerImage" >

       {/* <div className=" w-full relative top-0   xl:h-[540px] lg:h-[400px] md:h-[440px]" style={{backgroundImage:"RadiantWhisperBanner.png"}}>
     <img src="RadiantWhisperBanner.png" alt="RadiantWhisperBanner" className="w-full h-full sm:hidden hidden xl:block lg:block md:hidden"/>
     <img src="RadiantWhispersstoreBanner2.png" alt="RadiantWhisperBanner"  className="block w-full h-full  sm:block xl:hidden lg:hidden md:block"/>
     </div> */}
<div className="mt-16 flex justify-end    pr-4 pl-20">
<div className="w-1/2">
    
<div  className=" w-full bg-slate-400 ">
<h2 className="text-[14px] lg:text-3xl md:text-4xl lg:text-[40px] lg:pr-40  xl:text-5xl    xl:pr-24 md:pr-10 sm:pr-40  ">
 We care about your <img src="skin.gif" alt=""  className="w-32 xl:w-72"/>
                 </h2>
<p  className="xl:text-lg xl:mt-12 text-[11px] lg:text-[19px] md:text-[14px] text-justify    sm:pr-32 md:pr-40 mt-5 sm:mt-10">
Committed to Authenticity and Affordability in  Beauty products . Shop our  wide range of products from Leading Korean, US, and UK Brands.
</p>
                
<button className="w-30 bg-[#891980] text-[10px] flex items-center gap-2 text-white px-4" onClick={scrollDown}>
Shop Now
<LiaShoppingBagSolid size={20} className=" hover:text-white "/>
</button>
</div>
</div>
</div>
       </div> 
       </div>

  )
}

export default Banner