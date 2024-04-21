import React from "react";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import RegisterCardComp from "../components/RegisterCardComp";

const RegisterCard = () => {
  return (
    <div className="block md:flex overflow-x-clip max-w-[1740px] mx-auto px-4 md:px-8">
      <SideBar />
      <div className="flex-1 md:w-[80%] pt-8 md:pt-16 md:px-4 lg:px-16">
        <Navbar
          Headervalue={"Welcome to Room 306"}
          textValue={"Explore our escort at your own pace"}
        />

        <div className="py-8 px-2">
          <div className="flex justify-between pt-8 ">
            <h2 className="text-white py-4 pb-10 md:text-2xl text-xl font-semibold">
              Create An Account
            </h2>
          </div>
          <RegisterCardComp />
        </div>
      </div>
    </div>
  );
};

export default RegisterCard;
