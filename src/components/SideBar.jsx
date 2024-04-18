import React, { useState } from "react";
import { LuChevronLeft, LuMap, LuThumbsUp } from "react-icons/lu";
import { RiBookOpenLine } from "react-icons/ri";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { HiArrowLeftStartOnRectangle } from "react-icons/hi2";
import { CiWallet } from "react-icons/ci";
import { BiLogoBlogger, BiHomeCircle } from "react-icons/bi";
import { TbUserSquareRounded, TbVideoMinus } from "react-icons/tb";
import { FaRegNewspaper } from "react-icons/fa";
import { LiaQuestionCircle } from "react-icons/lia";

import Logo from "../images/logo.png";

const SideBar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`${
        open ? "md:w-[15%] w-full" : "w-20"
      } flex  bg-[#0A0A0A] shadow-sm duration-500 sticky top:0 left:0 left:0 md:block h-12 py-3  md:h-full `}
    >
      <div
        onClick={() => setOpen(!open)}
        className={`absolute cursor-pointer -right-3 top-24  p-[6px] bg-[#1B1717] duration-500 text-white rounded-lg ${
          !open && "rotate-180"
        } `}
      >
        <LuChevronLeft className="size-7" />
      </div>

      <div className="pt-4 p-5 h-32">
        <img className="max-w-[120px] h-auto mx-auto" src={Logo} alt="" />
      </div>

      <ul className="text- text-center overflow-hidden pt-6">
        <li
          className={`flex text-lg items-center p-5 ${
            open && "pl-16"
          } font-semibold gap-x-4 duration-700 text-[#D2B6B6] cursor-pointer hover:bg-[#1B1717] hover:text-[#FDF2C5]`}
        >
          <BiHomeCircle className=" size-8" />
          <span
            className={`${
              !open && "hidden"
            } origin-right text-white hover:text-[#FDF2C5]  duration-10000`}
          >
            Home
          </span>
        </li>
        <li
          className={`flex text-lg items-center p-5 ${
            open && "pl-16"
          } gap-x-4 duration-700 text-[#D2B6B6] cursor-pointer hover:bg-[#1B1717] hover:text-[#FDF2C5]`}
        >
          <BiHomeCircle className=" size-8" />
          <span
            className={`${
              !open && "hidden"
            } text-white hover:text-[#FDF2C5] origin-right  duration-10000`}
          >
            Home
          </span>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
