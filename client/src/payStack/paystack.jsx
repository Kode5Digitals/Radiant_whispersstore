import { selectCart } from "../stores/features/cart/cartSlice"
import { useSelector } from "react-redux"
import { Link, useNavigate} from "react-router-dom"
import { IoIosArrowDropleft } from "react-icons/io"
import httpAuth from "../utils/https"
import { TbCurrencyNaira } from "react-icons/tb"
import ImageCarousel from "../components/ImageCarousel"
import { CiFaceSmile } from "react-icons/ci"
import { ToastContainer, toast } from "react-toastify"
import { PaystackButton } from 'react-paystack'
import { useEffect, useRef, useState } from "react"
import CustomDropdown from "../components/customDropDown"
import { FaSpinner } from "react-icons/fa"

const PaystackComponent = () => {
  const { totalPrice} = useSelector(selectCart)
  const [errors, setErrors] = useState({})
  const [region, setRegion] = useState('')
  const [totalAmount, setTotalAmount] = useState(totalPrice)
  const [deliveryFee, setDeliveryFee] = useState(0)
  const [deliveryFeeMessage, setDeliveryFeeMessage] = useState('')
  const [PAYSTACK_PUBLIC_KEY,setPAYSTACK_PUBLIC_KEY]=useState(null)
  const emailRef = useRef()
  const firstNameRef = useRef() 
  const lastNameRef = useRef()
  const addressRef= useRef()
  const phonenumberRef= useRef()
  const navigate=useNavigate()
const [loading, setLoading] = useState(false)
const { items } = useSelector(selectCart)
const cartItemImages = items.map((item) => item.productId?.image)
const cartItemNames= items.map((item) => item.productId?.name)
const cartItems= items.map((item) => item)
const [reference, setReference] = useState('')
const [initialized, setInitialized] = useState(false)


const getKey = async() => {
  try {
    const response = await httpAuth.get('/api/paystack/key')
    const  data  = response.data
    setPAYSTACK_PUBLIC_KEY(data.data)
  } catch (error) {
    console.log("error getting key",error)
  }
}



useEffect(() => {
  getKey()
}, []) 
const generateUniqueReference = () => {
  const timestamp = Date.now(); // Current time in milliseconds
  const randomStr = Math.random().toString(36).substring(2, 8); // Random alphanumeric string
  return `ref_${timestamp}_${randomStr}`; // Unique reference
  // return `ref_${Math.random().toString(36).substring(2, 15)}`
}

const regions = [
  { value: 'West', label: ' Ekiti,  Lagos, Ogun, Ondo, Osun, Oyo' },
  { value: 'North', label: 'Adamawa, Bauchi, Borno, Gombe, Taraba, Yobe, Kaduna, Katsina, Kano, Kebbi, Sokoto, Jigawa,Zamfara,Benue, FCT, Kogi, Kwara, Nasarawa, Niger, Plateau' },
  { value: 'South', label: 'Akwa-Ibom, Bayelsa, Cross-River, Delta, Edo, Rivers' },
  { value: 'East', label: 'Abia, Anambra, Ebonyi, Enugu, Imo' },
];
const deliveryFees = {
  "West": 3500,
  "North": 3000,
  "South": 3500,
  "East": 3500,  
}



const handleRegionChange = (selectedOption) => {
  setRegion(selectedOption.value)
  const fee = deliveryFees[selectedOption.value] || 0; 
  setDeliveryFee(fee)
  console.log(deliveryFee)
  if (fee > 0) {
    setDeliveryFeeMessage("Delivery fee has been added.");
  } else {
    setDeliveryFeeMessage("")
  }
  setTotalAmount(totalPrice + fee); 
  const newReference = generateUniqueReference();
  setReference(newReference);

};

const handlePayment = async () => {
  setLoading(true)
  const newReference = generateUniqueReference()
  setReference(newReference)
  const formdata={
    amount: totalAmount,
    email: emailRef.current.value,
    firstName: firstNameRef.current.value,
    lastName: lastNameRef.current.value,
    address:addressRef.current.value,
    phoneNumber:phonenumberRef.current.value,
    region:region,
    reference: newReference,
    products:cartItems
  }
 try{
  const res = await httpAuth.post("/api/paystack/payment", 
  formdata
     )
const { data } = res
if (data?.data?.reference) {
  setReference(data.data.reference)
  setInitialized(true)
  setErrors({})
} else {
  throw new Error("No reference returned from the server")
}
 }catch(err){
  if (err.response && err.response.data && err.response.data.errors) {
    const formErrors = err.response.data.errors.reduce((acc, error) => {
      acc[error.path] = error.msg
      return acc
    }, {})
    setErrors(formErrors)
  } else {
    toast.error("An error occurred during payment. Please try again later.")
  }
 }finally{
  setLoading(false)
 }
}


const handlePaymentSuccess = async (reference) => {
  try {
    const response = await httpAuth.get(`/api/paystack/verifyPayment/${reference}`)
    const  data  = response?.data.data
    localStorage.setItem("history",JSON.stringify(data.data.metadata))
    if (data.data.status === 'success') {
      emailRef.current.value = ''
      firstNameRef.current.value = ''
      lastNameRef.current.value = ''
     setInitialized(false)
   toast.success("Payment sucessfull")
   setReference('')
    } else if (data.data.status === 'abandoned') {
      toast.error('Payment was not completed')
    } else {
      toast.error('Payment verification failed')
    }
  } catch (error) {
    toast.error('Error verifying payment')
  }
}



  const handlePaymentClose = () => {
    console.log("Payment window closed")
navigate("/cart")
  }



  return (
    <div className="h-full p-3 md:p-2 lg:p-3 xl:p-3 sm:p-10 bg-[#fec5ec]">
      <div className="ml-3  mb-3">
      <Link to={"/cart"}>
      <IoIosArrowDropleft size={30}/> </Link>
      </div>
      <div className="flex flex-wrap w-full h-full  xl:w-3/4 md:w-1/2  bg-white     m-auto justify-center xl:p-5">
        <div className="  h-full p-4 xl:w-1/2 lg:h-3/4 xl:h-full mb-24  border-l border-t text-center w-full   xl:block ">
      <i className="flex items-center pl-2">Thank you for your patronage <CiFaceSmile/></i>

                        <ImageCarousel image={cartItemImages}  name={cartItemNames}/>
        </div>

        
        <div className="  xl:w-1/2 flex xl:p-4 justify-center   w-full p-2   border">
          <div className=" bg-white xl:p-2  w-full p-1 text-[12px]">

          <div className="xl:w-full w-full ">
              <label htmlFor="firstname">FirstName:</label>
              <br />
              <input
              className={`w-full  rounded-sm  p-2 border ${errors.firstName ? "mb-0":"mb-4"}`}
              type="text"
              placeholder="First Name"
              ref={firstNameRef}
                id="firstname"           
                required
              />
               {errors.firstName && <p className="text-red-500 mb-2">{errors.firstName}</p>}
              </div>
              <div className="xl:w-full w-full ">
              <label htmlFor="lastname">LastName:</label>
              
              <br />
              <input
              className=   {`w-full  rounded-sm  p-2 border ${errors.lastName ? "mb-0":"mb-4"}`}
                id="lastname"
                type="text"
                placeholder="Last Name"
                ref={lastNameRef}
                required
              />
                {errors.lastName && <p className="text-red-500 mb-2">{errors.lastName}</p>}
              </div>
            <div className="xl:w-full w-full ">
              <label htmlFor="email">Email:</label>
              <br />
              <input
              className= {`w-full  rounded-sm  p-2 border ${errors.email ? "mb-0":"mb-4"}`}
                id="email"
                type="email"
                placeholder="Email"
                ref={emailRef}               
                required
              />
                 {errors.email && <p className="text-red-500  mb-2">{errors.email}</p>}
              </div>

              <div className="xl:w-full w-full ">
              <label htmlFor="PhoneNumber">PhoneNumber:</label>
              
              <br />
              <input
              className=   {`w-full  rounded-sm  p-2 border ${errors.phoneNumber ? "mb-0":"mb-4"}`}
                id="PhoneNumber"
                type="number"
                placeholder="PhoneNumber"
                ref={phonenumberRef}
                required
              />
                 {errors.phoneNumber && <p className="text-red-500  mb-2">{errors.phoneNumber}</p>}

              </div>


              <div className="">
      <h1 className="text-[12px] mb-2">Select a Region</h1>
      <CustomDropdown
        options={regions}
        selected={region}
        onSelect={handleRegionChange}
      />
                 {errors.region && <p className="text-red-500  mb-2">{errors.region}</p>}

    </div>


              <div className="xl:w-full w-full ">
              <label htmlFor="email">Address:</label>
              <br />
              <input
              className= {`w-full  rounded-sm  p-2 border ${errors.address ? "mb-0":"mb-4"}`}
                id="address"
                type="text"
                placeholder="Address"
                ref={addressRef}               
                required
              />
               {errors.address && <p className="text-red-500 mb-2">{errors.address}</p>}
              </div>

              <div>
                <label htmlFor="number" className="flex gap-1 items-center ">Amount  (<TbCurrencyNaira /> )    
          
  </label>
  {deliveryFeeMessage && (
    <span className="text-green-500 mt-1">{deliveryFeeMessage}</span>
  )}
                <input
                 className="w-full rounded-sm  p-2  mb-4 "
                id="number"
              placeholder=""
              type="number"
              required
            value={
    totalAmount
            }
            disabled
              />
           
            </div>
          <div className="flex xl:justify-end justify-center mt-3  xl:mt-3 ">
   {  !initialized &&  <button onClick={handlePayment}  disabled={loading}
              className=" cursor-pointer rounded-sm  p-3 hover:border-pink-300 border-2 mb-4 hover:text-sm hover:px-6 text-[12px] bg-lime-500 "
              >
        {loading  ? <p className="animate-spin"><FaSpinner/> </p> : 'Pay Now'}
      </button>}
     
 {initialized && reference&&    
    
        <PaystackButton
          email={emailRef.current.value}
          amount={totalAmount*100}
          publicKey={PAYSTACK_PUBLIC_KEY}
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
  )
}

export default PaystackComponent
