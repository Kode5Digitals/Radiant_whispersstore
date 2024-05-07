import { useState } from "react";
import PropTypes from "prop-types";
const Register = ({ setOpenRegister }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleBack = () => {
    setOpenRegister(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 ">
      <form
        onSubmit={handleSubmit}
        className="forgot-password w-1/4  p-3   rounded-lg shadow-md bg-white  transition duration-500 ease-in-out border-2 border-transparent "
      >
        <h2 className="text-center text-2xl mt-3 mb-3">Register</h2>

        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-pink-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-pink-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-pink-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="mt-1 mb-4 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-pink-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full mb-4  border border-gray-300 hover:text-white  hover:bg-pink-700 py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          Register
        </button>
        <button onClick={handleBack} className="w-full text-[12px] bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
          Back
        </button>
      </form>
    </div>
  );
};

Register.propTypes = {
  setOpenRegister: PropTypes.func.isRequired,
};
export default Register;
