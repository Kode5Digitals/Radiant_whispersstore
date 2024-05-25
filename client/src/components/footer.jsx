import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import "../App.css"
import PropTypes from "prop-types";
import environment from "../config/env";
import { FacebookShareButton,   WhatsappShareButton } from "react-share"
import { Link } from "react-router-dom";

const Footer = ({logoSrc}) => {
  return (
      <footer >
    <div className="flex flex-wrap-reverse md:p-5 md:flex-nowrap xl:flex-nowrap m-auto pb-10 mt-5 pl-4 xl:pl-32 xl:pr-32 text-[#fd00cd]  bg-[#f5f5f5]  pt-10 xl:gap-28 gap-5  xl:justify-center"  >
      
 <div className=" w-3/5">
       
 <ul  className="list text-[13px]"  >
      <li  className="text-lg font-bold mb-5">Contact Us</li>
      <li><a href="#" >Enquiry @Radiant_whispersstore.com</a></li>
      <li>(+234)90778808938 </li>
      <li className=" mt-2 w-[150px] md:block hidden xl:block">
              <img src={logoSrc}  alt=""className="" />
            </li> 
    </ul>
    <div  className="flex lg:hidden  xl:hidden gap-5 mt-10 md:hidden ">
        <div className="socials hover:bg-pink-400 hover:text-white">
          <FacebookShareButton url={environment.FACEBOOK_URL}>
          <TiSocialFacebook />
          </FacebookShareButton>
         </div>
        <div className="socials  hover:bg-pink-400 hover:text-white">
           <FaInstagram /></div>
        <div className="socials  hover:bg-pink-400 hover:text-white">
          <WhatsappShareButton url="https://wa.link/m4ypbh">
          <IoLogoWhatsapp  />
          </WhatsappShareButton>
          </div>
        <div className="socials  hover:bg-pink-400 hover:text-white"><FaTwitter /></div>
      </div>
    
 </div>
 <div  className=" w-3/5 ">
        <ul>
      <li  className=" mt-2 text-[12px] ">
        &copy; 2024 Radiant_whispersstore. <br></br> All right reserved
      </li>
      <li  className="flex text-[12px] gap-2  xl:gap-6 mt-6 ">
        <Link to={"/return-policy"}>
        Return Policy
        </Link>
       <a href="">Terms and condition</a>   
      </li>
    </ul>
        </div>
    
   <div className="w-3/5"> 
    <ul className="text-sm">
      <li className="text-lg font-bold mb-2">About Us</li>
      <li className=" text-[11px]">
      At Radiant Whispers, we believe that every individual deserves to feel confident and comfortable in their own skin. 

That&apos;s why we&apos;re dedicated to providing high-quality, natural body creams that moisturize, soothe, and protect your skin.
                </li>
      <li  className="hidden lg:flex gap-5 mt-10  xl:flex md:flex">
        <div className="socials hover:bg-pink-400 hover:text-white">   
         <FacebookShareButton url="">
          <TiSocialFacebook />
          </FacebookShareButton>
          </div>
        <div className="socials  hover:bg-pink-400 hover:text-white"> <FaInstagram /></div>
        <div className="socials  hover:bg-pink-400 hover:text-white">
           <WhatsappShareButton url="https://wa.link/m4ypbh">
          <IoLogoWhatsapp  />
          </WhatsappShareButton>
</div>
        <div className="socials  hover:bg-pink-400 hover:text-white"><FaTwitter /></div>
      </li>
    </ul></div>
    
    </div>
          </footer>


    
    
  )
}

Footer.propTypes = {
  logoSrc: PropTypes.string.isRequired
};
export default Footer