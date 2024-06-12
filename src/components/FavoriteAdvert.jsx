import React from "react";
import Location from "../images/location-tick.svg";
import Slider1 from "../images/slider1.png";
import { Link } from "react-router-dom";

const FavoriteAdvert = ({ item }) => {
  return (
    <div className="bg-black text-white  p-3 rounded-lg">
      <img
        className="rounded-lg h-[200px] object-cover"
        src={`https://backend.theroom306.com${item.user.image}`}
        alt=""
      />
      <div className="flex justify-between py-3">
        <div>
          <h4 className="font-semibold pb-2">{item.user.display_name}</h4>
          <h4 className="font-semibold pb-2">{item.title}</h4>

          <p className="flex items-center text-[12px] lg:text-[14px]">
            <img src={Location} className="mr-1 size-5" />
            <span>
              {item.city}, {item.country}
            </span>
          </p>
          <p className="flex items-center text-[12px] pt-3 lg:text-[14px]">
            {item.description}
          </p>
        </div>
        {/* <div>
          <p className="bg-yellow-300 text-[12px] py-1 text-black px-2 rounded-3xl cursor-pointer font-semibold">
            Remove
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default FavoriteAdvert;
