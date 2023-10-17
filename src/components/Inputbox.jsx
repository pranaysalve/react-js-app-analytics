import React, { useState } from "react";
import PropTypes from "prop-types";
const Inputbox = ({
  id,
  type,
  name,
  value,
  handleInputChange,
  placeholder,
  require,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    handleInputChange(name, value);
  };

  return (
    <input
      type={type}
      id={id}
      name={name}
      onChange={handleChange}
      value={value}
      className="text-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder={placeholder}
      required={require}
    />
  );
};
Inputbox.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  require: PropTypes.bool.isRequired,
};

export default Inputbox;
