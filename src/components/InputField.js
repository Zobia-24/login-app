import React from 'react';

const InputField = ({ name, type, value, placeholder, onChange }) => {
  return (
    <input
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default InputField;