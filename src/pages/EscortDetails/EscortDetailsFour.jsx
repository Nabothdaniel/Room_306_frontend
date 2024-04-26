import React from "react";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";
import { Link } from "react-router-dom";

const EscortDetailsFour = () => {
  return (
    <div className="block md:flex overflow-x-clip max-w-[1740px] mx-auto">
      <SideBar />

      <div className="flex-1 md:w-[80%] px-4 pt-6 md:pt-14 md:px-10">
        <Navbar
          Headervalue={"Welcome to Room 306"}
          textValue={"Explore our escort at your own pace"}
        />

        <div className="md:py-8 pb-8">
          <div className="flex justify-between items-center md:pb-6 pt-2 pb-2 md:pt-8">
            <h2 className="text-white md:py-4 md:text-2xl font-semibold">
              Escort Details
            </h2>

            <p className="text-white md:text-4xl text-3xl font-semibold">
              <span className="text-[#B29A9A] text-xl md:text-2xl">
                Step <span>4/</span>
              </span>
              6
            </p>
          </div>
          <div className="rounded-xl lg:px-10  px-4 py-6 md:px-12 md:py-14 bg-[#1E1E1E] ">
            <h3 className="md:text-[20px] text-white md:pb-4 font-semibold">
              At least One Rate <span className="text-[#E9CB50]">*</span>
            </h3>
            <label
              className="text-white pt-5 flex flex-col"
              htmlFor="ethnicity"
            >
              <span className="font-semibold text-[14px] md:text-base pb-1">
                Currency<span className="text-[#E9CB50]">*</span>
              </span>
              <div className=" max-w-[900px] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
                <select
                  className="w-[100%] bg-[#F0F2F5] py-[10px] md:py-[14px] outline-none"
                  name="currency"
                  id="currency"
                >
                  <option value="">Choose Here</option>
                </select>
              </div>
            </label>
            <div className="pt-9">
              <h3 className="text-[18px] pb-3 font-semibold text-white">
                Incall
              </h3>
              <label
                className="text-white pb-2 pt-5 md:items-center md:flex-row flex-col md:justify-between  flex max-w-[700px]"
                htmlFor="1-hour"
              >
                <span className="font-semibold text-[14px] md:text-base pb-2 md:pb-1 ">
                  1 hours
                </span>
                <div className=" md:w-[80%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
                  <select
                    className="w-[100%] bg-[#F0F2F5] py-[10px] md:py-[14px] outline-none"
                    name="1-hour"
                    id="1-hour"
                  >
                    <option value="">Choose here</option>
                    <option value="all">All</option>
                    <option value="asian">Asian</option>
                    <option value="black">Black</option>
                    <option value="indian">Indian</option>
                    <option value="latino">Latino</option>
                    <option value="middle eastern">Mid Eastern</option>
                    <option value="mix-race">Mix Race</option>
                    <option value="other">Other</option>
                    <option value="others">Others</option>
                    <option value="white">White</option>
                  </select>
                </div>
              </label>
              <label
                className="text-white pb-2 pt-5 md:items-center md:flex-row flex-col md:justify-between flex max-w-[700px]"
                htmlFor="overnight"
              >
                <span className="font-semibold text-[14px] md:text-base pb-2 md:pb-1 ">
                  Over Night
                </span>
                <div className=" md:w-[80%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
                  <select
                    className="w-[100%] bg-[#F0F2F5] py-[10px] md:py-[14px] outline-none"
                    name="overnight"
                    id="overnight"
                  >
                    <option value="">Choose here</option>
                    <option value="all">All</option>
                    <option value="asian">Asian</option>
                    <option value="black">Black</option>
                    <option value="indian">Indian</option>
                    <option value="latino">Latino</option>
                    <option value="middle eastern">Mid Eastern</option>
                    <option value="mix-race">Mix Race</option>
                    <option value="other">Other</option>
                    <option value="others">Others</option>
                    <option value="white">White</option>
                  </select>
                </div>
              </label>
              <label
                className="text-white pt-5 md:items-center md:flex-row flex-col md:justify-between flex max-w-[700px]"
                htmlFor="weekend"
              >
                <span className="font-semibold text-[14px] md:text-base pb-2 md:pb-1 ">
                  Weekend
                </span>
                <div className=" md:w-[80%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
                  <select
                    className="w-[100%] bg-[#F0F2F5] py-[10px] md:py-[14px] outline-none"
                    name="weekend"
                    id="weekend"
                  >
                    <option value="">Choose here</option>
                    <option value="all">All</option>
                    <option value="asian">Asian</option>
                    <option value="black">Black</option>
                    <option value="indian">Indian</option>
                    <option value="latino">Latino</option>
                    <option value="middle eastern">Mid Eastern</option>
                    <option value="mix-race">Mix Race</option>
                    <option value="other">Other</option>
                    <option value="others">Others</option>
                    <option value="white">White</option>
                  </select>
                </div>
              </label>
              <div className="mt-12 flex md:justify-start justify-between">
                <button className="bg-[#CD2727] text-white mr-5 w-[100%] py-3 md:py-4 md:w-[120px] font-medium rounded-xl">
                  Delete
                </button>
                <Link
                  to={"/profile-upload"}
                  className="bg-[#E9CB50] block text-center w-[100%] text-[#171717] py-3 md:py-4 md:w-[120px] font-medium rounded-xl"
                >
                  Next
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EscortDetailsFour;
