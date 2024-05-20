import { useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import httpAuth from "../utils/https";
function AdminLogin() {
    const emailRef = useRef('');
    const passwordRef = useRef('');
     const navigate=useNavigate()

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        };
try {
  const res = await httpAuth.post("/admin/login", formData,{withCredentials:true})

  if(res.data.created){
    localStorage.setItem('token', res.data.token)
    toast.success(res.data.message);
navigate("/adminHome")
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


    };

 
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50  p-2 xl:p-0 ">
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
            <form onSubmit={handleSubmit} className="forgot-password w-full xl:w-1/4  md:w-1/4  lg:w-1/4   2xl:w-1/4  p-3 rounded-lg shadow-md bg-white transition duration-500 ease-in-out border-2 border-transparent hover:border-purple-500">
                <h2 className="text-center mt-4 mb-4 text-2xl">Login</h2>
                <label htmlFor="email" className="text-[12px]">Email</label>
                <input
                    ref={emailRef}
                    id="email"
                    type="email"
                    placeholder="Email email"
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
                    <button className="border mb-3 text-[12px] p-1 rounded-lg w-1/3 bg-pink-500 text-white" type="submit">Login</button>
                    <button className=" mb-3 text-[12px] p-1 rounded-lg w-1/3 border-2 shadow-md border-pink-500">Signup</button>
                </div>
            </form>
        </div>
    );
}


export default AdminLogin;
