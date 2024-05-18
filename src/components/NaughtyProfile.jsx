import React from "react";
import NaughtProfileItem from "./NaughtProfileItem";

const NaughtyProfile = ({ naughtClass }) => {
  return (
    <div
      className={`${naughtClass} bg-[#1e1e1e] gap-3 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  pt-4 pb-10 px-5 rounded-xl mt-10`}
    >
      <NaughtProfileItem />
      <NaughtProfileItem />
      <NaughtProfileItem />
      <NaughtProfileItem />
    </div>
  );
};

export default NaughtyProfile;




