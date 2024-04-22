import React from "react";
import { countries } from "../../components/COUNTRY_DATA.JS";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import SideBar from "../../components/SideBar";
import Navbar from "../../components/Navbar";

const EscortDetailsTwo = () => {
  return (
    <div className="block md:flex overflow-x-clip max-w-[1740px] mx-auto">
      <SideBar />

      <div className="flex-1 md:w-[80%] px-4 pt-6 md:pt-14 md:px-10">
        <Navbar
          Headervalue={"Welcome to Room 306"}
          textValue={"Explore our escort at your own pace"}
        />

        <div className="py-8">
          <div className="flex justify-between items-center pb-6 pt-8">
            <h2 className="text-white py-4  text-2xl font-semibold">
              Escort Details
            </h2>

            <p className="text-white md:text-4xl text-3xl font-semibold">
              <span className="text-[#B29A9A] md:text-2xl text-xl">
                Step <span>2/</span>
              </span>
              6
            </p>
          </div>
          <div className="rounded-xl md:px-6 px-4 lg:px-10 md:pl-12 pt-6 md:py-14 pb-8 bg-[#1E1E1E] ">
            <h3 className="text-xl pb-8 font-semibold text-white">
              Additional Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-x-16 md:gap-x-6 gap-y-8">
              <Input
                labelValue={"Education"}
                inputType={"text"}
                required={"*"}
                inputName={"education"}
                inputClass={
                  "p-3 rounded-xl text-[#102127] placeholder-[#102127]"
                }
                holder={"Select"}
              />
              <Input
                labelValue={"Occupation"}
                inputType={"text"}
                required={"*"}
                inputName={"occupation"}
                inputClass={
                  "p-3 rounded-xl text-[#102127]  placeholder-[#102127]"
                }
                holder={"Enter Here"}
              />
              <div className="md:col-span-2">
                <TextArea
                  labelValue={"About"}
                  required={"*"}
                  inputName={"about"}
                  inputClass={
                    "p-3 rounded-xl text-[#102127] placeholder-[#102127]"
                  }
                  holder={"Enter Here"}
                  col={""}
                  row={"6"}
                />
              </div>

              <h3 className="text-xl font-semibold text-white pt-3">
                Body Details <span className="text-[#E9CB50]">*</span>
              </h3>
              <div className="grid md:col-span-2 lg:gap-x-16 md:gap-x-6 gap-y-8 md:grid-cols-2">
                <Input
                  labelValue={"Occupation"}
                  labelClass={"font-semibold py-2"}
                  inputType={"text"}
                  required={"*"}
                  inputName={"occupation"}
                  inputClass={
                    "p-3 rounded-xl text-[#102127]  placeholder-[#102127]"
                  }
                  holder={"Enter Here"}
                />
                <Input
                  labelValue={"Occupation"}
                  labelClass={"font-semibold py-2"}
                  inputType={"text"}
                  required={"*"}
                  inputName={"occupation"}
                  inputClass={
                    "p-3 rounded-xl text-[#102127]  placeholder-[#102127]"
                  }
                  holder={"Enter Here"}
                />
                <Input
                  labelValue={"Occupation"}
                  labelClass={"font-semibold py-2"}
                  inputType={"text"}
                  required={"*"}
                  inputName={"occupation"}
                  inputClass={
                    "p-3 rounded-xl text-[#102127]  placeholder-[#102127]"
                  }
                  holder={"Enter Here"}
                />
                <Input
                  labelValue={"Occupation"}
                  labelClass={"font-semibold py-2"}
                  inputType={"text"}
                  required={"*"}
                  inputName={"occupation"}
                  inputClass={
                    "p-3 rounded-xl text-[#102127]  placeholder-[#102127]"
                  }
                  holder={"Enter Here"}
                />
                <Input
                  labelValue={"Occupation"}
                  labelClass={"font-semibold py-2"}
                  inputType={"text"}
                  required={"*"}
                  inputName={"occupation"}
                  inputClass={
                    "p-3 rounded-xl text-[#102127]  placeholder-[#102127]"
                  }
                  holder={"Enter Here"}
                />
                <Input
                  labelValue={"Occupation"}
                  labelClass={"font-semibold py-2"}
                  inputType={"text"}
                  required={"*"}
                  inputName={"occupation"}
                  inputClass={
                    "p-3 rounded-xl text-[#102127]  placeholder-[#102127]"
                  }
                  holder={"Enter Here"}
                />
                <div>
                  <h4 className="text-white font-semibold">
                    Smoker <span className="text-[#E9CB50]">*</span>
                  </h4>
                  <Input
                    labelValue={"Occupation"}
                    labelClass={"font-semibold py-2"}
                    inputType={"checkbox"}
                    required={"*"}
                    inputName={"occupation"}
                    inputClass={
                      "p-3 rounded-xl text-[#102127]  placeholder-[#102127]"
                    }
                    holder={"Enter Here"}
                  />
                  <Input
                    labelValue={"Occupation"}
                    labelClass={"font-semibold py-2"}
                    inputType={"checkbox"}
                    required={"*"}
                    inputName={"occupation"}
                    inputClass={
                      "p-3 rounded-xl text-[#102127]  placeholder-[#102127]"
                    }
                    holder={"Enter Here"}
                  />
                </div>
                <Input
                  labelValue={"Occupation"}
                  labelClass={"font-semibold py-2"}
                  inputType={"text"}
                  required={"*"}
                  inputName={"occupation"}
                  inputClass={
                    "p-3 rounded-xl text-[#102127]  placeholder-[#102127]"
                  }
                  holder={"Enter Here"}
                />
              </div>
            </div>

            <button className="bg-[#E9CB50] w-[100%] py-4 md:w-[120px] font-semibold mt-12 rounded-xl">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EscortDetailsTwo;
