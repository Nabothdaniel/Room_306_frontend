import React from "react";
import Close from "../images/icon.svg";
import Input from "./Input";

const BookingModel = () => {
  return (
    <div
      className={`bg-black/40 duration-500 ${""}  fixed top-0 z-[999999] left-0 w-[100%] h-screen flex justify-center items-center`}
    >
      <div className="w-[800px] rounded-xl py-6 bg-white">
        <div className="border-b-2 pb-4 flex justify-between items-center px-8 font-semibold text-[20px] border-[#F1D6D6]">
          <h2 className="text-2xl font-semibold">
            Booking Details <span>Escort name</span>
          </h2>
          <img
            className="size-4 cursor-pointer text-[#F1D6D6]"
            src={Close}
            alt=""
          />
        </div>
        <div className="px-4 py-5">
          <Input
            labelValue={"From Date"}
            inputType={"date"}
            labelClass={"font-semibold text-black py-2"}
            required={""}
            inputName={"from-date"}
            inputClass={
              " rounded-xl bg-[#F0F2F5]  text-[#102127] placeholder-[#102127]"
            }
            holder={""}
          />
          <label
            className="text-white pb-2 pt-5 md:items-center md:flex-row flex-col md:justify-between  flex max-w-[700px]"
            htmlFor="1-hour"
          >
            <span className="font-semibold text-[14px] md:text-base pb-2 md:pb-1 ">
              Time Slot
            </span>
            <div className="w-full placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none">
              <select
                className="w-[100%] bg-[#F0F2F5] py-[10px] md:py-[14px] outline-none"
                name="time-slot"
                id="time-slot"
              >
                <option value="">Choose here</option>
                <option value="all">One Hour</option>
                <option value="asian">Over Night</option>
                <option value="black">Weekend</option>
              
              </select>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default BookingModel;
