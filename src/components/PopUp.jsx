import React, { useEffect, useState } from "react";
import Close from "../images/close-icon.svg";
import { differenceInDays, parseISO } from "date-fns";
import { useNavigate } from "react-router-dom";

const PopUp = ({ popClass, popMenu }) => {
  // const navigate = useNavigate();
  // let users = JSON.parse(localStorage.getItem("details"));

  // if (!users?.profile?.user?.user_type) {
  //   return;
  // }

  // const birthDate = parseISO(
  //   users?.profile?.user?.createdAt,
  //   "yyyy-MM-dd",
  //   new Date()
  // );
  // const currentDate = new Date();

  // const day = differenceInDays(currentDate, birthDate);

  return (
    // <div
    //   className={`bg-black/40 duration-500 ${popClass} fixed top-0 z-[999999] flex left-0 w-[100%] h-screen  justify-center`}
    // >
    //   <div className="bg-white w-[80%] md:w-[400px] h-fit mt-28 py-4 rounded-xl">
    //     <div className="flex items-center justify-between border-b-2 px-6 pb-2 border-[#F1D6D6]">
    //       <p className="md:text-xl font-semibold text-red-600">NOTICE</p>
    //       <img
    //         onClick={popMenu}
    //         className="size-4 cursor-pointer"
    //         src={Close}
    //         alt=""
    //       />
    //     </div>

    //     <div className="px-7 py-6">
    //       <p className="text-center font-semibold">
    //         You have less than {7 - Math.abs(day)} days to make payment to
    //         activate your account{" "}
    //       </p>

    //       <button
    //         onClick={() => {
    //           navigate("/my-wallet");
    //           popMenu();
    //         }}
    //         className="text-center hover:bg-[#ffdc4e] duration-500  bg-[#E9CB50] w-[100%] py-3 md:py-4  font-semibold mt-12 rounded-xl"
    //       >
    //         Activate Now
    //       </button>
    //     </div>
    //   </div>
    // </div>

    <div></div>
  );
};

export default PopUp;
