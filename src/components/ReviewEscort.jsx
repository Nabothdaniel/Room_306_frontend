import React from "react";
import Blog from "../images/blog.jpeg";

const ReviewEscort = ({ items }) => {
  return (
    <div className="flex py-3 px-4 mb-4 rounded-xl shadow-2xl bg-black">
      <img className="size-[100px] object-cover rounded-lg" src={Blog} alt="" />
      <div className="ml-5">
        <h2 className="font-semibold md:text-2xl capitalize text-[20px] cursor-pointer">
          {items.reviewer}
        </h2>
        <p className="text-[12px]">8 months ago</p>
        <p className="text-base">{items.review_text}</p>
      </div>
    </div>
  );
};

export default ReviewEscort;
