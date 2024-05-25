// import { TfiSearch } from "react-icons/tfi"
import "../App.css"

const Banner = () => {
  return (
    <div className="relative xl:mt-20 mt-32 md:mt-[86px]">



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
       <div className="bg-cover bg-center   h-[300px] xl:h-[530px] lg:h-[400px] md:h-[380px]" style={{ backgroundImage: 'url("banner1.jpeg")'}}>
     
         <div  className=" homeIntroductionDiv   xl:w-1/2 bg-black bg-opacity-20 ">
        <div className="p-4 ">
        <div className="xl:w-1/2 w-full ">
        <h2 className="text-2xl lg:text-3xl  xl:text-6xl sm:mt-14 mt-14 lg:mt-28 xl:mt-32 ">
                 We care about your skin
                 </h2>
        </div>
                 <div className="">
                 <p className="text-sm mt-12   text-[#ede4ec]">
                 Envelop yourself in the luxurious embrace of nature purity, where the essence of cream whispers tales of indulgence and revitalization.
                 </p>
                 </div>
        </div>
       </div> 
       </div> 
       </div>

         </div>
  )
}

export default Banner