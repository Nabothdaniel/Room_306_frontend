import React from "react";
import Profile from "../images/profile.jpeg";

const TestimonialCard = ({ items }) => {
  return (
    <div className="bg-[#1E1E1E] py-12 rounded-2xl">
      <img
        className="size-[100px] mx-auto  rounded-full "
        src={`https://theroom306.com${items.user.image}`}
        alt=""
      />
      <div className="text-center text-white px-10">
        <p className="font-semibold py-2 text-[18px]">
          {items.user.display_name}
        </p>
        <p className="text-[14px] lg:text-[16px]">{items.content}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
