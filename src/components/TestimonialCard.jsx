import React from "react";
import Profile from "../images/profile.jpeg";

const TestimonialCard = () => {
  return (
    <div className="bg-[#1E1E1E] py-12 rounded-2xl">
      <img
        className="size-[100px] mx-auto after:contents-[''] after:absolute after:w-32 gradient rounded-full "
        src={Profile}
        alt=""
      />
      <div className="text-center text-white px-10">
        <p className="font-semibold py-2 text-[18px]">Jason</p>
        <p className="text-[14px] lg:text-[16px]">
          Admin please can there be restrictions for males that access this site
          free? Cause most of them just come copy contacts and don't even
          register just to waste your money making time. Please it should be
          viewed only buy clients
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
