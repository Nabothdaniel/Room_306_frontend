import React from "react";
import Location from "../images/location-tick.svg";
import Love from "../images/Love.svg";
import User from "../images/user-tick.svg";
import { FaStar } from "react-icons/fa";
import Slider1 from "../images/slider1.png";
import { Link } from "react-router-dom";
import { useFavoriteMutation, useFollowMutation } from "../redux/EscortApi";
import toast from "react-hot-toast";

const EscortItems = ({ items }) => {
  const [favorite] = useFavoriteMutation();

  const handleFavorite = async () => {
    try {
      const res = await favorite(items.id).unwrap();
      toast.success(res.message);
    } catch (err) {
      toast.error("Only Signed In User can add to Favorite");
    }
  };

  return (
    <>
      <div className="bg-[#1E1E1E] relative overflow-hidden block text-white h-auto  p-3 rounded-lg">
        <Link className="block" to={`/escort/${items.user.username}`}>
          <img
            className="rounded-lg h-[200px]"
            src={`https://theroom306.com${items.user.image}`}
            alt=""
          />
        </Link>

        <div className="flex justify-between py-3">
          <Link className="block" to={`/escort/${items.user.username}`}>
            <div>
              <h4 className="font-semibold pb-2">{items.user.display_name}</h4>
              <p className="pb-1 text-[12px] lg:text-[14px]">
                {/* <span className="font-semibold">#7,500</span> short time */}

                {items.user.mobile_number}
              </p>
              <p className="flex items-center text-[12px] lg:text-[14px]">
                <img src={Location} className="mr-1 size-5" />
                <span>
                  {items.user.city}, {items.user.country}
                </span>
              </p>
            </div>
          </Link>
          <img
            onClick={handleFavorite}
            src={Love}
            className="size-12 cursor-pointer"
          />
        </div>
        <Link className="block" to={`/escort/${items.user.username}`}>
          <p className="lg:text-[15px] text-[12px] text-wrap  pb-2 text-[#DADADA]">
            {items.heading}
          </p>
          <div className="flex justify-between pb-2 items-center">
            <p className="flex justify-between items-center">
              <FaStar className="text-[#FFD910] mr-2" />
              4.9
            </p>
            <p className="flex justify-between items-center">
              <img src={User} />{" "}
              <span className="font-semibold pl-1">({items?.user?.views})</span>
            </p>
          </div>
        </Link>
        <div className="absolute top-8 rotate-45 px-5 shadow-2xl -right-6 bg-yellow-500">
          Fresh Escort
        </div>
      </div>
    </>
  );
};

export default EscortItems;
