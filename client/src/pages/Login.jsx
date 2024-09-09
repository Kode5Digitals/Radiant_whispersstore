import { useContext, useRef, useState } from "react";
import httpAuth from "../utils/https";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cartcontext from "../cartcontext";
import { FaSpinner } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('');
  const navigate=useNavigate()
  const { setOpenRegister, setLogin, setisadmin,loadUser,setOpenLogin } = useContext(Cartcontext);

  const handleOpenRegister = () => {
    setOpenRegister(true);
    setOpenLogin(false);
  };
  const validateForm = () => {
    const newErrors = {};
    if (emailRef.current.value) newErrors.email = 'Email is required';
    if (passwordRef.current.value) newErrors.password = 'Password is required';
    else if (passwordRef.current.value.length < 6) newErrors.password = 'Password must be at least 6 characters long';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
   
    const formData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    try {
      const res = await httpAuth.post("/user/login", formData, {
        withCredentials: true,
      });
      console.log(res);

      if (res.data?.created) {
   
        setSuccessMessage(res.data.message);
        setErrors({});
        toast.success(res.data?.message);
        setLogin(res.data?.isLoggedIn);
        setisadmin(res.data?.isAdmin);
        localStorage.setItem("Login", res.data?.isLoggedIn);
        localStorage.setItem("token", res.data?.accessToken);
        localStorage.setItem("refreshToken", res.data?.refreshToken);
        setTimeout(() => navigate('/myaccount'), 2000)
        setOpenLogin(false);

    
      } else {
        if (res.data?.error_type === 0 && res.data?.errors?.length > 0) {
          const validationErrors = {};
          res.data.errors.forEach((err) => {
            validationErrors[err.path] = err.msg; // Map errors to field names
          });
          setErrors(validationErrors)
        }
         else if (res.data?.error_type === 1) {
      setErrorMessage(res.data?.message);
        }
      }
    } catch (error) {
      if (!error?.response?.data?.error_type) {
        setErrorMessage("Server error occurred. Please try again.");
      } else {
        console.error("Known error:", error.response?.data?.message || error.message);
      }
      console.error(error);
      toast.error("Server error occurred. Please try again.");
    } 
    finally {
      loadUser()
      setLoading(false);
    }
  };

  const handleBack = () => {
    setOpenLogin(false);
  };

  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50  p-2 xl:p-0 ">
       
        <form
          onSubmit={handleSubmit}
          className="forgot-password xl:w-1/3 lg:w-1/2 sm:w-full md:w-1/2  w-full   2xl:w-1/4  p-3 rounded-lg shadow-md bg-white transition duration-500 ease-in-out border-2 border-transparent hover:border-purple-500"
        >
          <h2 className="text-center mt-4 mb-4 text-2xl">Login</h2>
          <label htmlFor="email" className="text-[12px]">
            Email
          </label>
          <input
            ref={emailRef}
            id="email"
            type="email"
            
            placeholder="Enter email"
            className={`border  text-[12px] rounded-lg w-full shadow appearance-none p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? "mb-2":"mb-6"}`}
          />
          {errors.email && <p style={{ color: 'red' }} className="mb-5">{errors.email}</p>} {/* Display email error */}
          
          <label htmlFor="email" className="text-[12px]">
            Password
          </label>
          <input
            ref={passwordRef}
            id="password"
            type="password"
            // required
            placeholder="Enter password"
            className={`border text-[12px] rounded-lg w-full shadow appearance-none p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? "mb-2":"mb-6"}`}
          />
          {errors?.password && <p style={{ color: 'red' }} className="mb-5">{errors?.password}</p>} {/* Display email error */}
        

          <div className="flex justify-between mt-3">
            <button
              className="border mb-3 text-[12px] p-1 rounded-lg w-1/3 bg-pink-200"
              onClick={handleOpenRegister}
            >
              Signup{" "}
            </button>
            <button
              className="border mb-3 text-[12px] p-1 rounded-lg w-1/3"
              onClick={handleBack}
            >
              Back
            </button>
          </div>
          <button
            className="mb-3 text-[12px] p-2 rounded-lg w-full mt-3 bg-[#891980] leading-tight shadow text-white transition duration-300 ease-in-out transform hover:scale-105  flex items-center gap-3 justify-center"
            type="submit"
          >
            Login
            {loading && <FaSpinner className="animate-spin" />}
          </button>
          {errorMessage && <p style={{ color: 'red',textAlign:"center" }}>{errorMessage}</p>} {/* Display general error message */}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>} {/* Display success message */}
      
        </form>
      </div>
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
  );
}


export default Login;
