import React from "react";
import Close from "../images/close-icon.svg";
import Input from "./Input";

const Reviews = ({ reviewClass, handleReview }) => {
  return (
    <div
      className={`bg-black/40 duration-500 ${reviewClass} fixed top-0 z-[999999] flex left-0 w-[100%] h-screen  justify-center`}
    >
      <div className="bg-white w-[80%] md:w-[400px] h-fit mt-28 py-4 rounded-xl">
        <div className="flex items-center justify-between border-b-2 px-6 pb-2 border-[#F1D6D6]">
          <h2 className="md:text-2xl font-semibold text-xl">Leave a Review</h2>
          <img
            onClick={handleReview}
            className="size-4 cursor-pointer"
            src={Close}
            alt=""
          />
        </div>
        <div className="px-4 py-5">
          <label className="text-[#475367] flex flex-col" htmlFor="">
            <span className="font-semibold pb-1">Choose Rating</span>
            <div className=" w-[100%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
              <select
                className="w-[100%] pr-3 rounded-xl bg-[#F0F2F5] py-[14px] outline-none"
                name=""
                id=""
                          >
                              
              </select>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
