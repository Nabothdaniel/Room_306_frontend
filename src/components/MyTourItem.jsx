import React from "react";
import Location from "../images/location-tick.svg";
import Slider1 from "../images/slider1.png";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const MyTourItem = ({ item }) => {
  const navigate = useNavigate();
  const handleDelete = async () => {
    try {
      const res = await axios.delete(
        `https://backend.theroom306.com/api/tour/delete/${item.id}/`,

        {
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
        }
      );

      window.location.reload(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = () => {
    localStorage.setItem("tour", JSON.stringify(item));
    navigate("/update-tours");
  };

  return (
    <div className={`bg-black text-white  p-3 rounded-lg`}>
      <Link to={`/tours/${item.id}`}>
        <img
          className="rounded-lg h-[200px] object-cover"
          src={`https://backend.theroom306.com${item.cover_image}`}
          alt=""
        />
      </Link>
      <div>
        <div className="flex justify-between py-2">
          <h4 className="font-semibold text-white pb-2">
            {item?.user?.display_name}
          </h4>
          <div className="flex flex-col gap-5">
            <p
              onClick={handleDelete}
              className="bg-red-500 text-[12px] py-1 text-black px-2 rounded-3xl cursor-pointer font-semibold"
            >
              Delete
            </p>
            <p
              onClick={handleUpdate}
              className="bg-yellow-300 text-[12px] py-1 text-black px-2 rounded-3xl cursor-pointer font-semibold"
            >
              Update
            </p>
          </div>
        </div>
        <p className="flex items-center font-medium text-[12px] lg:text-[13px]">
          <img src={Location} className="mr-1 size-5" />
          <span>
            {item.city}, {item.country}
          </span>
        </p>
        <p className="text-white font-semibold text-[13px] pt-3">
          {item.title}
        </p>
      </div>
    </div>
  );
};

export default MyTourItem;
