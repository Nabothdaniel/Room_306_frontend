import React from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Blog from "../images/blog.jpeg";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FiMail } from "react-icons/fi";
import { TbCurrencyNaira } from "react-icons/tb";

const MainProfile = () => {
  return (
    <div className="block md:flex overflow-x-clip h-screen max-w-[1740px] mx-auto">
      <SideBar />

      <div className="flex-1 md:w-[80%] pt-4 md:pt-14 px-3 md:px-6 lg:px-10">
        <Navbar
          Headervalue={"Best Escort Room"}
          textValue={"Explore our rooms and activities"}
        />
        <div className="grid md:grid-cols-3 px-4 md:px-0 grid-cols-1 lg:grid-cols-4 gap-y-12 gap-x-8 pt-14">
          <div className="flex items-start min-w-[600px] text-white">
            <img className="size-[60px] rounded-full" src={Blog} alt="" />
            <div className="ml-3">
              <h2 className="md:text-2xl font-semibold text-[20px]">
                Adam Fresh
              </h2>
              <p className="text-white/80 md:text-[14px] text-[12px]">
                @adamfresh
              </p>
            </div>
          </div>
          <div className="text-white/70 md:col-span-2 flex justify-between">
            <div>
              <p className="flex items-center pb-4">
                <IoPhonePortraitOutline className="text-xl mr-2" />
                <span>+2348123456789</span>
              </p>
              <p className="flex items-center">
                <FiMail className="text-xl mr-2" />
                <span>adamfresh@gmail.com</span>
              </p>
            </div>
            <div>
              <p className="bg-[#E9CB50] text-black/70 text-[14px] md:text-base font-semibold rounded-xl py-1 text-center min-w-[120px] md:min-w-[130px]">
                Under Review
              </p>
            </div>
          </div>
          <div className="text-[#E9CB50] flex flex-col gap-y-3">
            <p>
              Last Login at <span className="font-semibold">2:40 PM Sun</span>
            </p>
            <p className="text-white/70 text-[12px]">
              Registered on <span className="font-semibold">Apr 28, 2024</span>
            </p>
            {/* */}
          </div>
          <div className="text-white/80 md:col-span-2 flex items-center justify-between">
            <div className="flex items-center">
              <div className=" text-black/80 ">
                <TbCurrencyNaira className="size-[48px] p-2 bg-[#E9CB50] rounded-full" />
              </div>
              <div className="ml-4">
                <p className="md:text-[20px] text-[15px] font-semibold">
                  My Wallet
                </p>
                <p className="md:text-[26px] text-[18px] font-semibold">0</p>
              </div>
            </div>

            <div className="bg-[#CD2727] flex md:text-[20px] h-[36px] cursor-pointer font-bold items-center justify-center rounded-3xl min-w-[100px]">
              <TbCurrencyNaira className="md:size-[30px] size-[26px]" />
              Buy
            </div>
          </div>
          <div className="text-white flex gap-x-4 md:gap-x-12 items-center justify-between md:col-span-2">
            <div className="">
              <button className=" bg-blue-200 min-w-[100px] text-[14px] md:min-w-[170px] font-semibold md:text-[18px] text-blue-800 py-2 rounded-3xl">
                Referral
              </button>
            </div>
            <label className="mt-4 flex-1" htmlFor="boost">
              <input
                className="w-full"
                type="range"
                disabled
                name="boost"
                id="boost"
              />
              <p className="font-semibold text-[13px] md:text-[15px]">
                0 days <span className="font-normal">left in Boost</span>
              </p>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainProfile;
