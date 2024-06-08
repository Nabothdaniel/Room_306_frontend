import React from "react";
import Check from "../images/Check.svg";

const ProfileService = ({ item }) => {
  return (
    <div className="flex items-center font-semibold text-white text-[14px]">
      <img className="size-4 mr-2" src={Check} alt="" />
     {item.name}
    </div>
  );
};

export default ProfileService;
