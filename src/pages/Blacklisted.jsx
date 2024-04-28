import React from "react";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import Filter from "../images/Input.svg";
import BlacklistedList from "../components/BlacklistedList";
import Pagination from "../components/Pagination";

const Blacklisted = () => {
  return (
    <div className="block md:flex overflow-x-clip h-screen max-w-[1740px] mx-auto">
      <SideBar />

      <div className="flex-1 md:w-[80%] pt-4 md:pt-14 px-3 md:px-6 lg:px-10">
        <Navbar
          Headervalue={"Best Escort Room"}
          textValue={"Explore our rooms and activities"}
        />

        <div className="pb-10 pt-4 md:pt-0 md:pl-2">
          <div className="flex md:pt-12 md:py-6 pb-2 pl-1 justify-between pt-2 items-center">
            <div>
              <h1 className="md:text-2xl text-[18px] text-white font-semibold">
                Blacklisted Clients
              </h1>
              <p className="md:text-base text-[14px] text-white/70 font-normal pt-3">
                Speak Up, Stay Safe
              </p>
            </div>

            <img className="md:w-40 w-32 cursor-pointer" src={Filter} alt="" />
          </div>
          <div className="rounded-xl lg:px-10 md:px-7 px-4 py-6 md:pl-12 md:py-8 bg-[#1E1E1E] ">
            <div className="text-white pb-8 font-semibold">
              <h2 className="md:text-4xl text-[24px]">Most Wanted</h2>
              <h3 className="md:text-3xl text-white/70 font-medium">
                Help Us find these people
              </h3>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
              <BlacklistedList />
              <BlacklistedList />
              <BlacklistedList />
              <BlacklistedList />
              <BlacklistedList />
              <BlacklistedList />
              <BlacklistedList />
            </div>
                  </div>
                  <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Blacklisted;
