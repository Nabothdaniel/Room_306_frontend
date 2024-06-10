import React from "react";
import { BlogSwiper } from "../components/BlogSwiper";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Arrow from "../images/arrow-left.svg";
import ChannelsName from "../components/ChannelsName";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";


const Channels = () => {
  const navigate = useNavigate();

  return (
    <div className="block md:flex overflow-x-clip max-w-[1740px] mx-auto">
      <SideBar />
      <div className="flex-1 md:w-[80%] pt-6 md:pt-14 px-3 md:px-6 lg:px-10">
        <Navbar
          Headervalue={"Welcome to Room 306"}
          textValue={"Explore our escort at your own pace"}
        />

        <div className="md:pt-14 pt-3">
          <div
            className="  grid grid-cols-1
         lg:grid-cols-4 gap-6"
          >
            <div className="lg:col-span-3">
              <h2
                onClick={() => navigate(-1)}
                className="text-white font-semibold cursor-pointer flex items-center"
              >
                <img className="size-5 mr-1" src={Arrow} alt="" />
                Back
              </h2>
              <div className="md:col-span-3 pt-2 pb-12 md:pb-20 grid md:grid-cols-3">
                <div className="bg-[#14211F] pb-16 md:pb-0 h-screen rounded-[30px] md:rounded-none md:rounded-s-[30px]">
                  <h1 className="text-white p-[24px] text-[24px] font-semibold">
                    Chats
                  </h1>
                  <div className="md:pt-[90px] pt-[30px] ">
                    <ChannelsName />
                  </div>
                </div>
                <div className="col-span-2 hidden md:block pb-16 md:pb-0  h-screen bg-[#202D2C] rounded-e-[30px]"></div>
              </div>
            </div>
            <div>
              <h2 className="text-center text-white font-medium pb-6 lg:pb-3 text-xl">
                Fresh Escorts
              </h2>
              <BlogSwiper />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Channels;
