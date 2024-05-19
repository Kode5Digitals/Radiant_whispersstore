import { useState } from "react";
import { PaystackButton } from "react-paystack";
import { toast } from "react-toastify";
import { selectCart } from "../stores/features/cart/cartSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const PaystackComponent = () => {
  const [email, setEmail] = useState("");
  const {  totalPrice } = useSelector(selectCart)
const navigate=useNavigate()
  const handlePaymentSuccess = (response) => {
    console.log(response);
    toast.success("Payment successful!");
  };

  const handlePaymentClose = () => {
    console.log("Payment modal closed");
navigate("/home")
  };

  const config = {
    reference: new Date().getTime().toString(),
    email: email,
    amount: totalPrice * 100,
    publicKey: "pk_test_07070da6a9afaa698f923376dc24bbbe12df1d94",
  };

  return (
    <div className="flex justify-center mt-12">
      <div className=" flex w-3/4 mt-30 ">
        <div className="  w-1/2 h-[500px] ">
          <img src="bg6.jpeg" alt="" className="w-full h-full" />
        </div>
        <div className=" h-[500px] w-1/2 flex p-4 justify-center  bg-pink-400">
          <div className=" bg-white p-2">
            <div className="w-[400px] ">
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
          <div className="flex justify-end mt-56 ">
          <PaystackButton
              {...config}
              onSuccess={handlePaymentSuccess}
              onClose={handlePaymentClose}
              text="Pay Now"
              className=" rounded-sm  p-3 hover:border-pink-300 border-2 mb-4 hover:text-sm hover:px-10 bg-lime-300 "
            />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaystackComponent;
