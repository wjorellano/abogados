import React from "react";

const Input = ({ type, placeholder, label, value, onChange }) => {
  return (
    <>
      <label className="">{label}</label>
      <input
        className="form-control"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
