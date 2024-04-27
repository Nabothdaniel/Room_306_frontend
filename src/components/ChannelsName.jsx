import React from "react";
import Naughty from "../images/Ellipse.svg";
import Lgb from "../images/Ellipse3.svg";
import Discussion from "../images/Ellipse1.svg";
import Erotic from "../images/Ellipse4.svg";
import Testimonial from "../images/Ellipse2.svg";
import Louge from "../images/Ellipse5.svg";
import { NavLink, useLocation } from "react-router-dom";

const ChannelsName = () => {
  const location = useLocation()

  return (
    <div className="px-[9px] flex flex-col gap-y-[10px]">
      <NavLink
        style={({ isActive }) => {
          isActive ? "bg-[#00AE791A]" : "";
        }}
        to={"/channels/naughty-room"}
        className={`flex  ${
          location.pathname == "/channels/naughty-room" ? "bg-[#00AE791A]" : ""
        } rounded-[12px] p-[12px] hover:bg-[#202D2C] duration-700 text-white items-center`}
      >
        <img className="size-[32px]" src={Naughty} alt="" />
        <div className="pl-4 md:block md:w-auto flex justify-between items-center w-full">
          <p className="font-semibold">Naughty Room</p>
          <p className="text-[12px]  text-[#DADADA]">11 hrs ago</p>
        </div>
      </NavLink>
      <NavLink
        to={"/channels/naughty-room"}
        className="flex  rounded-[12px] hover:bg-[#202D2C] duration-700 p-[12px] text-white items-center"
      >
        <img className="size-[32px]" src={Lgb} alt="" />
        <div className="pl-4 md:block md:w-auto flex justify-between items-center w-full">
          <p className="font-semibold">LGBTQ+</p>
          <p className="text-[12px]  text-[#DADADA]">15 hrs ago</p>
        </div>
      </NavLink>
      <NavLink
        to={"/channels/naughty-room"}
        className="flex  rounded-[12px] hover:bg-[#202D2C] duration-700 p-[12px] text-white items-center"
      >
        <img className="size-[32px]" src={Discussion} alt="" />
        <div className="pl-4 md:block md:w-auto flex justify-between items-center w-full">
          <p className="font-semibold">Discussion</p>
          <p className="text-[12px] text-[#DADADA]">11 hrs ago</p>
        </div>
      </NavLink>
      <NavLink
        to={"/channels/naughty-room"}
        className="flex  rounded-[12px] hover:bg-[#202D2C] duration-700 p-[12px] text-white items-center"
      >
        <img className="size-[32px]" src={Erotic} alt="" />
        <div className="pl-4 md:block md:w-auto flex justify-between items-center w-full">
          <p className="font-semibold">Erotic Stories</p>
          <p className="text-[12px] text-[#DADADA]">11 hrs ago</p>
        </div>
      </NavLink>
      <NavLink
        to={"/channels/naughty-room"}
        className="flex  rounded-[12px] hover:bg-[#202D2C] duration-700 p-[12px] text-white items-center"
      >
        <img className="size-[32px]" src={Testimonial} alt="" />
        <div className="pl-4 md:block md:w-auto flex justify-between items-center w-full">
          <p className="font-semibold">Testimonial</p>
          <p className="text-[12px] text-[#DADADA]">11 hrs ago</p>
        </div>
      </NavLink>
      <NavLink
        to={"/channels/naughty-room"}
        className="flex  rounded-[12px] hover:bg-[#202D2C] duration-700 p-[12px] text-white items-center"
      >
        <img className="size-[32px]" src={Louge} alt="" />
        <div className="pl-4 md:block md:w-auto flex justify-between items-center w-full">
          <p className="font-semibold">Louge</p>
          <p className="text-[12px] text-[#DADADA]">11 hrs ago</p>
        </div>
      </NavLink>
    </div>
  );
};

export default ChannelsName;
