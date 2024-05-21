
import React from 'react';
import PropTypes from 'prop-types';

const HoverInfo = ({  name, right = "0px", info, socials = [] }) => {
    
    
  return (
    <div
      style={{ right: right }}
      className="absolute  text-white border-2 z-200 p-5 text-[13px] text-navyblue w-72 top-20 rounded-lg hidden group-hover:block hover:block bg-black"
    >
<h3> {name}</h3>

      <p className='text-[12px]'>{info}</p>
      {name === "Contact us" && (
        <ul className="flex gap-5 mt-2">
          {socials.map((social, index) => (
            <li key={index} className="socials hover:bg-pink-400 hover:text-white">
              {React.createElement(social.icon)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

HoverInfo.propTypes = {
  name: PropTypes.string.isRequired,
  right: PropTypes.string,
  info: PropTypes.string.isRequired,
  socials: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType.isRequired,
    })
  ),
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
