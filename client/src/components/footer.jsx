import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import "../App.css"

const Footer = () => {
  return (
      <footer>
    <div className="flex m-auto pb-10 mt-32  pl-12 pr-12 bg-[#fd00cd] text-white pt-3 gap-28  justify-center"  >
        <div  className=" w-3/5 ">
        <ul>
            <li className="text-center mt-12">
                Radiant-whispersstore
            </li>
    
      <li  className="mt-56 text-[12px]">
        &copy; 2024 Radiant_whispersstore. <br></br> All right reserved
      </li>
      <li  className="flex text-[12px] gap-6 mt-6">
       <a >Cookies policy</a> 
       <a href="">Terms and condition</a>   
      </li>
    </ul>
        </div>
  
    
    
  <div className="w-3/5 ">
  <ul className="list text-sm "> 
      <li className="text-md font-bold mb-5">Features</li>
      <li>User Authentication</li>
      <li>Dshboard</li>
      <li>Member Management</li>
      <li>Space Management</li>
      <li>Calender/Bookings</li>
    </ul>
  </div>
    
 <div className=" w-3/5">
       
 <ul  className="list text-sm"  >
      <li  className="text-md font-bold mb-5">Contact Us</li>
      <li >Tech4Dev</li>
      <li><a href="#">Enquiry@Radiant_whispersstore.com</a></li>
      <li>(+234)90778808938 </li>
      <li className="text-lg">Contact Team</li>
    </ul>
     
 </div>
    
   <div className="w-3/5"> 
    <ul className="text-sm">
      <li className="text-lg font-bold mb-3">About Us</li>
      <li className=" text-sm">Radiant_whispersstore is a leading provider of co-working space bokings and CRM software, design specifically for nigerian markert. Our mission is to empower co-working space ownwer and users with intuitive tools and personalize support to optimize thier workspace experience</li>
      <li  className="flex gap-5 mt-20">
        <div className="socials"><TiSocialFacebook /></div>
        <div className="socials"> <FaInstagram /></div>
        <div className="socials"><IoLogoWhatsapp /></div>
        <div className="socials"><FaTwitter /></div>
      </li>
    </ul></div>
    
    </div>
          </footer>


    
    
  )
}

export default Footer