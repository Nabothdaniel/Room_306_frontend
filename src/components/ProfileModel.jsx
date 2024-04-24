import React from "react";
import Close from "../images/close-icon.svg";

const ProfileModel = () => {
  return (
    <div
      className={`bg-black/40 duration-500  fixed top-0 z-[999999] left-0 w-[100%] h-screen flex justify-center items-center`}
    >
      <div className="bg-[#1E1E1E] overflow-hidden flex flex-col md:h-[444px]  -mt-6 md:w-[570px] w-[90%] z-[9999999] rounded-3xl mx-auto ">
        <div className="border-b-2 p-4 flex justify-between text-white items-center font-semibold px-8 text-[20px] border-[#F1D6D6]">
          <h3 className="text-[#F1D6D6]">Profile Menu</h3>
          <img
            className="size-3 cursor-pointer text-[#F1D6D6]"
            src={Close}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileModel;
