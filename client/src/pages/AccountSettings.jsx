import { useContext, useRef, useState } from "react"
import Cartcontext from "../cartcontext"
import { ToastContainer, toast } from "react-toastify";
import httpAuth from "../utils/https";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Accountsettings = () => {
    const {user}=useContext(Cartcontext)
    const fullnameRef = useRef('');
    const phoneNumberRef = useRef('');
    const passwordRef = useRef('');
  const[loading,setLoading]=useState(false)
  const confirmPasswordRef= useRef('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        const formData = {
          fullname: fullnameRef.current.value,
          phonenumber:phoneNumberRef.current.value,
          password: passwordRef.current.value,
          confirmpassword:confirmPasswordRef.current.value,
        };
        try {
          const response = await httpAuth.put(`/api/user/edit/${user?._id}`, {
            headers: {
              'Content-Type': 'application/json'
            },
           formData
          });
          if(response.data.created){
            toast.success(response.data.message);
            }
            else{
                if(response.data.created.error_type === 0){
                    toast.error(response.data.error[0].msg);
                         }
                         else if (response.data.error_type === 1) {
                            toast.error(response.data.message);
                        }
            }

         
        } catch (error) {
          console.error('Error:', error);
        }finally{
        setLoading(false)

        }
      };
    




  return (
    <div className=" text-[12px]  ">
    <div className="w-full p-4  border-b-2 border-[#9da4b0]  font-bold   text-center text-lg">
       Settings
     </div>
 
 
     <div className=" shadow-xl   pb-5 ">
        <form className="p-4">
            <input type="text" ref={fullnameRef} defaultValue={user?.fullname} name="fullname" id="fullname" className="w-full p-2 rounded-lg border-2 mb-5" placeholder="fullname" />
            <input type="phonenumber" ref={phoneNumberRef} name="phonenumber" defaultValue={user?.phonenumber} id="phonenumber" className="w-full p-2 rounded-lg border-2 mb-3" placeholder="phonenumber" />
            <input type="password" ref={passwordRef} name="password" id="password" className="w-full p-2 rounded-lg border-2  mb-3" placeholder="password" />
            <input type="password" ref={confirmPasswordRef} name="confirmPassword" id="confirmPassword" className="w-full p-2 rounded-lg border-2 " placeholder="confirmPassword" />
        
        </form>
        <div className="flex justify-end px-6  ">
        <button className="border-2 border-[#ffffff] hover:bg-[#891980] hover:text-white rounded-md px-8 py-2  flex items-center gap-1" onClick={handleSubmit}>Edit { loading&& <AiOutlineLoading3Quarters className="animate-spin"  size={10}/>}</button>

        </div>
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
  )
}

export default Accountsettings