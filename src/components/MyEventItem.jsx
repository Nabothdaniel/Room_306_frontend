import React from "react";
import Calender from "../images/calendar-tick.svg";
import User from "../images/user-tick.svg";
import Location from "../images/location-tick.svg";
import Slider1 from "../images/slider1.png";
import Love from "../images/Love.svg";
import Clock from "../images/clock.svg";
import Ticket from "../images/ticket-2.svg";

const MyEventItem = () => {
  return (
    <div className="bg-[#121212] text-white p-3 rounded-lg">
      <img className="rounded-lg h-[200px] object-cover" src={Slider1} alt="" />
      <div className="flex justify-between py-3">
        <div>
          <h4 className="font-semibold lg:text-base text-[15px] pb-2">
            3some Hangout
          </h4>
          <p className="pb-1 text-[12px] lg:text-[14px]">
            <span className="flex items-center mr-2 lg:text-[12px] text-[10px]">
              <img className="size-4 mr-1" src={Calender} alt="" />
              23 Mar - 28 Mar
            </span>
          </p>
          <p className="flex items-center text-[12px] lg:text-[14px]">
            <img src={Location} className="mr-1 size-5" />
            <span>lagos, </span>
          </p>
        </div>

        <div>
          <p className="bg-yellow-300 text-[12px] py-1 text-black px-2 rounded-3xl cursor-pointer font-semibold">
            Delete
          </p>
        </div>
      </div>
      <div className="flex justify-between pb-2 items-center">
        <p className="flex justify-between text-[12px] lg:text-[13px] items-center">
          <img className="size-4 mr-2" src={Clock} alt="" /> 9:45pm WAT
        </p>
        <p className="flex justify-between items-center">
          <img src={User} /> <span className="font-semibold pl-1">(10)</span>
        </p>
      </div>
      <p className="lg:text-[13px] flex justify-between items-center text-[12px] text-wrap  pb-2 text-[#DADADA]">
        <span className="flex font-semibold items-center">
          <img className="size-5 mr-2" src={Ticket} alt="" />
          Available Ticket
        </span>
        <span className="font-semibold text-[18px]">3</span>
      </p>
    </div>
  );
};

export default MyEventItem;
