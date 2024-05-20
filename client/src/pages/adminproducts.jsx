
import { useContext, useEffect, useState } from "react";
import httpAuth from "../utils/https";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "../components/loaderSpinner";
import { CircularProgress, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../stores/features/product/productSlice";
import AdminDefaultlayout from "../layout/AdminLayout";
import EditProduct from "../components/editProducts";
import Cartcontext from "../cartcontext";
import DeleteProduct from "../components/deleteModal";
import { Truncate } from "../utils/utils";
import { TbCurrencyNaira } from "react-icons/tb";

function AdminProducts() {
  const [loading, setLoading] = useState(false);
  const{openEdit,setOpenEdit,setEditobj}=useContext(Cartcontext)
  const [moreLoading, setMoreLoading] = useState(false);
  const products = useSelector((state) => state.products);
  // const navigate=useNavigate()
  const [visibleProducts, setVisibleProducts] = useState(10);
  const [openDelete,setOpenDelete]=useState(false)
  const[ deleteName, setDeleteName]=useState({name:"",id:""}) 
  const dispatch = useDispatch();

  const handleAllProducts = async () => {
    try {
      setLoading(true);
      const response = await httpAuth.get(`/api/products/allProducts`);
      const data = await response.data.products;
      return data;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setMoreLoading(false);
    }
  };

  useEffect(() => {
    handleAllProducts().then((products) => {
      dispatch(setProducts(products));
    });
  }, [dispatch]);

  const handleLoadMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 1);
  };

  //edit product
 const handleEdit=async(id)=>{
  console.log(id)

    try {
        const response = await httpAuth.get(`/admin/product/edit/${id}`);
        console.log(response)

        const data = await response.data.product;
        console.log(data)
        setEditobj(data) 
   } catch (error) {
        console.log(error);
      } finally {
        setOpenEdit(true)
      }
  }

const openDeleteModal=(name,id)=>{
    setOpenDelete(true)
    console.log(id)
   setDeleteName({name:name,id:id})
}




  return (
    <AdminDefaultlayout>
    {openEdit &&  <EditProduct setOpenEdit={setOpenEdit} />}
     {openDelete  &&<DeleteProduct deleteName={deleteName} />}
    <main className="mb-10 ">
      {loading && <LoadingSpinner />}
      <div className="xl:w-4/5 w-full mt-12  mx-auto ">
        <div className=" flex  w-full sm:gap-5  sm:flex-wrap justify-evenly   xl:justify-center  2xl:justify-evenly ">
          {products.slice(0, visibleProducts).map((prod, index) => (
            <div key={index} className=" mb-20 max-w-48 xl:w-48  h-84  ">
              <div className="  w-full h-52 shadow-xl  overflow-hidden rounded-lg mb-3 relative">
                <img src={prod?.image} className="w-full h-full" alt="" />

             
              </div>
              <div className="p-1 ">
                <h3 className="text-[13px]">{Truncate(prod?.name,30)}</h3>
                <div className="flex items-center">
                <TbCurrencyNaira /> 
                <h4 className="text-md"><span></span>{prod?.price}</h4>
                </div>
              </div>
              <div className="flex justify-between  ">
                <div className="justify-center flex ">
                  <button onClick={()=>openDeleteModal(prod.name,prod._id)} className="text-[12px]  border  px-6 rounded-md text-white p-2 bg-pink-700 ">
                   Delete
                  </button>
                </div>
                <button
                  id={prod._id}
                  className="border text-sm px-6 rounded-md   bg-pink-300 border-pink-600 hover:text-white hover:bg-pink-950"
                  onClick={() => handleEdit(prod._id)}
                >
                Edit
                </button>
              </div>
            </div>
          ))}
        </div>
        {moreLoading && (
          <div className="flex flex-col items-center justify-center h-screen">
            <CircularProgress
              size={80}
              style={{ marginBottom: 20, color: "#F13DA6" }}
            />
            <Typography
              variant="h6"
              className="text-pink-700 text-xl absolute "
              style={{ textAlign: "center" }}
            >
              Radiantwhispersstore products...
            </Typography>
          </div>
        )}
        <div className="m-auto w-44">
          {!loading && visibleProducts < products.length && (
            <button
              onClick={handleLoadMore}
              className="w-52 border p-2 rounded-xl bg-[#fd00cd] text-white font-bold"
            >
              {loading ? "Loading..." : "Load More"}
            </button>
          )}
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
    </main></AdminDefaultlayout>
    
  );
}

export default AdminProducts;
