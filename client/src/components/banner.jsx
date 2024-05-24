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
       <div className="bg-cover bg-center   h-[300px] xl:h-[530px] lg:h-[400px] md:h-[380px]" style={{ backgroundImage: 'url("bg3.jpeg")', backgroundColor: 'rgb(25, 34, 39)', color: 'white' }}>
     
         <div  className=" homeIntroductionDiv mx-auto w-full bg-black bg-opacity-50 flex justify-center  items-center ">
        <div className="  p-4 ">
        <h2 className="text-5xl xl:text-6xl">
                 We care about your skin
                 </h2>
                 <div className=" w-96 ">
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