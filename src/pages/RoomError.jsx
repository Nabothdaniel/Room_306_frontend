import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Filter from "../images/Input.svg";
import Frame from "../images/Frame.svg";
import { Link } from "react-router-dom";
import RoomFilter from "../components/RoomFilter";
import Footer from "../components/Footer";

const RoomError = () => {
  let useD = JSON.parse(localStorage.getItem("details"));
  let users = useD?.profile;

  const [filters, setFilters] = useState(false);

  const handleFilter = () => {
    setFilters(!filters);
  };

  return (
    <div className="block md:flex overflow-x-clip h-screen max-w-[1740px] mx-auto">
      <SideBar />

      <div className="flex-1 md:w-[80%] pt-4 md:pt-14 px-3 md:px-6 lg:px-10">
        <Navbar
          Headervalue={"Best Escort Room"}
          textValue={"Explore our rooms and activities"}
        />
        <div className="pb-10 md:pt-8 pt-3 px-3 md:pl-2">
          <div className="flex pb-3 md:pb-0 justify-between items-center">
            <h2 className="text-white min-w-[180px] flex items-center md:py-6 md:text-[20px] font-semibold">
              Rooms Let
              {users?.user?.user_type == "escort" && (
                <Link to={"/add-room"}>
                  <img className="size-9 ml-3" src={Frame} alt="" />
                </Link>
              )}
            </h2>
            <div className="flex gap-x-3 justify-end">
              <img
                onClick={handleFilter}
                className="cursor-pointer"
                src={Filter}
                alt=""
              />
            </div>
          </div>
          <div className=" bg-[#121212]">
            <div className="flex justify-center items-center h-[40vh]">
              <p className="text-xl md:text-3xl font-semibold text-white">
                No Room To Let Available
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <RoomFilter
        Filter={handleFilter}
        RoomClass={`${!filters ? "translate-x-[120vw]" : "translate-x-0"}`}
      />
    </div>
  );
};

export default RoomError;
