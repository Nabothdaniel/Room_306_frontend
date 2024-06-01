import React from "react";
import Calender from "../images/calendar-tick.svg";
import Location from "../images/location-tick.svg";
import Room from "../images/room.jpeg";
import Love from "../images/Love.svg";
import Sort from "../images/sort.svg";
import { format, parseISO } from "date-fns";

const MyRoomItem = ({ item }) => {
  const parsedDate = parseISO(item.start_date);
  const formattedDate = format(parsedDate, "dd MMM, yyyy");

  return (
    <div className="bg-black/90 text-white p-3 rounded-lg">
      <img
        className="rounded-lg h-[200px] object-cover"
        src={`https://room35backend.onrender.com${item.cover_image}`}
        alt=""
      />
      <div className="flex justify-between py-3">
        <div>
          <h4 className="font-semibold lg:text-base text-[15px] pb-2">
            {item.title}
          </h4>
          <p className="pb-1 text-[12px] lg:text-[14px]">
            <span className="flex items-center mr-2 lg:text-[12px] text-[10px]">
              <img className="size-4 mr-1" src={Calender} alt="" />
              {formattedDate}
            </span>
          </p>
          <p className="flex items-center text-[12px] lg:text-[14px]">
            <img src={Location} className="mr-1 size-5" />
            <span>
              {item.city}, {item.country}
            </span>
          </p>
        </div>

        {/* <img src={Love} className="size-12" /> */}
      </div>
      <div className=" pb-2 items-center">
        <p className=" text-[13px] lg:text-[15px] items-center">
          {item.description}
        </p>
      </div>
      <p className="lg:text-[13px] flex justify-between items-center text-[12px] text-wrap pt-5 pb-2 text-[#DADADA]">
        <span className="flex items-center font-semibold">
          <img className="size-5 mr-2" src={Sort} alt="" />
          Room Listing
        </span>
        <p className="bg-yellow-300 text-[12px] py-1 text-black px-2 rounded-3xl cursor-pointer font-semibold">
          Delete
        </p>
      </p>
    </div>
  );
};

export default MyRoomItem;
