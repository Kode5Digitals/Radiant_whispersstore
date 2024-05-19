import React from 'react';
import PropTypes from 'prop-types';

const SocialLinks = ({ socials=[] }) => {
    console.log("SocialLinks props:", socials);
  return (
    <li className="hidden gap-5 mt-10 xl:flex">
      {socials.map((social, index) => (
        <div key={index} className="socials hover:bg-pink-400 hover:text-white">
          {React.createElement(social.icon)}
        </div>
      ))}
    </li>
  );
};

SocialLinks.propTypes = {
    socials: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.elementType.isRequired,
      })
    ).isRequired,
  };
  
export default SocialLinks;
