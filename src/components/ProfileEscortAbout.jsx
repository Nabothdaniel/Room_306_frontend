import { format, parseISO } from "date-fns";
import React from "react";

const ProfileEscortAbout = ({ user, aboutClass }) => {
  const parsedDate = parseISO(user.user.createdAt);
  const formattedDate = format(parsedDate, "MMMM d, yyyy");

  return (
    <div className={`pt-10 text-[#DADADA] ${aboutClass}`}>
      <h3 className="text-[#B29A9A] pb-4 text-[14px]">Bio</h3>
      <p className="pb-4 font-semibold text-[15px] lg:text-base">
        {user.about}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 text-[15px] pt-3 gap-y-6 md:gap-y-8">
        <div className="flex flex-col justify-center">
          <h4 className="text-[#B29A9A] text-[14px]">Gender</h4>
          {user.isFemale && <p className="font-semibold">Female</p>}
          {user.isMale && <p className="font-semibold">Male</p>}
        </div>
        <div className="flex flex-col justify-center">
          <h4 className="text-[#B29A9A] text-[14px]">Sexual Orientation</h4>
          <p className="font-semibold">{user.sexual_orientation}</p>
        </div>
        <div className="flex flex-col md:col-span-2 justify-center">
          <h4 className="text-[#B29A9A] text-[14px]">Build</h4>
          <p className="font-semibold">{user.build}</p>
        </div>

        <div className="flex flex-col justify-center">
          <h4 className="text-[#B29A9A] text-[14px]">Bust Size</h4>
          <p className="font-semibold">{user.bust_size}</p>
        </div>
        <div className="flex flex-col justify-center">
          <h4 className="text-[#B29A9A] text-[14px]">Looks</h4>
          <p className="font-semibold">{user.looks}</p>
        </div>
        <div className="flex flex-col justify-center">
          <h4 className="text-[#B29A9A] text-[14px]">Ethnicity</h4>
          <p className="font-semibold">{user.ethnicity}</p>
        </div>
        <div className="flex flex-col justify-center">
          <h4 className="text-[#B29A9A] text-[14px]">Smoker</h4>
          {user.is_smoker ? (
            <p className="font-semibold">Yes</p>
          ) : (
            <p className="font-semibold">No</p>
          )}
        </div>

        <div className="flex flex-col justify-center">
          <h4 className="text-[#B29A9A] text-[14px]">Education</h4>
          <p className="font-semibold">{user.education}</p>
        </div>
        <div className="flex flex-col justify-center">
          <h4 className="text-[#B29A9A] text-[14px]">Occupation</h4>
          <p className="font-semibold">{user.occupation}</p>
        </div>
        <div className="flex flex-col justify-center">
          <h4 className="text-[#B29A9A] text-[14px]">Country</h4>
          <p className="font-semibold">{user.user.country}</p>
        </div>
        <div className="flex flex-col justify-center">
          <h4 className="text-[#B29A9A] text-[14px]">State</h4>
          <p className="font-semibold">{user.user.state}</p>
        </div>

        <div className="flex flex-col justify-center">
          <h4 className="text-[#B29A9A] text-[14px]">City</h4>
          <p className="font-semibold">{user.user.city}</p>
        </div>
        <div className="flex flex-col justify-center">
          <h4 className="text-[#B29A9A] text-[14px]">Last Login</h4>
          <p className="font-semibold">February 29, 2024</p>
        </div>
        <div className="flex flex-col justify-center">
          <h4 className="text-[#B29A9A] text-[14px]">Registration Login</h4>
          <p className="font-semibold">{formattedDate}</p>
        </div>
      </div>
      <p className="text-white uppercase text-center pt-16">
        Profile Viewed{" "}
        <span className="bg-red-400 px-3 rounded-3xl mr-1 py-1 font-semibold">
          {" "}
          {user.user.views}
        </span>
        Times
      </p>
      <div className="border-b-2 pt-10  font-semibold  text-white border-[#393C49] py-3">
        <p>Rates (NGN)</p>
      </div>
      <div className="grid grid-cols-3 pt-8 gap-y-6">
        <div></div>
        {user.incall_short_time ||
        user.incall_overnight ||
        user.incall_weekend ? (
          <p className="text-[#B29A9A] text-[14px]">In call</p>
        ) : (
          <div></div>
        )}
        {user.outcall_short_time ||
        user.outcall_overnight ||
        user.outcall_weekend ? (
          <p className="text-[#B29A9A] text-[14px]">Out call</p>
        ) : (
          <div></div>
        )}
        <p className="text-[#B29A9A] text-[14px]">Short Time</p>
        {user.incall_short_time ? (
          <p className="font-semibold">{user.incall_short_time}</p>
        ) : (
          <div></div>
        )}
        {user.outcall_short_time ? (
          <p className="font-semibold">{user.outcall_short_time}</p>
        ) : (
          <div></div>
        )}
        <p className="text-[#B29A9A] text-[14px]">Over Night</p>
        {user.incall_overnight ? (
          <p className="font-semibold">{user.incall_overnight}</p>
        ) : (
          <div></div>
        )}
        {user.outcall_overnight ? (
          <p className="font-semibold">{user.outcall_overnight}</p>
        ) : (
          <div></div>
        )}
        <p className="text-[#B29A9A] text-[14px]">Weekend</p>
        {user.incall_weekend ? (
          <p className="font-semibold">{user.incall_weekend}</p>
        ) : (
          <div></div>
        )}
        {user.outcall_weekend ? (
          <p className="font-semibold">{user.outcall_weekend}</p>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default ProfileEscortAbout;
