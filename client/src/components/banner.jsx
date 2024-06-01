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
    <div className="relative xl:mt-[74px] mt-32 md:mt-[70px]">

    <div >
       <div className=" w-full relative top-0   h-[400px] xl:h-[540px] lg:h-[400px] md:h-[380px]">
     <img src="RadiantWhisperBanner.png" alt="RadiantWhisperBanner" className="w-full h-full sm:hidden hidden xl:block lg:block md:hidden"/>
     <img src="RadiantWhispersstoreBanner2.png" alt="RadiantWhisperBanner"  className="block w-full h-full  sm:block xl:hidden lg:hidden md:block"/>
<div className="absolute xl:top-24 top-16  left-52 sm:left-72 xl:pl-20 w-1/2 xl:left-[550px] 2xl:left-[700px] 2xl:pl-44   lg:left-96 lg:pl-20  md:left-[400px] md:pl-20 ">
<h2 className="text-2xl lg:text-3xl md:text-4xl lg:text-[40px] lg:pr-40  xl:text-6xl    xl:pr-40 md:pr-30 sm:pr-40 pr-10">
                 We care about your <span className="text-[#891980] " >skin</span>
                 </h2>
                 <p className="xl:text-lg xl:mt-12 text-[12px] lg:text-[19px] md:text-[14px] mt-5 sm:mt-10">
                 Envelop yourself in the luxurious embrace of nature purity, where the essence of cream whispers tales of indulgence and revitalization.
                 </p>
                
                 <button className="w-30 bg-[#891980] flex items-center gap-2 text-white px-4" onClick={scrollDown}>
                 Shop Now
              <LiaShoppingBagSolid size={20} className=" hover:text-white"/>
                 </button>
</div>



   

         {/* <div  className=" homeIntroductionDiv   w-1/2 ">
        <div className="p-4 "> text-white
       
                 </div>
       </div>  */}
       </div> 
       </div>

         </div>
  )
}

export default Banner