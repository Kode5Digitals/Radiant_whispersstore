import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import { useContext } from "react";
import Cartcontext from "../cartcontext";
function Products() {
  const { LikeColor, setLikeColor,setcartNumber} = useContext(Cartcontext);

  const handleLikes = (index) => {
    setLikeColor((prevState) => {
      const isActive = prevState.includes(index);
      const newState = isActive
        ? prevState.filter((item) => item !== index)
        : [...prevState, index];
      localStorage.setItem("Likes", JSON.stringify(newState));
      console.log(newState);
      return newState;
    });
  };



  const Addcart = (index) => {
    setcartNumber((prevState) => {
      const isActive = prevState.includes(index);
      const newState = isActive
        ? prevState.filter((item) => item !== index)
        : [...prevState, index];
      localStorage.setItem("cartNo", JSON.stringify(newState));
      console.log(newState);
      return newState;
    });
  };


  return (
    <main>
      <div className="   w-4/5 m-auto  p-9 ">
        <div className="flex flex-wrap justify-between ">
            <div className=" mb-10 ">
          <div className="w-52 h-52 shadow-lg border-2 rounded-lg mb-3 relative ">
            <img
              src="cream2.jpeg"
              className="w-full h-full"
              alt=""
            />
            {!LikeColor.includes(0) ? (
              <CiHeart
                size={22}
                className={` m-2 absolute top-1 right-2 cursor-pointer  'text-[#080808]`}
                onClick={() => handleLikes(0)}
              />
            ) : (
              LikeColor.includes(0) && (
                <FaHeart
                  size={20}
                  className={` m-2 absolute top-1 right-2 cursor-pointer text-[#fd00cd]`}
                  onClick={() => handleLikes(0)}
                />
              )
            )}
          </div>
<h3>Product Name</h3>
<p className="text-[12px]">Product discription</p>
<h4 className="text-[14px]">Product price</h4>

        <div className="flex justify-between mt-2">
    <div className="border rounded-sm">
    <button className="w-6 h-6  ">+</button>
          <button className="w-6 h-6  cursor-text text-[12px]">2</button>
          <button className="w-6 h-6 ">-</button>
    </div>
    <button className="border text-[12px]  px-2 rounded-md bg-gray-50" 
                  onClick={() => Addcart(0)}
                  >Add Cart</button>
        </div>
          </div>



<div className="mb-10">
<div className="w-52 h-52 shadow-lg border-2 rounded-lg mb-3 relative ">
            <img
              src="/cream1.jpeg"
              className="w-full h-full"
              alt=""
            />
            {!LikeColor.includes(1) ? (
              <CiHeart
                size={22}
                className={` m-2 absolute top-1 right-2 cursor-pointer  'text-[#080808]`}
                onClick={() => handleLikes(1)}
              />
            ) : (
              LikeColor.includes(1) && (
                <FaHeart
                  size={20}
                  className={` m-2 absolute top-1 right-2 cursor-pointer text-[#fd00cd]`}
                  onClick={() => handleLikes(1)}
                />
              )
            )}
          </div>
          <h3>Product Name</h3>
<p className="text-[12px]">Product discription</p>
<h4 className="text-[14px]">Product price</h4>

        <div className="flex justify-between mt-2">
    <div className="border rounded-sm">
    <button className="w-6 h-6  ">+</button>
          <button className="w-6 h-6  cursor-text text-[12px]">2</button>
          <button className="w-6 h-6 ">-</button>
    </div>
    <button className="border text-[12px]  px-2 rounded-md bg-gray-50"
                  onClick={() => Addcart(1)}
                  >Add Cart</button>
        </div>
          </div>




<div className="mb-10">
          <div className="w-52 shadow-lg h-52 border-2 rounded-lg mb-3 relative">
            <img
              src="/cream3.jpeg"
              className="w-full h-full"
              alt=""
            />

            {!LikeColor.includes(2) ? (
              <CiHeart
                size={22}
                className={` m-2 absolute top-1 right-2 cursor-pointer  'text-[#080808]`}
                onClick={() => handleLikes(2)}
              />
            ) : (
              LikeColor.includes(2) && (
                <FaHeart
                  size={20}
                  className={` m-2 absolute top-1 right-2 cursor-pointer text-[#fd00cd]`}
                  onClick={() => handleLikes(2)}
                />
              )
            )}
          </div>
          <h3>Product Name</h3>
<p className="text-[12px]">Product discription</p>
<h4 className="text-[14px]">Product price</h4>

        <div className="flex justify-between mt-2">
    <div className="border rounded-sm">
    <button className="w-6 h-6  ">+</button>
          <button className="w-6 h-6  cursor-text text-[12px]">2</button>
          <button className="w-6 h-6 ">-</button>
    </div>
    <button className="border text-[12px]  px-2 rounded-md bg-gray-50"
                  onClick={() => Addcart(2)}
                  >Add Cart</button>
        </div>
          </div>



<div className="mb-10">
          <div className="w-52 h-52 shadow-lg border-2 rounded-lg mb-3 relative">
            <img
              src="cream1.jpeg"
              className="w-full h-full"
              alt=""
            />
            {!LikeColor.includes(3) ? (
              <CiHeart
                size={22}
                className={` m-2 absolute top-1 right-2 cursor-pointer  'text-[#080808]`}
                onClick={() => handleLikes(3)}
              />
            ) : (
              LikeColor.includes(3) && (
                <FaHeart
                  size={20}
                  className={` m-2 absolute top-1 right-2 cursor-pointer text-[#fd00cd]`}
                  onClick={() => handleLikes(3)}
                />
              )
            )}
          </div>
          <h3>Product Name</h3>
<p className="text-[12px]">Product discription</p>
<h4 className="text-[14px]">Product price</h4>

        <div className="flex justify-between mt-2">
    <div className="border rounded-sm">
    <button className="w-6 h-6  ">+</button>
          <button className="w-6 h-6  cursor-text text-[12px]">2</button>
          <button className="w-6 h-6 ">-</button>
    </div>
    <button className="border text-[12px]  px-2 rounded-md bg-gray-50"
                  onClick={() => Addcart(3)}
                  >Add Cart</button>
        </div>
          </div>


          <div className="mb-10">
          <div className="w-52 h-52 shadow-lg border-2 rounded-lg mb-10 relative">
            <img
              src="cream2.jpeg"
              className="w-full h-full"
              alt=""
            />
            {!LikeColor.includes(4) ? (
              <CiHeart
                size={22}
                className={` m-2 absolute  top-1 right-2 cursor-pointer  'text-[#080808]`}
                onClick={() => handleLikes(4)}
              />
            ) : (
              LikeColor.includes(4) && (
                <FaHeart
                  size={20}
                  className={` m-2 absolute top-1 right-2 cursor-pointer text-[#fd00cd]`}
                  onClick={() => handleLikes(4)}
                />
              )
            )}
          </div>
          <h3>Product Name</h3>
<p className="text-[12px]">Product discription</p>
<h4 className="text-[14px]">Product price</h4>

        <div className="flex justify-between mt-2">
    <div className="border rounded-sm">
    <button className="w-6 h-6  ">+</button>
          <button className="w-6 h-6  cursor-text text-[12px]">2</button>
          <button className="w-6 h-6 ">-</button>
    </div>
    <button className="border text-[12px]  px-2 rounded-md bg-gray-50"
                  onClick={() => Addcart(4)}
                  >Add Cart</button>
        </div>
          </div>



        <div className="mb-10">

          <div className="w-52 h-52 shadow-lg border-2 rounded-lg mb-3 relative">
            <img
              src="cream3.jpeg"
              className="w-full h-full"
              alt=""
            />
            {!LikeColor.includes(5) ? (
              <CiHeart
                size={22}
                className={` m-2 absolute top-1 right-2 cursor-pointer  'text-[#080808]`}
                onClick={() => handleLikes(5)}
              />
            ) : (
              LikeColor.includes(5) && (
                <FaHeart
                  size={20}
                  className={` m-2 absolute top-1 right-2 cursor-pointer text-[#fd00cd]`}
                  onClick={() => handleLikes(5)}
                />
              )
            )}
          </div>
          <h3>Product Name</h3>
<p className="text-[12px]">Product discription</p>
<h4 className="text-[14px]">Product price</h4>

        <div className="flex justify-between mt-2">
    <div className="border rounded-sm">
    <button className="w-6 h-6  ">+</button>
          <button className="w-6 h-6  cursor-text text-[12px]">2</button>
          <button className="w-6 h-6 ">-</button>
    </div>
    <button className="border text-[12px]  px-2 rounded-md bg-gray-50"
                  onClick={() => Addcart(5)}
                  >Add Cart</button>
        </div>
          </div>



        <div className="mb-10">
          <div className="w-52 h-52 shadow-lg border-2 rounded-lg mb-3 relative">
            <img src="cream2.jpeg" alt="" />
            {!LikeColor.includes(6) ? (
              <CiHeart
                size={22}
                className={` m-2 absolute top-1 right-2 cursor-pointer  'text-[#080808]`}
                onClick={() => handleLikes(6)}
              />
            ) : (
              LikeColor.includes(6) && (
                <FaHeart
                  size={20}
                  className={` m-2 absolute top-1 right-2 cursor-pointer text-[#fd00cd]`}
                  onClick={() => handleLikes(6)}
                />
              )
            )}
          </div>
          <h3>Product Name</h3>
<p className="text-[12px]">Product discription</p>
<h4 className="text-[14px]">Product price</h4>

        <div className="flex justify-between mt-2">
    <div className="border rounded-sm">
    <button className="w-6 h-6  ">+</button>
          <button className="w-6 h-6  cursor-text text-[12px]">2</button>
          <button className="w-6 h-6 ">-</button>
    </div>
    <button className="border text-[12px]  px-2 rounded-md bg-gray-50"
                  onClick={() => Addcart(6)}
                  >Add Cart</button>
        </div>
          </div>



        <div className="mb-10">
          <div className="w-52 h-52 shadow-lg   border-2 rounded-lg mb-3 relative ">
            <img
              src="cream1.jpeg"
              className="w-full h-full"
              alt=""
            />

            {!LikeColor.includes(7) ? (
              <CiHeart
                size={22}
                className={` m-2 absolute top-1 right-2 cursor-pointer  'text-[#080808]`}
                onClick={() => handleLikes(7)}
              />
            ) : (
              LikeColor.includes(7) && (
                <FaHeart
                  size={20}
                  className={` m-2 absolute top-1 right-2 cursor-pointer text-[#fd00cd]`}
                  onClick={() => handleLikes(7)}
                />
              )
            )}
          </div>
              <h3>Product Name</h3>
<p className="text-[12px]">Product discription</p>
<h4 className="text-[14px]">Product price</h4>

        <div className="flex justify-between mt-2">
    <div className="border rounded-sm">
    <button className="w-6 h-6  ">+</button>
          <button className="w-6 h-6  cursor-text text-[12px]">2</button>
          <button className="w-6 h-6 ">-</button>
    </div>
    <button className="border text-[12px]  px-2 rounded-md bg-gray-50"
                  onClick={() => Addcart(7)}
                  >Add Cart</button>
        </div>
          </div>



        <div className="mb-10">

          <div className="w-52 h-52 shadow-lg border-2 rounded-lg mb-3 relative">
            <img
              src="cream1.jpeg"
              className="w-full h-full"
              alt=""
            />
            {!LikeColor.includes(8) ? (
              <CiHeart
                size={22}
                className={` m-2 absolute top-1 right-2 cursor-pointer  'text-[#080808]`}
                onClick={() => handleLikes(8)}
              />
            ) : (
              LikeColor.includes(8) && (
                <FaHeart
                  size={20}
                  className={` m-2 absolute top-1 right-2 cursor-pointer text-[#fd00cd]`}
                  onClick={() => handleLikes(8)}
                />
              )
            )}
          </div>
              <h3>Product Name</h3>
<p className="text-[12px]">Product discription</p>
<h4 className="text-[14px]">Product price</h4>

        <div className="flex justify-between mt-2">
    <div className="border rounded-sm">
    <button className="w-6 h-6  ">+</button>
          <button className="w-6 h-6  cursor-text text-[12px]">2</button>
          <button className="w-6 h-6 ">-</button>
    </div>
    <button className="border text-[12px]  px-2 rounded-md bg-gray-50"
                  onClick={() => Addcart(8)}
                  >Add Cart</button>
        </div>
          </div>
        <div className="mb-10">

          <div className="w-52 h-52 shadow-lg border-2 rounded-lg mb-3 relative">
            <img
              src="cream2.jpeg"
              className="w-full h-full"
              alt=""
            />

            {!LikeColor.includes(9) ? (
              <CiHeart
                size={22}
                className={` m-2 absolute top-1 right-2 cursor-pointer  'text-[#080808]`}
                onClick={() => handleLikes(9)}
              />
            ) : (
              LikeColor.includes(9) && (
                <FaHeart
                  size={20}
                  className={` m-2 absolute top-1 right-2 cursor-pointer text-[#fd00cd]`}
                  onClick={() => handleLikes(9)}
                />
              )
            )}
          </div>
              <h3>Product Name</h3>
<p className="text-[12px]">Product discription</p>
<h4 className="text-[14px]">Product price</h4>

        <div className="flex justify-between mt-2">
    <div className="border rounded-sm">
    <button className="w-6 h-6  ">+</button>
          <button className="w-6 h-6  cursor-text text-[12px]">2</button>
          <button className="w-6 h-6 ">-</button>
    </div>
    <button className="border text-[12px]  px-2 rounded-md bg-gray-50"
                  onClick={() => Addcart(9)}
                  >Add Cart</button>
        </div>
          </div>

        <div className="mb-10">
          <div className="w-52 h-52 shadow-lg border-2 rounded-lg mb-3 relative">
            <img
              src="cream1.jpeg"
              className="w-full h-full"
              alt=""
            />

            {!LikeColor.includes(10) ? (
              <CiHeart
                size={22}
                className={` m-2 absolute top-1 right-2 cursor-pointer  'text-[#080808]`}
                onClick={() => handleLikes(10)}
              />
            ) : (
              LikeColor.includes(10) && (
                <FaHeart
                  size={20}
                  className={` m-2 absolute top-1 right-2 cursor-pointer text-[#fd00cd]`}
                  onClick={() => handleLikes(10)}
                />
              )
            )}
          </div>
               <h3>Product Name</h3>
<p className="text-[12px]">Product discription</p>
<h4 className="text-[14px]">Product price</h4>

        <div className="flex justify-between mt-2">
    <div className="border rounded-sm">
    <button className="w-6 h-6  ">+</button>
          <button className="w-6 h-6  cursor-text text-[12px]">2</button>
          <button className="w-6 h-6 ">-</button>
    </div>
    <button className="border text-[12px]  px-2 rounded-md bg-gray-50"
                  onClick={() => Addcart(10)}
                  >Add Cart</button>
        </div>
          </div>


        <div className="mb-10">

          <div className="w-52 h-52 shadow-lg border-2 rounded-lg mb-3 relative">
            <img
              src="cream3.jpeg"
              className="w-full h-full"
              alt=""
            />

            {!LikeColor.includes(11) ? (
              <CiHeart
                size={22}
                className={` m-2 absolute top-1 right-2 cursor-pointer  'text-[#080808]`}
                onClick={() => handleLikes(11)}
              />
            ) : (
              LikeColor.includes(11) && (
                <FaHeart
                  size={20}
                  className={` m-2 absolute top-1 right-2 cursor-pointer text-[#fd00cd]`}
                  onClick={() => handleLikes(11)}
                />
              )
            )}
          </div>
              <h3>Product Name</h3>
<p className="text-[12px]">Product discription</p>
<h4 className="text-[14px]">Product price</h4>

        <div className="flex justify-between mt-2">
    <div className="border rounded-sm">
    <button className="w-6 h-6  ">+</button>
          <button className="w-6 h-6  cursor-text text-[12px]">2</button>
          <button className="w-6 h-6 ">-</button>
    </div>
    <button className="border text-[12px]  px-2 rounded-md bg-gray-50"
                  onClick={() => Addcart(11)}
                  >Add Cart</button>
        </div>
          </div>

        </div>
        <div className="m-auto w-44">
          <button className="w-52 border p-2 rounded-xl bg-[#fd00cd] text-white font-bold">
            Click for more
          </button>
        </div>
      </div>
    </main>
  );
}
export default Products;
