import React from "react";
import { countries } from "../../components/COUNTRY_DATA.JS";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import SideBar from "../../components/SideBar";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

const EscortDetailsOne = () => {
  return (
    <div className="block md:flex overflow-x-clip max-w-[1740px] mx-auto">
      <SideBar />

      <div className="flex-1 md:w-[80%] px-4 pt-6 md:pt-14 md:px-10">
        <Navbar
          Headervalue={"Welcome to Room 306"}
          textValue={"Explore our escort at your own pace"}
        />

        <div className="md:py-8">
          <div className="flex justify-between items-center pb-6 pt-8">
            <h2 className="text-white py-4 text-2xl font-semibold">
              Escort Details
            </h2>

            <p className="text-white md:text-4xl text-3xl font-semibold">
              <span className="text-[#B29A9A] text-xl md:text-2xl">
                Step <span>1/</span>
              </span>
              6
            </p>
          </div>
          <div className="rounded-xl lg:px-10 md:px-7 px-4 py-6 md:pl-12 md:py-14 bg-[#1E1E1E] ">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-y-0 lg:gap-x-12 md:gap-x-5">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-x-12 md:gap-x-4 gap-y-3 md:gap-y-8 lg:col-span-2">
                <Input
                  labelValue={"Username"}
                  labelClass={"font-semibold py-2"}
                  inputType={"text"}
                  required={"*"}
                  inputName={"username"}
                  inputClass={
                    " rounded-xl text-[#102127] placeholder-[#102127]"
                  }
                  holder={"Enter username"}
                />
                <Input
                  labelValue={"Email"}
                  labelClass={"font-semibold py-2"}
                  inputType={"email"}
                  required={""}
                  inputName={"email"}
                  inputClass={
                    " rounded-xl text-[#102127]  placeholder-[#102127]"
                  }
                  holder={"Enter Email"}
                />
                <Input
                  labelValue={"Password"}
                  labelClass={"font-semibold py-2"}
                  inputType={"password"}
                  required={"*"}
                  inputName={"password"}
                  inputClass={
                    " rounded-xl text-[#102127] placeholder-[#102127]"
                  }
                  holder={"Enter Password"}
                />
                <Input
                  labelValue={"Re-Enter Password"}
                  labelClass={"font-semibold py-2"}
                  inputType={"password"}
                  required={"*"}
                  inputName={"password"}
                  inputClass={
                    " rounded-xl text-[#102127]  placeholder-[#102127]"
                  }
                  holder={"Enter Password"}
                />
                <Input
                  labelValue={"Display Name"}
                  labelClass={"font-semibold py-2"}
                  inputType={"text"}
                  required={"*"}
                  inputName={"name"}
                  inputClass={
                    " rounded-xl text-[#102127] placeholder-[#102127]"
                  }
                  holder={"Enter Display Name"}
                />

                <label className="text-white flex flex-col" htmlFor="country">
                  <span className="py-2 font-semibold">
                    Country <span className="text-[#E9CB50]">*</span>
                  </span>
                  <select
                    className="px-3 py-[10px] md:py-[14px] rounded-xl text-[#102127] placeholder-[#102127]"
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
                  labelValue={"Start Date"}
                  inputType={"date"}
                  labelClass={"font-semibold py-2"}
                  required={""}
                  inputName={"state-date"}
                  inputClass={
                    " rounded-xl text-[#102127] placeholder-[#102127]"
                  }
                  holder={""}
                />
                <div className="text-white flex pt-10 items-center">
                  <label className="container ">
                    Male
                    <input type="radio" name="gender" />
                    <span className="checkmark"></span>
                  </label>

                  <label className="container">
                    Female
                    <input type="radio" name="gender" />
                    <span className="checkmark"></span>
                  </label>
                </div>

                <div className="md:col-span-2">
                  <TextArea
                    labelValue={"Heading"}
                    required={"*"}
                    inputName={"heading"}
                    inputClass={
                      "p-3 rounded-xl text-[#102127] placeholder-[#102127]"
                    }
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
                  inputClass={
                    " rounded-xl text-[#102127] placeholder-[#102127]"
                  }
                  holder={"Select"}
                />
                <Input
                  labelValue={"Mobile Number"}
                  labelClass={"font-semibold py-2"}
                  inputType={"tel"}
                  required={"*"}
                  inputName={"number"}
                  inputClass={
                    "p-3 rounded-xl text-[#102127] placeholder-[#102127]"
                  }
                  holder={"E.g 12345678881"}
                />
              </div>

              <div className="  pt-4 pb-8 lg:max-w-[300px]">
                <div>
                  <p className="text-[#F1D6D6] text-[14px]">
                    <p>
                      Username is a unique name for admin to identify you. It
                      can be anything or whatever you can remember.
                    </p>
                    <p>
                      Your display name is the important name everybody will see
                      on your profile.
                    </p>
                    <p>So,</p>
                    <p>Don't use your real name as a display name.</p>
                    <p>
                      Use a fancy name like a nice nickname but one your mum and
                      dad don't know about.
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
            <Link
              to={"/signup/escort/1"}
              className="text-center block bg-[#E9CB50] w-[100%] py-3 md:py-4 md:w-[120px] font-semibold mt-12 rounded-xl"
            >
              Next
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EscortDetailsOne;
