import React from "react";
import Calender from "../images/calendar-tick.svg";
import User from "../images/user-tick.svg";
import Location from "../images/location-tick.svg";
import Slider1 from "../images/slider1.png";
import Love from "../images/Love.svg";
import Clock from "../images/clock.svg";
import Ticket from "../images/ticket-2.svg";
import { format, parseISO } from "date-fns";
import { useDeleteEventMutation } from "../redux/EventApi";
import { useNavigate } from "react-router-dom";

const MyEventItem = ({ item }) => {
  const navigate = useNavigate();
  const [eventDelete, { isLoading: isDeleting, isFulfilled }] =
    useDeleteEventMutation();
  const parsedDate = parseISO(item.start_date);
  const Start_Date = format(parsedDate, "dd MMM");

  const parsedEndDate = parseISO(item.end_date);
  const End_Date = format(parsedEndDate, "dd MMM");

  const Time = item.start_time.split(":");
  const inputTime = new Date();

  inputTime.setHours(Time[0]);
  inputTime.setMinutes(Time[1]);

  const watTime = format(inputTime, "h:mm aa");

  const handleDelete = async () => {
    await eventDelete(item.id);
  };

  const handleUpdate = () => {
    localStorage.setItem("events", JSON.stringify(item));
    navigate("/add-event");
  };

  return (
    <div className="bg-[#121212] text-white p-3 rounded-lg">
      <img
        className="rounded-lg h-[200px] object-cover"
        src={`https://room35backend.onrender.com${item.cover_image}`}
        alt=""
      />
      <div className="flex justify-between py-3">
        <div>
          <h4 className="font-semibold lg:text-base text-[15px] pb-2">
            {item.title}
          </h4>
          <p className="pb-1 text-[12px] lg:text-[14px]">
            <span className="flex items-center mr-2 lg:text-[12px] text-[10px]">
              <img className="size-4 mr-1" src={Calender} alt="" />
              {Start_Date} - {End_Date}
            </span>
          </p>
          <p className="flex items-center text-[12px] lg:text-[14px]">
            <img src={Location} className="mr-1 size-5" />
            <span>
              {item.city}, {item.country}{" "}
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-y-3">
          <p
            onClick={handleDelete}
            className="bg-red-500 text-[12px] py-1 text-black px-2 rounded-3xl cursor-pointer font-semibold"
          >
            Delete
          </p>
          <p onClick={handleUpdate} className="bg-yellow-300 text-[12px] py-1 text-black px-2 rounded-3xl cursor-pointer font-semibold">
            Update
          </p>
        </div>
      </div>
      <div className="flex justify-between pb-2 items-center">
        <p className="flex justify-between text-[12px] lg:text-[13px] items-center">
          <img className="size-4 mr-2" src={Clock} alt="" /> {watTime}
        </p>
        <p className="flex justify-between items-center">
          <img src={User} />{" "}
          <span className="font-semibold pl-1">({item.views})</span>
        </p>
      </div>
      <p className="lg:text-[13px] flex justify-between items-center text-[12px] text-wrap  pb-2 text-[#DADADA]">
        <span className="flex font-semibold items-center">
          <img className="size-5 mr-2" src={Ticket} alt="" />
          Available Ticket
        </span>
        <span className="font-semibold text-[18px]">
          {item.available_ticket}
        </span>
      </p>
    </div>
  );
};

export default MyEventItem;
