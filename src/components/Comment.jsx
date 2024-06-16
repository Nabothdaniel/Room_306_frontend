import React, { useEffect, useRef, useState } from "react";
import Send from "../images/Send.svg";
import Close from "../images/close-icon.svg";
import { FaPlus } from "react-icons/fa";
import { useCommentMutation, useGetCommentQuery } from "../redux/EscortApi";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { format, parseISO } from "date-fns";

const Comment = ({ commentClass, handleComment }) => {
  const { id } = useParams();
  const { data, isLoading } = useGetCommentQuery(id);
  const [message, setMessage] = useState("");
  const [comment] = useCommentMutation();
  const ref = useRef(null);

  useEffect(() => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [data]);

  const handleSend = async () => {
    try {
      const res = await axios.post(
        `https://backend.theroom306.com/api/escort/escort/video_comment/${id}/`,
        { comment: message },
        {
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
        }
      );
      await comment();
      setMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className={`bg-black/40 duration-500 ${commentClass} fixed top-0 z-[999999] flex left-0 w-[100%] h-full items-center justify-center`}
    >
      <div className="md:col-span-2 bg-[#202D2C] flex flex-col p-6 h-[80vh] w-[90%] md:w-[600px] rounded-[30px]">
        <div className="flex text-white items-center justify-between border-b-2 px-6 pb-2 border-[#F1D6D6]">
          <h2 className="md:text-2xl font-semibold text-xl">Comments</h2>
          {/* <img
            //   onClick={handleReview}
            className="size-8  cursor-pointer"
            src={Close}
            alt=""
          /> */}
          <FaPlus
            onClick={handleComment}
            className="size-7 rotate-45 cursor-pointer"
          />
        </div>

        <div className="overflow-y-scroll channel flex-1">
          {/* {messages?.map((item, index) => {
            return <NaugthyChannel key={index} item={item} />;
          })} */}
          {data?.map((item, index) => {
            const reviewDate = parseISO(item.createdAt);
            const formattedDate = format(
              reviewDate,
              "MMMM dd, yyyy 'at' h:mm a"
            );
            return (
              <div key={index} className="flex text-white pt-10 pb-4">
                <div className="ml-5">
                  <h2 className="font-semibold md:text-md text-base">
                    {item.name}
                  </h2>
                  <p className="text-[12px] text-white/60">{formattedDate}</p>
                  <p className="pt-2 text-[14px]">{item.comment}</p>
                </div>
              </div>
            );
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
  );
};

export default Comment;
