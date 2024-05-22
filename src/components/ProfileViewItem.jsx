import React from "react";
import Whatsapp from "../images/whatsapp.svg";
import Youtube from "../images/youtube.svg";
import Messenger from "../images/messenger.svg";
import { EscortProfileSwiper } from "./EscortProfileSwiper";

const ProfileViewItem = ({ handleBook, user }) => {
  return (
    <div className="grid md:grid-cols-2 md:px-4 md:pt-4 py-4 px-6 gap-x-6 h-fit pb-7 md:pb-4  rounded-xl bg-[#1E1E1E] ">
      {/* <EscortProfileSwiper data={user.gallery} /> */}

      <img
        className="h-[400px] rounded-xl"
        src={`https://room35backend.onrender.com${user.profile.image}`}
        alt=""
      />

      <div className="md:pr-10 md:px-0 px-4">
        <div className="flex justify-between border-b pt-4 pb-3 border-[#23262A] text-white">
          <div className="flex flex-col items-center">
            <p className="text-[24px] font-semibold">4691</p>
            <p className="text-[#B29A9A]">Posts</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[24px] font-semibold">
              {user.escort_details.user.followers_count}
            </p>
            <p className="text-[#B29A9A]">Followers</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[24px] font-semibold">
              {" "}
              {user.escort_details.user.following_count}
            </p>
            <p className="text-[#B29A9A]">Following</p>
          </div>
        </div>
        <div className="pb-4 pt-3 text-white">
          <p className="text-[20px] font-semibold">
            {user.profile.display_name}
          </p>
          <div className="flex items-center my-2 rounded-md w-fit mr-3 px-3 py-1 text-white bg-[#0A0A0A]">
            <a
              className="flex items-center"
              target="_blank"
              href={`https://wa.me/${user.profile.mobile_number}`}
            >
              <img className="size-5 mr-1" src={Whatsapp} alt="" />
              {user.profile.mobile_number}
            </a>
          </div>
          <p className="text-[#DADADA] lg:text-[14px] text-[12px]">
            {user.escort_details.about}
          </p>
        </div>
        <div className="flex justify-around text-white">
          <div className="flex flex-col items-center">
            <p className="text-[24px] font-semibold">
              {" "}
              <span className="text-[#B29A9A]">yrs</span>
            </p>
            <p className="text-[#B29A9A]">Age</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[24px] font-semibold">
              {user.escort_details.weight}
            </p>
            <p className="text-[#B29A9A]">Weight</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[24px] font-semibold">
              {user.escort_details.height}
            </p>
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
