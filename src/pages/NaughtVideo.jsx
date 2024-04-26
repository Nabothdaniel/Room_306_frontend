import React from "react";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import Bdsm from "../images/Bdsm.svg";
import Sexual from "../images/sexual.svg";
import Free from "../images/Free.svg";
import Filter from "../images/Input.svg";
import Recent from "../images/Recent.svg";
import NaugthyItems from "../components/NaugthyItems";

const NaughtVideo = () => {
  return (
    <div className="block md:flex overflow-x-clip max-w-[1740px] mx-auto">
      <SideBar />
      <div className="flex-1 md:w-[80%] pt-6 md:pt-14 px-6 lg:px-10">
        <Navbar
          Headervalue={"Welcome to Room 306"}
          textValue={"Explore our escort at your own pace"}
        />

        <div className="md:py-8 pb-8">
          <div className="flex text-white md:py-4 md:pb-6 py-2 justify-between items-center">
            <h2 className="  md:text-2xl font-semibold">Naughty Videos</h2>
            <p className="cursor-pointer text-[#DADADA] text-[14px] md:text-base">
              See all
            </p>
          </div>
          <div className="flex justify-between">
            <div className="flex ">
              <img className="h-[50px] cursor-pointer mr-3" src={Bdsm} alt="" />
              <img
                className="h-[50px] cursor-pointer mr-3"
                src={Sexual}
                alt=""
              />
              <img className="h-[50px] cursor-pointer mr-3" src={Free} alt="" />
              <img className="h-[50px] cursor-pointer" src={Recent} alt="" />
            </div>
            <div>
              <img className="h-[50px] cursor-pointer" src={Filter} alt="" />
            </div>
          </div>

          <div className="grid gap-4 pt-6 grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-4">
            {/* <NaugthyItems /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NaughtVideo;
