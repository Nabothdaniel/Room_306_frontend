import React from "react";
import Message from "../images/message.svg";
import Faqs from "../images/message-question.svg";
import Like from "../images/like.svg";
import Profile from "../images/personalcard.svg";
import Users from "../images/user-square.svg";
import Video from "../images/video.svg";
import Wallet from "../images/wallet-2.svg";
import Book from "../images/book-saved.svg";
import Frame from "../images/Frame.svg";

const Media = ({ mediaClass }) => {
  return (
    <div className={`bg-[#1E1E1E] rounded-xl ${mediaClass} py-8 px-5 md:px-12`}>
      <div className="flex pb-[15px] md:text-base text-[14px] font-semibold text-white items-center">
        <img className="size-8 mr-2" src={Users} alt="" />
        Profile Picture
        <img className="size-7 cursor-pointer ml-3" src={Frame} alt="" />
      </div>
      <hr />
      <div className="flex pb-[15px] md:text-base text-[14px] pt-4 font-semibold text-white items-center">
        <img className="size-8 mr-2" src={Book} alt="" />
        Story
        <img className="size-7 cursor-pointer ml-3" src={Frame} alt="" />
      </div>
      <hr />
      <div className="flex pb-[15px] md:text-base text-[14px] pt-4 font-semibold text-white items-center">
        <img className="size-8 mr-2" src={Video} alt="" />
        Naughty Video
        <img className="size-7 cursor-pointer ml-3" src={Frame} alt="" />
      </div>
      <hr />
    </div>
  );
};

export default Media;
