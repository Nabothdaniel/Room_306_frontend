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

        <div className="md:py-8 pb-8">
          <div className="flex justify-between items-center md:pb-6 py-2 md:pt-8">
            <h2 className="text-white md:py-4  md:text-2xl font-semibold">
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-x-16 md:gap-x-6 gap-y-4 md:gap-y-8">
              <Input
                labelValue={"Education"}
                inputType={"text"}
                required={"*"}
                inputName={"education"}
                inputClass={" rounded-xl text-[#102127] placeholder-[#102127]"}
                holder={"Select"}
              />
              <Input
                labelValue={"Occupation"}
                inputType={"text"}
                required={"*"}
                inputName={"occupation"}
                inputClass={" rounded-xl text-[#102127]  placeholder-[#102127]"}
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

              <h3 className="text-xl font-semibold  text-white pt-3">
                Body Details <span className="text-[#E9CB50]">*</span>
              </h3>
              <div className="grid md:col-span-2 lg:gap-x-16 md:gap-x-6 gap-y-4 md:gap-y-8 md:grid-cols-2">
                <label className="text-white flex flex-col" htmlFor="ethnicity">
                  <span className="font-semibold pb-1 ">
                    Ethnicity<span className="text-[#E9CB50]">*</span>
                  </span>
                  <div className=" w-[100%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
                    <select
                      className="w-[100%] bg-[#F0F2F5] py-[10px] md:py-[14px] outline-none"
                      name="ethnicity"
                      id="ethnicity"
                    >
                      <option value="">Your Ethnicity</option>
                      <option value="all">All</option>
                      <option value="asian">Asian</option>
                      <option value="black">Black</option>
                      <option value="indian">Indian</option>
                      <option value="latino">Latino</option>
                      <option value="middle eastern">Mid Eastern</option>
                      <option value="mix-race">Mix Race</option>
                      <option value="other">Other</option>
                      <option value="others">Others</option>
                      <option value="white">White</option>
                    </select>
                  </div>
                </label>
                <label className="text-white flex flex-col" htmlFor="bust-size">
                  <span className="font-semibold pb-1">
                    Bust Size<span className="text-[#E9CB50]">*</span>
                  </span>
                  <div className=" w-[100%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
                    <select
                      className="w-[100%] bg-[#F0F2F5] py-[10px] md:py-[14px] outline-none"
                      name="bust-size"
                      id="bust-size"
                    >
                      <option value="">Choose here</option>
                      <option>All</option>
                      <option>Enormous(E+)</option>
                      <option>Large(C-cup)</option>
                      <option>Large(D-cup)</option>
                      <option>Medium(B-cup)</option>
                      <option>None</option>
                      <option>Small A</option>
                      <option>Very Large(DD-cup)</option>
                      <option>Very Small</option>
                    </select>
                  </div>
                </label>
                <Input
                  labelValue={"Occupation"}
                  labelClass={"font-semibold py-2"}
                  inputType={"text"}
                  required={"*"}
                  inputName={"occupation"}
                  inputClass={
                    " rounded-xl text-[#102127]  placeholder-[#102127]"
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
                    " rounded-xl text-[#102127]  placeholder-[#102127]"
                  }
                  holder={"Enter Here"}
                />
                <label className="text-white flex flex-col" htmlFor="build">
                  <span className="font-semibold pb-1">
                    Build<span className="text-[#E9CB50]">*</span>
                  </span>
                  <div className=" w-[100%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
                    <select
                      className="w-[100%] bg-[#F0F2F5] py-[10px] md:py-[14px] outline-none"
                      name="build"
                      id="build"
                    >
                      <option value="">Choose here</option>
                      <option>All</option>
                      <option>Athletic</option>
                      <option>Chubby</option>
                      <option>Curvy</option>
                      <option>Elegant</option>
                      <option>Fat</option>
                      <option>Fluffy</option>
                      <option>Gym Buddy</option>
                      <option>Heavy</option>
                      <option>Huge</option>
                      <option>Muscular</option>
                      <option>Regular</option>
                      <option>Robust</option>
                      <option>Skinny</option>
                      <option>Slender</option>
                      <option>Slim</option>
                    </select>
                  </div>
                </label>
                <label className="text-white flex flex-col" htmlFor="looks">
                  <span className="font-semibold pb-1">
                    Looks<span className="text-[#E9CB50]">*</span>
                  </span>
                  <div className=" w-[100%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
                    <select
                      className="w-[100%] bg-[#F0F2F5] py-[10px] md:py-[14px] outline-none"
                      name="looks"
                      id="looks"
                    >
                      <option value="">Choose here</option>
                      <option>All</option>
                      <option>Average</option>
                      <option>Corporate type</option>
                      <option>Dominatrix</option>
                      <option>Eye Candy</option>
                      <option>Goddess</option>
                      <option>Naugthy Teacher</option>
                      <option>PornStar</option>
                      <option>Pretty Boy with Red lips</option>
                      <option>Sexy</option>
                      <option>Sexy Tranny</option>
                      <option>Slutty Nurse</option>
                      <option>Stripper</option>
                    </select>
                  </div>
                </label>
                <div className=" ">
                  <h4 className="text-white font-semibold pb-3">
                    Smoker<span className="text-[#E9CB50]">*</span>
                  </h4>
                  <div className="flex md:w-[50%]">
                    <label className="container text-white ">
                      Yes
                      <input type="radio" name="smoker" />
                      <span className="checkmark"></span>
                    </label>

                    <label className="container text-white">
                      No
                      <input type="radio" name="smoker" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
                <label
                  className="text-white flex flex-col"
                  htmlFor="sexual-orientation"
                >
                  <span className="font-semibold pb-1">
                    Sexual Orientation<span className="text-[#E9CB50]">*</span>
                  </span>
                  <div className=" w-[100%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
                    <select
                      className="w-[100%] bg-[#F0F2F5] py-[10px] md:py-[14px] outline-none"
                      name="sexual-orientation"
                      id="sexual-orientation"
                    >
                      <option value="">Sexual Orientation</option>
                      <option>HetroSexual(Straight)</option>
                      <option>Bisexual</option>
                      <option>Lesian</option>
                      <option>Gay</option>
                      <option>Trans-Sexual</option>
                      <option>Mistress(Domination)</option>
                      <option>Master(Domination)</option>
                    </select>
                  </div>
                </label>
                <div className=" ">
                  <h4 className="text-white font-semibold pb-3">
                    Availability for Incall
                    <span className="text-[#E9CB50]">*</span>
                  </h4>
                  <div className="flex md:w-[50%]">
                    <label className="container text-white ">
                      Yes
                      <input type="radio" name="incall" />
                      <span className="checkmark"></span>
                    </label>

                    <label className="container text-white">
                      No
                      <input type="radio" name="incall" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
                <div className=" ">
                  <h4 className="text-white font-semibold pb-3">
                    Availability for Outcall
                    <span className="text-[#E9CB50]">*</span>
                  </h4>
                  <div className="flex md:w-[50%]">
                    <label className="container text-white ">
                      Yes
                      <input type="radio" name="outcall" />
                      <span className="checkmark"></span>
                    </label>

                    <label className="container text-white">
                      No
                      <input type="radio" name="outcall" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
                <Input
                  labelValue={"Language Spoken"}
                  required={"*"}
                  labelClass={"text-white pb-2 font-semibold text-[16px]"}
                  inputType={"text"}
                  inputName={"language"}
                  inputClass={
                    "bg-[#F0F2F5] py-3 px-4 md:mb-5 rounded-xl placeholder-[#102127] text-[#102127]"
                  }
                  holder={"Enter Here"}
                />
              </div>
            </div>

            <button className="bg-[#E9CB50] w-[100%] py-3 md:py-4 md:w-[120px] font-semibold mt-12 rounded-xl">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EscortDetailsTwo;
