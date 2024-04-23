import React from "react";

const TextArea = ({
  labelValue,
  inputName,
  holder,
  inputClass,
    required,
    col,
  row
}) => {
  return (
    <div className="text-white flex flex-col">
      <label className="font-semibold  py-2" htmlFor={inputName}>
        {labelValue}
        <span className="text-[#E9CB50]">{required}</span>
      </label>
     
      <textarea
        name={inputName}
        className={inputClass}
        placeholder={holder}
        id={inputName}
        cols={col}
        rows={row}
      ></textarea>
    </div>
  );
};

export default TextArea;
