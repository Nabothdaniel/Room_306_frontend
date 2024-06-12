import React from "react";
import Location from "../images/location-tick.svg";
import Slider1 from "../images/slider1.png";
import { Link } from "react-router-dom";

const FavoriteEscort = ({ item }) => {
  return (
    <Link
      to={`/escort/${item.username}`}
      className="bg-black text-white  p-3 rounded-lg"
    >
      <img
        className="rounded-lg h-[200px] object-cover"
        src={`https://backend.theroom306.com${item.image}`}
        alt=""
      />
      <div className="flex justify-between py-3">
        <div>
          <h4 className="font-semibold pb-2">
            {item.display_name}
            {/* <span>23 yrs</span> */}
          </h4>

          <p className="flex items-center text-[12px] lg:text-[14px]">
            <img src={Location} className="mr-1 size-5" />
            <span>
              {item.city}, {item.country}
            </span>
          </p>
        </div>
        {/* <div>
          <p className="bg-yellow-300 text-[12px] py-1 text-black px-2 rounded-3xl cursor-pointer font-semibold">
            Remove
          </p>
        </div> */}
      </div>
    </Link>
  );
};

export default FavoriteEscort;
