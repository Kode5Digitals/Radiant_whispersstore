import { useContext } from "react";
import Cartcontext from "../cartcontext";
import { AiOutlineLogin } from "react-icons/ai";
import { Link } from "react-router-dom";

const AdminNav = () => {
    const {
        handleLogin,
      } = useContext(Cartcontext);


  return (
   <div className="flex items-center p-2 justify-between">
<Link to={"/adminHome"}>
<div className="w-12 h-12 overflow-hidden bg-black">
  <img src="/logo.png" alt="" className="w-12 h-12"/>
</div>

</Link>


     <div className="flex p-3 text-[12px] gap-3 ">
 <Link to={"/AddProduct"}>
 <button className="p-1 border-black border rounded-sm">
            Add products
          </button> </Link>
<button onClick={handleLogin} className="flex items-center">
            <span>
              <AiOutlineLogin />
            </span>
            LoginOut
          </button>


      
    </div>
   </div>
  )
}

export default AdminNav