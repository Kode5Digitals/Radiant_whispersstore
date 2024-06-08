import {  useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { MdInsertPhoto } from "react-icons/md";
import "react-toastify/dist/ReactToastify.css";
import AdminDefaultlayout from "../layout/AdminLayout";
import { BiLoaderCircle } from "react-icons/bi";
import http from "../utils/adminHttp";


const AddProduct = () => {
  const nameRef = useRef("");
  const priceRef = useRef("");
  const imageRef = useRef("");
  const descriptionRef = useRef("");
  const categoryRef = useRef('');
  const [imagesrc, setimagesrc] = useState([]);
  const [loading,setLoading]=useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true)
        const formData = new FormData();
        formData.append('name', nameRef.current.value);
        formData.append('price', priceRef.current.value);
        formData.append('image', imageRef.current.files[0]);
        formData.append('description', descriptionRef.current.value);
        formData.append('category',categoryRef.current.value)
        const response = await http.post(
            "/api/products/addProduct", 
            formData
        )
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
    }finally{
      setLoading(false)
    }
};



//products preview
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




//delete all produts in the database
    // const handleDeleteAll = async () => {
    //   try {
    //     const response = await axios.delete('http://localhost:4000/api/products/DeleteAll');
  
    //     console.log(response.data); 
    //   } catch (error) {
    //     console.error('Error deleting all documents:', error);
    //   }
    // }
  

  return (
    <AdminDefaultlayout>

    <div
      className="flex items-start  justify-center pb-96 p-4 xl:p-24 bg-[#891980] xl:h-full w-full h-full  "
      // style={{ height: "100vh" }}
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
        className="forgot-password flex mt-32 h-full xl:mt-0 w-full sm:flex-wrap xl:flex-nowrap  flex-wrap  p-3 gap-10    lg:w-3/4 2xl:w-1/4 md:w-3/4 sm:w-3/4 rounded-lg shadow-md bg-pink-200  transition duration-500 ease-in-out border-2 border-transparent "
      >
       <div className=" xl:w-1/2  w-full">
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
            className="mt-1 p-2 block text-[12px] w-full border border-white rounded-md focus:outline-none focus:border-pink-500"
            placeholder="Enter Product Name"
            required

          />
        </div>
        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700 mt-3"
          >
            Price
          </label>

          <input
            ref={priceRef}
            type="text"
            id="price"
            className="mt-1 p-2 text-[12px] block w-full border border-white rounded-md focus:outline-none focus:border-pink-500"
            placeholder="Enter price"
            required
          />
          
        </div>


        <label htmlFor="category">Category:</label>
  <select required id="category" name="category"  ref={categoryRef} className="text-sm mt-4  bg-white  border-2 p-2 ml-3 rounded-xl mb-4">
    <option value="body cream">body cream</option>
    <option value="face cream">face cream</option>
    <option value="body wash">body wash</option>
  </select>


        
        <div  
            className="mt-3 mb-3 flex p-2  gap-2 items-center w-full text-[12px] border-pink-700 bg-[#f29cb3] border-2 rounded-sm  focus:outline-none focus:border-pink-500"
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
            className="mt-1 mb-4 p-2 block text-[12px] w-full border h-32 border-white rounded-md focus:outline-none focus:border-pink-500"
            placeholder="Enter Product Description"
            maxLength={300}
            required
          />
        </div>

  
{!loading &&
        <button
          type="submit"
          className="w-full mb-4  border-2  bg-[#f29cb3] border-pink-700 hover:text-white  hover:bg-pink-700 py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          Add Product
        </button>}
     { loading &&  <button type="button" className="w-full mb-4 flex items-center justify-center border-2  bg-[#f29cb3] border-pink-700 hover:text-white  hover:bg-pink-700 py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105" disabled>
  
  <BiLoaderCircle className="animate-spin" />
  Processing...
</button>}
       </div>
       
       <div className="xl:w-1/2 w-3/4 m-auto">
       <div className="w-full  m-auto h-[300px] border">
        <img style={{ width: "100%", height: "100% " }} src={imagesrc} alt="" />
      </div>
       </div>
      
      </form>

      
      {/* <button onClick={handleDeleteAll} className="text-white">Delete all product</button> */}
    </div></AdminDefaultlayout>
  );
};

export default AddProduct;
