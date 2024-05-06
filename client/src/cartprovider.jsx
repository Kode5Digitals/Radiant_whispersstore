import PropTypes from 'prop-types'
import Cartcontext from "./cartcontext"
import { useState } from 'react';
const Cartprovider = ({children}) => {
    const storedLikes = localStorage.getItem("Likes");
    const initialLikes = !storedLikes ? [] : JSON.parse(storedLikes)  ;
    const [LikeColor, setLikeColor] = useState(initialLikes)


    // const [myproduct, setmyproduct] = useState(JSON.parse(localStorage.getItem("product")))
    // const [cart, setcart] = useState(localStorage.getItem("cartItem") ? JSON.parse(localStorage.getItem("cartItem")) :
    //     [])
    // const [theme, settheme] = useState({ backgroundcolor: "white", textcolor: "black" })

    // const getnumber = (item) => {
    //     const isproductincart = cart.find((Existingitem) => Existingitem.id == item.id)
    //     if (isproductincart) {
    //         alert("product already exist")
    //     }
    //     else {
    //         let NewCart = [...cart, { ...item, quantity: 1, Total: item.price }]
    //         setcart(NewCart)
    //         localStorage.setItem('cartItem', JSON.stringify(NewCart))

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
        LikeColor:LikeColor,
        setLikeColor:setLikeColor

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