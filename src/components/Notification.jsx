import React, { useEffect, useState } from "react";
import {
  useNotificationByIdQuery,
  useNotificationQuery,
} from "../redux/ApiSlice";
import Loading from "./Loading";
import { format, parseISO } from "date-fns";
import ReadNote from "./ReadNote";

const Notification = ({ data, load }) => {
  const [view, setView] = useState("");
  if (load) {
    return <Loading />;
  }

  const handleView = (id) => {
    setView(id);
  };

  return (
    <div className="">
      <h1 className="text-white md:text-xl font-semibold pb-6">
        Notifications
      </h1>
      <div className="overflow-y-scroll  channel h-[400px] space-y-4">
        {data?.map((item, index) => {
          const reviewDate = parseISO(item.createdAt);
          const formattedDate = format(reviewDate, "MMMM dd, yyyy 'at' h:mm a");

          return (
            <div
              key={index}
              onClick={() => handleView(item.id)}
              className="text-neutral-400 cursor-pointer pl-6 font-medium"
            >
              <div className={`${view == item.id ? "" : "hidden"}`}>
                {view && <ReadNote id={view} />}
              </div>
              <p
                className={`${
                  !item.is_read && "text-white"
                } md:text-base text-[14px]`}
              >
                {item.message}
              </p>
              <p className="md:text-[12px] text-[10px] font-normal">
                {formattedDate}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Notification;
