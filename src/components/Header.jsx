import React from "react";

const Header = ({ headerClass, value, text }) => {
  return (
    <div className="">
      <h1 className={headerClass }>{value}</h1>
      <p
        className="text-[#B29A9A] font-normal text-[12px] lg:text-[14px]">
        {text}
      </p>
    </div>
  );
};

export default Header;
