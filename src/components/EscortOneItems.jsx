import React from "react";
import { FaStar } from "react-icons/fa";
import Location from "../images/location-tick.svg";
import Love from "../images/Love.svg";
import User from "../images/user-tick.svg";
import { parseISO, format } from "date-fns";

const EscortOneItems = ({ items }) => {
  const parsedDate = parseISO(items.start_date);
  const formattedDate = format(parsedDate, "MMMM d, yyyy");

  const endDate = parseISO(items.end_date);
  const EndDate = format(endDate, "MMMM d, yyyy");

  return (
    <>
      <div className="bg-[#1E1E1E] text-white p-3 rounded-lg">
        <img
          className="rounded-lg h-[200px] object-cover"
          src={`https://room35backend.onrender.com${items.cover_image}`}
          alt=""
        />
        <div className="flex justify-between py-3">
          <div>
            <h4 className="font-semibold pb-2">{items.user.display_name}</h4>
            <p className="pb-1 text-[12px] md:text-[13px]">
              <span className="font-semibold">
                {formattedDate} - {EndDate}
              </span>
            </p>
            <p className="flex items-center text-[12px] md:text-[14px]">
              <img src={Location} className="mr-1 size-5" />
              <span>
                {items.city}, {items.country}
              </span>
            </p>
          </div>
          <img src={Love} className="size-12" />
        </div>
        <p className="lg:text-[15px] text-[12px] text-wrap  pb-2 text-[#DADADA]">
          {items.title}
        </p>
        <div className="flex justify-between pb-2 items-center">
          <p className="flex justify-between items-center">
            <FaStar className="text-[#FFD910] mr-2" />
            4.9
          </p>
          <p className="flex justify-between items-center">
            <img src={User} />{" "}
            <span className="font-semibold pl-1">
              ({items.favorited_by.length})
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default EscortOneItems;
