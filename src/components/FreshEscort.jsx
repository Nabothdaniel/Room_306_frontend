import React from "react";
import { FaStar } from "react-icons/fa";
import Slider1 from "../images/slider1.png";
import Location from "../images/location-tick.svg";
import Whatsapp from "../images/whatsapp.svg";

const FreshEscort = () => {
  return (
    <div className="bg-[#1E1E1E] text-white mb-14 p-3 rounded-lg">
      <img className="rounded-lg h-[170px] object-cover" src={Slider1} alt="" />
      <div className="flex justify-between py-3">
        <div>
          <h4 className="font-semibold pb-2">Sandra Kiss</h4>

          <p className="flex items-center text-[12px] md:text-[14px]">
            <img src={Location} className="mr-1 size-5" />
            <span>lagos, Nigeria</span>
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
        Hey, I’m pretty and good on bed. Give me a message
      </p>
      <div className="flex justify-between pb-2 items-center">
        <p className="flex justify-between items-center">
          <img src={Whatsapp} className="size-4" />{" "}
          <span className="text-[12px] pl-1">+234 9898989898</span>
        </p>
      </div>
    </div>
  );
};

export default FreshEscort;
