import React, { useEffect, useRef, useState } from "react";
import { BlogSwiper } from "../components/BlogSwiper";
import Navbar from "../components/Navbar";
import Naughty from "../images/Ellipse.svg";
import SideBar from "../components/SideBar";
import Arrow from "../images/arrow-left.svg";
import ChannelsName from "../components/ChannelsName";
import { Link, useNavigate, useParams } from "react-router-dom";
import NaugthyChannel from "../components/NaugthyChannel";
import Gallery from "../images/gallery.svg";
import Send from "../images/Send.svg";
import {
  useChannelByIdQuery,
  useConversationMessagesQuery,
  useConversationQuery,
  useSendMessageMutation,
} from "../redux/ApiSlice";
import Loading from "../components/Loading";
import toast, { LoaderIcon } from "react-hot-toast";
import axios from "axios";

const PersonalChat = () => {
  const { id } = useParams();
  const { data: converse, isLoading: loaded } = useConversationQuery();
  const { data: messages, isLoading: loading } = useConversationMessagesQuery(
    id,
    {
      pollingInterval: 3000,
    }
  );
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");
  const ref = useRef(null);
  const [send] = useSendMessageMutation();
//   const { data, isLoading } = useChannelByIdQuery(id);

  useEffect(() => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages, messages?.length]);

  if (loading || loaded) {
    return <Loading />;
  }

  const name = converse.filter((item) => item.id == id);

  const handleSend = async () => {
    if (message) {
      try {
        const res = await axios.post(
          `https://room35backend.onrender.com/api/conversations/${id}/messages/send/`,
          { content: message, file: image },
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization:
                "Bearer " + JSON.parse(localStorage.getItem("token")),
            },
          }
        );

        await send();

        setImage(null);
        setMessage("");
        toast.success("Message Sent");
      } catch (err) {
        console.log(err);
      }
    } else {
      toast.error("Input message");
    }
  };

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
                  <Link
                    to={`/escort/${name[0]?.sender?.username}`}
                    className="flex pb-6 items-center"
                  >
                    <img
                      className="size-[50px] rounded-full"
                      src={`https://room35backend.onrender.com${name[0]?.sender.image}`}
                      alt=""
                    />
                    <div className="pl-4 text-white">
                      <p className="font-semibold">
                        {name[0]?.sender.username}
                      </p>
                      {/* <p className="text-[12px]  text-[#DADADA]">
                        {data?.members.length} Members
                      </p> */}
                    </div>
                  </Link>
                  <div className="overflow-y-scroll channel flex-1">
                    {messages?.map((item, index) => {
                      return <NaugthyChannel key={index} item={item} />;
                    })}
                    <div className="pb-8" ref={ref}></div>
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
                            setImage(files[0]);
                          }
                        }}
                      />
                    </div>
                    <img
                      onClick={handleSend}
                      className="size-[24px] mb-1 cursor-pointer"
                      src={Send}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              {/* <div ref={ref}></div> */}
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

export default PersonalChat;
