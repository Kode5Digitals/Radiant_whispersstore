import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import { useContext } from "react";
import Cartcontext from "../cartcontext";
function Products(){
    const {LikeColor,setLikeColor} =useContext(Cartcontext)
   
    const handleLikes = (index) => {
        setLikeColor(prevState => {
            const isActive = prevState.includes(index);
            const newState = isActive ? prevState.filter(item => item !== index) : [...prevState, index];
            localStorage.setItem("Likes", JSON.stringify(newState));
            console.log(newState)
            return newState;

        });
    };
    

    return(
 <main>
      <div className="   w-4/5 m-auto  p-9 ">
       
     <div className="flex flex-wrap justify-between ">
            <div className="w-52 h-52 border-2 rounded-lg mb-10 relative">
                <img src="../public/images/cream2.jpeg" className="w-full h-full" alt="" />
{!LikeColor.includes(0)? (<CiHeart  size={22} className={` m-2 absolute top-1 right-2 cursor-pointer  'text-[#080808]`}   onClick={() => handleLikes(0)}/>
):
LikeColor.includes(0) &&(<FaHeart  size={20} className={` m-2 absolute top-1 right-2 cursor-pointer text-[#fd00cd]`}  onClick={() => handleLikes(0)} />)
}

      
            </div>
            <div className="w-52 h-52 border-2 rounded-lg mb-10 relative ">
            <img src="../public/images/cream1.jpeg"className="w-full h-full" alt="" />
            {!LikeColor.includes(1)? (<CiHeart  size={22} className={` m-2 absolute top-1 right-2 cursor-pointer  'text-[#080808]`}   onClick={() => handleLikes(1)}/>
):
LikeColor.includes(1) &&(<FaHeart  size={20} className={` m-2 absolute top-1 right-2 cursor-pointer text-[#fd00cd]`}  onClick={() => handleLikes(1)} />)
}


            </div>
            <div className="w-52 h-52 border-2 rounded-lg mb-10 relative">
            <img src="../public/images/cream3.jpeg" className="w-full h-full" alt="" />

{!LikeColor.includes(2)? (<CiHeart  size={22} className={` m-2 absolute top-1 right-2 cursor-pointer  'text-[#080808]`}   onClick={() => handleLikes(2)}/>
):
LikeColor.includes(2) &&(<FaHeart  size={20} className={` m-2 absolute top-1 right-2 cursor-pointer text-[#fd00cd]`}  onClick={() => handleLikes(2)} />)
}
            </div>
            <div className="w-52 h-52 border-2 rounded-lg mb-10 relative">
            <img src="../public/images/cream1.jpeg" className="w-full h-full"alt="" />
{!LikeColor.includes(3)? (<CiHeart  size={22} className={` m-2 absolute top-1 right-2 cursor-pointer  'text-[#080808]`}   onClick={() => handleLikes(3)}/>
):
LikeColor.includes(3) &&(<FaHeart  size={20} className={` m-2 absolute top-1 right-2 cursor-pointer text-[#fd00cd]`}  onClick={() => handleLikes(3)} />)
}

            </div>
            <div className="w-52 h-52 border-2 rounded-lg mb-10 relative">
            <img src="../public/images/cream2.jpeg" className="w-full h-full" alt="" />
            {!LikeColor.includes(4)? (<CiHeart  size={22} className={` m-2 absolute top-1 right-2 cursor-pointer  'text-[#080808]`}   onClick={() => handleLikes(4)}/>
):
LikeColor.includes(4) &&(<FaHeart  size={20} className={` m-2 absolute top-1 right-2 cursor-pointer text-[#fd00cd]`}  onClick={() => handleLikes(4)} />)
}
            </div>
            <div className="w-52 h-52 border-2 rounded-lg mb-10 relative">
            <img src="../public/images/cream3.jpeg" className="w-full h-full" alt="" />
{!LikeColor.includes(5)? (<CiHeart  size={22} className={` m-2 absolute top-1 right-2 cursor-pointer  'text-[#080808]`}   onClick={() => handleLikes(5)}/>
):
LikeColor.includes(5) &&(<FaHeart  size={20} className={` m-2 absolute top-1 right-2 cursor-pointer text-[#fd00cd]`}  onClick={() => handleLikes(5)} />)
}
         
            </div>
            <div className="w-52 h-52 border-2 rounded-lg mb-10 relative">
            <img src="../public/images/cream2.jpeg" alt="" />
{!LikeColor.includes(6)? (<CiHeart  size={22} className={` m-2 absolute top-1 right-2 cursor-pointer  'text-[#080808]`}   onClick={() => handleLikes(6)}/>
):
LikeColor.includes(6) &&(<FaHeart  size={20} className={` m-2 absolute top-1 right-2 cursor-pointer text-[#fd00cd]`}  onClick={() => handleLikes(6)} />)
}

            </div>
            <div className="w-52 h-52 border-2 rounded-lg mb-10 relative ">
            <img src="../public/images/cream1.jpeg"className="w-full h-full" alt="" />

{!LikeColor.includes(7)? (<CiHeart  size={22} className={` m-2 absolute top-1 right-2 cursor-pointer  'text-[#080808]`}   onClick={() => handleLikes(7)}/>
):
LikeColor.includes(7) &&(<FaHeart  size={20} className={` m-2 absolute top-1 right-2 cursor-pointer text-[#fd00cd]`}  onClick={() => handleLikes(7)} />)
}
            </div>
            <div className="w-52 h-52 border-2 rounded-lg mb-10 relative">
            <img src="../public/images/cream1.jpeg" className="w-full h-full" alt="" />
{!LikeColor.includes(8)? (<CiHeart  size={22} className={` m-2 absolute top-1 right-2 cursor-pointer  'text-[#080808]`}   onClick={() => handleLikes(8)}/>
):
LikeColor.includes(8) &&(<FaHeart  size={20} className={` m-2 absolute top-1 right-2 cursor-pointer text-[#fd00cd]`}  onClick={() => handleLikes(8)} />)
}

            </div>
            <div className="w-52 h-52 border-2 rounded-lg mb-10 relative">
            <img src="../public/images/cream2.jpeg" className="w-full h-full" alt="" />

{!LikeColor.includes(9)? (<CiHeart  size={22} className={` m-2 absolute top-1 right-2 cursor-pointer  'text-[#080808]`}   onClick={() => handleLikes(9)}/>
):
LikeColor.includes(9) &&(<FaHeart  size={20} className={` m-2 absolute top-1 right-2 cursor-pointer text-[#fd00cd]`}  onClick={() => handleLikes(9)} />)
}
            </div>
            <div className="w-52 h-52 border-2 rounded-lg mb-10 relative">
            <img src="../public/images/cream1.jpeg" className="w-full h-full" alt="" />

{!LikeColor.includes(10)? (<CiHeart  size={22} className={` m-2 absolute top-1 right-2 cursor-pointer  'text-[#080808]`}   onClick={() => handleLikes(10)}/>
):
LikeColor.includes(10) &&(<FaHeart  size={20} className={` m-2 absolute top-1 right-2 cursor-pointer text-[#fd00cd]`}  onClick={() => handleLikes(10)} />)
}
            </div>
            <div className="w-52 h-52 border-2 rounded-lg mb-10 relative">
            <img src="../public/images/cream3.jpeg" className="w-full h-full" alt="" />

{!LikeColor.includes(11)? (<CiHeart  size={22} className={` m-2 absolute top-1 right-2 cursor-pointer  'text-[#080808]`}   onClick={() => handleLikes(11)}/>
):
LikeColor.includes(11) &&(<FaHeart  size={20} className={` m-2 absolute top-1 right-2 cursor-pointer text-[#fd00cd]`}  onClick={() => handleLikes(11)} />)
}
            </div>
       
    </div> 
<div className="m-auto w-44">
<button className="w-52 border p-2 rounded-xl bg-[#fd00cd] text-white font-bold">Click for more</button>
    </div>  
     </div>
 </main>
    )

}
export default Products