import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import TextArea from "../components/TextArea";
import Input from "../components/Input";
import Upload from "../images/Upload.svg";

const AddRoom = () => {
  const [image, setImage] = useState();

  return (
    <div className="block md:flex overflow-x-clip max-w-[1740px] mx-auto">
      <SideBar />

      <div className="flex-1 md:w-[80%] px-4 pt-6 md:pt-14 md:px-10">
        <Navbar
          Headervalue={"Welcome to Room 306"}
          textValue={"Explore our escort at your own pace"}
        />

        <div className="md:py-5 pb-9 md:pb-12">
          <div className="md:pb-3 pt-2 md:pt-8">
            <h2 className="text-white py-4 md:text-2xl font-semibold">
              Add New Room
            </h2>
          </div>
          <div className="px-4 py-6 rounded-xl md:px-8 md:py-14 bg-[#1E1E1E]">
            <div className=" grid lg:grid-cols-2 md:gap-x-4 gap-4 md:gap-y-6  ">
              <div>
                <div className="lg:col-span-2">
                  <TextArea
                    labelValue={"Description"}
                    labelClass={"md:text-base text-[14px]"}
                    required={"*"}
                    inputName={"Description"}
                    inputClass={
                      "p-3 rounded-xl text-[#102127] placeholder-[#102127]"
                    }
                    holder={"In short, tell us about your Room"}
                    col={""}
                    row={"7"}
                  />
                </div>
                <Input
                  labelValue={"Title"}
                  labelClass={"font-semibold md:text-base text-[14px] py-2"}
                  inputType={"text"}
                  required={"*"}
                  inputName={"Title"}
                  inputClass={
                    " rounded-xl text-[#102127] placeholder-[#102127]"
                  }
                  holder={"Enter Here"}
                />
                <Input
                  labelValue={"Rate"}
                  labelClass={"font-semibold md:text-base text-[14px] py-2"}
                  inputType={"text"}
                  required={"*"}
                  inputName={"rate"}
                  inputClass={
                    " rounded-xl text-[#102127] placeholder-[#102127]"
                  }
                  holder={"Enter Here"}
                />
                <Input
                  labelValue={"Location"}
                  labelClass={"font-semibold md:text-base text-[14px] py-2"}
                  inputType={"text"}
                  required={"*"}
                  inputName={"Location"}
                  inputClass={
                    " rounded-xl text-[#102127] placeholder-[#102127]"
                  }
                  holder={"Enter Room Location"}
                />
                <div className="lg:col-span-2">
                  <TextArea
                    labelValue={"Policy"}
                    labelClass={"md:text-base text-[14px]"}
                    required={"*"}
                    inputName={"policy"}
                    inputClass={
                      "p-3 rounded-xl text-[#102127] placeholder-[#102127]"
                    }
                    holder={"Your Policies on the Room..."}
                    col={""}
                    row={"7"}
                  />
                </div>
                <Input
                  labelValue={"Services"}
                  labelClass={"font-semibold md:text-base text-[14px] py-2"}
                  inputType={"text"}
                  required={"*"}
                  inputName={"services"}
                  inputClass={
                    " rounded-xl text-[#102127] placeholder-[#102127]"
                  }
                  holder={"Enter Here"}
                />
                <Input
                  labelValue={"Contacts"}
                  labelClass={"font-semibold md:text-base text-[14px] py-2"}
                  inputType={"tel"}
                  required={"*"}
                  inputName={"contacts"}
                  inputClass={
                    " rounded-xl text-[#102127] placeholder-[#102127]"
                  }
                  holder={"E.g +2348145267233"}
                />
                <Input
                  labelValue={"Amenities"}
                  labelClass={"font-semibold md:text-base text-[14px] py-2"}
                  inputType={"text"}
                  required={"*"}
                  inputName={"amenities"}
                  inputClass={
                    " rounded-xl text-[#102127] placeholder-[#102127]"
                  }
                  holder={"Enter Here"}
                />
                <Input
                  labelValue={"Property Type"}
                  labelClass={"font-semibold md:text-base text-[14px] py-2"}
                  inputType={"text"}
                  required={"*"}
                  inputName={"property"}
                  inputClass={
                    " rounded-xl text-[#102127] placeholder-[#102127]"
                  }
                  holder={"Enter Here"}
                />
              </div>
              <div
                onClick={() => document.querySelector(".input").click()}
                className="w-[100%] cursor-pointer"
              >
                <input
                  type="file"
                  name="file"
                  id="file"
                  className="input"
                  hidden
                  onChange={({ target: { files } }) => {
                    if (files) {
                      setImage(URL.createObjectURL(files[0]));
                    }
                  }}
                />
                {image ? (
                  <img className="rounded-lg lg:w-[80%]" src={image} />
                ) : (
                  <img className="lg:w-[80%] mx-auto " src={Upload} alt="" />
                )}
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <button className="bg-[#E9CB50] text-[#171717] mt-4 text-[14px] h-[48px] w-[120px] font-semibold rounded-xl">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRoom;
