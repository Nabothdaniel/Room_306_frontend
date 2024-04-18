import React from "react";
import { MdLocationOn } from "react-icons/md";
import { LuHeart, LuUserCog2 } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import Slider1 from "../images/slider1.png";

const EscortOneItems = () => {
  return (
    <>
      <div className="bg-[#1E1E1E] mb-14 p-3 rounded-lg">
        <img className="rounded-lg" src={Slider1} alt="" />
        <div className="flex justify-between py-3">
          <div>
            <h4 className="font-semibold pb-2">Sandra Kiss</h4>
            <p className="pb-1 text-[12px] md:text-[14px]">
              <span className="font-semibold">#7,500</span> short time
            </p>
            <p className="flex items-center text-[12px] md:text-[14px]">
              <MdLocationOn className="mr-1 size-5" />
              <span>lagos, Nigeria</span>
            </p>
          </div>
          <div className="bg-[#0A0A0A] h-[42px] p-2 rounded-full">
            <LuHeart className="text-red-500 size-7" />
          </div>
        </div>
        <p className="lg:text-[15px] text-[12px] text-wrap  pb-2 text-[#DADADA]">
          Hey, I’m pretty and good on bed. Give me a message
        </p>
        <div className="flex justify-between pb-2 items-center">
          <p className="flex justify-between items-center">
            <FaStar className="text-[#FFD910] mr-2" />
            4.9
          </p>
          <p className="flex justify-between items-center">
            <LuUserCog2 /> <span className="font-semibold pl-1">(22)</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default EscortOneItems;
