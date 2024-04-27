import React, { useState } from "react";
import { BlogSwiper } from "../components/BlogSwiper";
import Navbar from "../components/Navbar";
import Naughty from "../images/Ellipse.svg";
import SideBar from "../components/SideBar";
import Arrow from "../images/arrow-left.svg";
import ChannelsName from "../components/ChannelsName";
import { useNavigate } from "react-router-dom";
import NaugthyChannel from "../components/NaugthyChannel";
import Gallery from "../images/gallery.svg";
import Send from "../images/Send.svg";

const NaughtyRoom = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");
  const [text, setText] = useState(null);

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
                <div className="bg-[#14211F] pb-16 md:pb-0 h-screen  hidden md:block  rounded-s-[30px]">
                  <h1 className="text-white p-[24px]  text-[24px] font-semibold">
                    Chats
                  </h1>
                  <div className="md:pt-[90px] pt-[30px] ">
                    <ChannelsName />
                  </div>
                </div>
                <div className="md:col-span-2 bg-[#202D2C] flex flex-col p-6 rounded-[30px] h-screen w-[100%] md:rounded-none md:rounded-e-[30px]">
                  <div className="flex pb-4">
                    <img className="size-[40px]" src={Naughty} alt="" />
                    <div className="pl-4 text-white">
                      <p className="font-semibold">Naughty Room</p>
                      <p className="text-[12px]  text-[#DADADA]">24 Members</p>
                    </div>
                  </div>
                  <div className="overflow-y-scroll channel flex-1">
                    <NaugthyChannel images={image} text={text} />
                  </div>
                  <div className="flex gap-x-4 md:gap-x-8 pt-5 md:px-4 items-center">
                    <div className="bg-[#14211F] flex-1 items-center py-3 px-4 rounded-[360px] flex">
                      <input
                        onChange={(e) => setMessage(e.target.value)}
                        className="bg-transparent text-white/50 w-[85%] placeholder-white/50 md:flex-1"
                        placeholder="Type a message"
                        type="text"
                        value={message}
                      />
                      <img
                        onClick={() => document.querySelector(".input").click()}
                        className="size-[24px] ml-1 cursor-pointer"
                        src={Gallery}
                        alt=""
                      />
                      <input
                        type="file"
                        name="file"
                        id="file"
                        className="input"
                        hidden
                        onChange={({ target: { files } }) => {
                          if (files) {
                            setImage(URL.createObjectURL(files[0]));
                          }
                        }}
                      />
                    </div>
                    <img
                      onClick={() => {
                        setText((prev) => prev + message);
                        setMessage("");
                      }}
                      className="size-[24px] mb-1 cursor-pointer"
                      src={Send}
                      alt=""
                    />
                  </div>
                </div>
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
      </div>
    </div>
  );
};

export default NaughtyRoom;
