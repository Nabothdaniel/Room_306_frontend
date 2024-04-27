import React from "react";
import Naughty from "../images/Ellipse.svg";
import Lgb from "../images/Ellipse3.svg";
import Discussion from "../images/Ellipse1.svg";
import Erotic from "../images/Ellipse4.svg";
import Testimonial from "../images/Ellipse2.svg";
import Louge from "../images/Ellipse5.svg";
import { NavLink } from "react-router-dom";

const ChannelsName = () => {
  return (
    <div className="px-[9px] flex flex-col gap-y-[10px]">
      <NavLink
        to={"/channels/naughty-room"}
        className="flex bg-[#00AE791A] rounded-[12px] p-[12px] text-white items-center"
      >
        <img className="size-[32px]" src={Naughty} alt="" />
        <div className="pl-4">
          <p className="font-semibold">Naughty Room</p>
          <p className="text-[12px] text-[#DADADA]">11 hrs ago</p>
        </div>
      </NavLink>
      <NavLink
        to={"/channels/naughty-room"}
        className="flex bg-[#00AE791A] rounded-[12px] p-[12px] text-white items-center"
      >
        <img className="size-[32px]" src={Lgb} alt="" />
        <div className="pl-4">
          <p className="font-semibold">LGBTQ+</p>
          <p className="text-[12px] text-[#DADADA]">15 hrs ago</p>
        </div>
      </NavLink>
      <NavLink
        to={"/channels/naughty-room"}
        className="flex bg-[#00AE791A] rounded-[12px] p-[12px] text-white items-center"
      >
        <img className="size-[32px]" src={Discussion} alt="" />
        <div className="pl-4">
          <p className="font-semibold">Discussion</p>
          <p className="text-[12px] text-[#DADADA]">11 hrs ago</p>
        </div>
      </NavLink>
      <NavLink
        to={"/channels/naughty-room"}
        className="flex bg-[#00AE791A] rounded-[12px] p-[12px] text-white items-center"
      >
        <img className="size-[32px]" src={Erotic} alt="" />
        <div className="pl-4">
          <p className="font-semibold">Erotic Stories</p>
          <p className="text-[12px] text-[#DADADA]">11 hrs ago</p>
        </div>
      </NavLink>
      <NavLink
        to={"/channels/naughty-room"}
        className="flex bg-[#00AE791A] rounded-[12px] p-[12px] text-white items-center"
      >
        <img className="size-[32px]" src={Testimonial} alt="" />
        <div className="pl-4">
          <p className="font-semibold">Testimonial</p>
          <p className="text-[12px] text-[#DADADA]">11 hrs ago</p>
        </div>
      </NavLink>
      <NavLink
        to={"/channels/naughty-room"}
        className="flex bg-[#00AE791A] rounded-[12px] p-[12px] text-white items-center"
      >
        <img className="size-[32px]" src={Louge} alt="" />
        <div className="pl-4">
          <p className="font-semibold">Louge</p>
          <p className="text-[12px] text-[#DADADA]">11 hrs ago</p>
        </div>
      </NavLink>
    </div>
  );
};

export default ChannelsName;
