import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import "../App.css"

const Footer = () => {
  return (
      <footer>
    <div className="flex flex-wrap-reverse xl:flex-nowrap m-auto pb-10 mt-32 pl-4 xl:pl-12 xl:pr-12 text-[#fd00cd]  bg-[#f5f5f5]  pt-10 xl:gap-28 gap-5  xl:justify-center"  >
        <div  className=" w-3/5 ">
        <ul>
            <li className=" mt-4  hidden xl:block">
                Radiant-whispersstore
            </li>
    
      <li  className="xl:mt-20 mt-2 text-[12px] ">
        &copy; 2024 Radiant_whispersstore. <br></br> All right reserved
      </li>
      <li  className="flex text-[12px] gap-6 mt-6">
       <a >Cookies policy</a> 
       <a href="">Terms and condition</a>   
      </li>
    </ul>
        </div>
  
    
    
  <div className="w-3/5  text-[13px]">
  <ul className="list text-sm "> 
      <li className="text-lg font-bold mb-5">Our Services</li>
      <li>Book A consultation</li>
      <li>Refunds and return</li>
      <li>Member Management</li>
   
    </ul>
  </div>
    
 <div className=" w-3/5">
       
 <ul  className="list text-[13px]"  >
      <li  className="text-lg font-bold mb-5">Contact Us</li>
      <li><a href="#" >Enquiry @Radiant_whispersstore.com</a></li>
      <li>(+234)90778808938 </li>
    </ul>
     
 </div>
    
   <div className="w-3/5"> 
    <ul className="text-sm">
      <li className="text-lg font-bold mb-2">About Us</li>
      <li className=" text-[11px]">Radiant_whispersstore is a leading provider of co-working space bokings and CRM software, design specifically for nigerian markert. Our mission is to empower co-working space ownwer and users with intuitive tools and personalize support to optimize thier workspace experience</li>
      <li  className="hidden gap-5 mt-10  xl:flex">
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