import React, { useState } from "react";
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

const Events = () => {
  const users = JSON.parse(localStorage.getItem("details"));
  const { data, isLoading } = useGetAllEventsQuery();

  const [currentPage, setCurrentPage] = useState(0);

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
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
                {users?.user?.user_type == "escort" && (
                  <Link to={"/add-event"}>
                    <img className="size-9 ml-3" src={Frame} alt="" />
                  </Link>
                )}
              </h2>

              <img className="w-40" src={Filter} alt="" />
            </div>
            <div className="bg-[#1E1E1E] md:py-7 p-4 md:px-8 h-[630px] rounded-2xl">
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
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (data.length == 0) {
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
                {users?.user?.user_type == "escort" && (
                  <Link to={"/add-event"}>
                    <img className="size-9 ml-3" src={Frame} alt="" />
                  </Link>
                )}
              </h2>

              <img className="w-40" src={Filter} alt="" />
            </div>
            <div className="bg-[#1E1E1E] md:py-7 p-4 md:px-8 h-[630px] rounded-2xl">
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
            </div>
          </div>
        </div>
      </div>
    );
  }

  const usersPage = 12;

  const page = currentPage * usersPage;

  const displayEvents = data
    .slice(page, page + usersPage)
    .map((item, index) => {
      return <EventItem key={index} items={item} />;
    });

  const pageCount = Math.ceil(data.length / usersPage);

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
              {users?.user?.user_type == "escort" && (
                <Link to={"/add-event"}>
                  <img className="size-9 ml-3" src={Frame} alt="" />
                </Link>
              )}
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
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 pt-8">
              {displayEvents}
            </div>
          </div>
          <Pagination PageCount={pageCount} setCurrentPage={setCurrentPage} />
        </div>
      </div>
    </div>
  );
};

export default Events;
