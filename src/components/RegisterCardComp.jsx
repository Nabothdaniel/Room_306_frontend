import React from "react";
import Check from "../images/Check.svg";

const RegisterCardComp = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-y-8 md:gap-y-0 items-center md:items-start gap-x-4 lg:gap-x-8">
        <div className="bg-[#1E1E1E] md:h-[720px] lg:h-full rounded-xl py-7 px-3 lg:px-6 w-[350px]">
          <h3 className="text-[#F2D870] text-[18px]">
            Register as Independent Escort
          </h3>
          <ul className="pt-10 text-[18px] text-white">
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

          <button className="bg-white w-[100%] py-4 font-semibold mt-8 mb-3 rounded-[35px]">
            Register Here
          </button>
        </div>
        <div className="bg-[#1E1E1E] rounded-xl md:h-[720px] h-[640px] lg:h-[640px] py-7 px-6 w-[350px]">
          <h3 className="text-[#F2D870] text-[18px]">
            Register as a Guest/Client
          </h3>
          <div className="flex h-full flex-col justify-between">
            <ul className="pt-10 text-[18px] text-white">
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

              <button className="bg-white w-[100%] py-4 font-semibold mt-8 mb-3 rounded-[35px]">
                Register Here
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterCardComp;
