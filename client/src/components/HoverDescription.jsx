import PropTypes from 'prop-types';
import '../App.css'

const HoverDescription = (props) => {
    return (
        <div   className="absolute text-black border-2 z-100  p-5 text-[13px] text-navyblue w-52 -right-1  -top-4 rounded-lg  hidden  group-hover:block hover:block  bg-white ">
         <p>{props.description}</p>
        </div>
    );
}

HoverDescription.propTypes = {
    description: PropTypes.string.isRequired,
 
}

export default HoverDescription;
