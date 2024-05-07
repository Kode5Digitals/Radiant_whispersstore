import { useState } from "react";
import PropTypes from 'prop-types';
function Login({setOpenLogin}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Email:', email);
      console.log('Password:', password);
    };
    const handleBack=()=>{
        setOpenLogin(false)
    }


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 " >
    <form   onSubmit={handleSubmit} className="forgot-password w-1/4  p-3   rounded-lg shadow-md bg-white  transition duration-500 ease-in-out border-2 border-transparent hover:border-purple-500">
      
      <h2 className="text-center mt-4 mb-4  text-2xl">LOGIN</h2>
        <label htmlFor="email" className="text-[12px] ">Email</label>
      <input 
         id="email"
                   type="email"
                   placeholder="Email Address"
                   value={email}
                   onChange={handleEmailChange}
                   required
      className="border mb-6 text-[12px] rounded-lg w-full  shadow appearance-none  p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      <label htmlFor="email" className="text-[12px]">Password</label>
      <input
       id="password"
                 type="password"
                 value={password}
                 onChange={handlePasswordChange}
                 required
   placeholder= "Enter password" className="border mb-6 text-[12px]  rounded-lg w-full   shadow appearance-none  p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />

    <div className="flex justify-between mt-3">
    <button  className="border mb-3 text-[12px] p-1 rounded-lg   w-1/3"     type="submit" >Login</button>
     <button  className="border mb-3 text-[12px] p-1 rounded-lg   w-1/3">Signup</button>
    </div>
     <button  className=" mb-3 text-[12px] p-2 rounded-lg w-full mt-3 bg-[#fd00cd] leading-tight shadow text-white transition duration-300 ease-in-out transform hover:scale-105" onClick={handleBack}>Back</button>
     </form>
 </div> 

  )
}
Login.propTypes = {
    setOpenLogin: PropTypes.func.isRequired
  };

export default Login