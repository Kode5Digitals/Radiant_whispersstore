import {  useCallback, useContext, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { MdCancel, MdInsertPhoto } from "react-icons/md";
import Cartcontext from "../cartcontext";
// import { IoReload } from "react-icons/io5";
import { IoReload } from "react-icons/io5";

const EditProduct = ({ setOpenEdit }) => {
  const nameRef = useRef(null);
  const priceRef = useRef(null);
  const imageRef = useRef(null);
  const descriptionRef = useRef(null);
  const noOfAvailableItem =useRef(null)
  const [imagesrc, setimagesrc] = useState([]);
  const categoryRef = useRef(null);
  const editRef = useRef(null);
  const{editObj}=useContext(Cartcontext)
  const[loading,setLoading]=useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const formData = new FormData();
      formData.append('name', nameRef.current.value);
      formData.append('price', priceRef.current.value);
      formData.append('image', imageRef.current.files[0]);
      formData.append('description', descriptionRef.current.value);
      formData.append('category', categoryRef.current.value);
      formData.append('noofitem',noOfAvailableItem.current.value)


      const response = await axios.post(
        "https://radiant-whispersstore.onrender.com/api/products/addProduct",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      if (response.data.created) {
        toast.success(response.data.message);
      } else {
          toast.error(response.data.message);
        } 
    } catch (error) {
      console.log(error);
    }finally{
      setLoading(false)
    }
  };

  const handleClickOutside = useCallback((event) => {
    if (editRef.current && !editRef.current.contains(event.target)) {
      setOpenEdit(false);
    }
  },[editRef, setOpenEdit])

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);

  const oninput = async (event, files) => {
    let filereader = new FileReader();
    const file = event.target.files[0];
    filereader.onload = async () => {
      if (files.length > 0) {
        const updatedImages = filereader.result;
        setimagesrc(updatedImages);
      }
    };
    filereader.readAsDataURL(file);
  };


  useEffect(() => {
    setimagesrc(editObj?.image);
  }, [editObj]);

const handleEdit=async(e,id)=>{
  e.preventDefault();
  try {
    setLoading(true)
      const formData = new FormData();
      formData.append('name', nameRef.current.value);
      formData.append('price', priceRef.current.value);
      formData.append('image', imageRef.current.files[0]);
      formData.append('description', descriptionRef.current.value);
      formData.append('category',categoryRef.current.value)
      formData.append('noofitem',noOfAvailableItem.current.value)
      const response = await axios.post(
            `https://radiant-whispersstore.onrender.com/api/products/edit/${id}`, 
          formData,
          {
              headers: { "Content-Type": "multipart/form-data" },
          }
      );

      if (response.data.created) {
        console.log(response.data.message)
          toast.success(response.data.message);
      } else {
          if (response.data.error_type === 0) {
              toast.error(response.data.error[0].msg);
          } else if (response.data.error_type === 1) {
              toast.error(response.data.message);
          }
      }
  } catch (error) {
      console.log(error);
  }finally{
    setLoading(false)
  }
}
const handleBack=()=>{
  setOpenEdit(false)
}


  return (

    

    <div
    ref={editRef}
      className="fixed h-screen  inset-0 p-10 flex justify-center  bg-gray-800 bg-opacity-100 overflow-y-auto z-50"
    >
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
        className="forgot-password overflow-auto min-h-[500px] flex   lg:mt-24 h-auto xl:mt-0 w-full sm:flex-wrap xl:flex-nowrap  flex-wrap  p-3  xl:gap-10 2xl:gap-10 lg:gap-10 gap-2   lg:w-3/4 2xl:w-1/4 md:w-3/4 sm:w-3/4 rounded-lg shadow-md bg-pink-200  transition duration-500 ease-in-out border-2 border-transparent "
      >
             <div className="flex justify-end cursor-pointer ">
       <MdCancel onClick={handleBack} size={30}/>
       </div>
       <div className=" xl:w-1/2  w-full">
       <h2 className="text-center text-2xl mt-2 mb-2">Edit product</h2>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            ref={nameRef}
            type="text"
            id="name"
            defaultValue={editObj?.name}
            className="mt-1 p-1 block text-[12px] w-full border border-white rounded-md focus:outline-none focus:border-pink-500"
            placeholder="Enter Product Name"
            required

          />
        </div>
        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700 mt-2"
          >
            Price
          </label>

          <input
            ref={priceRef}
            type="text"
            id="price"
            defaultValue={editObj?.price}
            className="mt-1 p-1 text-[12px] block w-full border border-white rounded-md focus:outline-none focus:border-pink-500"
            placeholder="Enter price"
            required
          />
          
        </div>



        <label htmlFor="category">Category:</label>
  <select required id="category" name="category"  ref={categoryRef} className="text-sm mt-2  bg-white  border-2 p-2 ml-3 rounded-xl mb-2">
    <option value="body cream">body cream</option>
    <option value="face cream">face cream</option>
    <option value="body wash">body wash</option>
  </select>



  <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700 mt-3"
          >
            No of items 
          </label>

          <input
            ref={noOfAvailableItem}
            defaultValue={editObj?.noofitem}
            type="text"
            id="noOfAvailableItem"
            className="mt-1 p-1 text-[12px] block w-full border border-white rounded-md focus:outline-none focus:border-pink-500"
            placeholder="Enter item no Available"
            required
          />
          
        </div>
        
        <div  
            className="mt-6 mb-3  2xl:mt-2 xl:mt-2 flex p-1 gap-2 items-center w-full text-[12px] border-pink-700 bg-[#f29cb3] border-2 rounded-sm  focus:outline-none focus:border-pink-500"
            >
                <MdInsertPhoto 
                 className="cursor-pointer"/>
        <input
            type="file"
            id="image"
            name='image'
            style={{ visibility: "hidden", width: "0",height:"0" }}
            ref={imageRef}
            onChange={(e) => oninput(e, e.target.files)}
          />

          <label htmlFor="image"  className="cursor-pointer">
          Select Product Image
          </label>  
        </div>



        <div className="xl:w-1/2 w-3/4 mt-6 mb-4 m-auto block lg:hidden xl:hidden   sm:block">
       <div className="w-full  m-auto h-[300px] border">
        <img style={{ width: "100%", height: "100% " }} src={imagesrc} alt="" />
      </div>
       </div>
       
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            ref={descriptionRef}
            id="description"
            className="mt-1 mb-4 p-2 block text-[12px] w-full border h-24 border-white rounded-md focus:outline-none focus:border-pink-500"
            placeholder="Enter Product Description"
            maxLength={200}
            required
            defaultValue={editObj?.description}
          />
        </div>

    <button
        id={editObj?._id}
        onClick={(e)=>handleEdit(e,editObj?._id)}
          type="submit"
          className="w-full  border-2 bg-[#f29cb3] flex items-center justify-center border-pink-700 hover:text-white hover:bg-pink-700 py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
          Edit Product 
          {loading && <IoReload className="animate-spin"/>}
        </button>

       </div>
       <div className="xl:w-1/2 w-3/4 h-3/4 m-auto hidden xl:block lg:block   sm:hidden">
       <div className="w-full  m-auto h-[300px] border">
        <img style={{ width: "100%", height: "100% " }} src={imagesrc} alt="" />
      </div>
       </div>
      
      </form>

      
    </div>

  
  );
};

EditProduct.propTypes = {
  setOpenEdit: PropTypes.func.isRequired,
};

export default EditProduct;




