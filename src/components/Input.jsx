import React from "react";

const Input = ({
  labelValue,
  labelClass,
  inputName,
  holder,
  inputType,
  inputClass,
  required,
  value,
  onchange
}) => {
  return (
    <div className="text-white flex flex-col">
      <label className={`${labelClass} pb-1`} htmlFor={inputName}>
        {labelValue}
        <span className="text-[#E9CB50]">{required}</span>
      </label>
      <input
        type={inputType}
        name={inputName}
        id={inputName}
        className={`${inputClass} md:p-3 py-[8px] px-3`}
        placeholder={holder}
        value={value}
        onChange={onchange}
      />
    </div>
  );
};

export default Input;
