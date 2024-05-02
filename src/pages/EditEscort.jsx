import React, { useReducer } from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Arrow from "../images/arrow-left.svg";
import { useNavigate } from "react-router-dom";
import { ProfileSwiper } from "../components/ProfileSwiper";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import EditAbout from "../components/EditAbout";
import EscortBioEdit from "../components/EscortBioEdit";
import EscortServicesEdit from "../components/EscortServicesEdit";
import EscortRateEdit from "../components/EscortRateEdit";

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
    case "Change4":
      return {
        open4: true,
      };
  }
};

const EditEscort = () => {
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(reducer, {
    open1: true,
    open2: false,
    open3: false,
    open4: false,
  });

  return (
    <div className="block md:flex overflow-x-clip max-w-[1740px] mx-auto">
      <SideBar />

      <div className="flex-1 md:w-[80%] px-4 pt-6 md:pt-14 md:px-10">
        <Navbar
          Headervalue={"Best Escort Tours"}
          textValue={"Explore our tours and activities"}
        />

        <div className="md:py-5 pb-9 md:pb-12">
          <div className="md:pb-3 pt-2 md:pt-8">
            <h2
              onClick={() => navigate(-1)}
              className="text-white font-semibold cursor-pointer flex items-center"
            >
              <img className="size-5 mr-1" src={Arrow} alt="" />
              Back
            </h2>
            <div className="grid grid-cols-1  md:grid-cols-4 bg-[#1E1E1E] pb-8 py-4 px-5 mt-3 rounded-xl gap-8">
              <div className="col-span-1  md:col-span-2 lg:col-span-1">
                <ProfileSwiper />
              </div>
              <div className="lg:col-span-3 col-span-1 md:col-span-2 text-white gap-4">
                <div className="flex items-center justify-between">
                  <p className="font-semibold pb-3 md:pb-0">AdamFresh</p>
                  <button className="bg-[#E9CB50] float-right text-[#171717] text-[14px] h-[35px] md:h-[48px] w-[120px] font-semibold rounded-xl">
                    Save Changes
                  </button>
                </div>
                <Input
                  labelValue={"Email"}
                  labelClass={"pt-3 font-semibold"}
                  inputType={"email"}
                  required={""}
                  inputName={"email"}
                  inputClass={
                    "p-3 rounded-xl text-[#102127]  placeholder-[#102127]"
                  }
                  holder={""}
                />
                <TextArea
                  labelValue={"Headline"}
                  required={"*"}
                  inputName={"headline"}
                  inputClass={
                    "p-3 rounded-xl text-[#102127] placeholder-[#102127]"
                  }
                  holder={""}
                  col={""}
                  row={"5"}
                />
              </div>
            </div>

            <div className="border-b-2 pt-8 flex relative font-semibold items-center text-white border-[#393C49] py-3">
              <p
                onClick={() => dispatch({ type: "Change1" })}
                className={`mr-10 cursor-pointer ${
                  state.open1 &&
                  "before:contents-[''] duration-500  before:absolute text-[#E9CB50] before:-bottom-[2px] before:w-[45px] md:before:w-[50px] before:h-[3px] before:rounded-lg before:bg-[#E9CB50]"
                }    `}
              >
                About
              </p>
              <p
                onClick={() => dispatch({ type: "Change2" })}
                className={`mr-10 cursor-pointer ${
                  state.open2 &&
                  "before:contents-[''] duration-500  before:absolute text-[#E9CB50] before:-bottom-[2px] before:w-[25px] md:before:w-[30px] before:h-[3px] before:rounded-lg before:bg-[#E9CB50]"
                }    `}
              >
                Bio
              </p>
              <p
                onClick={() => dispatch({ type: "Change3" })}
                className={`mr-10 cursor-pointer ${
                  state.open3 &&
                  "before:contents-[''] duration-500  before:absolute text-[#E9CB50] before:-bottom-[2px] before:w-[45px] md:before:w-[50px] before:h-[3px] before:rounded-lg before:bg-[#E9CB50]"
                }    `}
              >
                Rates
              </p>
              <p
                onClick={() => dispatch({ type: "Change4" })}
                className={`mr-10 cursor-pointer ${
                  state.open4 &&
                  "before:contents-[''] duration-500  before:absolute text-[#E9CB50] before:-bottom-[2px] before:w-[50px] md:before:w-[70px] before:h-[3px] before:rounded-lg before:bg-[#E9CB50]"
                }    `}
              >
                Services
              </p>
            </div>

            <div className="pt-5">
              <EditAbout aboutClass={`${!state.open1 ? "hidden" : ""}`} />
              <EscortBioEdit bioClass={`${!state.open2 ? "hidden" : ""}`} />
              <EscortServicesEdit
                serviceClass={`${!state.open4 ? "hidden" : ""}`}
              />
              <EscortRateEdit rateClass={`${!state.open3 ? "hidden" : ""}`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditEscort;
