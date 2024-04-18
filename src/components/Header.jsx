import React from "react";

const Header = ({ value, text }) => {
  return (
    <div className="">
      <h1 className="text-white text-[20px] lg:text-[23px] font-semibold ">{value}</h1>
      <p
        className="text-[#B29A9A] font-normal text-[12px] lg:text-[14px]">
        {text}
      </p>
    </div>
  );
};

export default Header;
