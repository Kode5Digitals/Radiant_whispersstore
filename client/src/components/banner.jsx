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

    <div className="mt-36 xl:mt-[74px] xl:h-[550px]  lg:h-[500px] lg:mt-18 md:mt-[75px]  flex h-[400px]   sm:mt-36 " >

       <div className="w-full relative top-0  h-[300px]  xl:h-[540px] lg:h-[400px] md:h-[440px]" style={{backgroundImage:"RadiantWhisperBanner.png"}}>
     <img src="RadiantWhisperBanner.png" alt="RadiantWhisperBanner" className="w-full h-full sm:hidden hidden xl:block lg:block md:hidden"/>
     <img src="RadiantWhispersstoreBanner2.png" alt="RadiantWhisperBanner"  className= "block w-full h-full  sm:block xl:hidden lg:hidden md:block"/>
     </div>
{/* <div className=" flex justify-end  w-full ">
<div className="xl:w-3/5 bg-red-10 xl:mr-24 xl:mt-24 lg:mt-36  lg:mr-24  pl-24 mr-6  w-1/2 mt-44   sm:w-1/2 sm:pr-16 sm:mt-16 lg:w-3/5 md:w-3/5">
    
<div  className=" w-full bannerText  ">
<h2 className="text-[14px] sm:text-[28px] xl:text-[44px] md:text-[30px] lg:text-[40px] ">
 We care about your <img src="skin.gif" alt=""  className="w-32 xl:w-72 lg:w-64 md:w-52"/>
                 </h2>
<p  className=" sm:text-[12px] mt-4 text-[10px] xl:text-[20px] lg:text-[18px]  md:text-[18px] text-justify">
Committed to Authenticity and Affordability in  Beauty products . Shop our  wide range of products from Leading Korean, US, and UK Brands.
</p>
                
<button className="w-30 bg-[#891980] xl:text-xl lg:text-lg   md:text-lg text-[10px] flex items-center gap-2 text-white px-4" onClick={scrollDown}>
Shop Now
<LiaShoppingBagSolid size={20} className=" hover:text-white "/>
</button>
</div>
</div>
</div> */}
       </div> 
       </div>

  )
}

export default Banner