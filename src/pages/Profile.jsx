import React from "react";
import MainProfile from "../components/MainProfile";
import SideBar from "../components/SideBar";

const Profile = () => {
  return (
    <div>
      <div className="block md:flex h-screen max-w-[1740px] mx-auto px-4 md:px-8">
        <SideBar />
        <MainProfile />
      </div>
    </div>
  );
};

export default Profile;
