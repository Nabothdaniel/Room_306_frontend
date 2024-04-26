import React from "react";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import Check from "../images/Check.svg";
import { Link } from "react-router-dom";

const RegisterCard = () => {
  return (
    <div className="block md:flex overflow-x-clip max-w-[1740px] mx-auto">
      <SideBar />
      <div className="flex-1 md:w-[80%] pt-6 md:pt-14 px-4 lg:px-16">
        <Navbar
          Headervalue={"Welcome to Room 306"}
          textValue={"Explore our escort at your own pace"}
        />

        <div className="md:py-8 pb-10 px-2">
          <div className="flex justify-between pt-2 pb-3 md:pt-8 ">
            <h2 className="text-white md:py-4 md:pb-10 md:text-2xl text-lg font-semibold">
              Create An Account
            </h2>
          </div>
          <div>
            <div className="flex flex-col md:grid md:grid-cols-2 lg:flex-row lg:flex gap-y-8 md:gap-y-0 items-center  md:items-start gap-x-4 lg:gap-x-8">
              <div className="bg-[#1E1E1E] md:h-[650px] md:w-[100%] lg:w-[400px] lg:h-full rounded-xl py-7 px-6 w-[100%] sm:w-[350px]">
                <h3 className="text-[#F2D870] text-[18px]">
                  Register as Independent Escort
                </h3>
                <ul className="pt-10 md:text-[18px] text-white">
                  <li className="flex pb-3  items-center">
                    <img className="w-[25px] mr-4" src={Check} alt="" />
                    <span>Add a single profile</span>
                  </li>
                  <li className="flex pb-3 items-center">
                    <img className="w-[25px] mr-4" src={Check} alt="" />
                    <span>Add profile pictures</span>
                  </li>
                  <li className="flex pb-3 items-center">
                    <img className="w-[25px] mr-4" src={Check} alt="" />
                    <span>Add contact information</span>
                  </li>
                  <li className="flex pb-3 items-center">
                    <img className="w-[25px] mr-4" src={Check} alt="" />
                    <span>Upgrade to premium</span>
                  </li>
                  <li className="flex pb-3 items-center">
                    <img className="w-[25px] mr-4" src={Check} alt="" />
                    <span>Featured position</span>
                  </li>
                  <li className="flex pb-3 items-center">
                    <img className="w-[25px] mr-4" src={Check} alt="" />
                    <span>Add tours</span>
                  </li>
                  <li className="flex pb-3 items-center">
                    <img className="w-[25px] mr-4" src={Check} alt="" />
                    <span>Add blacklisted clients</span>
                  </li>
                  <li className="flex pb-3 items-center">
                    <img className="w-[25px] mr-4" src={Check} alt="" />
                    <span>Post classified ads</span>
                  </li>
                  <li className="flex pb-3 items-center">
                    <img className="w-[25px] mr-4" src={Check} alt="" />
                    <span>Many more</span>
                  </li>
                </ul>
                <p className="pt-8 text-3xl text-[#B29A9A]">Free</p>

                <Link
                  to={"/escort-details"}
                  className="bg-white w-[100%] text-center block py-4 font-semibold mt-8 mb-3 rounded-[35px]"
                >
                  Register Here
                </Link>
              </div>
              <div className="bg-[#1E1E1E] rounded-xl md:h-[650px] lg:w-[400px] md:w-[100%] h-[640px] lg:h-[640px] py-7 px-6 w-[100%] sm:w-[350px]">
                <h3 className="text-[#F2D870] text-[18px]">
                  Register as a Guest/Client
                </h3>
                <div className="flex h-full flex-col justify-between">
                  <ul className="pt-10 md:text-[18px] text-white">
                    <li className="flex pb-3 items-center">
                      <img className="w-[25px] mr-4" src={Check} alt="" />
                      <span>Featured position</span>
                    </li>
                    <li className="flex pb-3 items-center">
                      <img className="w-[25px] mr-4" src={Check} alt="" />
                      <span>Add tours</span>
                    </li>
                    <li className="flex pb-3 items-center">
                      <img className="w-[25px] mr-4" src={Check} alt="" />
                      <span>Add blacklisted clients</span>
                    </li>
                    <li className="flex pb-3 items-center">
                      <img className="w-[25px] mr-4" src={Check} alt="" />
                      <span>Post classified ads</span>
                    </li>
                    <li className="flex pb-3 items-center">
                      <img className="w-[25px] mr-4" src={Check} alt="" />
                      <span>Many more</span>
                    </li>
                  </ul>
                  <div className="md:mb-12 lg:mb-8">
                    <p className="pt-8 text-3xl text-[#B29A9A]">Free</p>

                    <Link
                      to={"/client"}
                      className="bg-white block text-center w-[100%] py-4 font-semibold mt-8 mb-6 md:mb-3 rounded-[35px]"
                    >
                      Register Here
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterCard;
