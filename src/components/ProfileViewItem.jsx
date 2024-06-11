import React, { useEffect, useState } from "react";
import Whatsapp from "../images/whatsapp.svg";
import { EscortProfileSwiper } from "./EscortProfileSwiper";
import { differenceInYears, parse } from "date-fns";
import { useFollowMutation, useUnfollowMutation } from "../redux/EscortApi";
import toast from "react-hot-toast";
import { useLocation, useParams } from "react-router-dom";

const ProfileViewItem = ({ handleBook, user, handleReport, newData }) => {
  let useD = JSON.parse(localStorage.getItem("details"));
  let users = useD?.profile;
  const pathname = useLocation().pathname;

  const { username } = useParams();
  const [follow] = useFollowMutation();
  const [unfollow] = useUnfollowMutation();

  const [followed, setFollowed] = useState(false);
  const [Data, setData] = useState("");
  const birthDate = parse(
    user?.escort_details.date_of_birth,
    "yyyy-MM-dd",
    new Date()
  );

  if (users) {
    useEffect(() => {
      setData(newData?.filter((item) => item?.username == username));
    }, [newData, pathname]);

    useEffect(() => {
      if (Boolean(Data[0]?.username == username)) {
        setFollowed(true);
      } else {
        setFollowed(false);
      }
    }, [Data, newData, pathname]);
  }

  const currentDate = new Date();
  const age = differenceInYears(currentDate, birthDate);

  const handleFollow = async () => {
    if (users) {
      try {
        const res = await follow(user.profile.id).unwrap();
        toast.success(res.message);
      } catch (err) {}
    } else {
      toast.error("Only signed in users can follow");
    }
  };

  const handleUnFollow = async () => {
    try {
      const res = await unfollow(user.profile.id).unwrap();
      toast.success(res?.message);
    } catch (err) {
      toast.error(err?.data?.message);
    }
  };

  return (
    <div className="grid md:grid-cols-2 md:px-4 md:pt-4 py-4 px-6 gap-x-6 h-fit pb-7 md:pb-4  rounded-xl bg-[#1E1E1E] ">
      {user.gallery.length > 0 ? (
        <EscortProfileSwiper data={user.gallery} />
      ) : (
        <img
          className="h-[400px] rounded-xl"
          src={`https://room35backend.onrender.com${user?.profile.image}`}
          alt=""
        />
      )}
      <div className="md:pr-10 md:px-0 px-4">
        <div className="flex justify-between border-b pt-4 pb-3 border-[#23262A] text-white">
          <div className="flex flex-col items-center">
            <p className="text-[24px] font-semibold">4691</p>
            <p className="text-[#B29A9A]">Posts</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[24px] font-semibold">
              {user?.escort_details.user.followers_count}
            </p>
            <p className="text-[#B29A9A]">Followers</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[24px] font-semibold">
              {" "}
              {user?.escort_details.user.following_count}
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
              href={`https://wa.me/${user?.profile?.mobile_number}`}
            >
              <img className="size-5 mr-1" src={Whatsapp} alt="" />
              {user?.profile.mobile_number}
            </a>
          </div>
          <p className="text-[#DADADA] lg:text-[14px] text-[12px]">
            {user?.escort_details.about}
          </p>
        </div>
        <div className="flex justify-around text-white">
          <div className="flex flex-col items-center">
            <p className="xl:text-[20px] md:text-base text-[14px] font-semibold">
              {age}
              <span className="text-[#B29A9A]">yrs</span>
            </p>
            <p className="text-[#B29A9A]">Age</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="xl:text-[20px] md:text-base text-[14px] font-semibold">
              {user.escort_details.weight}
            </p>
            <p className="text-[#B29A9A]">Weight</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="xl:text-[20px] md:text-base text-[14px] font-semibold">
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
        <div className="flex gap-4 text-[#DADADA] justify-center md:justify-normal items-center mt-8">
          {/* <p className="text-[12px] md:text-[14px]">Share Profile:</p>

          <img className="size-7 ml-5" src={Whatsapp} alt="" />
          <img className="size-7 ml-4" src={Youtube} alt="" />
          <img className="size-7 ml-4" src={Messenger} alt="" /> */}

          <button
            onClick={handleReport}
            className={`bg-red-500 ${
              username == users?.user?.username && "hidden"
            } py-1 font-semibold px-3 md:text-base text-[13px] rounded-3xl`}
          >
            Report User
          </button>
          <div className={`${username == users?.user?.username && "hidden"}`}>
            {followed ? (
              <button
                onClick={handleUnFollow}
                className="bg-blue-500 py-1 font-semibold px-3 md:text-base text-[13px] rounded-3xl"
              >
                Unfollow
              </button>
            ) : (
              <button
                onClick={handleFollow}
                className="bg-blue-500 py-1 font-semibold px-3 md:text-base text-[13px] rounded-3xl"
              >
                Follow
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileViewItem;
