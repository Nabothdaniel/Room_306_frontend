import React from "react";
import EscortDetailsOne from "../components/EscortDetails/EscortDetailsOne";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import EscortDetailsTwo from "../components/EscortDetails/EscortDetailsTwo";
import EscortDetailsFive from "../components/EscortDetails/EscortDetailsFive";
import EscortDetailsSecFive from "../components/EscortDetails/EscortDetailsSecFive";
import EscortSurvey from "../components/EscortDetails/EscortSurvey";

const EscortDetails = () => {
  return (
    <div className="block md:flex overflow-x-clip max-w-[1740px] mx-auto px-4 md:px-8">
      <SideBar />

      <div className="flex-1 md:w-[80%] pt-16 md:px-10">
        <Navbar
          Headervalue={"Welcome to Room 306"}
          textValue={"Explore our escort at your own pace"}
        />

        <div className="py-8">
          <div className="flex justify-between pt-8">
            <h2 className="text-white py-4 pb-6 text-2xl font-semibold">
              Escort Details
            </h2>

            <p className="text-white text-4xl font-semibold">
              <span className="text-[#B29A9A] text-2xl">
                Step <span>1/</span>
              </span>
              6
            </p>
          </div>
          {/* <EscortDetailsOne /> */}
          {/* <EscortDetailsTwo /> */}
          <EscortDetailsFive />
          {/* <EscortDetailsSecFive /> */}
          {/* <EscortSurvey /> */}
        </div>
      </div>
    </div>
  );
};

export default EscortDetails;
