import React from "react";
import Close from "../images/icon.svg";
import Input from "./Input";
import TextArea from "./TextArea";

const BookingModel = ({ bookClass, handleBook }) => {
  return (
    <div
      className={`bg-black/40 duration-500 ${bookClass}  fixed top-0 z-[999999] left-0 w-[100%] h-screen flex justify-center items-center`}
    >
      <div className="md:w-[800px] w-[90%] rounded-xl py-6 bg-white">
        <div className="border-b-2 pb-4 flex justify-between items-center px-4 pr-7 md:px-8 font-semibold text-[20px] border-[#F1D6D6]">
          <h2 className="md:text-2xl text-[18px] font-semibold">
            Booking Details <span>Escort name</span>
          </h2>
          <img
            onClick={handleBook}
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
            className="text-black pb-2 pt-5 flex-col   flex  rounded-xl"
            htmlFor="time-slot"
          >
            <span className="font-semibold text-[14px] md:text-base pb-2  ">
              Time Slot
            </span>
            <div className="w-[100%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none">
              <select
                className="w-[100%] px-4 bg-transparent rounde-xl py-[10px] md:py-[14px] outline-none"
                name="time-slot"
                id="time-slot"
              >
                <option value="">Choose</option>
                <option>One Hour</option>
                <option>Over Night</option>
                <option>Weekend</option>
              </select>
            </div>
          </label>
          <TextArea
            labelValue={"Message"}
            labelClass={"text-black"}
            required={""}
            inputName={"message"}
            inputClass={
              "p-3 rounded-xl bg-[#F0F2F5] outline-none text-[#102127] placeholder-[#102127]"
            }
            holder={""}
            col={""}
            row={"7"}
          />

          <div>
            <button className="bg-[#E9CB50] float-right text-[#171717] mt-4 text-[14px] h-[48px] w-[150px] font-semibold rounded-xl">
              Send Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModel;
