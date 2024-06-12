import React from "react";
import RateOption from "./RateOption";

const EscortRateEdit = ({
  rateClass,
  formData,
  handleChange,
  setFormData,
  currency,
}) => {
  const handleCheck = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
  };

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
            value={currency}
            onChange={handleChange}
          >
            <option value="">Choose Here</option>
            <option>{currency}</option>
          </select>
        </div>
      </label>

      <div>
        <h2 className="pb-3 pt-6 font-semibold text-[18px] text-white">
          Outcall Rates
        </h2>
        <div className="grid text-white md:grid-cols-3 gap-5">
          <label htmlFor="outcall_short_time">
            <p className="py-2 font-semibold">Hourly Rate</p>
            <div className=" placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
              <select
                className="w-[100%] bg-[#F0F2F5] py-[10px] md:py-[14px] outline-none"
                name="outcall_short_time"
                id="outcall_short_time"
                value={formData.outcall_short_time}
                onChange={handleChange}
              >
                <RateOption />
              </select>
            </div>
          </label>
          <label htmlFor="outcall_overnight">
            <p className="py-2 font-semibold">One Night</p>
            <div className=" placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
              <select
                className="w-[100%] bg-[#F0F2F5] py-[10px] md:py-[14px] outline-none"
                name="outcall_overnight"
                id="outcall_overnight"
                value={formData.outcall_overnight}
                onChange={handleChange}
              >
                <RateOption />
              </select>
            </div>
          </label>
          <label htmlFor="outcall_weekend">
            <p className="py-2 font-semibold">Weekend Rate</p>
            <div className=" placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
              <select
                className="w-[100%] bg-[#F0F2F5] py-[10px] md:py-[14px] outline-none"
                name="outcall_weekend"
                id="outcall_weekend"
                value={formData.outcall_weekend}
                onChange={handleChange}
              >
                <RateOption />
              </select>
            </div>
          </label>
        </div>

        <div>
          <h2 className="pb-3 pt-6 font-semibold text-[18px] text-white">
            Incall Rates
          </h2>
          <div className="grid text-white md:grid-cols-3 gap-5">
            <label htmlFor="incall_short_time">
              <p className="py-2 font-semibold">Hourly Rate</p>
              <div className=" placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
                <select
                  className="w-[100%] bg-[#F0F2F5] py-[10px] md:py-[14px] outline-none"
                  name="incall_short_time"
                  id="incall_short_time"
                  value={formData.incall_short_time}
                  onChange={handleChange}
                >
                  <RateOption />
                </select>
              </div>
            </label>
            <label htmlFor="incall_overnight">
              <p className="py-2 font-semibold">One Night</p>
              <div className=" placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
                <select
                  className="w-[100%] bg-[#F0F2F5] py-[10px] md:py-[14px] outline-none"
                  name="incall_overnight"
                  id="incall_overnight"
                  value={formData.incall_overnight}
                  onChange={handleChange}
                >
                  <RateOption />
                </select>
              </div>
            </label>
            <label htmlFor="incall_weekend">
              <p className="py-2 font-semibold">Weekend Rate</p>
              <div className=" placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
                <select
                  className="w-[100%] bg-[#F0F2F5] py-[10px] md:py-[14px] outline-none"
                  name="incall_weekend"
                  id="incall_weekend"
                  value={formData.incall_weekend}
                  onChange={handleChange}
                >
                  <RateOption />
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
