import PropTypes from "prop-types";
import Cartcontext from "./cartcontext";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Cartprovider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [wishlistLnt, setWishlistLnt] = useState(0);
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [cart, setCart] = useState([]);
  const [product, setProduct] = useState([]);
  const [cartNumber, setcartNumber] = useState(0);
  const [isOpen, setIsOpen] = useState(false); 
   const [ openEdit,   setOpenEdit] = useState(false);
    const [ editObj, setEditobj]=useState({})


  const Back = () => {
    setIsOpen(!isOpen);
  };

  const handleLogin = () => {
    setOpenLogin((prevState) => !prevState);
    Back()
  };
  const handleRegister = () => {
    Back()
    setOpenRegister((prevState) => !prevState);
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

  const removeWishItem = (item) => {
    const updatedWishlist = wishlist.filter((product) => product !== item);
    setWishlist(updatedWishlist);
    setWishlistLnt(wishlist.length);
    console.log(wishlist)
  };

  const handleWishlist = (item) => {
    if (!wishlist.includes(item)) {
      setWishlist([...wishlist, item]);
      setWishlistLnt(wishlist.length);
    console.log(wishlist)

    } else {
      removeWishItem(item);
    }
  };

  const Cartcont = {
    product: product,
    setProduct: setProduct,
    // getnumber,
    // theme: theme,
    // settheme: settheme,
    cart: cart,
    setCart: setCart,
    cartNumber: cartNumber,
    setcartNumber: setcartNumber,
    wishlistLnt: wishlistLnt,
    wishlist: wishlist,
    openLogin: openLogin,
    setOpenLogin: setOpenLogin,
    handleLogin: handleLogin,
    openRegister: openRegister,
    setOpenRegister: setOpenRegister,
    handleRegister: handleRegister,
    addCart: addCart,
    handleWishlist: handleWishlist,
    removeWishItem:removeWishItem,
    isOpen:isOpen,
    setIsOpen:setIsOpen,
    Back:Back,
    openEdit:openEdit,
     setOpenEdit: setOpenEdit,
     editObj:editObj,
     setEditobj:setEditobj

  };

  return (
    <Cartcontext.Provider value={Cartcont}>{children}</Cartcontext.Provider>
  );
};
Cartprovider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Cartprovider;
