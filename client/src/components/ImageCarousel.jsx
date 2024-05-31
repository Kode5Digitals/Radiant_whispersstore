import { useEffect, useState } from "react";
import PropTypes from "prop-types";
const ImageCarousel = ({ image ,name}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % image?.length);
        }, 3000); 

        return () => clearInterval(interval);
    }, [image?.length]);

    return (
       <div>
         <div className="p-2 bg-[#571283] mb-10 text-white">
        <p >{name[currentImageIndex]}</p>
            
            </div>
        <div className="w-[250px] mx-auto ">
           
            <img
                src={image[currentImageIndex]}
                alt={`Product ${currentImageIndex}`}
                className="w-full h-full bg-[#571283] object-cover transition-opacity duration-1000"
            />
        </div>
       </div>
    );
};
ImageCarousel.propTypes = {
    image:  PropTypes.arrayOf(PropTypes.string).isRequired,
    name:  PropTypes.arrayOf(PropTypes.string).isRequired,
  };
  

export default ImageCarousel;
