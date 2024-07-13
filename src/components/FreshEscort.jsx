import React from "react";
import { FaStar } from "react-icons/fa";
import Slider1 from "../images/slider1.png";
import Location from "../images/location-tick.svg";
import Whatsapp from "../images/whatsapp.svg";
import { Link } from "react-router-dom";

const FreshEscort = ({ items }) => {
  return (
    <Link
      to={`/escort/${items.user.username}`}
      className="bg-[#1E1E1E] block text-white mb-14 p-3 rounded-lg"
    >
      <img
        className="rounded-lg h-[170px] object-cover"
        src={`https://backend.theroom306.com${items.user.image}`}
        alt=""
      />
      <div className="flex justify-between py-3">
        <div>
          <h4 className="font-semibold pb-2">{items.user.display_name}</h4>

          <p className="flex items-center text-[12px] md:text-[14px]">
            <img src={Location} className="mr-1 size-5" />
            <span>
              {items.user.city}, {items.user.country}
            </span>
          </p>
        </div>
        <div className="">
          <p className="flex justify-between items-center">
            <FaStar className="text-[#FFD910] mr-2" />
            4.9
          </p>
        </div>
      </div>
      <p className="lg:text-[14px] text-[12px] text-wrap  pb-2 text-[#DADADA]">
        {items.about}
      </p>
      <div className="flex justify-between pb-2 items-center">
        {items.showMyNumber && (
          <p className="flex justify-between items-center">
            <img src={Whatsapp} className="size-4" />{" "}
            <span className="text-[12px] pl-1">{items.user.mobile_number}</span>
          </p>
        )}
      </div>
    </Link>
  );
};

export default FreshEscort;
