import { useContext } from "react";
import Cartcontext from "../cartcontext";
import Footer from "../components/footer";
import MainNavbar from "../components/mainNav"
import PropTypes from 'prop-types';
import SideMenu from "../components/menu";

const Defaultlayout = ({children}) => {

    const { isOpen, setIsOpen, Back } = useContext(Cartcontext);

    return (
        <>
            <MainNavbar logoSrc="/Logo2.png" setIsOpen={setIsOpen} isOpen={isOpen} Back={Back}/>
             <SideMenu />
            
            {children}
            <Footer  logoSrc="Logo4.png"/>

        </>
    )
}

Defaultlayout.propTypes =  {
    children: PropTypes.node.isRequired,
}
  

  
export default Defaultlayout