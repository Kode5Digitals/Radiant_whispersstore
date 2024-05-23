import { useState } from "react";
import { selectCart } from "../stores/features/cart/cartSlice";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowDropleft } from "react-icons/io";
import httpAuth from "../utils/https";

const PaystackComponent = () => {
  const [email, setEmail] = useState("");
  const { totalPrice } = useSelector(selectCart)
const navigate=useNavigate()
const [response, setResponse] = useState(null);
const [loading, setLoading] = useState(false);

const handlePayment = async () => {
  setLoading(true);
 try{
  const res = await httpAuth('/api/paystack', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ amount: totalPrice * 100,email })
  });

  const data = await res.json();
  setResponse(data);
  setLoading(false);

  if (data.status && data.data) {
    window.location.href = data.data.authorization_url;
  } else {
    console.error(data.error);
  }
 }catch(err){
console.log(err)
 }

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
    <div className="mt-12 ">
      <div className="ml-3">
      <Link to={"/cart"}>
      <IoIosArrowDropleft size={30}/> </Link>
      </div>
      <div className="flex  xl:w-3/4 mt-30 w-full p-1 mt-6  xl:mt-0 m-auto justify-center">
        <div className=" xl:w-1/2 h-[500px] w-full  hidden xl:block">
          <img src="bg6.jpeg" alt="" className="w-full h-full" />
        </div>
        <div className=" h-[500px] xl:w-1/2 flex xl:p-4 justify-center  w-full p-2   bg-pink-400">
          <div className=" bg-white xl:p-2  w-full p-1">
            <div className="xl:w-[400px] w-full ">
              <label htmlFor="email">Email</label>
              <br />
              <input
              className="w-full  rounded-sm  p-2 border-2 mb-4"
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              </div>

              <div>
                <label htmlFor="number">Amount</label>
              <br />
                <input
                 className="w-full rounded-sm  p-2  mb-4 "
                id="number"
                type=""
                placeholder="Amount"
            value={
            totalPrice.toFixed(2)
            }
            disabled
              />
             
            </div>
          <div className="flex xl:justify-end justify-center mt-32  xl:mt-56 ">
          <button onClick={handlePayment} disabled={loading} 
              className=" rounded-sm  p-3 hover:border-pink-300 border-2 mb-4 hover:text-sm hover:px-10 bg-lime-300 "
              >
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
          {/* <PaystackButton
              {...config}
              onSuccess={handlePaymentSuccess}
              onClose={handlePaymentClose}
              text="Pay Now"
              className=" rounded-sm  p-3 hover:border-pink-300 border-2 mb-4 hover:text-sm hover:px-10 bg-lime-300 "
            /> */}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaystackComponent;
