import React from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Filter from "../images/Input.svg";
import Vector from "../images/Vector.svg";
import EventItem from "../components/EventItem";
import Pagination from "../components/Pagination";

const Events = () => {
  return (
    <div className="block md:flex overflow-x-clip h-screen max-w-[1740px] mx-auto">
      <SideBar />

      <div className="flex-1 md:w-[80%] pt-6 md:pt-14 px-3 md:px-6 lg:px-10">
        <Navbar
          Headervalue={"Best Escort Room"}
          textValue={"Explore our rooms and activities"}
        />
        <div className="pb-10 md:pl-2">
          <div className="flex pt-8 justify-between items-center pb-6">
            <h2 className="text-white py-4 text-[20px] font-semibold">
              All Events
            </h2>

            <img className="w-40" src={Filter} alt="" />
          </div>

          {/* EMPTY */}

          {/* <div className="bg-[#1E1E1E] md:py-7 p-4 md:px-8 h-[630px] rounded-2xl">
            <div className="">
              <button className="bg-[#E9CB50] text-[14px] md:text-base mr-3 py-4 w-[141px] md:w-[175px] rounded-xl">
                Upcoming Events
              </button>
              <button className="bg-[#121212] text-white text-[14px] md:text-base py-4 w-[111px] md:w-[144px] rounded-xl">
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
          </div> */}

          {/* FILL */}

          <div className="bg-[#1E1E1E] md:py-7 p-4 md:px-8 rounded-2xl">
            <div className="">
              <button className="bg-[#E9CB50] text-[14px] md:text-base mr-3 py-4 w-[141px] md:w-[175px] rounded-xl">
                Upcoming Events
              </button>
              <button className="bg-[#121212] text-white text-[14px] md:text-base py-4 w-[111px] md:w-[144px] rounded-xl">
                Past Events
              </button>
            </div>
            <div className="grid pt-8 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <EventItem />
              <EventItem />
              <EventItem />
              <EventItem />
              <EventItem />
              <EventItem />
            </div>
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Events;
