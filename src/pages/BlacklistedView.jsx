import React from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Arrow from "../images/arrow-left.svg";
import BlacklistSwiper from "../components/BlacklistSwiper";
import { useNavigate } from "react-router-dom";
import BlacklistImageSwipe from "../components/BlacklistImageSwipe";
import User from "../images/blog.jpeg";
import TextArea from "../components/TextArea";
import Footer from "../components/Footer";

const BlacklistedView = () => {
  const navigate = useNavigate();


  // if (!data) {
  //   navigate("/404");
  //   return;
  // }

  return (
    <div className="block md:flex overflow-x-clip max-w-[1740px] mx-auto">
      <SideBar />
      <div className="flex-1 md:w-[80%] pt-6 md:pt-14 px-3 md:px-6 lg:px-10">
        <Navbar
          Headervalue={"Welcome to Room 306"}
          textValue={"Explore our escort at your own pace"}
        />

        <div className="md:pt-14 pt-3">
          <div
            className="px-1  grid pb-10 grid-cols-1
         lg:grid-cols-4 gap-6"
          >
            <div className="lg:col-span-3">
              <h2
                onClick={() => navigate(-1)}
                className="text-white font-semibold md:pb-4 pb-2 cursor-pointer flex items-center"
              >
                <img className="size-5 mr-1" src={Arrow} alt="" />
                Back
              </h2>
              <div className="md:col-span-3 mb-6 md:mb-0 bg-[#1E1E1E] rounded-2xl px-2 pt-2 pb-12 md:pb-10">
                <BlacklistImageSwipe />
                <div className="text-white md:pl-10 pl-6 pt-6">
                  <h2 className="md:text-3xl text-[20px] font-semibold pb-4">
                    Adam Fresh
                  </h2>
                  <div className="flex flex-col gap-y-2">
                    <p className="font-semibold ">
                      Location:{" "}
                      <span className="font-normal text-[14px] text-white/80">
                        Lagos, Nigeria
                      </span>
                    </p>
                    <p className="font-semibold ">
                      Phone:{" "}
                      <span className="font-normal text-[14px] text-white/80">
                        +234812345678
                      </span>
                    </p>
                    <p className="font-semibold ">
                      Sex:{" "}
                      <span className="font-normal text-[14px] text-white/80">
                        Male
                      </span>
                    </p>
                    <p className="font-semibold ">
                      Age Range:{" "}
                      <span className="font-normal text-[14px] text-white/80">
                        28 - 30
                      </span>
                    </p>
                    <p className="font-semibold ">
                      Height:{" "}
                      <span className="font-normal text-[14px] text-white/80">
                        Not too tall
                      </span>
                    </p>
                    <p className="font-semibold ">
                      Build:{" "}
                      <span className="font-normal text-[14px] text-white/80">
                        Huge
                      </span>
                    </p>
                    <p className="font-semibold ">
                      Crime Committed:{" "}
                      <span className="font-normal text-[14px] text-white/80">
                        Fuck and Run
                      </span>
                    </p>
                  </div>
                </div>
                <div className="border-2 border-neutral-600 py-5 px-6 rounded-xl mx-4 mt-6">
                  <h2 className="md:text-xl text-white text-[17px] font-semibold pb-4">
                    Full Details
                  </h2>
                  <p className="text-white/80 text-[14px]">
                    Fuck and run and he's a theif
                  </p>
                </div>
                <div className="border-2 flex items-center text-white border-neutral-600 py-5 px-6 rounded-xl mx-4 mt-6">
                  <img className="size-[60px] rounded-full" src={User} alt="" />
                  <div className="ml-4">
                    <p className="text-[20px] font-semibold">Prexy Frosh</p>
                    <p className="text-[14px] text-white/80 pt-1">
                      why will agree to fuck without payment first
                    </p>
                  </div>
                </div>
                <div className="mx-4 mt-8">
                  <TextArea
                    labelValue={"Comments"}
                    required={""}
                    inputName={"comments"}
                    inputClass={
                      "p-3 rounded-xl outline-none text-[#102127] placeholder-[#102127]"
                    }
                    holder={"Leave your comment please"}
                    col={""}
                    row={"7"}
                  />
                </div>
                <div className="flex justify-end px-4">
                  <button className="bg-[#E9CB50] block text-center w-[100%] py-3 md:py-4 md:w-[200px] font-semibold mt-5 rounded-xl">
                    Leave a comment
                  </button>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-center text-white font-medium lg:pb-3 text-xl">
                More Blacklisted
              </h2>
              <BlacklistSwiper />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default BlacklistedView;
