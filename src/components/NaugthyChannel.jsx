import React, { useEffect, useState } from "react";
import Erotic from "../images/Ellipse4.svg";
import { format, parse } from "date-fns";

const NaugthyChannel = ({ item }) => {
  let useD = JSON.parse(localStorage.getItem("details"));
  let users = useD?.profile;

  const [own, setOwn] = useState(false);

  const text = "";
  const images = "";

  const parsedDate = parse(
    item.timestamp,
    "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'",
    new Date()
  );

  const formattedTime = format(parsedDate, "HH:mm");

  if (item.sender.username == (users?.user?.username || users?.username)) {
    return (
      <div className={`justify-end text-[11px] md:text-[14px]  flex`}>
        <div
          className={`bg-[#00AE79] mt-2 w-fit ${
            !(item.content || item.file) && "hidden"
          } rounded-t-[10px] rounded-br-[10px] rounded-bl-[4px] px-3 py-[8px]`}
        >
          {item.file && (
            <img
              className="size-[200px] rounded-[10px] object-cover"
              src={`https://backend.theroom306.com${item.file}`}
            />
          )}
          {item.content && <p className="pt-1">{item.content}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#202D2C] pt-6  text-white">
      <div className="md:text-[14px] text-[11px] pb-2 flex">
        <img
          className="size-[30px] rounded-full"
          src={`https://backend.theroom306.com${item.sender.image}`}
          alt=""
        />
        <div className="flex flex-col mt-1 ml-4">
          <div className="flex">
            <p className="text-[#DADADA] mr-4">{item.sender.username}</p>
            <p className="text-[#A0A8B5] ">{formattedTime}</p>
          </div>

          <div
            className={`bg-[#1F2928] mt-2 w-fit ${
              !(item.content || item.file) && "hidden"
            } rounded-t-[10px] rounded-br-[10px] rounded-bl-[4px] p-2`}
          >
            {item.file && (
              <img
                className="size-[200px] rounded-[10px] object-cover"
                src={`https://backend.theroom306.com${item.file}`}
              />
            )}
            {item.content && <p className="pt-1">{item.content}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NaugthyChannel;
