import PropTypes from "prop-types";
import Cartcontext from "./cartcontext";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import http from "./utils/adminHttp";
import { useDispatch } from "react-redux";
import { fetchUserCart } from "./stores/features/cart/cartSlice";
const Cartprovider = ({ children }) => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [cart, setCart] = useState([]);
  const [product, setProduct] = useState([]);
  const [cartNumber, setcartNumber] = useState(0);
  const [isOpen, setIsOpen] = useState(false); 
   const [ openEdit,   setOpenEdit] = useState(false);
    const [ editObj, setEditobj]=useState({})
     const[login,setLogin]= useState(null);
     const[isadmin,setisadmin]=useState(null)
     const [user, setUser] = useState(null);
     const[ producthistory,setProductHistory]=useState({})
     const dispatch = useDispatch();

    

     useEffect(() => {
       const loadUser = async () => {
         try {
           const token =  localStorage.getItem('token');
           if (token) {
             const response = await http.get('/user/me');
             setUser(response.data.data)
             setisadmin(response.data.data.isAdmin)
             setProductHistory(JSON.parse(localStorage.getItem("history")))
            console.log(response.data.data)
           }
         } catch (error) {
           console.error('Failed to load user', error);
         }
       };
       loadUser();
     }, [])


     useEffect(()=>{
      const isLoggedIn = localStorage.getItem("Login") 
          setLogin(isLoggedIn)
         },[])




    useEffect(() => {
      if (user?._id) {
        dispatch(fetchUserCart(user?._id));
      }
    }, [dispatch, user?._id]);





    if (!cart) {
      return <div>Loading...</div>;
    }


  

  const Back = () => {
    setIsOpen(false);
  };

  const handleLogin = () => {
    setOpenLogin(true);
  };
  const handleRegister = () => {
    setOpenRegister(true);
  };

  const addCart = (item) => {
    const clickedItemId = item;
    const isproductincart = cart.find(
      (Existingitem) => Existingitem._id === clickedItemId._id
    );
    if (isproductincart) {
      toast.error("product already exist");
    } else {
      let NewCart = [...cart, { ...item, quantity: 1, Total: item.price }];
      setCart(NewCart);
      setcartNumber(cart.length);
    }
  };

  const Cartcont = {
    product: product,
    setProduct: setProduct,
    // theme: theme,
    // settheme: settheme,
    cart: cart,
    setCart: setCart,
    cartNumber: cartNumber,
    setcartNumber: setcartNumber,
    openLogin: openLogin,
    setOpenLogin: setOpenLogin,
    handleLogin: handleLogin,
    openRegister: openRegister,
    setOpenRegister: setOpenRegister,
    handleRegister: handleRegister,
    addCart: addCart,
    isOpen:isOpen,
    setIsOpen:setIsOpen,
    Back:Back,
    openEdit:openEdit,
     setOpenEdit: setOpenEdit,
     editObj:editObj,
     setEditobj:setEditobj,
     login:login,
     setLogin:setLogin,
    isadmin:isadmin,
    setisadmin:setisadmin,
    user:user,
producthistory,
setProductHistory

  };

  return (
    <Cartcontext.Provider value={Cartcont}>{children}</Cartcontext.Provider>
  );
};
Cartprovider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Cartprovider;
