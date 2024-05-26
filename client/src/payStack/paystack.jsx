import { selectCart } from "../stores/features/cart/cartSlice";
import { useSelector } from "react-redux";
import { Link, useNavigate} from "react-router-dom";
import { IoIosArrowDropleft } from "react-icons/io";
import httpAuth from "../utils/https";
import { TbCurrencyNaira } from "react-icons/tb";
import ImageCarousel from "../components/ImageCarousel";
import { CiFaceSmile } from "react-icons/ci";
import { ToastContainer, toast } from "react-toastify";
import { PaystackButton } from 'react-paystack';
import { useRef, useState } from "react";
import { IoAtCircle } from "react-icons/io5";
import { FaSpinner } from "react-icons/fa";

const PaystackComponent = () => {
  const { totalPrice } = useSelector(selectCart)
  const emailRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const amount= totalPrice
  const navigate=useNavigate()
const [loading, setLoading] = useState(false);
const { items } = useSelector(selectCart);
const cartItemImages = items.map((item) => item.image)
const cartItemNames= items.map((item) => item.name)
const key="pk_test_07070da6a9afaa698f923376dc24bbbe12df1d94";
const [reference, setReference] = useState('');
const [initialized, setInitialized] = useState(false);


const generateUniqueReference = () => {
  return `ref_${Math.random().toString(36).substring(2, 15)}`;
};
const handlePayment = async () => {
  setLoading(true);
  const newReference = generateUniqueReference();
  setReference(newReference);
  const formdata={
    amount: amount,
    email: emailRef.current.value,
    firstName: firstNameRef.current.value,
    lastName: lastNameRef.current.value,
    reference: newReference
  }
console.log(formdata)
 try{
  const res = await httpAuth.post("/api/paystack/payment", 
  formdata
     );
const { data } = res;
if (data?.data?.reference) {
  setReference(data.data.reference);
  setInitialized(true);
  console.log("Reference set:", data.data.reference);
} else {
  throw new Error("No reference returned from the server");
}
 }catch(err){
console.log("err",err)
 }finally{
  setLoading(false)
 }
};


const handlePaymentSuccess = async (reference) => {
  try {
    const response = await httpAuth.get(`/api/paystack/verifyPayment/${reference}`);
    const  data  = response?.data.data
    if (data.data.status === 'success') {
      emailRef.current.value = '';
      firstNameRef.current.value = '';
      lastNameRef.current.value = '';
     setInitialized(false);
   toast.success("Payment sucessfull");

    } else if (data.data.status === 'abandoned') {
      toast.error('Payment was not completed');
    } else {
      toast.error('Payment verification failed');
    }
  } catch (error) {
    toast.error('Error verifying payment');
  }
};







  const handlePaymentClose = () => {
    console.log("Payment window closed");
navigate("/cart")
  };



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
          <div className=" bg-white xl:p-2  w-full p-1 text-[12px]">

          <div className="xl:w-full w-full ">
              <label htmlFor="firstname">FirstName:</label>
              <br />
              <input
              className="w-full  rounded-sm  p-2 border mb-4"
              type="text"
              placeholder="First Name"
              ref={firstNameRef}
                id="firstname"           
                required
              />
              </div>
              <div className="xl:w-full w-full ">
              <label htmlFor="lastname">LastName:</label>
              <br />
              <input
              className="w-full  rounded-sm  p-2 border mb-4"
                id="lastname"
                type="text"
                placeholder="Last Name"
                ref={lastNameRef}
                required
              />
              </div>
            <div className="xl:w-full w-full ">
              <label htmlFor="email">Email:</label>
              <br />
              <input
              className="w-full  rounded-sm  p-2 border mb-4"
                id="email"
                type="email"
                placeholder="Email"
                ref={emailRef}               
                required
              />
              </div>

              <div>
                <label htmlFor="number" className="flex gap-1 items-center">Amount  (<TbCurrencyNaira /> )</label>
                <input
                 className="w-full rounded-sm  p-2  mb-4 "
                id="number"
              placeholder=""
              type="number"
            value={
    totalPrice
            }
            disabled
              />
             
            </div>
          <div className="flex xl:justify-end justify-center mt-3  xl:mt-3 ">
   {  !initialized&&  <button onClick={handlePayment}  disabled={loading}
              className=" cursor-pointer rounded-sm  p-3 hover:border-pink-300 border-2 mb-4 hover:text-sm hover:px-6 text-[12px] bg-lime-500 "
              >
        {loading  ? <p className="animate-spin"><FaSpinner/> </p> : 'Pay Now'}
      </button>}

 {initialized&& reference&&    
    
        <PaystackButton
          email={emailRef.current.value}
          amount={amount*100}
          publicKey={key}
          text="Proceed to Payment"
          reference={reference}
          className=" rounded-sm  p-2 hover:border-pink-300 border-2 mb-4 hover:text-[14px]  text-[12px] bg-blue-500 text-white "
          onSuccess={(reference)=>{ 
          handlePaymentSuccess(reference.reference)}}
          onClose={handlePaymentClose}
        />
          }
            <ToastContainer

            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
             />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaystackComponent;
