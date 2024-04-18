import React from "react";
import Navbar from "./Navbar";
import EscortOne from "./EscortOne";
import EscortBanner from "./EscortBanner";
import AllEscort from "./AllEscort";

const MainContent = () => {
  return (
    <div className="flex-1 h-full md:w-[90%] pt-10 md:px-10">
      <Navbar />
      <EscortOne />
      <EscortBanner />
      <AllEscort />
    </div>
  );
};

export default MainContent;
