// import { TfiSearch } from "react-icons/tfi"
import { LiaShoppingBagSolid } from "react-icons/lia"
import "../App.css"

const Banner = () => {

  const  scrollDown = () => {
    window.scrollTo({
      top:550,
      behavior: 'smooth', // for smooth scrolling
    });
  };
  return (
    <div className="relative ">

    <div className="mt-36 xl:mt-[74px]  bg-slate-600  banner  lg:mt-18 md:mt-[75px]  flex    sm:mt-36 " >

       <div className="w-full relative top-0  " style={{backgroundImage:"RadiantWhisperBanner.png"}}>
     <img src="RadiantWhisperBanner.png" alt="RadiantWhisperBanner" className="w-full h-full sm:hidden hidden xl:block lg:block md:hidden"/>
     <img src="RadiantWhispersstoreBanner2.png" alt="RadiantWhisperBanner"  className= "block w-full h-full  sm:block xl:hidden lg:hidden md:block"/>
     </div>
<div className=" flex justify-end  w-full absolute bg-black h-full bg-transparent">
<div className=" bannerTextCase  xl:w-3/5   w-1/2    sm:w-1/2 lg:w-3/5 md:w-3/5">
    
<div  className=" w-full">
<h2 className="bannerTopText">
 We care about your <img src="skin.gif" alt=""  className="w-32 xl:w-72 lg:w-64 md:w-52"/>
  </h2>
<p  className="bannerBottomText">
Committed to Authenticity and Affordability in  Beauty products . Shop our  wide range of products from Leading Korean, US, and UK Brands.
</p>
                
<button className="w-30 bg-[#891980] xl:text-lg lg:text-lg   md:text-lg text-[10px] flex items-center gap-2 text-white px-4" onClick={scrollDown}>
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