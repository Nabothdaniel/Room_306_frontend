import React, { useReducer } from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Blog from "../images/blog.jpeg";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FiMail } from "react-icons/fi";
import { TbCurrencyNaira } from "react-icons/tb";
import Notice from "../components/Notice";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import ProfileMenu from "../components/ProfileMenu";
import Media from "../components/Media";
import { ProfileSwiper } from "../components/ProfileSwiper";
import { Link } from "react-router-dom";
import ProfileViewItems from "../components/ProfileViewItems";

const reducer = (state, action) => {
  switch (action.type) {
    case "Change1":
      return {
        open1: true,
      };
    case "Change2":
      return {
        open2: true,
      };
    case "Change3":
      return {
        open3: true,
      };
  }
};

const EscortProfile = () => {
  const [animationParent] = useAutoAnimate();
  const [state, dispatch] = useReducer(reducer, {
    open1: true,
    open2: false,
    open3: false,
  });

  return (
    <div className="block md:flex overflow-x-clip h-screen max-w-[1740px] mx-auto">
      <SideBar />

      <div className="flex-1 md:w-[80%] pt-4 md:pt-14 px-3 md:px-6 lg:px-10">
        <Navbar
          Headervalue={"Best Escort Room"}
          textValue={"Explore our rooms and activities"}
        />
        <div className="grid md:grid-cols-3 px-4 md:px-0 grid-cols-1 lg:grid-cols-4 gap-y-12 gap-x-8 pt-8 md:pt-14">
          <div className="flex items-start min-w-[600px] text-white">
            <img className="size-[60px] rounded-full" src={Blog} alt="" />
            <div className="ml-3">
              <h2 className="md:text-2xl font-semibold text-[18px]">
                Adam Fresh
              </h2>
              <p className="text-white/80 md:text-[14px] text-[12px]">
                @adamfresh
              </p>
            </div>
          </div>
          <div className="text-white/70 md:col-span-2 flex justify-between">
            <div>
              <p className="flex items-center pb-4">
                <IoPhonePortraitOutline className="text-xl mr-2" />
                <span className="md:text-base text-[14px]">+2348123456789</span>
              </p>
              <p className="flex items-center">
                <FiMail className="text-xl mr-2" />
                <span className="md:text-base text-[14px]">
                  adamfresh@gmail.com
                </span>
              </p>
            </div>
            <div>
              <p className="bg-[#E9CB50] text-black/70 text-[14px] md:text-base font-semibold rounded-xl py-1 text-center min-w-[120px] md:min-w-[130px]">
                Under Review
              </p>
            </div>
          </div>
          <div className="text-[#E9CB50] flex flex-col gap-y-3">
            <p>
              Last Login at <span className="font-semibold">2:40 PM Sun</span>
            </p>
            <p className="text-white/70 text-[12px]">
              Registered on <span className="font-semibold">Apr 28, 2024</span>
            </p>
            {/* */}
          </div>
          <div className="text-white/80 md:col-span-2 flex items-center justify-between">
            <div className="flex items-center">
              <div className=" text-black/80 ">
                <TbCurrencyNaira className="size-[48px] p-2 bg-[#E9CB50] rounded-full" />
              </div>
              <div className="ml-4">
                <p className="md:text-[20px] text-[15px] font-semibold">
                  My Wallet
                </p>
                <p className="md:text-[26px] text-[18px] font-semibold">0</p>
              </div>
            </div>

            <div className="bg-[#CD2727] flex md:text-[20px] h-[36px] cursor-pointer font-bold items-center justify-center rounded-3xl min-w-[100px]">
              <TbCurrencyNaira className="md:size-[30px] size-[26px]" />
              Buy
            </div>
          </div>
          <div className="text-white flex gap-x-4 md:gap-x-12 items-center justify-between md:col-span-2">
            <div className="">
              <button className=" bg-blue-200 min-w-[100px] text-[14px] md:min-w-[170px] font-semibold md:text-[18px] text-blue-800 py-2 rounded-3xl">
                Referral
              </button>
            </div>
            <label className="mt-4 flex-1" htmlFor="boost">
              <input
                className="w-full"
                type="range"
                disabled
                name="boost"
                id="boost"
              />
              <p className="font-semibold text-[13px] md:text-[15px]">
                0 days <span className="font-normal">left in Boost</span>
              </p>
            </label>
          </div>
        </div>
        <div className="pb-20">
          <div className="bg-[#CD2727] mt-8 py-4 px-5 rounded-xl">
            <div className="flex items-center gap-x-4">
              <h3 className="font-bold text-white text-[18px] md:text-[24px]">
                Boost Profile
              </h3>
              <div className="bg-white md:text-base text-[14px] cursor-pointer font-semibold md:text-[20px] h-[40px] flex items-center justify-center text-center rounded-3xl w-[130px]">
                Boost Now
              </div>
            </div>
            <p className="lg:w-[23%] md:w-[28%]  pt-2 text-[14px] md:text-[18px] text-white font-medium">
              Boost your profile to Pro Max to be on the front pages and gain
              500% more exposure.
            </p>
            <p className="text-white pt-5 text-[14px] md:text-[18px] font-medium">
              More exposure = More calls{" "}
            </p>
          </div>
          <div>
            <div
              ref={animationParent}
              className="border-b-2 pt-10 flex  relative  font-semibold items-center text-white border-[#393C49] py-3"
            >
              <p
                onClick={() => dispatch({ type: "Change1" })}
                className={`md:mr-10 mr-4 text-[14px] md:text-base cursor-pointer duration-700 ${
                  state.open1 &&
                  "before:contents-[''] duration-500 before:absolute text-[#E9CB50] before:-bottom-[2px] before:w-[45px] md:before:w-[50px] before:h-[3px] before:rounded-lg before:bg-[#E9CB50]"
                }    `}
              >
                Notice
              </p>
              <p
                onClick={() => dispatch({ type: "Change2" })}
                className={`md:mr-10 mr-4 text-[14px] md:text-base cursor-pointer duration-700 ${
                  state.open2 &&
                  "before:contents-[''] duration-500 text-[#E9CB50] before:absolute  before:-bottom-[2px] before:w-[90px] md:before:w-[100px] before:h-[3px] before:rounded-lg before:bg-[#E9CB50]"
                }    `}
              >
                Profile Menu
              </p>
              <p
                onClick={() => dispatch({ type: "Change3" })}
                className={`md:mr-10 mr-4 text-[14px] md:text-base cursor-pointer duration-700 ${
                  state.open3 &&
                  "before:contents-[''] duration-500  before:absolute text-[#E9CB50] before:-bottom-[2px] before:w-[45px] md:before:w-[50px] before:h-[3px] before:rounded-lg before:bg-[#E9CB50]"
                }    `}
              >
                Media
              </p>
            </div>
            <div className="pt-4">
              <Notice noticeClass={`${!state.open1 ? "hidden" : ""}`} />

              <ProfileMenu profileClass={`${!state.open2 ? "hidden" : ""}`} />

              <Media mediaClass={`${!state.open3 ? "hidden" : ""}`} />
            </div>
          </div>

          <div className="grid grid-cols-3 mt-6 gap-x-8 rounded-xl p-3 bg-[#1E1E1E]">
            <ProfileSwiper />
            <div className="md:col-span-2 flex justify-between pt-4 text-white ">
              <div>
                <p className="text-2xl font-semibold">Adam Fresh</p>
                <p className="font-semibold text-[18px] pt-3">Hey, I'm curvy</p>
                <div className="flex text-white pt-6">
                  <div className="flex mr-5 flex-col items-center">
                    <p className="text-[24px] font-semibold">
                      27 <span className="text-[#B29A9A]">yrs</span>
                    </p>
                    <p className="text-[#B29A9A]">Age</p>
                  </div>
                  <div className="flex mr-5 flex-col items-center">
                    <p className="text-[24px] font-semibold">Avg</p>
                    <p className="text-[#B29A9A]">Weight</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-[24px] font-semibold">Avg</p>
                    <p className="text-[#B29A9A]">Height</p>
                  </div>
                </div>
              </div>
              <div>
                <Link
                  to={"/edit-escort"}
                  className="bg-[#0A0A0A] flex items-center justify-center text-center text-[14px] text-white font-medium rounded-lg h-[40px] w-[125px]"
                >
                  Edit Profile
                </Link>
              </div>
            </div>
          </div>
          <ProfileViewItems />
        </div>
      </div>
    </div>
  );
};

export default EscortProfile;
