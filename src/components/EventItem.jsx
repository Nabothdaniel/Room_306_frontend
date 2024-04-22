import React from "react";
import Calender from "../images/calendar-tick.svg";
import Note from "../images/note-2.svg";
import User from "../images/user-tick.svg";
import Location from "../images/location-tick.svg";
import Slider1 from "../images/slider1.png";
import Love from "../images/Love.svg";
import Clock from "../images/clock.svg";

const EventItem = () => {
  return (
    <div>
      <div className="bg-[#121212] text-white p-3 rounded-lg">
        <img className="rounded-lg" src={Slider1} alt="" />
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

          <img src={Love} className="size-12" />
        </div>
        <div className="flex justify-between pb-2 items-center">
          <p className="flex justify-between text-[12px] lg:text-[13px] items-center">
            <img className="size-4 mr-2" src={Clock} alt="" /> 9:45pm WAT
          </p>
          <p className="flex justify-between items-center">
            <img src={User} /> <span className="font-semibold pl-1">(10)</span>
          </p>
        </div>
        <p className="lg:text-[13px] text-[12px] text-wrap  pb-2 text-[#DADADA]">
          Hey, I’m pretty and good on bed. Give me a message
        </p>
      </div>
    </div>
  );
};

export default EventItem;
