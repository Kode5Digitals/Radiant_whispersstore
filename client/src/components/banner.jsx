import Navbar from "./nav"
import "../App.css"

const Banner = () => {
  return (
    <>
    <Navbar/>
    <main>
       <div className="bg-cover bg-center flex justify-center items-center" style={{ backgroundImage: 'url("./public/images/cream3.jpeg")', backgroundColor: 'rgb(25, 34, 39)', height: '500px', color: 'white' }}>

         <div  className=" homeIntroductionDiv mx-auto w-full bg-black bg-opacity-50 flex items-center gap-12">
             <div className="w-1/3 ml-20 mt-24">
                 <h2 className="text-6xl">
                 We care about your skin
                 </h2>
                 <p className="text-sm mt-12 pr-16 text-[#ede4ec]">
                 Envelop yourself in the luxurious embrace of nature purity, where the essence of cream whispers tales of indulgence and revitalization
                 </p>
               </div>
              <div className="flex relative">
              <div className="home-img1 overflow-hidden " ><img  src="images/cream1.jpeg"  className="w-full h-full " alt=""></img></div>
               <div className="home-img1 overflow-hidden  absolute left-72 bottom-12" ><img  src="./public/images/cream2.jpeg"  className="w-full h-full " alt=""></img></div>
              </div>
         </div>
       </div> 
       </main>

         </>
  )
}

export default Banner