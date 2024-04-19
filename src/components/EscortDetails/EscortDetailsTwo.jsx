import React from "react";
import Input from "../Input";
import { countries } from "../COUNTRY_DATA.JS";
import TextArea from "../TextArea";

const EscortDetailsTwo = () => {
  return (
    <div className="rounded-xl px-10 pl-12 mb-32 py-14 pb-20 bg-[#1E1E1E] ">
      <h3 className="text-xl pb-6 font-semibold text-white">
        Additional Details
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-x-16 md:gap-x-6 gap-y-8">
        <Input
          labelValue={"Education"}
          inputType={"text"}
          required={"*"}
          inputName={"education"}
          inputClass={"p-3 rounded-xl text-[#102127] placeholder-[#102127]"}
          holder={"Select"}
        />
        <Input
          labelValue={"Occupation"}
          inputType={"text"}
          required={"*"}
          inputName={"occupation"}
          inputClass={"p-3 rounded-xl text-[#102127]  placeholder-[#102127]"}
          holder={"Enter Here"}
        />
        <div className="md:col-span-2">
          <TextArea
            labelValue={"About"}
            required={"*"}
            inputName={"about"}
            inputClass={"p-3 rounded-xl text-[#102127] placeholder-[#102127]"}
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
            inputClass={"p-3 rounded-xl text-[#102127]  placeholder-[#102127]"}
            holder={"Enter Here"}
          />
          <Input
            labelValue={"Occupation"}
            labelClass={"font-semibold py-2"}
            inputType={"text"}
            required={"*"}
            inputName={"occupation"}
            inputClass={"p-3 rounded-xl text-[#102127]  placeholder-[#102127]"}
            holder={"Enter Here"}
          />
          <Input
            labelValue={"Occupation"}
            labelClass={"font-semibold py-2"}
            inputType={"text"}
            required={"*"}
            inputName={"occupation"}
            inputClass={"p-3 rounded-xl text-[#102127]  placeholder-[#102127]"}
            holder={"Enter Here"}
          />
          <Input
            labelValue={"Occupation"}
            labelClass={"font-semibold py-2"}
            inputType={"text"}
            required={"*"}
            inputName={"occupation"}
            inputClass={"p-3 rounded-xl text-[#102127]  placeholder-[#102127]"}
            holder={"Enter Here"}
          />
          <Input
            labelValue={"Occupation"}
            labelClass={"font-semibold py-2"}
            inputType={"text"}
            required={"*"}
            inputName={"occupation"}
            inputClass={"p-3 rounded-xl text-[#102127]  placeholder-[#102127]"}
            holder={"Enter Here"}
          />
          <Input
            labelValue={"Occupation"}
            labelClass={"font-semibold py-2"}
            inputType={"text"}
            required={"*"}
            inputName={"occupation"}
            inputClass={"p-3 rounded-xl text-[#102127]  placeholder-[#102127]"}
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
            inputClass={"p-3 rounded-xl text-[#102127]  placeholder-[#102127]"}
            holder={"Enter Here"}
          />
        </div>
      </div>

      <button className="bg-[#E9CB50] w-[100%] py-4 md:w-[120px] font-semibold mt-12 rounded-xl">
        Next
      </button>
    </div>
  );
};

export default EscortDetailsTwo;
