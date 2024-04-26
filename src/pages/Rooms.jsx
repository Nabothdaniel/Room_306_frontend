import React from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Filter from "../images/Input.svg";
import Pagination from "../components/Pagination";
import RoomsItem from "../components/RoomsItem";

const Rooms = () => {
  return (
    <div className="block md:flex overflow-x-clip h-screen max-w-[1740px] mx-auto">
      <SideBar />

      <div className="flex-1 md:w-[80%] pt-4 md:pt-14 px-3 md:px-6 lg:px-10">
        <Navbar
          Headervalue={"Best Escort Tours"}
          textValue={"Explore our tours and activities"}
        />
        <div className="pb-10 md:pt-8 pt-3 px-3 md:pl-2">
          <div className="flex pb-3 md:pb-0 justify-between items-center">
            <h2 className="text-white min-w-[180px] md:py-6 md:text-[20px] font-semibold">
              Rooms Let
            </h2>
            <div className="flex gap-x-3 justify-end">
              <img src={Filter} alt="" />
            </div>
          </div>
          <div className=" bg-[#121212]">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
              <RoomsItem />
              <RoomsItem />
              <RoomsItem />
              <RoomsItem />
              <RoomsItem />
              <RoomsItem />
              <RoomsItem />
              <RoomsItem />
              <RoomsItem />
              <RoomsItem />
              <RoomsItem />
            </div>
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
