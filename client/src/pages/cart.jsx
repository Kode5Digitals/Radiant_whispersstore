import {
  faArrowAltCircleLeft,
  faCartPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  selectCartLength,
  selectCart,
  removeAllFromCart,
} from "../stores/features/cart/cartSlice";

const Cart = () => {
  const { items, totalQuantity, totalPrice } = useSelector(selectCart);
  const cartLength = useSelector(selectCartLength);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleIncreaseQuantity = (item) => {
    dispatch(increaseQuantity(item));
  };

  const handleDecreaseQuantity = (item) => {
    dispatch(decreaseQuantity(item));
  };

  const handleremoveAllFromCart = () => {
    dispatch(removeAllFromCart());
  };

  return (
    <main>
      <div className=" flex items-center justify-between mt-5 p-3">
        <Link to="/home" className="text-lg text-pink-400 ml-10">
          <FontAwesomeIcon icon={faArrowAltCircleLeft} size="2x" />
        </Link>

        <div className="cursor-pointer relative text-center text-lg mr-6  text-pink-400">
          My Shopping Cart <FontAwesomeIcon icon={faCartPlus} />
          <div
            style={{ fontSize: "10px" }}
            className="w-4 text-sm bg-black text-white h-4 rounded-full border absolute flex justify-center items-center left-40 -top-2"
          >
            <h6>{cartLength}</h6>
          </div>
        </div>

        <div className="mr-40 flex items-center gap-3">
          <p>Total Price:</p>
          <button className="py-2 px-4 text-sm bg-blue-200 text-black flex justify-center items-center rounded-md">
            ${totalPrice.toFixed(2)}
          </button>
        </div>
      </div>

      {items.length > 0 && (
        <div>
          {items.map((val, index) => (
            <div key={index} className="  mt-5 w-3/4 mx-auto flex gap-14">
              <div className="flex min:w-64 w-64 h-52 rounded-xl hover:w-[400px] overflow-hidden">
                <img
                  src={val?.image}
                  className="w-full h-full"
                  alt={val?.name}
                />
              </div>
              <div className=" bg-pink-400 w-full text-white p-3">
                <h2 className="text-xl text-center mb-5">{val?.name}</h2>
                <h2 className="text-lg">{val?.description}</h2>
                <h2 className="text-lg">${val?.price}</h2>
                <h2 className="text-lg">
                  ${parseFloat(val.price) * val.quantity}
                </h2>

                <div className="flex justify-between mt-12">
                  <div className="flex ">
                    <button
                      className="w-9 h-9 text-sm bg-white text-black flex justify-center items-center rounded-md"
                      onClick={() => handleIncreaseQuantity(val._id)}
                    >
                      +
                    </button>
                    <h4 className="w-9 h-9 bg-pink-800 text-sm flex justify-center items-center rounded-md">
                      {val?.quantity}
                    </h4>
                    <button
                      className="w-9  bg-white  h-9 text-sm flex  text-black  justify-center items-center rounded-md"
                      onClick={() => handleDecreaseQuantity(val._id)}
                    >
                      -
                    </button>
                  </div>
                  <button
                    onClick={() => handleRemoveFromCart(val._id)}
                    className="del-btn"
                  >
                    <FontAwesomeIcon color="red" icon={faTrash} />
                    Remove Item
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="flex  mt-12 w-3/4 mx-auto justify-between  mb-20">
            <div className="w-[500px] h-[300px] bg-pink-white border-black border-2 rounded-md p-4">
              <h1 className="text-xl text-center">Cart Summary</h1>
              <hr className="" style={{ borderColor: "black" }} />
              <div className="mt-3">
                <ul>
                  <li className="mb-3 flex items-center justify-between">
                    No of item <p>{totalQuantity}</p>
                  </li>
                  <li className="mb-3 flex items-center justify-between">
                    Total Price <p>{totalPrice}</p>
                  </li>
                  <li className="mb-3 flex items-center justify-between">
                    Total Price <p>2</p>
                  </li>
                  <li className="mb-3 flex items-center justify-between">
                    Total Price <p>4</p>
                  </li>
                </ul>
              </div>
              <div className="flex gap-3 items-center">
                <label className="text-lg text-red-700" >Delivery fee  excluded!!!</label>
              </div>
              <div className="text-center mt-4  ">
                <Link to={"/paystack"}>
                <button  className=" bg-black p-4 text-white text-[12px]">
                  Proceed to Checkout
                </button>
                </Link>
              </div>
            </div>
            <div className=" " onClick={() => handleremoveAllFromCart()}>
              <button className="bg-red-500 p-4 text-white rounded-xl">
                Empty Cart
              </button>
            </div>
          </div>
        </div>
      )}

      {items.length === 0 && (
        <div className="w-full  h-[400px] flex justify-center items-center">
          <h1 className="text-center  text-3xl">Your cart is empty</h1>
        </div>
      )}

      <Footer logoSrc="../logo.png" />
    </main>
  );
};

export default Cart;
