import React from "react";
import Blog from "../images/blog.jpeg";

const BookingItem = () => {
  return (
    <div className="flex pt-5 duration-500 pb-4 items-center">
      <p className="w-[300px] flex items-center justify-center gap-x-3 cursor-pointer font-semibold">
        <img className="size-[50px] rounded-full" src={Blog} alt="" />
        AdamFresh
      </p>
      <p className="w-[300px] text-center">One Hour</p>
      <p className="w-[300px] text-center">10-23-2024</p>
      <p className="w-[300px] text-center">
        I will love us to me on sunday, so tell me your price so that we can
        negotiate better
      </p>
      <div className="w-[300px] text-center flex justify-center gap-x-3">
        <p className="bg-green-300 text-[12px] shadow-2xl  py-1 text-black px-2 rounded-3xl cursor-pointer font-semibold">
          Accept
        </p>
        <p className="bg-red-400 text-[12px] shadow-2xl py-1 text-black px-2 rounded-3xl cursor-pointer font-semibold">
          Cancel
        </p>
      </div>
    </div>
  );
};

export default BookingItem;
