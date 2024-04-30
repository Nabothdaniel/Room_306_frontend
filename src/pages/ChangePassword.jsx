import React from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Arrow from "../images/arrow-left.svg";
import { useNavigate } from "react-router-dom";
import Password from "../images/password.png";
import Input from "../components/Input";

const ChangePassword = () => {
  const navigate = useNavigate();

  return (
    <div className="block md:flex overflow-x-clip max-w-[1740px] mx-auto">
      <SideBar />

      <div className="flex-1 md:w-[80%] px-4 pt-6 pb-10 md:pb-20 md:pt-14 md:px-10">
        <Navbar
          Headervalue={"Welcome to Room 306"}
          textValue={"Explore our escort at your own pace"}
        />

        <div className="md:py-8">
          <div className=" md:pb-6 py-2 md:pt-8">
            <h2
              onClick={() => navigate(-1)}
              className="text-white font-semibold cursor-pointer flex items-center"
            >
              <img className="size-5 mr-1" src={Arrow} alt="" />
              Back
            </h2>
          </div>
          <div className="bg-[#1E1E1E] py-5 px-6 rounded-xl">
            <h2 className="text-white/90 text-[18px] md:text-[20px] font-semibold">
              Change Password
            </h2>
            <div className="grid md:grid-cols-2">
              <div>
                <Input
                  labelValue={"Old / Temporary Password"}
                  labelClass={"font-semibold pt-7 py-2"}
                  inputType={"password"}
                  required={"*"}
                  inputName={"password"}
                  inputClass={
                    " rounded-xl text-[#102127] placeholder-[#102127]"
                  }
                  holder={"Enter Password"}
                  // value={password}
                  // onchange={(e) => setPassword(e.target.value)}
                />
                <Input
                  labelValue={"New Password"}
                  labelClass={"font-semibold pt-7 py-2"}
                  inputType={"password"}
                  required={"*"}
                  inputName={"password"}
                  inputClass={
                    " rounded-xl text-[#102127] placeholder-[#102127]"
                  }
                  holder={"Enter Password"}
                  // value={password}
                  // onchange={(e) => setPassword(e.target.value)}
                />
                <Input
                  labelValue={"Confirm Password"}
                  labelClass={"font-semibold pt-7 py-2"}
                  inputType={"password"}
                  required={"*"}
                  inputName={"password"}
                  inputClass={
                    " rounded-xl text-[#102127] placeholder-[#102127]"
                  }
                  holder={"Enter Password"}
                  // value={password}
                  // onchange={(e) => setPassword(e.target.value)}
                />
                <button className="bg-[#E9CB50] mt-8 w-[100%] py-3 md:py-4 md:w-[135px] font-medium rounded-xl">
                  Save Changes
                </button>
              </div>
              <img
                className="md:h-[600px] object-contain pt-10 md:pt-0"
                src={Password}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
