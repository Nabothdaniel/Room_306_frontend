import React from "react";
import Profile from "../images/profile.jpeg";
import House from "../images/house.svg";
import Calender from "../images/calendar-tick.svg";
import Love from "../images/Love.svg";
import { useAdvertFavoriteMutation } from "../redux/AdvertSlice";
import toast from "react-hot-toast";
import { format, parseISO } from "date-fns";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdvertsItem = ({ items }) => {
  const users = JSON.parse(localStorage.getItem("details"));
  const [favorite] = useAdvertFavoriteMutation();
  const navigate = useNavigate();
  const handleFavorite = async () => {
    try {
      const res = await favorite(items.id);
      toast.success(res.data.message);
    } catch (err) {
      console.log(err);
    }
  };

  const parsedDate = parseISO(items.start_date);
  const formattedDate = format(parsedDate, "dd MMM");

  const endDate = parseISO(items.end_date);
  const EndDate = format(endDate, "dd MMM");

  const handleChat = async () => {
    if (users) {
      try {
        const res = await axios.post(
          "https://room35backend.onrender.com/api/conversations/start/",
          { recipient_id: items.user.username },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer " + JSON.parse(localStorage.getItem("token")),
            },
          }
        );

        if (res.data.id) {
          navigate(`/chat/${res.data.id}`);
        } else if (res.data.conversation.id) {
          navigate(`/chat/${res.data.conversation.id}`);
        }
        window.location.reload(true);
      } catch (err) {
        console.log(err);
      }
    } else {
      toast.error("Sign in");
    }
  };

  return (
    <div className="bg-[#1E1E1E] flex flex-col relative rounded-3xl p-4 md:p-7 ">
      <div className="flex items-center sm:items-start  ">
        <img
          className="sm:size-[150px] size-[48px] object-cover rounded-full"
          src={`https://room35backend.onrender.com${items.user.image}`}
          alt=""
        />
        <div className="ml-3">
          <h3 className="text-white font-semibold md:text-[20px]">
            {items.title}
          </h3>
          <div className="hidden text-[14px] sm:flex pt-2">
            <div className="flex items-center rounded-md w-fit mr-2 py-1 px-[6px] text-white bg-[#0A0A0A]">
              <img className="size-5 mr-1" src={Calender} alt="" />
              <p className="text-[13px]">
                {formattedDate} - {EndDate}
              </p>
            </div>
            <div className="flex items-center rounded-md w-fit py-1 px-[6px] text-white bg-[#0A0A0A]">
              <img className="size-5 mr-1" src={House} alt="" />
              <p> {items.i_am}</p>
            </div>
          </div>
          <div className="hidden text-[14px] sm:flex pt-2">
            <div className="flex items-center rounded-md w-fit mr-3 py-1 px-[6px] text-white bg-[#0A0A0A]">
              <img className="size-5 mr-1" src={House} alt="" />
              <p>
                {items.city}, {items.state}, {items.country}
              </p>
            </div>
            <div className="flex items-center rounded-md w-fit py-1 px-[6px] text-white bg-[#0A0A0A]">
              <p>#{items.amount}</p>
            </div>
          </div>
          <div className="sm:flex hidden pt-2 items-center">
            <button
              onClick={handleChat}
              className="bg-[#E9CB50]  w-[100%] text-[#171717] h-[40px]  font-medium rounded-xl"
            >
              Chat Now
            </button>
            <img
              onClick={handleFavorite}
              src={Love}
              className="size-11 cursor-pointer ml-2"
            />
          </div>
        </div>
      </div>
      <p className="text-[#DADADA] text-[15px] hidden sm:block pt-4">
        {items.description}
      </p>
      <div className="flex text-[12px] flex-col  gap-y-2 sm:hidden pt-3">
        <div className="flex">
          <div className="flex items-center rounded-md w-fit mr-3 px-3 py-1 text-white bg-[#0A0A0A]">
            <img className="size-5 mr-1" src={Calender} alt="" />
            <p>23 Mar - 28 Mar</p>
          </div>
          <div className="flex items-center rounded-md w-fit px-3 py-1 text-white bg-[#0A0A0A]">
            <img className="size-5 mr-1" src={House} alt="" />
            <p>{items.i_am}</p>
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center rounded-md w-fit mr-3 px-3 py-1 text-white bg-[#0A0A0A]">
            <img className="size-5 mr-1" src={Calender} alt="" />
            <p>
              {items.city}, {items.state}, {items.country}
            </p>
          </div>
          <div className="flex items-center rounded-md w-fit px-3 py-1 text-white bg-[#0A0A0A]">
            <p>#{items.amount}</p>
          </div>
        </div>
        <div className="flex items-center">
          <button
            onClick={handleChat}
            className="bg-[#E9CB50]  w-[100%] text-[#171717] h-[40px] font-medium rounded-xl"
          >
            Chat Now
          </button>
          <img
            onClick={handleFavorite}
            src={Love}
            className="size-11 cursor-pointer ml-2"
          />
        </div>
      </div>
      <p className="text-[#DADADA] text-[12px] sm:hidden block pt-4">
        {items.description}
      </p>
    </div>
  );
};

export default AdvertsItem;
