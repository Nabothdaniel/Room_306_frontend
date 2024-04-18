import React from 'react'

const Input = ({labelValue,inputName,holder,inputType,inputClass, required}) => {
  return (
    <div className="text-white flex flex-col">
      <label className="font-semibold py-2" htmlFor="username">
        {labelValue}
        <span className="text-[#E9CB50]">{required}</span>
      </label>
      <input
        type={inputType}
        name={inputName}
        className={inputClass}
        placeholder={holder}
      />
    </div>
  );
}

export default Input
