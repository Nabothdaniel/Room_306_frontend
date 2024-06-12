import React from "react";
import Naughty from "../images/Ellipse.svg";
import Lgb from "../images/Ellipse3.svg";
import Discussion from "../images/Ellipse1.svg";
import Erotic from "../images/Ellipse4.svg";
import Testimonial from "../images/Ellipse2.svg";
import Louge from "../images/Ellipse5.svg";
import { NavLink, useLocation } from "react-router-dom";
import { useChannelQuery, useConversationQuery } from "../redux/ApiSlice";
import Loading from "./Loading";
import { formatDistanceToNow, parse } from "date-fns";

const ChannelsName = () => {
  const users = JSON.parse(localStorage.getItem("details"));
  const location = useLocation();
  const { data, isLoading } = useChannelQuery();
  const { data: converse, isLoading: loading } = useConversationQuery(1, {
    skip: !users,
  });

  if (isLoading || loading) {
    return <Loading />;
  }

  return (
    <div className="px-[9px] flex flex-col gap-y-[10px]">
      {data?.map((item, index) => {
        const parsedDate = parse(
          item.timestamp,
          "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'",
          new Date()
        );
        const formattedTimeAgo = formatDistanceToNow(parsedDate, {
          addSuffix: true,
        })
          .replace("about", "")
          .replace("hours", "hrs");
        return (
          <NavLink
            key={index}
            style={({ isActive }) => {
              isActive ? "bg-[#00AE791A]" : "";
            }}
            to={`/channels/${item._id}`}
            className={`flex  ${
              location.pathname == `/channels/${item._id}`
                ? "bg-[#00AE791A]"
                : ""
            } rounded-[12px] p-[12px] hover:bg-[#202D2C] duration-700 text-white items-center`}
          >
            <img
              className="size-[48px] rounded-full"
              src={`https://theroom306.com${item.image}`}
              alt=""
            />
            <div className="pl-4 md:block md:w-auto flex justify-between items-center w-full">
              <p className="font-semibold">{item.name}</p>
              <p className="text-[12px]  text-[#DADADA]">{formattedTimeAgo}</p>
            </div>
          </NavLink>
        );
      })}

      {converse?.map((item, index) => {
        const parsedDate = parse(
          item.created_at,
          "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'",
          new Date()
        );
        const formattedTimeAgo = formatDistanceToNow(parsedDate, {
          addSuffix: true,
        })
          .replace("about", "")
          .replace("hours", "hrs");
        return (
          <NavLink
            key={index}
            style={({ isActive }) => {
              isActive ? "bg-[#00AE791A]" : "";
            }}
            to={`/chat/${item.id}`}
            className={`flex  ${
              location.pathname == `/chat/${item.id}` ? "bg-[#00AE791A]" : ""
            } rounded-[12px] p-[12px] hover:bg-[#202D2C] duration-700 text-white items-center`}
          >
            <div>
              {item.sender.username ==
              (users?.user?.username || users?.username) ? (
                <img
                  className="size-[48px] rounded-full"
                  src={`https://theroom306.com${item.recipient.image}`}
                  alt=""
                />
              ) : (
                <img
                  className="size-[48px] rounded-full"
                  src={`https://theroom306.com${item.sender.image}`}
                  alt=""
                />
              )}
            </div>
            <div className="pl-4 md:block md:w-auto flex justify-between items-center w-full">
              <div>
                {" "}
                {item.sender.username ==
                (users?.user?.username || users?.username) ? (
                  <p className="font-semibold">{item.recipient.username}</p>
                ) : (
                  <p className="font-semibold">{item.sender.username}</p>
                )}
              </div>
              <p className="text-[12px]  text-[#DADADA]">{formattedTimeAgo}</p>
            </div>
          </NavLink>
        );
      })}

      {/* <NavLink
        to={"/channels/naughty-room"}
        className="flex  rounded-[12px] hover:bg-[#202D2C] duration-700 p-[12px] text-white items-center"
      >
        <img className="size-[32px]" src={Discussion} alt="" />
        <div className="pl-4 md:block md:w-auto flex justify-between items-center w-full">
          <p className="font-semibold">Discussion</p>
          <p className="text-[12px] text-[#DADADA]">11 hrs ago</p>
        </div>
      </NavLink>
      <NavLink
        to={"/channels/naughty-room"}
        className="flex  rounded-[12px] hover:bg-[#202D2C] duration-700 p-[12px] text-white items-center"
      >
        <img className="size-[32px]" src={Erotic} alt="" />
        <div className="pl-4 md:block md:w-auto flex justify-between items-center w-full">
          <p className="font-semibold">Erotic Stories</p>
          <p className="text-[12px] text-[#DADADA]">11 hrs ago</p>
        </div>
      </NavLink>
      <NavLink
        to={"/channels/naughty-room"}
        className="flex  rounded-[12px] hover:bg-[#202D2C] duration-700 p-[12px] text-white items-center"
      >
        <img className="size-[32px]" src={Testimonial} alt="" />
        <div className="pl-4 md:block md:w-auto flex justify-between items-center w-full">
          <p className="font-semibold">Testimonial</p>
          <p className="text-[12px] text-[#DADADA]">11 hrs ago</p>
        </div>
      </NavLink>
      <NavLink
        to={"/channels/naughty-room"}
        className="flex  rounded-[12px] hover:bg-[#202D2C] duration-700 p-[12px] text-white items-center"
      >
        <img className="size-[32px]" src={Louge} alt="" />
        <div className="pl-4 md:block md:w-auto flex justify-between items-center w-full">
          <p className="font-semibold">Louge</p>
          <p className="text-[12px] text-[#DADADA]">11 hrs ago</p>
        </div>
      </NavLink> */}
    </div>
  );
};

export default ChannelsName;
