import "../App.css"

const Banner = () => {
  return (
    <div className="relative mt-20">
    <main>
       <div className="bg-cover bg-center" style={{ backgroundImage: 'url("bg3.jpeg")', backgroundColor: 'rgb(25, 34, 39)',  height: '530px', color: 'white' }}>
     
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
       </main>

         </div>
  )
}

export default Banner