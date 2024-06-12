import React from "react";
import { FaStar } from "react-icons/fa";
import Location from "../images/location-tick.svg";
import Love from "../images/Love.svg";
import User from "../images/user-tick.svg";
import { parseISO, format } from "date-fns";
import { Link } from "react-router-dom";
import { useTourFavoriteMutation } from "../redux/tourApi";
import toast from "react-hot-toast";

const EscortOneItems = ({ items }) => {
  const [favorite] = useTourFavoriteMutation();
  const parsedDate = parseISO(items.start_date);
  const formattedDate = format(parsedDate, "MMM dd, yyyy");

  const endDate = parseISO(items.end_date);
  const EndDate = format(endDate, "MMM dd, yyyy");

  const handleFavorite = async () => {
    try {
      const res = await favorite(items.id);
      toast.success(res.data.message);
    } catch (err) {
      toast.error("Only Signed In User can add to Favorite");
    }
  };

  return (
    <>
      <div className="bg-[#1E1E1E] text-white p-3 rounded-lg">
        <Link className="block" to={`/tours/${items.id}`}>
          <img
            className="rounded-lg h-[200px]"
            src={`https://theroom306.com${items.cover_image}`}
            alt=""
          />
        </Link>
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
          <img
            onClick={handleFavorite}
            src={Love}
            className="size-12 cursor-pointer"
          />
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
