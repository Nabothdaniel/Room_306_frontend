import React from "react";

const ProfileAbout = () => {
  return (
    <div className="pt-6 text-[#DADADA]">
      <div className="grid grid-cols-2 md:grid-cols-4 text-[15px] pt-3 gap-y-6 md:gap-y-8">
        <div className="flex flex-col justify-center">
          <h4 className="text-[#B29A9A] text-[14px]">Username</h4>
          <p className="font-semibold">AlexFresh</p>
        </div>
        <div className="flex flex-col md:col-span-3 justify-center">
          <h4 className="text-[#B29A9A] text-[14px]">Display Name</h4>
          <p className="font-semibold">AlexFresh</p>
        </div>
        <div className="flex flex-col justify-center">
          <h4 className="text-[#B29A9A] text-[14px]">Email</h4>
          <p className="font-semibold">AlexFresh@gmail.com</p>
        </div>

        <div className="flex flex-col md:col-span-3 justify-center">
          <h4 className="text-[#B29A9A] text-[14px]">Phone Number</h4>
          <p className="font-semibold">+2349034567</p>
        </div>

        <div className="flex flex-col justify-center">
          <h4 className="text-[#B29A9A] text-[14px]">Education</h4>
          <p className="font-semibold">Student</p>
        </div>
        <div className="flex flex-col justify-center">
          <h4 className="text-[#B29A9A] text-[14px]">Occupation</h4>
          <p className="font-semibold">Student</p>
        </div>
        <div className="flex flex-col justify-center">
          <h4 className="text-[#B29A9A] text-[14px]">Country</h4>
          <p className="font-semibold">Nigeria</p>
        </div>
        <div className="flex flex-col justify-center">
          <h4 className="text-[#B29A9A] text-[14px]">State</h4>
          <p className="font-semibold">Abuja</p>
        </div>

        <div className="flex flex-col justify-center">
          <h4 className="text-[#B29A9A] text-[14px]">Last Login</h4>
          <p className="font-semibold">February 29, 2024</p>
        </div>
        <div className="flex flex-col justify-center">
          <h4 className="text-[#B29A9A] text-[14px]">Registration Login</h4>
          <p className="font-semibold">December 22, 2022</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileAbout;
