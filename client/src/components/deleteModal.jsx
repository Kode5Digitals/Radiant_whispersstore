import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from "prop-types";
import {useContext, useEffect, useRef, useState } from "react";
import { MdCancel } from 'react-icons/md';
import { IoReload } from 'react-icons/io5';
import httpAuth from '../utils/https';
import Cartcontext from '../cartcontext';

const DeleteProduct=({deleteName,closeDeleteModal,  setOpenDelete} ) => {
  const nameRef = useRef("");
  const deleteRef = useRef(null)
  const[loading,setloading]=useState(false)
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
const{ loadUser}=useContext(Cartcontext)



useEffect(()=>{
  loadUser(); 
},[])


  useEffect(() => {
    const handleInputChange = () => {
      if (nameRef.current) {
        setIsButtonEnabled(nameRef.current.value === deleteName.name);
      }
    };

    if (nameRef.current) {
      nameRef.current.addEventListener('input', handleInputChange);
    }

    return () => {
      if (nameRef.current) {
        nameRef.current.removeEventListener('input', handleInputChange);
      }
    };
  }, [deleteName.name]);



  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true)
    const id=deleteName?.id
    const formData = new FormData();
    formData.append('id',id);
    try {
    
      const response = await httpAuth.delete(
        `/api/product/deleteOne/${id}`,
      formData ,
          {
            headers: { "Content-Type":"application/json" },
        }
      )
      if (response.data.created) {
        toast.success(response.data.message);
        setOpenDelete(false)
        location.reload()
      } else {
          toast.error(response.data.message);
        } 
    } catch (error) {
      console.log(error);
    }finally{
    setloading(false)

    }
  };






  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-90 z-50" ref={deleteRef}>
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
        className="forgot-password  xl:w-1/4 w-full p-3 lg:w-3/4 2xl:w-1/4 md:w-3/4 sm:w-3/4 rounded-lg shadow-md bg-pink-200 transition duration-500 ease-in-out border-2 border-transparent"
      >
        <div  className='flex justify-end mt-2'>
        <button onClick={closeDeleteModal}><MdCancel /></button>

        </div>
        <h1 className='text-[13px]'>
            Please type the product name to confirm: <span className='text-[14px] font-extrabold'> {deleteName?.name}</span>
        </h1>
        <input ref={nameRef} placeholder="type here" className='w-full p-2 mt-2'/>
        <div className='flex justify-end mt-2'>
        <button className='border-2 w-20 h-10 px-3 rounded-md flex items-center justify-center gap-3'
        style={{ backgroundColor: isButtonEnabled ? 'red' : '#ccc'}}
        disabled={!isButtonEnabled}
        onClick={handleSubmit}
        >
          {loading ?<IoReload className="animate-spin" />:"Delete"}
        </button>

        </div>
      </form>
   
    </div>
  );
};



DeleteProduct.propTypes = {
  deleteName: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  closeDeleteModal: PropTypes.func.isRequired,
  setOpenDelete: PropTypes.func.isRequired,
};
export default DeleteProduct;


