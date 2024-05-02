import React from "react";
import Slider1 from "../images/slider1.png";
import Eye from "../images/eye.svg";

const FavoriteVideo = () => {
  return (
    <div className="bg-black text-white  p-3 rounded-lg">
      <img className="rounded-lg h-[200px] object-cover" src={Slider1} alt="" />
      <div className="flex justify-between py-3">
        <div>
          <h4 className="font-semibold text-[14px] pb-2">Make me Cum</h4>

          <p className="flex items-center text-[12px] lg:text-[14px]">
            <img src={Eye} className="mr-1 size-5" />
            <span>223</span>
          </p>
        </div>
        <div>
          <p className="bg-yellow-300 text-[12px] py-1 text-black px-2 rounded-3xl cursor-pointer font-semibold">
            Remove
          </p>
        </div>
      </div>
    </div>
  );
};

export default FavoriteVideo;
