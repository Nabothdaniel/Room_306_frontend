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
import { Link } from "react-router-dom";

const SideBar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`${
        open ? "min-w-48 w-52" : "w-20"
      } flex  bg-[#0A0A0A] shadow-sm pt-8 duration-500 md:h-fit transition-all sticky top:0 left:0 left:0 md:block h-12 py-3 `}
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

      <ul
        className={` duration-500 overflow-hidden pt-4 flex flex-col justify-between md:h-[920px] `}
      >
        <div>
          <li
            className={`flex text-lg items-center px-4 py-[14px] ${
              open && "pl-8"
            } font-semibold gap-x-4 duration-700 text-[#D2B6B6] cursor-pointer hover:bg-[#1B1717] hover:text-[#FDF2C5]`}
          >
            <BiHomeCircle className=" size-8" />
            <span
              className={`${
                !open && "hidden"
              } origin-right text-white hover:text-[#FDF2C5] text-[15px]  duration-700`}
            >
              <Link to={"/dashboard"}>Home</Link>
            </span>
          </li>
          <li
            className={`flex text-lg items-center px-4 py-[14px] ${
              open && "pl-8"
            } gap-x-4 duration-700 text-[#D2B6B6] cursor-pointer hover:bg-[#1B1717] hover:text-[#FDF2C5]`}
          >
            <IoChatboxEllipsesOutline className=" size-8" />
            <span
              className={`${
                !open && "hidden"
              } text-white hover:text-[#FDF2C5] origin-right text-[15px] font-light duration-700`}
            >
              Channel
            </span>
          </li>
          <li
            className={`flex text-lg items-center px-4 py-[14px] ${
              open && "pl-8"
            } gap-x-4 duration-700 text-[#D2B6B6] cursor-pointer hover:bg-[#1B1717] hover:text-[#FDF2C5]`}
          >
            <LuMap className=" size-8" />
            <span
              className={`${
                !open && "hidden"
              } text-white hover:text-[#FDF2C5] origin-right text-[15px] font-light duration-700`}
            >
              Tours
            </span>
          </li>
          <li
            className={`flex text-lg items-center px-4 py-[14px] ${
              open && "pl-8"
            } gap-x-4 duration-700 text-[#D2B6B6] cursor-pointer hover:bg-[#1B1717] hover:text-[#FDF2C5]`}
          >
            <TbVideoMinus className=" size-8" />
            <span
              className={`${
                !open && "hidden"
              } text-white hover:text-[#FDF2C5] origin-right text-[15px] font-light duration-700`}
            >
              Naught Video
            </span>
          </li>
          <li
            className={`flex text-lg items-center px-4 py-[14px] ${
              open && "pl-8"
            } gap-x-4 duration-700 text-[#D2B6B6] cursor-pointer hover:bg-[#1B1717] hover:text-[#FDF2C5]`}
          >
            <LuThumbsUp className=" size-8" />
            <span
              className={`${
                !open && "hidden"
              } text-white hover:text-[#FDF2C5] origin-right text-[15px] font-light duration-700`}
            >
              Adverts
            </span>
          </li>
          <li
            className={`flex text-lg items-center px-4 py-[14px] ${
              open && "pl-8"
            } gap-x-4 duration-700 text-[#D2B6B6] cursor-pointer hover:bg-[#1B1717] hover:text-[#FDF2C5]`}
          >
            <RiBookOpenLine className=" size-8" />
            <span
              className={`${
                !open && "hidden"
              } text-white hover:text-[#FDF2C5] origin-right text-[15px] font-light duration-700`}
            >
              Events
            </span>
          </li>
          <li
            className={`flex text-lg items-center px-4 py-[14px] ${
              open && "pl-8"
            } gap-x-4 duration-700 text-[#D2B6B6] cursor-pointer hover:bg-[#1B1717] hover:text-[#FDF2C5]`}
          >
            <CiWallet className=" size-8" />
            <span
              className={`${
                !open && "hidden"
              } text-white hover:text-[#FDF2C5] origin-right text-[15px] font-light duration-700`}
            >
              Blacklisteds
            </span>
          </li>
          <li
            className={`flex text-lg items-center px-4 py-[14px] ${
              open && "pl-8"
            } gap-x-4 duration-700 text-[#D2B6B6] cursor-pointer hover:bg-[#1B1717] hover:text-[#FDF2C5]`}
          >
            <BiLogoBlogger className=" size-8" />
            <span
              className={`${
                !open && "hidden"
              } text-white hover:text-[#FDF2C5] origin-right text-[15px] font-light duration-700`}
            >
              Blogs
            </span>
          </li>
          <li
            className={`flex text-lg items-center px-4 py-[14px] ${
              open && "pl-8"
            } gap-x-4 duration-700 text-[#D2B6B6] cursor-pointer hover:bg-[#1B1717] hover:text-[#FDF2C5]`}
          >
            <FaRegNewspaper className=" size-8" />
            <span
              className={`${
                !open && "hidden"
              } text-white hover:text-[#FDF2C5] origin-right text-[15px] font-light duration-700`}
            >
              Testimonial
            </span>
          </li>
          <li
            className={`flex text-lg items-center px-4 py-[14px] ${
              open && "pl-8"
            } gap-x-4 duration-700 text-[#D2B6B6] cursor-pointer hover:bg-[#1B1717] hover:text-[#FDF2C5]`}
          >
            <LiaQuestionCircle className=" size-8" />
            <span
              className={`${
                !open && "hidden"
              } text-white hover:text-[#FDF2C5] origin-right text-[15px] font-light duration-700`}
            >
              FAQs
            </span>
          </li>
          <li
            className={`flex text-lg items-center px-4 py-[14px] ${
              open && "pl-8"
            } gap-x-4 duration-700 text-[#D2B6B6] cursor-pointer hover:bg-[#1B1717] hover:text-[#FDF2C5]`}
          >
            <TbUserSquareRounded className=" size-8" />
            <span
              className={`${
                !open && "hidden"
              } text-white hover:text-[#FDF2C5] origin-right text-[15px] font-light duration-700`}
            >
              Admins
            </span>
          </li>
        </div>
        <div>
          <li
            className={`flex text-lg items-center px-4 py-[14px] ${
              open && "pl-8"
            } gap-x-4 duration-700 text-white cursor-pointer hover:bg-[#1B1717] hover:text-[#FDF2C5]`}
          >
            <HiArrowLeftStartOnRectangle className=" size-8" />
            <span
              className={`${
                !open && "hidden"
              }  hover:text-[#FDF2C5] origin-right text-[15px] font-medium duration-700`}
            >
              Logouts
            </span>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default SideBar;
