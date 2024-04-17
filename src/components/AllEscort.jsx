import React from "react";
import AllEscortTags from "./AllEscortTags";
import AllEscortItems from "./AllEscortItems";

const AllEscort = () => {
  return (
    <div className="py-14 bg-[#121212] px-2">
      <div className="flex justify-between items-center">
        <h1 className="text-white font-semibold text-[24px] pb-6">
          All Escort
        </h1>
        <p className="text-white cursor-pointer">See all</p>
      </div>
      <AllEscortTags />
      <div className="grid grid-cols-4 gap-5 py-8">
        <AllEscortItems />
        <AllEscortItems />
        <AllEscortItems />
        <AllEscortItems />
        <AllEscortItems />
        <AllEscortItems />
        <AllEscortItems />
        <AllEscortItems />
      </div>
    </div>
  );
};

export default AllEscort;
