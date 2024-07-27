import React from "react";
import Survey from "../../images/survey.png";
import SideBar from "../../components/SideBar";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

const EscortSurvey = () => {
  return (
    <div className="block md:flex overflow-x-clip max-w-[1740px] mx-auto">
      <SideBar />

      <div className="flex-1 md:w-[80%] px-4 pb-8 pt-6 md:pt-14 md:px-10">
        <Navbar
          Headervalue={"Welcome to Room 306"}
          textValue={"Explore our escort at your own pace"}
        />

        <div className="md:py-8 pb-8">
          <div className="flex justify-between items-center pb-2 pt-2 md:pt-8">
            <h2 className="text-white md:py-4 md:pb-6 md:text-2xl font-semibold">
              Escort Details
            </h2>

            <p className="text-white md:text-4xl text-3xl font-semibold">
              <span className="text-[#B29A9A] md:text-2xl text-xl">
                Step <span>5/</span>
              </span>
              5
            </p>
          </div>
          <div className="rounded-xl px-10 py-36 pl-12 bg-[#1E1E1E] ">
            <div className="flex flex-col justify-center items-center">
              <img className="w-[600px] min-w-[580px]" src={Survey} alt="" />
              <p className="text-white px-[15px] text-lg text-center font-semibold py-5">
                All details has been survey, you can continue your activities
              </p>
              <Link
                to={"/profile"}
                className="bg-[#E9CB50] block text-center text-[#171717] py-4 w-[150px] font-medium rounded-xl"
              >
                Go to Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EscortSurvey;
