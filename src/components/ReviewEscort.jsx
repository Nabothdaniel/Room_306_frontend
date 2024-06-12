import React from "react";
import Blog from "../images/blog.jpeg";
import { format, parseISO } from "date-fns";

const ReviewEscort = ({ items }) => {
  const reviewDate = parseISO(items.created_at);
  const formattedDate = format(reviewDate, "MMMM dd, yyyy 'at' h:mm a");
  return (
    <div className="flex py-3 px-4 mb-4 rounded-xl shadow-2xl bg-black">
      <img
        className="size-[100px] object-cover rounded-lg"
        src={`https://backend.theroom306.com${items.user.image}`}
        alt=""
      />
      <div className="ml-5">
        <h2 className="font-semibold md:text-2xl capitalize text-[20px] cursor-pointer">
          {items.reviewer}
        </h2>
        <p className="text-[12px]">{formattedDate}</p>
        <p className="text-base">{items.review_text}</p>
      </div>
    </div>
  );
};

export default ReviewEscort;
