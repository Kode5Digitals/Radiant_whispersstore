import {  useCallback, useContext, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { MdInsertPhoto } from "react-icons/md";
import Cartcontext from "../cartcontext";

const EditProduct = ({ setOpenEdit }) => {
  const nameRef = useRef("");
  const priceRef = useRef("");
  const imageRef = useRef("");
  const descriptionRef = useRef("");
  const [imagesrc, setimagesrc] = useState([]);
  const categoryRef = useRef(null);
  const editRef = useRef(null);
  const{editObj}=useContext(Cartcontext)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', nameRef.current.value);
      formData.append('price', priceRef.current.value);
      formData.append('image', imageRef.current.files[0]);
      formData.append('description', descriptionRef.current.value);
      formData.append('category', categoryRef.current.value);

      console.log(formData);

      const response = await axios.post(
        "http://localhost:4000/api/products/addProduct",
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
      const formData = new FormData();
      formData.append('name', nameRef.current.value);
      formData.append('price', priceRef.current.value);
      formData.append('image', imageRef.current.files[0]);
      formData.append('description', descriptionRef.current.value);
      formData.append('category',categoryRef.current.value)
      console.log(formData);
      // console.log(imageRef.current.files[0])
      const response = await axios.post(
            `https://radiant-whispersstore.onrender.com/products/edit/${id}`, 
          formData,
          {
              headers: { "Content-Type": "multipart/form-data" },
          }
      );

      console.log(response.data);

      if (response.data.created) {
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
  }
}



  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-90 z-50" ref={editRef}>
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
        <h2 className="text-center text-2xl mt-3 mb-3">Add product</h2>
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
            className="mt-1 p-2 block text-[12px] w-full border border-white rounded-md focus:outline-none focus:border-pink-500"
            placeholder="Enter Product Name"
          />
        </div>
        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Price
          </label>
          <input
            ref={priceRef}
            type="text"
            id="price"
            defaultValue={editObj?.price}
            className="mt-1 p-2 text-[12px] block w-full border border-white rounded-md focus:outline-none focus:border-pink-500"
            placeholder="Enter price"
          />
        </div>
        <label htmlFor="category">Category:</label>
        <select id="category"   defaultValue={editObj?.category} name="category" ref={categoryRef} className="text-sm mt-4 bg-white border-2 p-2 ml-3 rounded-xl mb-4">
          <option value="body cream">body cream</option>
          <option value="face cream">face cream</option>
          <option value="body wash">Body wash</option>
        </select>
        <div
          className="mt-3 mb-3 flex p-2 gap-2 items-center w-full text-[12px] border-pink-700 bg-[#f29cb3] border-2 rounded-sm focus:outline-none focus:border-pink-500"
        >
          <MdInsertPhoto className="cursor-pointer" />
          <input
            type="file"
            id="image"
            name="image"
            // defaultValue={editObj?.image}
            style={{ visibility: "hidden", width: "0", height: "0" }}
            ref={imageRef}
            onChange={(e) => oninput(e, e.target.files)}
          />
          <label htmlFor="image" className="cursor-pointer">
            Select Product Image
          </label>
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
            className="mt-1 mb-4 p-2 block text-[12px] w-full border h-40 border-white rounded-md focus:outline-none focus:border-pink-500"
            placeholder="Enter Product Description"
            maxLength={200}
            defaultValue={editObj?.description}

          />
        </div>
        <button
        id={editObj?._id}
        onClick={(e)=>handleEdit(e,editObj?._id)}
          type="submit"
          className="w-full mb-4 border-2 bg-[#f29cb3] border-pink-700 hover:text-white hover:bg-pink-700 py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          Edit Product
        </button>
      </form>
      <div className="w-[300px] h-[300px] border bg-white">
        <img style={{ width: "100%", height: "100%" }} src={imagesrc}  alt="" />
      </div>
    </div>
  );
};

EditProduct.propTypes = {
  setOpenEdit: PropTypes.func.isRequired,
};

export default EditProduct;






// import { useContext, useEffect, useRef, useState } from "react";
// import PropTypes from "prop-types";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axios from "axios";
// import { MdInsertPhoto } from "react-icons/md";
// import Cartcontext from "../cartcontext";
// const  EditProduct = () => {
//   const nameRef = useRef("");
//   const priceRef = useRef("");
//   const imageRef = useRef("");
//   const descriptionRef = useRef("");
//   const [imagesrc, setimagesrc] = useState([]);
//   const categoryRef = useRef(null);
//   const editRef = useRef(null);
// const { setOpenEdit}=useContext(Cartcontext)}
//   //add products
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//         const formData = new FormData();
//         formData.append('name', nameRef.current.value);
//         formData.append('price', priceRef.current.value);
//         formData.append('image', imageRef.current.files[0]);
//         formData.append('description', descriptionRef.current.value);
//         formData.append('category',categoryRef.current.value)

     

//         console.log(formData);

//         const response = await axios.post(
//             "http://localhost:4000/api/products/addProduct", 
//             formData,
//             {
//                 headers: { "Content-Type": "multipart/form-data" },
//             }
//         );

//         console.log(response.data);

//         if (response.data.created) {
//             toast.success(response.data.message);
//         } else {
//             if (response.data.error_type === 0) {
//                 toast.error(response.data.error[0].msg);
//             } else if (response.data.error_type === 1) {
//                 toast.error(response.data.message);
//             }
//         }
//     } catch (error) {
//         console.log(error);
//     }
// };


// const handleClickOutside = (event) => {
//   if (editRef .current && !editRef.current.contains(event.target)) {
//     setOpenEdit(false);
//   }
// };

// useEffect(() => {
//   document.addEventListener('click', handleClickOutside);
//   return () => {
//     document.removeEventListener('click', handleClickOutside);
//   };
// }, []);


// //products preview
// const oninput = async (event, files) => {
//   let filereader = new FileReader();
//   const file = event.target.files[0];
//   filereader.onload = async () => {
//     if (files.length > 0) {
//       const updatedImages = filereader.result;
//       setimagesrc(updatedImages);
//     }
//   };
//   filereader.readAsDataURL(file);
// };


//   // const handleBack = () => {
//   //   setOpenRegister(false);
//   // };

//   return (
//     <div className="fixed inset-0 flex items-center  justify-center bg-gray-800 bg-opacity-50 z-50 " ref={editRef}>
//             <ToastContainer
//             position="bottom-right"
//             autoClose={5000}
//             hideProgressBar={false}
//             newestOnTop={false}
//             closeOnClick
//             rtl={false}
//             pauseOnFocusLoss
//             draggable
//             pauseOnHover
//             theme="light"
//              />

// <form 
//         onSubmit={handleSubmit}
//         className="forgot-password    xl:w-1/4 w-full  p-3   lg:w-3/4 2xl:w-1/4 md:w-3/4 sm:w-3/4 rounded-lg shadow-md bg-pink-200  transition duration-500 ease-in-out border-2 border-transparent "
//       >
//         <h2 className="text-center text-2xl mt-3 mb-3">Add product</h2>
//         <div>
//           <label
//             htmlFor="name"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Name
//           </label>
//           <input
//             ref={nameRef}
//             type="text"
//             id="name"
//             className="mt-1 p-2 block text-[12px] w-full border border-white rounded-md focus:outline-none focus:border-pink-500"
//             placeholder="Enter Product Name"
//           />
//         </div>
//         <div>
//           <label
//             htmlFor="price"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Price
//           </label>
//           <input
//             ref={priceRef}
//             type="text"
//             id="price"
//             className="mt-1 p-2 text-[12px] block w-full border border-white rounded-md focus:outline-none focus:border-pink-500"
//             placeholder="Enter price"
//           />
//         </div>


//         <label htmlFor="category">Category:</label>
//   <select id="category" name="category"  ref={categoryRef} className="text-sm mt-4  bg-white  border-2 p-2 ml-3 rounded-xl mb-4">
//     <option value="body cream">body cream</option>
//     <option value="face cream">face cream</option>
//     <option value="body wash">Body wash</option>
//   </select>


        
//         <div  
//             className="mt-3 mb-3 flex p-2  gap-2 items-center w-full text-[12px] border-pink-700 bg-[#f29cb3] border-2 rounded-sm  focus:outline-none focus:border-pink-500"
//             >
//                 <MdInsertPhoto 
//                  className="cursor-pointer"/>
//         <input
//             type="file"
//             id="image"
//             name='image'
//             style={{ visibility: "hidden", width: "0",height:"0" }}
//             ref={imageRef}
//             onChange={(e) => oninput(e, e.target.files)}
//           />

//           <label htmlFor="image"  className="cursor-pointer">
//           Select Product Image
//           </label>  
        
//         </div>
//         <div>
//           <label
//             htmlFor="description"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Description
//           </label>
//           <textarea
//             ref={descriptionRef}
//             id="description"
//             className="mt-1 mb-4 p-2 block text-[12px] w-full border h-40 border-white rounded-md focus:outline-none focus:border-pink-500"
//             placeholder="Enter Product Description"
//             maxLength={200}
//           />
//         </div>

  

//         <button
//           type="submit"
//           className="w-full mb-4  border-2  bg-[#f29cb3] border-pink-700 hover:text-white  hover:bg-pink-700 py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
//         >
//           Add Product
//         </button>
      
//       </form>
      
//       <div className="w-[300px] h-[300px] border">
//         <img style={{ width: "100%", height: "100% " }} src={imagesrc} alt="" />
//       </div>
//     </div>
//   );
// };

// EditProduct.propTypes = {
//   setOpenEdit: PropTypes.func.isRequired,
// };

// export default EditProduct;
