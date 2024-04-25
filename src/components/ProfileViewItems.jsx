import React from "react";
import ProfileViewAbout from "./ProfileViewAbout";

const ProfileViewItems = () => {
  return (
    <>
      <div className="border-b-2 pt-6 flex justify-between relative md:justify-normal font-semibold items-center text-white border-[#393C49] py-3">
        <p className="md:mr-10 before:contents-[''] before:absolute before:-bottom-[2px] before:w-[50px] before:h-[3px] before:rounded-lg before:bg-[#E9CB50]  ">
          About
        </p>
        <p className="md:mr-10">Gallery</p>
        <p className="md:mr-10">Review</p>
        <p className="md:mr-10">Naughty</p>
        <p className="">Services</p>
      </div>

      <ProfileViewAbout />
    </>
  );
};

export default ProfileViewItems;
