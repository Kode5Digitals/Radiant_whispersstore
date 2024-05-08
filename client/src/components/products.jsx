
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import { useContext } from "react";
import Cartcontext from "../cartcontext";

function Products() {
  const { LikeColor, setLikeColor, setcartNumber } = useContext(Cartcontext);

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
    <main className="mb-24 xl mt-12">
      <div className="xl:w-4/5 w-full m-auto xl:p-9 ">
        <div className=" flex flex-wrap xl:gap-10 justify-evenly">
          {[...Array(12).keys()].map((index) => (
            <div key={index} className="xl:mb-10 mb-12 ">
              <div className="xl:w-52 xl:h-52 w-[200px] h-64 shadow-lg border-2 rounded-lg mb-3 relative">
                <img src={`cream${(index % 6) + 1}.jpg`} className="w-full h-full" alt="" />
                {!LikeColor.includes(index) ? (
                  <CiHeart
                    size={22}
                    className="m-2 absolute top-1 right-2 cursor-pointer text-[#080808]"
                    onClick={() => handleLikes(index)}
                  />
                ) : (
                  <FaHeart
                    size={20}
                    className="m-2 absolute top-1 right-2 cursor-pointer text-[#fd00cd]"
                    onClick={() => handleLikes(index)}
                  />
                )}
              </div>
           <div className="p-2">
           <h3 className="text-lg">Product Name</h3>
              <p className="text-sm">Product description</p>
              <h4 className="text-lg">Product price</h4>
           </div>
              <div className="flex justify-between mt-2 p-2">
                <div className="border rounded-sm">
                  <button className="w-6 h-6">+</button>
                  <button className="w-6 h-6 cursor-text text-sm">2</button>
                  <button className="w-6 h-6">-</button>
                </div>
                <button
                  className="border text-sm px-2 rounded-md bg-gray-50"
                  onClick={() => Addcart(index)}
                >
                  Add Cart
                </button>
              </div>
            </div>
          ))}
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
