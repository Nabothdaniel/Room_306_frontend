import React, { useState } from "react";
import { navClick } from "../redux/UtilSlice";
import Logo from "../images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Home from "../images/home-hashtag.svg";
import Blogger from "../images/blogger.svg";
import Book from "../images/book-saved.svg";
import LogOut from "../images/logout.svg";
import Map from "../images/map.svg";
import Message from "../images/message.svg";
import Faqs from "../images/message-question.svg";
import Like from "../images/like.svg";
import Profile from "../images/personalcard.svg";
import Users from "../images/user-square.svg";
import Video from "../images/video.svg";
import Wallet from "../images/wallet-2.svg";
import { LuChevronLeft } from "react-icons/lu";
import AdminModel from "./AdminModel";

const SideBar = () => {
  const open = useSelector((state) => state.Util.navOpen);
  const dispatch = useDispatch();
  const [openAdmin, setOpenAdmin] = useState(false);

  const handleAdmin = () => {
    setOpenAdmin(!openAdmin);
  };

  return (
    <>
      <div
        className={`${
          open ? "min-w-48 w-52" : "-translate-x-[50vw] md:translate-x-0 w-24"
        }   bg-[#0A0A0A] shadow-sm pt-8 duration-500 md:h-fit transition-all z-[99999] fixed md:relative top-0 left:0 left:0 block h-screen py-3 `}
      >
        <div
          onClick={() => dispatch(navClick(!open))}
          className={`absolute cursor-pointer -right-3 top-[100px] md:top-32  p-[6px] bg-[#1B1717] duration-500 text-white rounded-lg ${
            !open && "rotate-180"
          } `}
        >
          <LuChevronLeft className="size-7" />
        </div>

        <div className=" px-5 md:p-5 h-[110px] md:h-32">
          <img
            className="md:max-w-[120px] max-w-[110px] h-auto mx-auto"
            src={Logo}
            alt=""
          />
        </div>

        <ul
          className={` duration-500 overflow-hidden overflow-y-scroll md:overflow-y-auto  md:pt-4 h-[80vh] flex flex-col justify-between md:h-[920px] `}
        >
          <div>
            <div className="relative">
              <NavLink
                onClick={() => dispatch(navClick(false))}
                to={"/dashboard"}
                className={({ isActive }) =>
                  isActive
                    ? " active  before:contents-[''] md:before:top-[21px] before:top-[13px] before:absolute md:before:left-3 before:left-5 before:h-5  before:bg-white before:w-[6px] before:rounded-xl"
                    : ""
                }
              >
                <li
                  className={`flex text-lg items-center px-4 py-[9px] md:py-[14px] ${
                    open ? "md:pl-8 pl-9" : "justify-center"
                  } font-semibold gap-x-4 duration-700 text-[#D2B6B6] cursor-pointer hover:bg-[#1B1717] hover:text-[#FDF2C5]`}
                >
                  <img src={Home} className=" size-6 md:size-8" />
                  <span
                    className={`${
                      !open && "hidden"
                    } origin-right text-white hover:text-[#FDF2C5] text-[14px] md:text-[15px]  duration-700`}
                  >
                    Home
                  </span>
                </li>
              </NavLink>
            </div>
            <div className="relative">
              <NavLink
                onClick={() => dispatch(navClick(false))}
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? " active  before:contents-[''] before:top-[13px] before:absolute md:before:left-3 before:left-5 before:h-5  before:bg-white before:w-[6px] before:rounded-xl"
                    : ""
                }
              >
                <li
                  className={`flex text-lg items-center px-4 py-[9px] md:py-[14px] ${
                    open ? "md:pl-8 pl-9" : "justify-center"
                  }  gap-x-4 duration-700 text-[#D2B6B6] cursor-pointer hover:bg-[#1B1717] hover:text-[#FDF2C5]`}
                >
                  <img src={Message} className=" size-6 md:size-8" />
                  <span
                    className={`${
                      !open && "hidden"
                    } origin-right text-white hover:text-[#FDF2C5] text-[14px] md:text-[15px]  duration-700`}
                  >
                    Channel
                  </span>
                </li>
              </NavLink>
            </div>
            <div className="relative">
              <NavLink
                onClick={() => dispatch(navClick(false))}
                to={"/tours"}
                className={({ isActive }) =>
                  isActive
                    ? " active  before:contents-[''] md:before:top-[19px] before:top-[13px] before:absolute md:before:left-3 before:left-5 before:h-5  before:bg-white before:w-[6px] before:rounded-xl"
                    : ""
                }
              >
                <li
                  className={`flex text-lg items-center px-4 py-[9px] md:py-[14px] ${
                    open ? "md:pl-8 pl-9" : "justify-center"
                  }  gap-x-4 duration-700 text-[#D2B6B6] cursor-pointer hover:bg-[#1B1717] hover:text-[#FDF2C5]`}
                >
                  <img src={Map} className=" size-6 md:size-8" />
                  <span
                    className={`${
                      !open && "hidden"
                    } origin-right text-white hover:text-[#FDF2C5] text-[14px] md:text-[15px]  duration-700`}
                  >
                    Tour
                  </span>
                </li>
              </NavLink>
            </div>
            <div className="relative">
              <NavLink
                onClick={() => dispatch(navClick(false))}
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? " active  before:contents-[''] before:top-[13px] before:absolute md:before:left-3 before:left-5 before:h-5  before:bg-white before:w-[6px] before:rounded-xl"
                    : ""
                }
              >
                <li
                  className={`flex text-lg items-center px-4 py-[9px] md:py-[14px] ${
                    open ? "md:pl-8 pl-9" : "justify-center"
                  }  gap-x-4 duration-700 text-[#D2B6B6] cursor-pointer hover:bg-[#1B1717] hover:text-[#FDF2C5]`}
                >
                  <img src={Video} className=" size-6 md:size-8" />
                  <span
                    className={`${
                      !open && "hidden"
                    } origin-right text-white hover:text-[#FDF2C5] text-[14px] md:text-[15px]  duration-700`}
                  >
                    Naught Video
                  </span>
                </li>
              </NavLink>
            </div>
            <div className="relative">
              <NavLink
                onClick={() => dispatch(navClick(false))}
                to={"/adverts"}
                className={({ isActive }) =>
                  isActive
                    ? " active  before:contents-[''] md:before:top-[20px] before:top-[13px] before:absolute md:before:left-3 before:left-5 before:h-5  before:bg-white before:w-[6px] before:rounded-xl"
                    : ""
                }
              >
                <li
                  className={`flex text-lg items-center px-4 py-[9px] md:py-[14px] ${
                    open ? "md:pl-8 pl-9" : "justify-center"
                  }  gap-x-4 duration-700 text-[#D2B6B6] cursor-pointer hover:bg-[#1B1717] hover:text-[#FDF2C5]`}
                >
                  <img src={Like} className=" size-6 md:size-8" />
                  <span
                    className={`${
                      !open && "hidden"
                    } origin-right text-white hover:text-[#FDF2C5] text-[14px] md:text-[15px]  duration-700`}
                  >
                    Adverts
                  </span>
                </li>
              </NavLink>
            </div>
            <div className="relative">
              <NavLink
                onClick={() => dispatch(navClick(false))}
                to={"/events"}
                className={({ isActive }) =>
                  isActive
                    ? " active  before:contents-[''] md:before:top-[19px] before:top-[13px] before:absolute md:before:left-3 before:left-5 before:h-5  before:bg-white before:w-[6px] before:rounded-xl"
                    : ""
                }
              >
                <li
                  className={`flex text-lg items-center px-4 py-[9px] md:py-[14px] ${
                    open ? "md:pl-8 pl-9" : "justify-center"
                  }  gap-x-4 duration-700 text-[#D2B6B6] cursor-pointer hover:bg-[#1B1717] hover:text-[#FDF2C5]`}
                >
                  <img src={Book} className=" size-6 md:size-8" />
                  <span
                    className={`${
                      !open && "hidden"
                    } origin-right text-white hover:text-[#FDF2C5] text-[14px] md:text-[15px]  duration-700`}
                  >
                    Events
                  </span>
                </li>
              </NavLink>
            </div>
            <div className="relative">
              <NavLink
                onClick={() => dispatch(navClick(false))}
                to={"/rooms"}
                className={({ isActive }) =>
                  isActive
                    ? " active  before:contents-[''] md:before:top-[19px] before:top-[13px] before:absolute md:before:left-3 before:left-5 before:h-5  before:bg-white before:w-[6px] before:rounded-xl"
                    : ""
                }
              >
                <li
                  className={`flex text-lg items-center px-4 py-[9px] md:py-[14px] ${
                    open ? "md:pl-8 pl-9" : "justify-center"
                  }  gap-x-4 duration-700 text-[#D2B6B6] cursor-pointer hover:bg-[#1B1717] hover:text-[#FDF2C5]`}
                >
                  <img src={Video} className=" size-6 md:size-8" />
                  <span
                    className={`${
                      !open && "hidden"
                    } origin-right text-white hover:text-[#FDF2C5] text-[14px] md:text-[15px]  duration-700`}
                  >
                    Rooms
                  </span>
                </li>
              </NavLink>
            </div>
            <div className="relative">
              <NavLink
                onClick={() => dispatch(navClick(false))}
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? " active  before:contents-[''] before:top-[13px] before:absolute md:before:left-3 before:left-5 before:h-5  before:bg-white before:w-[6px] before:rounded-xl"
                    : ""
                }
              >
                <li
                  className={`flex text-lg items-center px-4 py-[9px] md:py-[14px] ${
                    open ? "pl-8" : "justify-center"
                  }  gap-x-4 duration-700 text-[#D2B6B6] cursor-pointer hover:bg-[#1B1717] hover:text-[#FDF2C5]`}
                >
                  <img src={Wallet} className=" size-6 md:size-8" />
                  <span
                    className={`${
                      !open && "hidden"
                    } origin-right text-white hover:text-[#FDF2C5] text-[14px] md:text-[15px]  duration-700`}
                  >
                    Blacklisteds
                  </span>
                </li>
              </NavLink>
            </div>
            <div className="relative">
              <NavLink
                onClick={() => dispatch(navClick(false))}
                to={"/blogs"}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "active" : "",
                })}
                className={({ isActive }) =>
                  isActive
                    ? "  before:contents-[''] md:before:top-[19px] before:top-[13px] before:absolute md:before:left-3 before:left-5 before:h-5  before:bg-white before:w-[6px] before:rounded-xl"
                    : ""
                }
              >
                <li
                  className={`flex text-lg items-center px-4 py-[9px] md:py-[14px] ${
                    open ? "md:pl-8 pl-9" : "justify-center"
                  }  gap-x-4 duration-700 text-[#D2B6B6] cursor-pointer hover:bg-[#1B1717] hover:text-[#FDF2C5]`}
                >
                  <img src={Blogger} className=" size-6 md:size-8" />
                  <span
                    className={`${
                      !open && "hidden"
                    } origin-right text-white  hover:text-[#FDF2C5] text-[14px] md:text-[15px]  duration-700`}
                  >
                    Blogs
                  </span>
                </li>
              </NavLink>
            </div>
            <div className="relative">
              <NavLink
                onClick={() => dispatch(navClick(false))}
                to={"/testimonials"}
                className={({ isActive }) =>
                  isActive
                    ? " active  before:contents-[''] md:before:top-[19px] before:top-[13px] before:absolute md:before:left-3 before:left-5 before:h-5  before:bg-white before:w-[6px] before:rounded-xl"
                    : ""
                }
              >
                <li
                  className={`flex text-lg items-center px-4 py-[9px] md:py-[14px] ${
                    open ? "md:pl-8 pl-9" : "justify-center"
                  }  gap-x-4 duration-700 text-[#D2B6B6] cursor-pointer hover:bg-[#1B1717] hover:text-[#FDF2C5]`}
                >
                  <img src={Profile} className=" size-6 md:size-8" />
                  <span
                    className={`${
                      !open && "hidden"
                    } origin-right text-white hover:text-[#FDF2C5] text-[14px] md:text-[15px]  duration-700`}
                  >
                    Testimonial
                  </span>
                </li>
              </NavLink>
            </div>
            <div className="relative">
              <NavLink
                onClick={() => dispatch(navClick(false))}
                to={"/faqs"}
                className={({ isActive }) =>
                  isActive
                    ? " active  before:contents-[''] md:before:top-[19px] before:top-[13px] before:absolute md:before:left-3 before:left-5 before:h-5  before:bg-white before:w-[6px] before:rounded-xl"
                    : ""
                }
              >
                <li
                  className={`flex text-lg items-center px-4 py-[9px] md:py-[14px] ${
                    open ? "md:pl-8 pl-9" : "justify-center"
                  }  gap-x-4 duration-700 text-[#D2B6B6] cursor-pointer hover:bg-[#1B1717] hover:text-[#FDF2C5]`}
                >
                  <img src={Faqs} className=" size-6 md:size-8" />
                  <span
                    className={`${
                      !open && "hidden"
                    } origin-right text-white hover:text-[#FDF2C5] text-[14px] md:text-[15px]  duration-700`}
                  >
                    FAQs
                  </span>
                </li>
              </NavLink>
            </div>
            <div className="relative">
              <NavLink onClick={handleAdmin} to={""}>
                <li
                  className={`flex text-lg items-center px-4 py-[9px] md:py-[14px] ${
                    open ? "md:pl-8 pl-9" : "justify-center"
                  }  gap-x-4 duration-700 text-[#D2B6B6] cursor-pointer hover:bg-[#1B1717] hover:text-[#FDF2C5]`}
                >
                  <img src={Users} className=" size-6 md:size-8" />
                  <span
                    className={`${
                      !open && "hidden"
                    } origin-right text-white hover:text-[#FDF2C5] text-[14px] md:text-[15px]  duration-700`}
                  >
                    Admins
                  </span>
                </li>
              </NavLink>
            </div>
          </div>
          <div>
            <div className="relative">
              <NavLink
                onClick={() => dispatch(navClick(false))}
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? " active  before:contents-[''] before:top-[13px] before:absolute md:before:left-3 before:left-5 before:h-5  before:bg-white before:w-[6px] before:rounded-xl"
                    : ""
                }
              >
                <li
                  className={`flex text-lg items-center px-4 py-[9px] md:py-[14px] ${
                    open ? "md:pl-8 pl-9" : "justify-center"
                  } gap-x-4 duration-700 text-[#D2B6B6] cursor-pointer hover:bg-[#1B1717] hover:text-[#FDF2C5]`}
                >
                  <img src={LogOut} className=" size-6 md:size-8" />
                  <span
                    className={`${
                      !open && "hidden"
                    } origin-right text-white hover:text-[#FDF2C5] text-[14px] md:text-[15px]  duration-700`}
                  >
                    Logouts
                  </span>
                </li>
              </NavLink>
            </div>
          </div>
        </ul>
      </div>
      <AdminModel
        adminClass={`${openAdmin ? "translate-x-0" : "-translate-x-[120vw]"}`}
        handleAdmin={handleAdmin}
      />
    </>
  );
};

export default SideBar;
