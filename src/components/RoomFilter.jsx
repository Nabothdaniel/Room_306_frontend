import React from "react";

const RoomFilter = ({ RoomClass }) => {
  return (
    <div
      className={`bg-black/40 duration-500 ${RoomClass} fixed top-0 z-[999999] flex left-0 w-[100%] h-screen  justify-center items-center`}
    >
      <div className="bg-white w-[90%] md:w-[40vw] p-8 rounded-xl"></div>
    </div>
  );
};

export default RoomFilter;
