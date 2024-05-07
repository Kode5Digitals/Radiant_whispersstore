import { createContext } from "react";

//blueprint
//this is an object instance i.e a prototype
const Cartcontext = createContext({
    // cart: [],
    // theme: {},
    // settheme: {},
    // setcart: {},
    cartNumber: () => { },
    setcartNumber: {},
    // Total: {},
    // setTotal: {},
    // overallTotal: "",
    // setoverallTotal: ""
    LikeColor:[],
    setLikeColor:[],
    openLogin:Boolean,
    setOpenLogin:Boolean,
      openRegister:Boolean,
    setOpenRegister:Boolean,
    handleLogin:()=>{},
    handleRegister:()=>{},
})

export default Cartcontext


    