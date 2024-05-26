import { useContext, useState } from "react";
import Cartcontext from "../cartcontext";
import Footer from "../components/footer";
import MainNavbar from "../components/mainNav"
import PropTypes from 'prop-types';
import SideMenu from "../components/menu";
import Sidebar from "../components/sidebar";

const Defaultlayout = ({children}) => {

    const { isOpen, setIsOpen, Back } = useContext(Cartcontext);
    const [isSideOpen, setSideOpen] = useState(false);
    const[openNavMenu,setOpenNavMenu]=useState(false)

    const toggleSidebar = () => {
      setSideOpen(!isSideOpen);
    };
    return (
        <>
            <MainNavbar logoSrc="/Logo2.png" setIsOpen={setIsOpen} isOpen={isOpen} Back={Back} toggleSidebar={toggleSidebar} setSideOpen={setSideOpen}/>
             <SideMenu  />
             <Sidebar isSideOpen={isSideOpen} toggleSidebar={toggleSidebar} />
            {children}
            <Footer  logoSrc="Logo4.png"/>

        </>
    )
}

Defaultlayout.propTypes =  {
    children: PropTypes.node.isRequired,
}
  

  
export default Defaultlayout