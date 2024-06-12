import React, { useEffect, useReducer, useState } from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Filter from "../images/Input.svg";
import Vector from "../images/Vector.svg";
import EventItem from "../components/EventItem";
import Pagination from "../components/Pagination";
import { useGetAllEventsQuery } from "../redux/EventApi";
import Loading from "../components/Loading";
import Frame from "../images/Frame.svg";
import { Link } from "react-router-dom";
import { formatISO } from "date-fns";
import Footer from "../components/Footer";

const reducer = (state, action) => {
  switch (action.type) {
    case "Change1":
      return {
        open1: true,
      };
    case "Change2":
      return {
        open2: true,
      };
  }
};

const EventError = () => {
  let user = JSON.parse(localStorage.getItem("details"));
  let users = user?.profile;

  const [state, dispatch] = useReducer(reducer, {
    open1: true,
    open2: false,
  });

  return (
    <div className="block md:flex overflow-x-clip h-screen max-w-[1740px] mx-auto">
      <SideBar />

      <div className="flex-1 md:w-[80%] pt-4 md:pt-14 px-3 md:px-6 lg:px-10">
        <Navbar
          Headervalue={"Best Escort Room"}
          textValue={"Explore our rooms and activities"}
        />
        <div className="pb-10 md:pl-2">
          <div className="flex md:pt-10 pb-2 pl-1 justify-between pt-2 items-center">
            <h2 className="text-white flex items-center md:py-6 text-[16px] md:text-[20px] font-semibold">
              All Events
              {users && (
                <Link to={"/add-event"}>
                  <img className="size-9 ml-3" src={Frame} alt="" />
                </Link>
              )}
            </h2>

            {/* <img className="w-40" src={Filter} alt="" /> */}
          </div>
          <div className="bg-[#1E1E1E] md:py-7 p-4 md:px-8 h-[70vh] rounded-2xl">
            <div className="">
              <button
                onClick={() => dispatch({ type: "Change1" })}
                className={` ${
                  state.open1 ? "bg-[#E9CB50]" : "bg-[#121212] text-white"
                } text-[14px] duration-700 md:text-base mr-3 py-4 w-[141px] md:w-[175px] rounded-xl`}
              >
                Upcoming Events
              </button>
              <button
                onClick={() => dispatch({ type: "Change2" })}
                className={`${
                  state.open2 ? "bg-[#E9CB50]" : "bg-[#121212] text-white"
                }  duration-700 text-[14px] md:text-base py-4 w-[111px] md:w-[144px] rounded-xl`}
              >
                Past Events
              </button>
            </div>
            <div className="h-[85%] flex justify-center items-center">
              <div className="  ">
                <img className="w-[260px]" src={Vector} alt="" />
                <p className="font-semibold text-center pt-8 text-white">
                  No Events Found
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default EventError;
