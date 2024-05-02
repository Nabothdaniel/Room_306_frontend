import React from "react";
import Location from "../images/location-tick.svg";
import Slider1 from "../images/slider1.png";

const MyTourItem = ({ tourClass }) => {
  return (
    <div className={`bg-black text-white  p-3 rounded-lg ${tourClass}`}>
      <img className="rounded-lg h-[200px] object-cover" src={Slider1} alt="" />
      <div className="flex justify-between py-3">
        <div>
          <h4 className="font-semibold pb-2">
            Sandra Kiss. <span>23 yrs</span>
          </h4>

          <p className="flex items-center text-[12px] lg:text-[14px]">
            <img src={Location} className="mr-1 size-5" />
            <span>lagos, Nigeria</span>
          </p>
          <p className="text-white text-[13px] pt-3">I'm Available and Ready</p>
        </div>
        <div>
          <p className="bg-yellow-300 text-[12px] py-1 text-black px-2 rounded-3xl cursor-pointer font-semibold">
            Delete
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyTourItem;
