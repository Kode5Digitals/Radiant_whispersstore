import { useState } from "react"
import NewArrivals from "./components/NewArrivals"
import Banner from "./components/banner"
import Banner2 from "./components/banner2"
import Footer from "./components/footer"
import MainNavbar from "./components/mainNav"
import Products from "./components/products"
import { LiaTimesSolid } from "react-icons/lia";
import "./index.css"
function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const Back = () => {
    setIsOpen(!isOpen);
  };
 
    return (
      <main className="">
          <div
        className={`menu fixed z-[10000] top-0 left-0 bg-white p-2 w-4/6 h-full overflow-hidden transition-all duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
<div className="mt-3 flex justify-end">
<p><LiaTimesSolid onClick={Back} /></p>
  </div>        
  <div className="mt-10">
  <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
  </div>
      </div>

          <MainNavbar setIsOpen={setIsOpen} isOpen={isOpen}/>
          <Banner/>
          <Products/>
          <Banner2/> 
          <NewArrivals/> 
          <Footer/>  
      </main>
    )
}

export default Home