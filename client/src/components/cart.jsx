import { faArrowAltCircleLeft,  faCartPlus, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { useContext } from "react"
import {  Link } from "react-router-dom"
import Cartcontext from "./cartcontext"
import Footer from "./components/footer"
import Theme from "./components/theme"
// import Defaultnav from "./Layout/Defaultlayout"

const Addcart = () => {
    const { setcart, cart } = useContext(Cartcontext)
    const [total, settotal] = useState(0)
const [qty,setQty] = useState('')
  let Quantity=  cart.map((item)=> item.quantity).reduce((total,value)=>{
return total +value
  },0)  

useEffect(()=>{
setQty(Quantity)
},[Quantity])


    let totalItem = cart.map((item) => {
        return item.Total
    }).reduce((total, value) => {
        return Math.round((total + value) * 100) / 100;

    }, 0)


    useEffect(() => {
        settotal(totalItem)
    }, [totalItem])

    const remove = (id) => {
        const newItem = cart.filter(s => s.id !== id)
        setcart(newItem)
        localStorage.setItem("cartItem", JSON.parse(newItem))
    }

    const increaseCartQuantity = (id) => {
        let newCart = cart.map((item) => {
            if (item.id == id) {
                return {
                    ...item,
                    quantity: item.quantity += 1,                               //total quantity of each item 
                    Total: Math.round(item.price * item.quantity * 100) / 100  //total price of each item
                }
            }
            else {
                return item;
            }

        })
        setcart(newCart)

        localStorage.setItem("cartItem", JSON.stringify(newCart));

    };

    const decreaseCartQuantity = (id, quantity) => {

        if (quantity > 1) {
            let newCart = cart.map((item) => {
                if (item.id == id) {

                    return {
                        ...item,
                        quantity: item.quantity -= 1,
                        Total: item.price * item.quantity
                    }
                }
                else {
                    return item;
                }
            })

            setcart(newCart)
            localStorage.setItem("cartItem", JSON.stringify(newCart));
        }


    };
    // function truncate(string, limit) {
    //     let dots = "..."
    //     if (string.length > limit) {
    //       string = string.substring(0, limit) + dots
    //     }
    //     return string
    //   }
    
    const ClearCart = () => {
        setcart([]);
        localStorage.removeItem("product");
    };
    return (
        <main>
<div className="cart-page-nav  d-flex align-items-center justify-content-around ">
<h1 className="text-center pt-5">My Shopping Cart <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon></h1>
                <Theme/>
</div>
            {cart.length > 0 && <section  >
               
                {/* <h1>Cart({qty})</h1> */}
               <Link to="/"> <FontAwesomeIcon icon={faArrowAltCircleLeft} size="2x"/></Link>

                

                {cart.map((val, index) => (
                    <div key={index} className="row ">
                        <div className="col-8 cart-infosection" >
                            <div className=" cart-infocase" >
                            <div className="cart-img-case">
                                    <img src={val?.image} className="cart-img"></img>
                                </div>
                             <div style={{width:"170px"}}>
                         <h2 style={{ fontSize: "1em" }}>{val?.title}</h2>
                                    <h3>In Stock</h3>
                                 </div>
                                <div className="d-flex">
                                        <button className="operator-case" onClick={() => decreaseCartQuantity(val?.id, val.quantity)} >-</button>
                                        <h4 className="operator-case-no">{val?.quantity}</h4>
                                        <button className="operator-case " onClick={() => increaseCartQuantity(val?.id)} >+</button>
                                    </div>
                                <div className="cart-info">
                                    <h2 style={{ fontSize: "1.5em", }}>${val?.price}</h2>
                                </div>
                                <button onClick={() => remove(val?.id)} className="del-btn ">
                                        <FontAwesomeIcon color="red" icon={faTrash}></FontAwesomeIcon>
                                        Removeitem</button>

                               
                            </div>
                        </div>
                    </div>
                ))
                }
                <div className="row cart-sum">
                    <div className="cart-summary col-6 ">
                        <h1 >CART SUMMARY</h1>
                        <hr />
                        <span className="total"><h3>Total</h3>
                        <h4>${total}</h4></span>
                        <span className="total">
                        <h4>Number of items</h4>
                        <h4>{qty}</h4></span>
                        <p style={{ fontSize: "1em" }}>
                            Delivery fees not included yet
                        </p>

             <div style={{textAlign:"center"}}>
             <button className="proceed-btn">Proceed to checkout</button>
                 </div>       </div>

                </div>
<div  className="clear-cart " > 
<button className="clear-btn" onClick={ClearCart}>Emptycart</button>
    </div>                <Footer/>
            </section>
            }
            {
                cart.length == 0 &&
                <div className="empty-cart">
                    <h1 style={{
                        textAlign: "center"
                        , marginTop: "220px"
                    }} >
                        Your cart is empty
                    </h1>
                </div>
            }
        </main >

    )
}
export default Addcart
