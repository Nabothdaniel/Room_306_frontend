import React from "react";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import { BlogSwiper } from "../components/BlogSwiper";
import Arrow from "../images/arrow-left.svg";
import ProfileViewItem from "../components/ProfileViewItem";
import ProfileViewItems from "../components/ProfileViewItems";

const ProfileView = () => {
  return (
    <div className="block md:flex overflow-x-clip h-screen max-w-[1740px] mx-auto">
      <SideBar />

      <div className="flex-1 md:w-[80%] pt-2 md:pt-14 px-5 lg:px-10">
        <Navbar
          Headervalue={"Welcome to Room 306"}
          textValue={"Explore our escort at your own pace"}
        />
        <div
          className="md:pb-6 md:pt-10  grid grid-cols-1
         lg:grid-cols-4 gap-6"
        >
          <div className="lg:col-span-3  pb-10">
            <h2 className="text-white pb-4 font-semibold cursor-pointer flex items-center">
              <img className="size-5 mr-1" src={Arrow} alt="" />
              Back
            </h2>
            <ProfileViewItem />
            <ProfileViewItems />
          </div>

          <div className="mt-5 lg:mt-0">
            <h2 className="text-center text-white font-medium pb-6 lg:pb-2 text-xl">
              Fresh Escorts
            </h2>
            <div>
              <BlogSwiper />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
