import NewArrivals from "./components/NewArrivals"
import Banner from "./components/banner"
import Footer from "./components/footer"
import MainNavbar from "./components/mainNav"
import Products from "./components/products"
import "./index.css"
function Home() {

    return (
      <main>
          <MainNavbar/>
          <Banner/>
          <Products/>
          <NewArrivals/> 
          <Footer/>   
      </main>
    )
}

export default Home