import React from "react";
import Book from "../images/book-event.svg";
import Game from "../images/game.svg";
import Heart from "../images/heart.svg";
import Like from "../images/like-shapes.svg";
import People from "../images/people.svg";
import Tag from "../images/tag.svg";
import Wallet from "../images/wallet-minus.svg";
import User from "../images/user-tag.svg";
import { IoCashOutline } from "react-icons/io5";
import { FiMap } from "react-icons/fi";
import { TbLogout2 } from "react-icons/tb";
import { MdOutlineBedroomParent } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const ProfileMenu = ({ profileClass }) => {
  const location = useLocation().pathname
  return (
    <div
      className={`grid grid-cols-3 bg-[#1E1E1E] ${profileClass} pr-2 pl-1 rounded-xl py-6 md:px-12 gap-x-2 md:gap-x-4 gap-y-6 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7`}
    >
      <Link
        to={"/profile"}
        className={`text-center active flex flex-col items-center text-white  py-3 px-1 rounded-lg ${location == '/profile' ? 'bg-black' : ''}`}
      >
        <img className="size-10" src={User} alt="" />
        <p className="md:text-[14px] text-[12px] font-semibold pt-1">
          View My Profile
        </p>
      </Link>

      <div className="text-center flex flex-col items-center active text-white  py-3 px-1 rounded-lg">
        <img className="size-10 md:mx-auto" src={Book} alt="" />
        <p className="md:text-[14px] text-[12px] font-semibold pt-1">
          Edit My Profile
        </p>
      </div>

      <Link to={'/my-booking'} className={`flex flex-col items-center text-white  py-3 px-1 rounded-lg ${location == '/my-booking' ? 'bg-black' : ''} `}>
        <img className="size-10" src={Tag} alt="" />
        <p className="md:text-[14px] text-[12px] font-semibold pt-1">
          My Booking
        </p>
      </Link>
      <Link to={'/my-favourites'} className="flex flex-col items-center text-white  py-3 px-1 rounded-lg ">
        <img className="size-10 " src={Heart} alt="" />
        <p className="md:text-[14px] text-[12px] font-semibold pt-1">
          Favourites
        </p>
      </Link>
      <div className="flex flex-col items-center text-white  py-3 px-1 rounded-lg ">
        <img className="size-10 " src={People} alt="" />
        <p className="md:text-[14px] text-[12px] font-semibold pt-1">
          Referrals
        </p>
      </div>
      <Link
        to={"/my-wallet"}
        className={`flex flex-col items-center text-white  py-3 px-1 rounded-lg ${location == '/my-wallet' ? 'bg-black' : ''} `}
      >
        <img className="size-10" src={Wallet} alt="" />
        <p className="md:text-[14px] text-[12px] font-semibold pt-1">
          My Wallets
        </p>
      </Link>
      <div className="flex flex-col text-center items-center text-white  py-3 px-1 rounded-lg ">
        <img className="size-10" src={Game} alt="" />
        <p className="md:text-[14px] text-[12px] font-semibold pt-1">
          Boost Profile
        </p>
      </div>
      <Link to={'/my-tours'} className="flex flex-col items-center text-white  py-3 px-1 rounded-lg ">
        <FiMap className="size-10 text-[#E9CB50]" />
        <p className="md:text-[14px] text-[12px] font-semibold pt-1">
          My Tours
        </p>
      </Link>
      <Link to={'/my-blacklisted-clients'} className="flex text-center flex-col items-center text-white py-3 px-1 rounded-lg ">
        <img className="size-10" src={Wallet} alt="" />
        <p className="md:text-[14px] text-[12px] font-semibold pt-1">
          My Blacklisted Clients
        </p>
      </Link>
      <div className="flex text-center flex-col items-center text-white  py-3 px-1 rounded-lg ">
        <img className="size-10 " src={Wallet} alt="" />
        <p className="md:text-[14px] text-[12px] font-semibold pt-1">
          My Bank Details
        </p>
      </div>
      <div className="flex flex-col text-center items-center text-white  py-3 px-1 rounded-lg ">
        <IoCashOutline className="size-10 text-[#E9CB50] " />
        <p className="md:text-[14px] text-[12px] font-semibold pt-1">
          My Purchase
        </p>
      </div>
      <Link to={'/my-room'} className="flex text-center flex-col items-center text-white py-3 px-1 rounded-lg ">
        <MdOutlineBedroomParent className="size-10 text-[#E9CB50] " />
        <p className="md:text-[14px] text-[12px] font-semibold pt-1">
          My Rooms
        </p>
      </Link>
      <Link to={'/my-events'} className="active text-center flex flex-col items-center text-white  py-3 px-1 rounded-lg">
        <img className="size-10 " src={Book} alt="" />
        <p className="md:text-[14px] text-[12px] font-semibold pt-1">
          My Events
        </p>
      </Link>
      <div className=" text-white text-center flex flex-col items-center py-3 px-1 rounded-lg ">
        <img className="size-10" src={Like} alt="" />
        <p className="md:text-[14px] text-[12px] font-semibold pt-1">
          My Reviews
        </p>
      </div>
      <div className=" flex flex-col text-center items-center text-white  py-3 px-1 rounded-lg ">
        <img className="size-10 " src={Game} alt="" />
        <p className="md:text-[14px] text-[12px] font-semibold pt-1">
          Lucky Draw
        </p>
      </div>
      <div className=" text-white text-center flex flex-col items-center py-3 px-1 rounded-lg ">
        <img className="size-10 " src={Game} alt="" />
        <p className="md:text-[14px] text-[12px] font-semibold pt-1">Lottery</p>
      </div>
      <div className=" text-white text-center flex flex-col items-center py-3 px-1 rounded-lg ">
        <img className="size-10 " src={Tag} alt="" />
        <p className="md:text-[14px] text-[12px] font-semibold pt-1">
          My Discussion
        </p>
      </div>
      <Link to={'/change-password'} className={`text-center  text-white flex flex-col items-center py-3 px-1 rounded-lg ${location == '/change-password' ? 'bg-black' : ''} `}>
        <img className="size-10" src={Like} alt="" />
        <p className="md:text-[14px] text-[12px] font-semibold pt-1">
          Change Password
        </p>
      </Link>
      <div className=" text-white text-center flex flex-col items-center py-3 px-1 rounded-lg ">
        <img className="size-10 " src={Wallet} alt="" />
        <p className="md:text-[14px] text-[12px] font-semibold pt-1">
          Delete Profile
        </p>
      </div>
      <div className=" text-white text-center flex flex-col items-center py-3 px-1 rounded-lg ">
        <TbLogout2 className="size-10 text-[#E9CB50] " />
        <p className="md:text-[14px] text-[12px] font-semibold pt-1">Logout</p>
      </div>
    </div>
  );
};

export default ProfileMenu;
