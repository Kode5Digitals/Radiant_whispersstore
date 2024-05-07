import PropTypes from 'prop-types'
import Cartcontext from "./cartcontext"
import { useState } from 'react';
const Cartprovider = ({children}) => {
    const storedLikes = localStorage.getItem("Likes");
    const initialLikes = !storedLikes ? [] : JSON.parse(storedLikes)  ;
    const [LikeColor, setLikeColor] = useState(initialLikes)
    const [openLogin,setOpenLogin]=useState(false)
const[ openRegister,setOpenRegister]=useState(false)
    const handleLogin=()=>{
        console.log(false)
setOpenLogin(prevState => !prevState)
        
    }
    const handleRegister=()=>{
        console.log(false)
setOpenRegister(prevState => !prevState)}
    // const [myproduct, setmyproduct] = useState(JSON.parse(localStorage.getItem("product")))
    const [cartNumber,   setcartNumber] = useState(localStorage.getItem("cartNo") ? JSON.parse(localStorage.getItem("cartNo")) :
        [])
    // const [theme, settheme] = useState({ backgroundcolor: "white", textcolor: "black" })

    // const getnumber = (item) => {
    //     const isproductincart = cart.find((Existingitem) => Existingitem.id == item.id)
    //     if (isproductincart) {
    //         alert("product already exist")
    //     }
    //     else {
    //         let NewCart = [...cart, { ...item, quantity: 1, Total: item.price }]
    //         setcart(NewCart)
    //         localStorage.setItem('cartItem', JSON.stringify(NewCart)s
    //     }
    // }
    const Cartcont = {
        // product: myproduct,
        // setmyproduct: setmyproduct,
        // cart: cart,
        // getnumber,
        // theme: theme,
        // settheme: settheme,
        // setcart: setcart,
        cartNumber:cartNumber,
        setcartNumber:setcartNumber,
        LikeColor:LikeColor,
        setLikeColor:setLikeColor,
        openLogin:openLogin,
        setOpenLogin:setOpenLogin,
        handleLogin: handleLogin,
        openRegister:openRegister,
        setOpenRegister:setOpenRegister,
        handleRegister:handleRegister
    }



    return (
        <Cartcontext.Provider value={Cartcont}>
            {children}
        </Cartcontext.Provider>
    )
  
}
Cartprovider.propTypes = {
    children: PropTypes.node.isRequired,}
export default Cartprovider