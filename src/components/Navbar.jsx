import React from "react";
import Header from "./Header";
import { RiSearchLine } from "react-icons/ri";
import { TbBell } from "react-icons/tb";
import Avatar from "../images/avatar.png";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="hidden md:block">
          <Header
            value={"Welcome to Room 306"}
            text={"Explore our escort at your own pace"}
          />
        </div>

        <div className="flex lg:justify-between justify-end items-center gap-x-4">
          <div className="bg-[#0A0A0A] p-2 md:py-3 md:px-4 rounded-full md:rounded-lg w-[45%] flex">
            <RiSearchLine className="text-[#DADADA] size-8 md:size-6" />
            <input
              className="bg-transparent pl-4 w-full hidden md:block placeholder-[#00CCCB] text-[14px] text-[#00CCCB]"
              type="search"
              name=""
              id=""
              placeholder="Search for Escort"
            />
          </div>
          <button className="bg-[#E9CB50] hidden lg:block text-[#171717] font-medium rounded-xl py-3 px-4">
            See Coins
          </button>
          <div className="bg-[#0A0A0A] hidden lg:block cursor-pointer p-3 rounded-full">
            <TbBell className=" text-[#DADADA] size-7" />
          </div>

          <img
            className="w-[48px] rounded-full cursor-pointer"
            src={Avatar}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
