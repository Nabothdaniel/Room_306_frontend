import React from "react";
import Calender from "../images/calendar-tick.svg";
import Location from "../images/location-tick.svg";
import Room from "../images/room.jpeg";
import Love from "../images/Love.svg";
import Sort from "../images/sort.svg";

const RoomsItem = () => {
  return (
    <div>
      <div className="bg-[#1E1E1E] text-white p-3 rounded-lg">
        <img className="rounded-lg h-[200px] object-cover" src={Room} alt="" />
        <div className="flex justify-between py-3">
          <div>
            <h4 className="font-semibold lg:text-base text-[15px] pb-2">
              Girls House
            </h4>
            <p className="pb-1 text-[12px] lg:text-[14px]">
              <span className="flex items-center mr-2 lg:text-[12px] text-[10px]">
                <img className="size-4 mr-1" src={Calender} alt="" />
                25th Dec, 2024
              </span>
            </p>
            <p className="flex items-center text-[12px] lg:text-[14px]">
              <img src={Location} className="mr-1 size-5" />
              <span>lagos, </span>
            </p>
          </div>

          <img src={Love} className="size-12" />
        </div>
        <div className=" pb-2 items-center">
          <p className=" text-[13px] lg:text-[15px] items-center">
            Girls House Available for listing, call me on 08012345678
          </p>
        </div>
        <p className="lg:text-[13px] text-[12px] text-wrap pt-5 pb-2 text-[#DADADA]">
          <span className="flex items-center font-semibold">
            <img className="size-5 mr-2" src={Sort} alt="" />
            Room Listing
          </span>
        </p>
      </div>
    </div>
  );
};

export default RoomsItem;
