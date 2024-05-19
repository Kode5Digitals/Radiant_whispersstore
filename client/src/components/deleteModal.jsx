// import PropTypes from "prop-types";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import PropTypes from "prop-types";

// import { useCallback, useEffect, useRef } from "react";
import {useRef } from "react";

const DeleteProduct= ({deleteName} ) => {
  const nameRef = useRef("");
  const deleteRef = useRef(null)




  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', nameRef.current.value);
     
      console.log(formData);

      const response = await axios.post(
        "http://localhost:4000/api/products/addProduct",
        formData,
     
      );
      if (response.data.created) {
        toast.success(response.data.message);
      } else {
          toast.error(response.data.message);
        } 
    } catch (error) {
      console.log(error);
    }
  };

//   const handleClickOutside = useCallback((event) => {
//     if (deleteRef.current && !deleteRef.current.contains(event.target)) {
//       setOpenEdit(false);
//     }
//   },[deleteRef, setOpenEdit])

//   useEffect(() => {
//     document.addEventListener('click', handleClickOutside);
//     return () => {
//       document.removeEventListener('click', handleClickOutside);
//     };
//   }, [handleClickOutside]);




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
        className="forgot-password xl:w-1/4 w-full p-3 lg:w-3/4 2xl:w-1/4 md:w-3/4 sm:w-3/4 rounded-lg shadow-md bg-pink-200 transition duration-500 ease-in-out border-2 border-transparent"
      >
        <h1>
            Type delete/{deleteName.name}
        </h1>
<input ref={nameRef} placeholder="type here"/>
      </form>
   
    </div>
  );
};

DeleteProduct.propTypes = {
  deleteName: PropTypes.object.isRequired,
};
export default DeleteProduct;


