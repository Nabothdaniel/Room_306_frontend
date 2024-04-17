import React from "react";
import Navbar from "./Navbar";
import ProfileHero from "./ProfileHero";


const MainProfile = () => {
  return (
    <div className="flex-1 h-full pt-10 px-10">
      <Navbar />
      <ProfileHero />
    </div>
  );
};

export default MainProfile;
