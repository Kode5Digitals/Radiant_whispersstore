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
       <div className="bg-cover bg-center flex justify-end   h-[300px] xl:h-[500px] lg:h-[400px] md:h-[380px]" style={{ backgroundImage: 'url("banner4.jpeg")'}}>
     
         <div  className=" homeIntroductionDiv   w-1/2 ">
        <div className="p-4 ">
        <div className=" w-full lg:mt-20 md:mt-16 mt-12">
        <h2 className="text-2xl lg:text-3xl md:text-4xl  xl:text-6xl   xl:pr-40 md:pr-30 sm:pr-20 pr-16">
                 We care about your <span className="text-pink-500 " >skin</span>
                 </h2>
        </div>
                 <div className="">
                 <p className="xl:text-lg xl:mt-12 text-[12px]  md:text-[14px] mt-5 sm:mt-10">
                 Envelop yourself in the luxurious embrace of nature purity, where the essence of cream whispers tales of indulgence and revitalization.
                 </p>
  <div  style={{width: "100px",
transition:" width 1s ease 1s"}}>
  <button className=" bg-gray-600 hover:w-40 p-2 text-white">Shop Now 
  </button>
 
  </div>

                 </div>
        </div>
       </div> 
       </div> 
       </div>

         </div>
  )
}

export default Banner