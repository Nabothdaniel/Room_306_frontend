import React from "react";
import Whatsapp from "../images/whatsapp.svg";
import Youtube from "../images/youtube.svg";
import Messenger from "../images/messenger.svg";
import { ProfileSwiper } from "./ProfileSwiper";

const ProfileViewItem = ({ handleBook }) => {
  return (
    <div className="grid md:grid-cols-2 md:px-4 md:pt-4 py-4 px-6 gap-x-6 h-fit pb-7 md:pb-0  rounded-xl bg-[#1E1E1E] ">
      <ProfileSwiper />

      <div className="md:pr-10 md:px-0 px-4">
        <div className="flex justify-between border-b pt-4 pb-3 border-[#23262A] text-white">
          <div className="flex flex-col items-center">
            <p className="text-[24px] font-semibold">4691</p>
            <p className="text-[#B29A9A]">Posts</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[24px] font-semibold">306</p>
            <p className="text-[#B29A9A]">Followers</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[24px] font-semibold">69</p>
            <p className="text-[#B29A9A]">Following</p>
          </div>
        </div>
        <div className="pb-4 pt-3 text-white">
          <p className="text-[20px] font-semibold">Sandra Kiss</p>
          <div className="flex items-center my-2 rounded-md w-fit mr-3 px-3 py-1 text-white bg-[#0A0A0A]">
            <img className="size-5 mr-1" src={Whatsapp} alt="" />
            <p>0802234567</p>
          </div>
          <p className="text-[#DADADA] lg:text-[14px] text-[12px]">
            Am here to satisfy ur pleasure I love sex most especially blow job
            (cum in my mouth) AVAILABLE FOR INCALL
          </p>
        </div>
        <div className="flex justify-around text-white">
          <div className="flex flex-col items-center">
            <p className="text-[24px] font-semibold">
              27 <span className="text-[#B29A9A]">yrs</span>
            </p>
            <p className="text-[#B29A9A]">Age</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[24px] font-semibold">Avg</p>
            <p className="text-[#B29A9A]">Weight</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[24px] font-semibold">Avg</p>
            <p className="text-[#B29A9A]">Height</p>
          </div>
        </div>
        <button
          onClick={handleBook}
          className="bg-[#E9CB50] mt-4 w-[100%] text-[#171717] h-[40px] font-medium rounded-2xl"
        >
          Book Now
        </button>
        <div className="flex text-[#DADADA] justify-center md:justify-normal items-center mt-4">
          <p className="text-[12px] md:text-[14px]">Share Profile:</p>

          <img className="size-7 ml-5" src={Whatsapp} alt="" />
          <img className="size-7 ml-4" src={Youtube} alt="" />
          <img className="size-7 ml-4" src={Messenger} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProfileViewItem;
