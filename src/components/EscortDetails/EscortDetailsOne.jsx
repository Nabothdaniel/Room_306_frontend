import React from "react";
import Input from "../Input";
import { countries } from "../COUNTRY_DATA.JS";
import TextArea from "../TextArea";

const EscortDetailsOne = () => {
  return (
    <div className="rounded-xl px-10 pl-12 mb-32 py-14 pb-20 bg-[#1E1E1E] ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-y-0 lg:gap-x-12 md:gap-x-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-x-12 md:gap-x-4 gap-y-8 lg:col-span-2">
          <Input
            labelValue={"Username"}
            labelClass={"font-semibold py-2"}
            inputType={"text"}
            required={"*"}
            inputName={"username"}
            inputClass={"p-3 rounded-xl text-[#102127] placeholder-[#102127]"}
            holder={"Enter username"}
          />
          <Input
            labelValue={"Email"}
            labelClass={"font-semibold py-2"}
            inputType={"email"}
            required={""}
            inputName={"email"}
            inputClass={"p-3 rounded-xl text-[#102127]  placeholder-[#102127]"}
            holder={"Enter Email"}
          />
          <Input
            labelValue={"Password"}
            labelClass={"font-semibold py-2"}
            inputType={"password"}
            required={"*"}
            inputName={"password"}
            inputClass={"p-3 rounded-xl text-[#102127] placeholder-[#102127]"}
            holder={"Enter Password"}
          />
          <Input
            labelValue={"Re-Enter Password"}
            labelClass={"font-semibold py-2"}
            inputType={"password"}
            required={"*"}
            inputName={"password"}
            inputClass={"p-3 rounded-xl text-[#102127]  placeholder-[#102127]"}
            holder={"Enter Password"}
          />
          <Input
            labelValue={"Display Name"}
            labelClass={"font-semibold py-2"}
            inputType={"text"}
            required={"*"}
            inputName={"name"}
            inputClass={"p-3 rounded-xl text-[#102127] placeholder-[#102127]"}
            holder={"Enter Display Name"}
          />

          <label className="text-white flex flex-col" htmlFor="country">
            <span className="py-2 font-semibold">
              Country <span className="text-[#E9CB50]">*</span>
            </span>
            <select
              className="px-3 py-[14px] rounded-xl text-[#102127] placeholder-[#102127]"
              name="country"
              id="country"
            >
              <option className="rounded-xl" value="">
                Select
              </option>
              {countries.map((country) => {
                return (
                  <option className="rounded-xl" value={country.text}>
                    {country.text}
                  </option>
                );
              })}
            </select>
          </label>

          <Input
            inputType={"date"}
            labelClass={"font-semibold py-2"}
            required={""}
            inputName={"state-date"}
            inputClass={"p-3 rounded-xl text-[#102127] placeholder-[#102127]"}
            holder={""}
          />
          <Input
            labelValue={"Display Name"}
            labelClass={"font-semibold py-2"}
            inputType={"checkbox"}
            required={"*"}
            inputName={"name"}
            inputClass={"p-3 rounded-xl text-[#102127] placeholder-[#102127]"}
            holder={"Enter Display Name"}
          />

          <div className="md:col-span-2">
            <TextArea
              labelValue={"Heading"}
              required={"*"}
              inputName={"heading"}
              inputClass={"p-3 rounded-xl text-[#102127] placeholder-[#102127]"}
              holder={"In short, tell your clients what you offer"}
              col={""}
              row={"7"}
            />
          </div>
          <Input
            labelValue={"Country Code"}
            labelClass={"font-semibold py-2"}
            inputType={"select"}
            required={"*"}
            inputName={"country-code"}
            inputClass={"p-3 rounded-xl text-[#102127] placeholder-[#102127]"}
            holder={"Select"}
          />
          <Input
            labelValue={"Mobile Number"}
            labelClass={"font-semibold py-2"}
            inputType={"tel"}
            required={"*"}
            inputName={"number"}
            inputClass={"p-3 rounded-xl text-[#102127] placeholder-[#102127]"}
            holder={"E.g 12345678881"}
          />
        </div>

        <div className="  pt-4 pb-8 lg:max-w-[300px]">
          <div>
            <p className="text-[#F1D6D6] text-[14px]">
              <p>
                Username is a unique name for admin to identify you. It can be
                anything or whatever you can remember.
              </p>
              <p>
                Your display name is the important name everybody will see on
                your profile.
              </p>
              <p>So,</p>
              <p>Don't use your real name as a display name.</p>
              <p>
                Use a fancy name like a nice nickname but one your mum and dad
                don't know about.
              </p>
              <p>Date of birth:</p>
              <p>
                Pick your date of birth, it Can not be changed once your
                registration is completed.
              </p>
            </p>
          </div>
        </div>
      </div>
      <button className="bg-[#E9CB50] w-[100%] py-4 md:w-[120px] font-semibold mt-12 rounded-xl">
        Next
      </button>
    </div>
  );
};

export default EscortDetailsOne;
