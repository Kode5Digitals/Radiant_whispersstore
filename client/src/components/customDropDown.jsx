


import { useState } from 'react';
import PropTypes from 'prop-types';

const CustomDropdown = ({ options, selected, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block w-full">
      {/* Selected Value */}
      <div
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 cursor-pointer flex justify-between items-center dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        onClick={toggleDropdown}
      >
        {selected || "Select Region"}
        <span className={`ml-2 transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </div>

      {/* Dropdown Options */}
      {isOpen && (
        <ul className="absolute bg-white border border-gray-300 rounded-lg mt-1 w-full z-10 dark:bg-gray-700 dark:border-gray-600 dark:text-white max-h-40 overflow-y-auto">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 hover:bg-blue-500 hover:text-white cursor-pointer border-b border-gray-300 last:border-0 dark:hover:bg-blue-700 dark:hover:text-white"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// PropTypes validation
CustomDropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  selected: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
};

// Default props (optional)
CustomDropdown.defaultProps = {
  selected: '',
};

export default CustomDropdown;




























// import { useState } from 'react';
// import PropTypes from 'prop-types';
// const CustomDropdown = ({ options, selected, onSelect }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => setIsOpen(!isOpen);

//   const handleSelect = (option) => {
//     onSelect(option);
//     setIsOpen(false);
//   };

//   return (
//     <div className="relative inline-block w-full">
//       <div
//         className="bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 cursor-pointer flex justify-between items-center dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//         onClick={toggleDropdown}
//       >
//         {selected || "Select Region"}
//         <span className={`ml-2 transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
//       </div>

//       {isOpen && (
//         <ul className="absolute bg-white border border-gray-300 rounded-lg mt-1 w-full z-10 dark:bg-gray-700 dark:border-gray-600 dark:text-white max-h-40 overflow-y-auto">
//           {options.map((option) => (
//             <li
//               key={option.value}
//               onClick={() => handleSelect(option.label)}
//               className="px-4 py-2 hover:bg-blue-500 hover:text-white cursor-pointer border-b border-gray-300 last:border-0 dark:hover:bg-blue-700 dark:hover:text-white"
//             >
//               {option.label}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };
// // PropTypes validation
// CustomDropdown.propTypes = {
//     options: PropTypes.arrayOf(
//       PropTypes.shape({
//         value: PropTypes.string.isRequired,
//         label: PropTypes.string.isRequired,
//       })
//     ).isRequired,
//     selected: PropTypes.string,
//     onSelect: PropTypes.func.isRequired,
//   };
  
//   // Default props (optional)
//   CustomDropdown.defaultProps = {
//     selected: '',
//   };
// export default CustomDropdown;
