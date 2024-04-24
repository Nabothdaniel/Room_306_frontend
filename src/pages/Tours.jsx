import React from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Expire from "../images/Expire.svg";
import Latest from "../images/Container.svg";
import Filter from "../images/Input.svg";
import EscortItems from "../components/EscortItems";
import Pagination from "../components/Pagination";
import Frame from "../images/Frame.svg";
import { Link } from "react-router-dom";

const Tours = () => {
  return (
    <div className="block md:flex overflow-x-clip h-screen max-w-[1740px] mx-auto">
      <SideBar />

      <div className="flex-1 md:w-[80%] pt-4 md:pt-14 px-3 md:px-6 lg:px-10">
        <Navbar
          Headervalue={"Best Escort Tours"}
          textValue={"Explore our tours and activities"}
        />
        <div className="pb-10 px-3 md:pl-2">
          <div className="flex pb-2 pt-6 md:hidden justify-between items-center">
            <h1 className="text-white font-semibold text-[24px]">Top Escort</h1>
            <p className="text-white cursor-pointer">See all</p>
          </div>
          <div className="flex md:pt-10 pb-4 flex-col md:flex-row md:justify-between items-end md:items-center">
            <p className="text-white md:min-w-[230px] flex items-center md:py-4 py-2 lg:text-[20px] font-semibold">
              <span className="hidden md:block"> Tours Happening Now </span>
              <Link to={"/new-tours"}>
                <img
                  className="size-10 cursor-pointer md:ml-2 flex items-center"
                  src={Frame}
                  alt=""
                />
              </Link>
            </p>
            <div className="flex md:gap-x-3 gap-x-2 justify-end">
              <img className="w-[32%] lg:w-auto" src={Latest} alt="" />
              <img className="w-[32%] lg:w-auto" src={Expire} alt="" />
              <img className="w-[32%] lg:w-auto" src={Filter} alt="" />
            </div>
          </div>
          <div className=" bg-[#121212]">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
              <EscortItems />
              <EscortItems />
              <EscortItems />
              <EscortItems />
              <EscortItems />
              <EscortItems />
              <EscortItems />
              <EscortItems />
              <EscortItems />
            </div>
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tours;
