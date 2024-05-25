import {  useState } from "react";
import { selectCart } from "../stores/features/cart/cartSlice";
import { useSelector } from "react-redux";
import { Link} from "react-router-dom";
import { IoIosArrowDropleft } from "react-icons/io";
import httpAuth from "../utils/https";
import { formatPrice } from "../utils/utils";
import { TbCurrencyNaira } from "react-icons/tb";
import ImageCarousel from "../components/ImageCarousel";
import { CiFaceSmile } from "react-icons/ci";

const PaystackComponent = () => {
  const [email, setEmail] = useState("");
  const { totalPrice } = useSelector(selectCart)
// const [response, setResponse] = useState(null);
const [loading, setLoading] = useState(false);
const { items } = useSelector(selectCart);
const cartItemImages = items.map((item) => item.image)
const cartItemNames= items.map((item) => item.name)
const handlePayment = async () => {
  setLoading(true);
 try{
  const res = await httpAuth.post("/api/paystack/payment", { amount: totalPrice,email:email }
  );
  const { authorization_url } = res.data;
console.log(authorization_url)

  if (authorization_url) {
    window.open(authorization_url)
    // window.location.href = authorization_url
  } else {
    console.error(res.data.error);
  }
 }catch(err){
console.log(err)
 }finally{setLoading(false)}
};





  // const handlePaymentSuccess = () => {
  //   toast.success("Payment successful!");
  // };

//   const handlePaymentClose = () => {
// navigate("/home")
//   };

//   const config = {
//     reference: new Date().getTime().toString(),
//     email: email,
//     amount: totalPrice * 100,
//     publicKey:environment.PAYSTACK_PUBLIC_KEY
// ,
//   };

  return (
    <div className="h-screen p-3 md:p-2 lg:p-3 xl:p-3 sm:p-10 bg-[#fec5ec]">
      <div className="ml-3  mb-3">
      <Link to={"/cart"}>
      <IoIosArrowDropleft size={30}/> </Link>
      </div>
      <div className="flex flex-wrap w-full  xl:w-3/4 md:w-1/2  bg-white     m-auto justify-center xl:p-20">
        <div className=" xl:w-1/2 h-[400px]  border text-center w-full   xl:block ">
      <i className="flex items-center pl-2">Thank you for your patronage <CiFaceSmile/></i>

                        <ImageCarousel image={cartItemImages}  name={cartItemNames}/>
        </div>

        
        <div className=" h-[400px] xl:w-1/2 flex xl:p-4 justify-center  w-full p-2   border">
          <div className=" bg-white xl:p-2  w-full p-1">
            <div className="xl:w-full w-full ">
              <label htmlFor="email">Email:</label>
              <br />
              <input
              className="w-full  rounded-sm  p-2 border mb-4"
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              </div>

              <div>
                <label htmlFor="number" className="flex gap-1 items-center">Amount  (<TbCurrencyNaira /> )</label>
                <input
                 className="w-full rounded-sm  p-2  mb-4 "
                id="number"
                type=""
                placeholder=""
            value={
            formatPrice(Number(totalPrice.toFixed(2)))
            }
            disabled
              />
             
            </div>
          <div className="flex xl:justify-end justify-center mt-32  xl:mt-24 ">
          <button onClick={handlePayment} disabled={loading} 
              className=" rounded-sm  p-3 hover:border-pink-300 border-2 mb-4 hover:text-sm hover:px-6 text-[12px] bg-lime-300 "
              >
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
         
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaystackComponent;
