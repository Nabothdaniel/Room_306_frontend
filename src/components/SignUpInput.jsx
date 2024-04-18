import React from "react";
import Input from "./Input";
import Navbar from "./Navbar";

const SignUpInput = () => {
  return (
    <>
      <div className="flex-1 md:w-[80%] pt-16 md:px-10">
        <Navbar
          Headervalue={"Welcome to Room 306"}
          textValue={"Explore our escort at your own pace"}
        />

        <div className="py-8">
          <h2 className="text-white py-4 pb-6 text-2xl font-semibold">
            Client Details
          </h2>
          <div className="rounded-xl px-10 pl-12 mb-32 py-14 pb-20 bg-[#1E1E1E] ">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-y-0 gap-x-12 ">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 lg:col-span-2">
                <Input
                  labelValue={"Username"}
                  inputType={"text"}
                  required={"*"}
                  inputName={"username"}
                  inputClass={
                    "p-3 rounded-xl text-[#102127] placeholder-[#102127]"
                  }
                  holder={"Enter username"}
                />
                <Input
                  labelValue={"Email"}
                  inputType={"email"}
                  required={""}
                  inputName={"email"}
                  inputClass={
                    "p-3 rounded-xl text-[#102127]  placeholder-[#102127]"
                  }
                  holder={"Enter Email"}
                />
                <Input
                  labelValue={"Password"}
                  inputType={"password"}
                  required={"*"}
                  inputName={"password"}
                  inputClass={
                    "p-3 rounded-xl text-[#102127] placeholder-[#102127]"
                  }
                  holder={"Enter Password"}
                />
                <Input
                  labelValue={"Re-Enter Password"}
                  inputType={"password"}
                  required={"*"}
                  inputName={"password"}
                  inputClass={
                    "p-3 rounded-xl text-[#102127]  placeholder-[#102127]"
                  }
                  holder={"Enter Password"}
                />
                <Input
                  labelValue={"Display Name"}
                  inputType={"text"}
                  required={"*"}
                  inputName={"name"}
                  inputClass={
                    "p-3 rounded-xl text-[#102127] placeholder-[#102127]"
                  }
                  holder={"Enter Display Name"}
                />
                <Input
                  labelValue={"Country"}
                  inputType={"option"}
                  required={"*"}
                  inputName={"country"}
                  inputClass={
                    "p-3 rounded-xl text-[#102127] placeholder-[#102127]"
                  }
                  holder={"Select"}
                />
                <Input
                  labelValue={"State"}
                  inputType={"text"}
                  required={"*"}
                  inputName={"state"}
                  inputClass={
                    "p-3 rounded-xl text-[#102127] placeholder-[#102127]"
                  }
                  holder={"Select"}
                />
                <Input
                  labelValue={"City"}
                  inputType={"select"}
                  required={"*"}
                  inputName={"city"}
                  inputClass={
                    "p-3 rounded-xl text-[#102127] placeholder-[#102127]"
                  }
                  holder={"Select"}
                />
                <Input
                  labelValue={"Country Code"}
                  inputType={"select"}
                  required={"*"}
                  inputName={"country-code"}
                  inputClass={
                    "p-3 rounded-xl text-[#102127] placeholder-[#102127]"
                  }
                  holder={"Select"}
                />
                <Input
                  labelValue={"Mobile Number"}
                  inputType={"tel"}
                  required={"*"}
                  inputName={"number"}
                  inputClass={
                    "p-3 rounded-xl text-[#102127] placeholder-[#102127]"
                  }
                  holder={"E.g 12345678881"}
                />
              </div>

              <div className="md:mx-auto md:grid md:gap-x-5 md:grid-cols-2 lg:grid-cols-1 lg:gap-y-0 pb-8 lg:max-w-[300px]">
                <div className="bg-[#676767]  mt-4 h-[280px] md:max-w-[300px]  rounded-xl "></div>
                <div>
                  <p className="text-[#DC3545] text-[14px] py-4">
                    Please upload your profile picture!
                  </p>
                  <p className="text-[#F1D6D6] text-[14px]">
                    Our esteemed gentlemen, owing to fraudsters making a runner
                    after service, escorts now demand tribute before service, No
                    Exception.{" "}
                    <span className="pt-1 block">
                      Clients are EXPECTED to provide transportation upfornt,
                      after confirming escort with a video call. Please do not
                      hesitate to report any Fraudulent Escort.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <button className="bg-[#E9CB50] py-3 px-4 font-semibold mt-12 rounded-xl">
              Sign up as a client
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpInput;
