import React, { useState } from "react";
import Header from "../components/Header";
import Logo from "../images/logo.png";
import { CiMail, CiLock } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";

const Login = ({ loginControl, loginClass }) => {
  const [formData, setFormData] = useState("");

  const handleForm = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div
      className={`bg-black/40 duration-500 fixed top-0 z-[999] ${loginClass} left-0 w-[100%] h-screen flex justify-center items-center`}
    >
      <div className="bg-[#1E1E1E] flex pt-20 flex-col w-[500px] relative text-white z-[9999] rounded-xl px-8 py-3 mx-5 ">
        <LiaTimesSolid
          onClick={() => {
            loginControl(false);
          }}
          className="absolute top-5 right-5 size-5 text-[#D2B6B6] cursor-pointer"
        />
        <img
          className="md:w-[200px] w-[180px] h-[100px]  md:h-[130px] mx-auto"
          src={Logo}
          alt=""
        />
        <Header
          value="Login to your Account"
          headerClass="md:text-3xl text-2xl text-center text-[#D8D8D8] font-semibold pt-7 mb-2"
        />

        <label className="flex flex-col pt-8" htmlFor="email">
          <span className="pb-3 text-[17px]">Email</span>
          <div className="w-[100%] py-2 px-4 rounded-xl border-[0.5px] bg-transparent border-neutral-800 flex">
            <CiMail className="size-8 text-[#C4C4C4] mr-3" />
            <input
              onChange={handleForm}
              className="w-[100%] bg-transparent placeholder-[#797979] text-[#797979]"
              type="email"
              name="email"
            />
          </div>
        </label>
        <label className="flex flex-col pt-8" htmlFor="password">
          <span className="pb-3 text-[17px]">Password</span>
          <div className="w-[100%] py-2 px-4 rounded-xl border-[0.5px] bg-transparent border-neutral-800 flex">
            <CiLock className="size-8 text-[#C4C4C4] mr-3" />
            <input
              onChange={handleForm}
              className="w-[100%] bg-transparent placeholder-[#797979] text-[#797979]"
              type="password"
              name="password"
            />
          </div>
        </label>
        <p className="text-end py-4 text-[#D8D8D8] text-[17px] pr-4">
          Forgot Password?
        </p>
        <button className="bg-[#E9CB50] w-[100%] text-[18px] md:py-5 py-3 font-semibold text-[#171717] mb-10 rounded-xl">
          Log In
        </button>
      </div>
    </div>
  );
};

export default Login;
