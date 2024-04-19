import React from "react";
import Navbar from "./Navbar";
import EscortOne from "./EscortOne";
import EscortBanner from "./EscortBanner";
import AllEscort from "./AllEscort";

const MainContent = () => {
  return (
    <div className="flex-1 h-full md:w-[80%] pt-16 md:px-10">
      <Navbar
        Headervalue={"Welcome to Room 306"}
        textValue={"Explore our escort at your own pace"}
      />
      <EscortOne />
      <EscortBanner />
      <AllEscort />
    </div>
  );
};

export default MainContent;
