import React from "react";

const EscortRateEdit = ({ rateClass }) => {
  return (
    <div className={`bg-[#1E1E1E] ${rateClass} rounded-xl pb-8 py-5 px-7`}>
      <h2 className="md:text-2xl text-[18px] text-white font-semibold">Rate</h2>
      <label className="text-white pt-5 flex flex-col" htmlFor="ethnicity">
        <span className="font-semibold text-[14px] md:text-base pb-1">
          Currency<span className="text-[#E9CB50]">*</span>
        </span>
        <div className=" placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
          <select
            className="w-[100%] bg-[#F0F2F5] py-[10px] md:py-[14px] outline-none"
            name="currency"
            id="currency"
          >
            <option value="">Choose Here</option>
          </select>
        </div>
      </label>
      <div className="text-white flex pt-10 items-center">
        <label className="checkContainer w-[50%] ">
          Incall
          <input type="radio" name="incall" />
          <span className="checkmate"></span>
        </label>

        <label className="checkContainer  w-[50%]">
          Outcall
          <input type="radio" name="outcall" />
          <span className="checkmate"></span>
        </label>
      </div>

      <div>
        <h2 className="pb-3 pt-6 font-semibold text-[18px] text-white">
          Outcall Rates
        </h2>
        <div className="grid text-white md:grid-cols-3 gap-5">
          <label htmlFor="">
            <p className="py-2 font-semibold">Hourly Rate</p>
            <div className=" placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
              <select
                className="w-[100%] bg-[#F0F2F5] py-[10px] md:py-[14px] outline-none"
                name="overnight"
                id="overnight"
              >
                <option value="">Choose here</option>
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
          <label htmlFor="">
            <p className="py-2 font-semibold">One Night</p>
            <div className=" placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
              <select
                className="w-[100%] bg-[#F0F2F5] py-[10px] md:py-[14px] outline-none"
                name="overnight"
                id="overnight"
              >
                <option value="">Choose here</option>
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
          <label htmlFor="">
            <p className="py-2 font-semibold">Weekend Rate</p>
            <div className=" placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
              <select
                className="w-[100%] bg-[#F0F2F5] py-[10px] md:py-[14px] outline-none"
                name="overnight"
                id="overnight"
              >
                <option value="">Choose here</option>
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
        </div>

        <div>
          <h2 className="pb-3 pt-6 font-semibold text-[18px] text-white">
            Incall Rates
          </h2>
          <div className="grid text-white md:grid-cols-3 gap-5">
            <label htmlFor="">
              <p className="py-2 font-semibold">Hourly Rate</p>
              <div className=" placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
                <select
                  className="w-[100%] bg-[#F0F2F5] py-[10px] md:py-[14px] outline-none"
                  name="overnight"
                  id="overnight"
                >
                  <option value="">Choose here</option>
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
            <label htmlFor="">
              <p className="py-2 font-semibold">One Night</p>
              <div className=" placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
                <select
                  className="w-[100%] bg-[#F0F2F5] py-[10px] md:py-[14px] outline-none"
                  name="overnight"
                  id="overnight"
                >
                  <option value="">Choose here</option>
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
            <label htmlFor="">
              <p className="py-2 font-semibold">Weekend Rate</p>
              <div className=" placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
                <select
                  className="w-[100%] bg-[#F0F2F5] py-[10px] md:py-[14px] outline-none"
                  name="overnight"
                  id="overnight"
                >
                  <option value="">Choose here</option>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default EscortRateEdit;
