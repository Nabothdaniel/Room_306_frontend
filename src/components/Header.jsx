import React from "react";

const Header = ({ value, text }) => {
  return (
    <div className="">
      <h1 className="text-white text-[24px] font-semibold ">{value}</h1>
      <p
        className="text-[#B29A9A] font-normal text-[14px]">
        {text}
      </p>
    </div>
  );
};

export default Header;
