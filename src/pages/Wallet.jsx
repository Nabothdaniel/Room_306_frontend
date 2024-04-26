import React from "react";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import Arrow from "../images/arrow-left.svg";
import Coin from "../images/coin.svg";

const Wallet = () => {
  return (
    <div className="block md:flex overflow-x-clip max-w-[1740px] mx-auto">
      <SideBar />
      <div className="flex-1 md:w-[80%] pt-6 md:pt-14 px-6 lg:px-10">
        <Navbar
          Headervalue={"Welcome to Room 306"}
          textValue={"Explore our escort at your own pace"}
        />

        <div className="md:py-8 pb-8">
          <div className="flex justify-between items-center md:pb-6 py-2 md:pt-8">
            <h2 className="text-white font-semibold cursor-pointer flex items-center">
              <img className="size-5 mr-1" src={Arrow} alt="" />
              Back
            </h2>

            <button className="bg-[#0A0A0A] text-[14px] text-white font-medium rounded-lg py-3 w-[125px]">
              Client Account
            </button>
          </div>
          <div className="w-[300px] h-[92px] flex justify-between bg-[#1E1E1E] pt-4 pb-4 px-4 rounded-xl mb-4">
            <div>
              <p className="text-[#B29A9A] text-[14px]">My Wallet Balance</p>
              <p className="text-[#F9E598] text-[20px] font-semibold">00.00</p>
              <p className="uppercase text-[#B29A9A] text-[10px] ">
                coins in escrow <span>0.00</span>
              </p>
            </div>
            <div className="flex items-end">
              <button className="bg-[#E9CB50] text-[14px] font-medium w-[91px] h-[32px] rounded-lg">
                Buy Coin
              </button>
            </div>
          </div>
          <div className="rounded-xl px-4 md:px-6 lg:px-10 md:pl-12 pt-8 md:py-14 pb-8 bg-[#1E1E1E] "></div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
