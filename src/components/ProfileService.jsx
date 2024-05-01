import React from "react";
import Check from "../images/Check.svg";

const ProfileService = ({ serviceClass }) => {
  return (
    <div className="flex items-center font-semibold text-white text-[14px]">
      <img className="size-4 mr-2" src={Check} alt="" />
      Blow Job
    </div>
  );
};

export default ProfileService;
