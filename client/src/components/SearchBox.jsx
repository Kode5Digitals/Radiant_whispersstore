import { useEffect, useRef, useState } from "react"
import { MdArrowBackIos } from "react-icons/md"
import { Link } from "react-router-dom"
import PropTypes from 'prop-types';
const SearchBox = ({ showProducts, searchedProducts, handleClickBack }) => {
  const productRef = useRef(null)
  const SearchproductRef = useRef(null)
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (productRef.current) {
        const scrollTop = productRef.current.scrollTop;
        setIsSticky(scrollTop > 0);
      }
    }
     const productElement = productRef.current;
    if (productElement) {
      productElement.addEventListener('scroll', handleScroll);
      return () => {
        productElement.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);
  return(  
    
  <>
  {showProducts && searchedProducts.length > 0 && (
    <div
      ref={productRef}
      className="absolute  searchcase xl:top-16 bg-[#eadfe7] xl:right-[500px] xl:w-[418px] xl:max-h-[300px] pb-10 border-b-black border-3 max-h-[350px] md:right-[70px] border-2 md:w-3/4 md:top-16 w-4/5 overflow-y-auto "
    >
      <div className={`sticky top-0 w-full ${isSticky ? 'bg-[#e8e8e8]' : 'bg-[#fadfe7]'}`} >
        <div className="flex items-center justify-around p-4 ">
        <MdArrowBackIos onClick={handleClickBack} size={20} />
        <h4 className="text-center">Radiantwhispersstore</h4>
        <div></div>
        </div>
      </div>
      {searchedProducts.map((product, index) => (
        <Link to={`/ProductDetails/${product?._id}`} key={index} ref={SearchproductRef}>
          <div className="flex xl:gap-8 mt-8 gap-4  text-black  bg-white p-2 hover:bg-[#e8e8e8]">
            <div className="w-1/2">
              <img src={product.image} className="xl:w-16 xl:h-16" alt="" />
            </div>
            <div>
              <p>{product.name}</p>
              <p className="text-[10px]">{product.description}</p>
              <p>#{product.price}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )}
</> 




 )
}
SearchBox.propTypes = {
    showProducts: PropTypes.bool.isRequired,
    searchedProducts: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
      })
    ).isRequired,
    handleClickBack: PropTypes.func.isRequired,
  };
  
export default SearchBox