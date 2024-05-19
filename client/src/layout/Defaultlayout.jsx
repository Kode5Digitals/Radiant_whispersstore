import Footer from "../components/footer";
import MainNavbar from "../components/mainNav"
import PropTypes from 'prop-types';

const Defaultlayout = ({ setIsOpen, isOpen, Back, children}) => {
    return (
        <>
            <MainNavbar logoSrc="logo.png"  setIsOpen={setIsOpen} isOpen={isOpen}  Back={Back}/>
            {children}
            <Footer  logoSrc="../logo.png"/>

        </>
    )
}

Defaultlayout.propTypes =  {
    children: PropTypes.node.isRequired,
    setIsOpen: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    Back: PropTypes.func.isRequired,
}
  
  
export default Defaultlayout