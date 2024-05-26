// import { TfiSearch } from "react-icons/tfi"
import "../App.css"

const Banner = () => {
  return (
    <div className="relative xl:mt-[74px] mt-32 md:mt-[70px]">
{/* <div className=" xl:block md:block p-2 ">
            <div className="flex items-center gap-2 border-black border p-2 rounded-xl">
              <TfiSearch />

              <input
                type="text"
                // value={query}?
                // onChange={handleChange}
                placeholder="Search"
                style={{ background: 0, outline: "0" }}
                className="w-full"
              />
            </div>
            </div> */}


      
    <div >
       <div className=" w-full relative top-0   h-[300px] xl:h-[540px] lg:h-[400px] md:h-[380px]">
     <img src="banner4.jpeg" alt="" className="w-full h-full"/>
<div className="absolute top-24 xl:pl-20 w-1/2 xl:left-[550px] 2xl:left-[700px] 2xl:pl-44 left-56 sm:pl-96 lg:left-96 lg:pl-20 sm:left-96 md:left-[400px] md:pl-20 ">
<h2 className="text-2xl lg:text-3xl md:text-4xl lg:text-[40px] lg:pr-40  xl:text-6xl   xl:pr-40 md:pr-30 sm:pr-20 pr-16">
                 We care about your <span className="text-pink-500 " >skin</span>
                 </h2>
                 <p className="xl:text-lg xl:mt-12 text-[12px] lg:text-[19px] md:text-[14px] mt-5 sm:mt-10">
                 Envelop yourself in the luxurious embrace of nature purity, where the essence of cream whispers tales of indulgence and revitalization.
                 </p>
                 <button className="w-30 bg-blue-600 text-white px-4">Shop Now</button>
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