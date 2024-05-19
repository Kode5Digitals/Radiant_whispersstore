import { useRef } from "react";
import PropTypes from "prop-types";
import httpAuth from "../utils/https";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = ({ setOpenRegister }) => {
  const fullnameRef = useRef('');
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const confirmPasswordRef = useRef('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      fullname: fullnameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      confirmpassword: confirmPasswordRef.current.value,
    };
console.log(formData)
    try {
      
      const res = await httpAuth.post("/api/user/register",formData,  { withCredentials: true });

if(res.data.created==true){
toast.success(res.data.message);

}
else{
  toast.error(res.data.message);
  console.log("error")}

    } 
    catch (error) {
      console.log(error)
    }
  };

  const handleBack = () => {
    setOpenRegister(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 ">
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

      <form
        onSubmit={handleSubmit}
        className="forgot-password xl:w-1/4 w-full  p-3   rounded-lg shadow-md bg-white  transition duration-500 ease-in-out border-2 border-transparent "
      >
        <h2 className="text-center text-2xl mt-3 mb-3">Register</h2>

        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            ref={fullnameRef}
            type="text"
            id="fullName"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-pink-500"
            placeholder="Enter fullname"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            ref={emailRef}
            type="email"
            id="email"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-pink-500"
            placeholder="Enter email"

          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            ref={passwordRef}
            type="password"
            id="password"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-pink-500"
            placeholder="Enter password"

          />
        </div>
        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <input
            ref={confirmPasswordRef}
            type="password"
            id="confirmPassword"
            className="mt-1 mb-4 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-pink-500"
            placeholder="Enter confirmPassword"

          />
        </div>
        <button
          type="submit"
          className="w-full mb-4  border border-gray-300 hover:text-white  hover:bg-pink-700 py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          Register
        </button>
        <button
          onClick={handleBack}
          className="w-full text-[12px] bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          Back
        </button>
      </form>
    </div>
  );
};

Register.propTypes = {
  setOpenRegister: PropTypes.func.isRequired,
};

export default Register;
