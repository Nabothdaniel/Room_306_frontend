import React from "react";

const TextArea = ({
  labelValue,
  inputName,
  holder,
  inputClass,
  required,
  col,
  row,
  labelClass,
  onchange,
  value
}) => {
  return (
    <div className="text-white flex flex-col">
      <label
        className={`font-semibold ${labelClass}  py-2`}
        htmlFor={inputName}
      >
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
        value={value}
        onChange={onchange}
      ></textarea>
    </div>
  );
};

export default TextArea;
