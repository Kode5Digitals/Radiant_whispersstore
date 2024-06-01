import { useContext, useRef, useState } from "react";
import PropTypes from 'prop-types';
import httpAuth from "../utils/https";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cartcontext from "../cartcontext";
import { FaSpinner } from "react-icons/fa";
function Login({setOpenLogin}) {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const[loading,setLoading]=useState(false)
    const{setOpenRegister,setLogin,setisadmin}=useContext(Cartcontext)

    const handleOpenRegister =()=>{
        setOpenRegister(true)
        setOpenLogin(false)

        }

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault();
        const formData = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        };
try {
  const res = await httpAuth.post("/user/login", formData,{withCredentials:true})
  if(res.data.created){
    setLogin(res.data.isLoggedIn)
    setisadmin(res.data.isAdmin)
   toast.success(res.data.message)
    localStorage.setItem("Login",res.data.isLoggedIn)
    // localStorage.setItem("Admin",res.data.isAdmin)
    localStorage.setItem('token', res.data.accessToken)
    localStorage.setItem('refreshToken', res.data.refreshToken);
    setOpenLogin(false)
    }
    else{
        if(res.data.created.error_type === 0){
            toast.error(res.data.error[0].msg);
                 }
                 else if (res.data.error_type === 1) {
                    toast.error(res.data.message);
                }
    }
}
 catch (error) {
  console.log(error)
}
finally{

    setLoading(false)

}
    };

    const handleBack = () => {
        setOpenLogin(false);
    };

    return (
        <div>
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
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50  p-2 xl:p-0 ">
             
            <form onSubmit={handleSubmit} className="forgot-password xl:w-1/3 lg:w-1/2 sm:w-full md:w-1/2  w-full   2xl:w-1/4  p-3 rounded-lg shadow-md bg-white transition duration-500 ease-in-out border-2 border-transparent hover:border-purple-500">
                <h2 className="text-center mt-4 mb-4 text-2xl">Login</h2>
                <label htmlFor="email" className="text-[12px]">Email</label>
                <input
                    ref={emailRef}
                    id="email"
                    type="email"
                    placeholder="Enter email"
                    className="border mb-6 text-[12px] rounded-lg w-full shadow appearance-none p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <label htmlFor="email" className="text-[12px]">Password</label>
                <input
                    ref={passwordRef}
                    id="password"
                    type="password"
                    placeholder="Enter password"
                    className="border mb-6 text-[12px] rounded-lg w-full shadow appearance-none p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />

                <div className="flex justify-between mt-3">
                    <button className="border mb-3 text-[12px] p-1 rounded-lg w-1/3 bg-pink-200" onClick={handleOpenRegister}>
                     Signup </button>
                    <button className="border mb-3 text-[12px] p-1 rounded-lg w-1/3" onClick={handleBack}>Back</button>
                </div>
                <button className="mb-3 text-[12px] p-2 rounded-lg w-full mt-3 bg-[#891980] leading-tight shadow text-white transition duration-300 ease-in-out transform hover:scale-105  flex items-center gap-3 justify-center" type="submit" >Login
                {loading && <FaSpinner  className="animate-spin"/>}
                </button>
            </form>
         
        </div>
        </div>
    );
}

Login.propTypes = {
    setOpenLogin: PropTypes.func.isRequired
};

export default Login;
