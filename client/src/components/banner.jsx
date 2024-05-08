import Navbar from "./nav"
import "../App.css"

const Banner = () => {
  return (
    <div className="relative">
    <Navbar/>
    <main>
       <div className="bg-cover bg-center flex justify-center items-center w-full" style={{ backgroundImage: 'url("bg3.jpeg")', backgroundColor: 'rgb(25, 34, 39)',  height: '530px', color: 'white' }}>

         <div  className=" homeIntroductionDiv mx-auto w-full bg-black bg-opacity-50 flex items-center gap-12">
             <div className="xl:w-4/12 w-full xl:ml-20 xl:mt-24 mt-12 text-center xl:text-start p-6 ">
                 <h2 className="text-5xl xl:text-5xl">
                 We care about your skin
                 </h2>
                 <p className="text-sm mt-12   text-[#ede4ec]">
                 Envelop yourself in the luxurious embrace of nature purity, where the essence of cream whispers tales of indulgence and revitalization.
                 </p>
               </div>
              <div className="hidden relative xl:flex">
              <div className="home-img1 overflow-hidden " ><img  src="cream1.jpg"  className="w-full h-full " alt=""></img></div>
               <div className="home-img1 overflow-hidden  absolute left-72 bottom-12" ><img  src="cream5.jpg"  className="w-full h-full " alt=""></img></div>
              </div>
         </div>
       </div> 
       </main>

         </div>
  )
}

export default Banner