import React from "react";
import Calender from "../images/calendar-tick.svg";
import User from "../images/user-tick.svg";
import Location from "../images/location-tick.svg";
import Slider1 from "../images/slider1.png";
import Love from "../images/Love.svg";
import Clock from "../images/clock.svg";
import Ticket from "../images/ticket-2.svg";

const BlacklistedList = () => {
  return (
    <div className="bg-[#121212] text-white p-3 rounded-lg">
      <img className="rounded-lg h-[200px] object-cover" src={Slider1} alt="" />
      <div className=" py-3">
        <div>
          <h4 className="font-semibold text-[18px] pb-2">
            A Scammer
          </h4>
          <p className="pb-1 ">
            <span className="flex items-center font-semibold mr-2 ">
              AdamFresh
            </span>
          </p>
          <p className="flex items-center text-[12px] lg:text-[14px]">
            <img src={Location} className="mr-1 size-5" />
            <span>lagos, </span>
          </p>
        </div>
      </div>
      <div className="flex justify-between pb-2 items-center">
        <p className="flex justify-between text-[12px] lg:text-[13px] items-center">
          <span className="flex items-center mr-2 lg:text-[12px] text-[10px]">
            <img className="size-4 mr-1" src={Calender} alt="" />
            23 Mar, 2024
          </span>
        </p>
        <p className="flex justify-between items-center">
          <img src={User} /> <span className="font-semibold pl-1">(10)</span>
        </p>
      </div>
    </div>
  );
};

export default BlacklistedList;
