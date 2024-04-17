import React from "react";
import Navbar from "./Navbar";
import EscortOne from "./EscortOne";
import EscortBanner from "./EscortBanner";
import AllEscort from "./AllEscort";


const MainContent = () => {
  return (
    <div className="flex-1 h-full pt-10 pl-3 pr-10">
      <Navbar />
      <EscortOne />
      <EscortBanner />
      <AllEscort />
    </div>
  );
};

export default MainContent;
