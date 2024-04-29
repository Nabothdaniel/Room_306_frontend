import React from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Arrow from "../images/arrow-left.svg";
import { Navigate, useNavigate } from "react-router-dom";
import { ProfileSwiper } from "../components/ProfileSwiper";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import EditAbout from "../components/EditAbout";
import EscortBioEdit from "../components/EscortBioEdit";
import EscortServicesEdit from "../components/EscortServicesEdit";

const EditEscort = () => {
  const navigate = useNavigate();
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
              onClick={() => Navigate(-1)}
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
                <p className="font-semibold pb-3 md:pb-0">AdamFresh</p>
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

            <div className="border-b-2 pt-8 flex justify-between relative md:justify-normal font-semibold items-center text-white border-[#393C49] py-3">
              <p className="md:mr-10 cursor-pointer before:contents-[''] text-[14px] md:text-base before:absolute before:-bottom-[2px] before:w-[50px] before:h-[3px] before:rounded-lg before:bg-[#E9CB50] text-[#E9CB50]  ">
                About
              </p>
              <p className="md:mr-10 text-[14px] md:text-base">Bio</p>
              <p className="md:mr-10 text-[14px] md:text-base">Rates</p>
              <p className="text-[14px] md:text-base">Services</p>
            </div>

            <div className="pt-5">
              {/* <EditAbout /> */}
              {/* <EscortBioEdit /> */}
              <EscortServicesEdit />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditEscort;
