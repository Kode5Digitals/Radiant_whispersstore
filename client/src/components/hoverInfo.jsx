
import PropTypes from 'prop-types';

const HoverInfo = ({  name, right = "0px", info}) => {
    
    
  return (
    <div
      style={{ right: right }}
      className="absolute  bg-white  z-200 p-3 text-[13px] text-navyblue w-48 2xl:top-12 xl:top-14 shadow-lg rounded-lg hidden group-hover:block hover:block "
    >
<h3> {name}</h3>
      <p className='text-[12px]'>{info}</p>
    
    </div>
  );
};

HoverInfo.propTypes = {
  name: PropTypes.string.isRequired,
  right: PropTypes.string,
  info: PropTypes.string.isRequired,
};


export default HoverInfo;















// import PropTypes from 'prop-types';
// import '../App.css'
// import SocialLinks from './socialLinks';

// const HoverInfo = (props) => {
//     return (
//         <div style={{right:`${props.right}`}}  className="absolute   text-white  border-2 z-200  p-5 text-[12px] text-navyblue w-72  top-20   rounded-lg  hidden  group-hover:block hover:block  bg-black ">
//        <h3> {props.name}</h3>
//          <p>{props.info}</p>
//          <SocialLinks/>
//         </div>
//     );
// }

// HoverInfo.propTypes = {
//     info: PropTypes.string.isRequired,
//     right: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
 
// }

// export default HoverInfo;
