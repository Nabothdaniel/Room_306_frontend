import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { details } from "../../redux/UtilSlice";
import toast from "react-hot-toast";
import RateOption from "../../components/RateOption";

const EscortDetailsFour = () => {
  const currency = useSelector((state) => state.Util.userDetails.currency);
  // const incall = useSelector(
  //   (state) => state.Util.userDetails.available_incall
  // );
  // const outcall = useSelector(
  //   (state) => state.Util.userDetails.available_outcall
  // );

  const incall = true;
  const outcall = true;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    incall_short_time: "",
    incall_weekend: "",
    incall_overnight: "",
    outcall_short_time: "",
    outcall_weekend: "",
    outcall_overnight: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (
      !formData.incall_short_time &&
      !formData.outcall_short_time &&
      !formData.incall_overnight &&
      !formData.incall_weekend &&
      (!formData.outcall_overnight)(!formData.outcall_weekend)
    ) {
      toast.error("Fill all the Required Field");
    } else {
      dispatch(details(formData));
      navigate("/profile-upload");
    }
  };

  const handleDelete = () => {
    let text =
      "Pressing Delete will cancel your account Creation\nAre you sure? if so press OK.";
    if (confirm(text) == true) {
      navigate("/");
      window.location.reload(true);
    } else {
    }
  };

  return (
    <div className="block md:flex overflow-x-clip max-w-[1740px] mx-auto">
      <SideBar />

      <div className="flex-1 md:w-[80%] px-4 pt-6 md:pt-14 md:px-10">
        <Navbar
          Headervalue={"Welcome to Room 306"}
          textValue={"Explore our escort at your own pace"}
        />

        <div className="md:py-8 pb-8">
          <div className="flex justify-between items-center md:pb-6 pt-2 pb-2 md:pt-8">
            <h2 className="text-white md:py-4 md:text-2xl font-semibold">
              Escort Details
            </h2>

            <p className="text-white md:text-4xl text-3xl font-semibold">
              <span className="text-[#B29A9A] text-xl md:text-2xl">
                Step <span>3/</span>
              </span>
              5
            </p>
          </div>
          <div className="rounded-xl lg:px-10  px-4 py-6 md:px-12 md:py-14 bg-[#1E1E1E] ">
            <h3 className="md:text-[20px] text-white md:pb-4 font-semibold">
              At least One Rate <span className="text-[#E9CB50]">*</span>
            </h3>
            <label className="text-white pt-5 flex flex-col" htmlFor="currency">
              <span className="font-semibold text-[14px] md:text-base pb-1">
                Currency<span className="text-[#E9CB50]">*</span>
              </span>
              <div className=" max-w-[900px] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
                <select
                  className="w-[100%] bg-[#F0F2F5] py-[10px] md:py-[14px] outline-none"
                  name="currency"
                  id="currency"
                >
                  <option value="">Choose Here</option>
                  <option value={currency}>{currency}</option>
                </select>
              </div>
            </label>
            <div className="grid gap-x-4 md:gap-x-8 md:grid-cols-2">
              {incall && (
                <div className="pt-9">
                  <h3 className="text-[18px] pb-3 font-semibold text-white">
                    Incall
                  </h3>
                  <label
                    className="text-white pb-2 pt-5 md:items-center md:flex-row flex-col md:justify-between  flex max-w-[700px]"
                    htmlFor="incall_short_time"
                  >
                    <span className="font-semibold text-[14px] md:text-base pb-2 md:pb-1 ">
                      1 hours
                    </span>
                    <div className=" md:w-[80%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl pr-4 outline-none">
                      <select
                        className="w-[100%] px-4 bg-[#F0F2F5] rounded-xl py-[10px] md:py-[14px] outline-none"
                        name="incall_short_time"
                        id="incall_short_time"
                        onChange={handleChange}
                      >
                        <RateOption />
                      </select>
                    </div>
                  </label>
                  <label
                    className="text-white pb-2 pt-5 md:items-center md:flex-row flex-col md:justify-between flex max-w-[700px]"
                    htmlFor="incall_overnight"
                  >
                    <span className="font-semibold text-[14px] md:text-base pb-2 md:pb-1 ">
                      Over Night
                    </span>
                    <div className=" md:w-[80%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none pr-4">
                      <select
                        className="w-[100%] px-4 rounded-xl bg-[#F0F2F5] py-[10px] md:py-[14px] outline-none"
                        name="incall_overnight"
                        id="incall_overnight"
                        onChange={handleChange}
                      >
                        <RateOption />
                      </select>
                    </div>
                  </label>
                  <label
                    className="text-white pt-5 md:items-center md:flex-row flex-col md:justify-between flex max-w-[700px]"
                    htmlFor="incall_weekend"
                  >
                    <span className="font-semibold text-[14px] md:text-base pb-2 md:pb-1 ">
                      Weekend
                    </span>
                    <div className=" md:w-[80%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none pr-4">
                      <select
                        className="w-[100%] px-4 rounded-xl bg-[#F0F2F5] py-[10px] md:py-[14px] outline-none"
                        name="incall_weekend"
                        id="incall_weekend"
                        onChange={handleChange}
                      >
                        <RateOption />
                      </select>
                    </div>
                  </label>
                </div>
              )}

              {outcall && (
                <div className="pt-9">
                  <h3 className="text-[18px] pb-3 font-semibold text-white">
                    Outcall
                  </h3>
                  <label
                    className="text-white pb-2 pt-5 md:items-center md:flex-row flex-col md:justify-between  flex max-w-[700px]"
                    htmlFor="outcall_short_time"
                  >
                    <span className="font-semibold text-[14px] md:text-base pb-2 md:pb-1 ">
                      Short Time
                    </span>
                    <div className=" md:w-[80%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none pr-4">
                      <select
                        className="w-[100%] px-4 rounded-xl bg-[#F0F2F5] py-[10px] md:py-[14px] outline-none"
                        name="outcall_short_time"
                        id="outcall_short_time"
                        onChange={handleChange}
                      >
                        <RateOption />
                      </select>
                    </div>
                  </label>
                  <label
                    className="text-white pb-2 pt-5 md:items-center md:flex-row flex-col md:justify-between flex max-w-[700px]"
                    htmlFor="outcall_overnight"
                  >
                    <span className="font-semibold text-[14px] md:text-base pb-2 md:pb-1 ">
                      Over Night
                    </span>
                    <div className=" md:w-[80%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none pr-4">
                      <select
                        className="w-[100%] px-4 rounded-xl bg-[#F0F2F5] py-[10px] md:py-[14px] outline-none"
                        name="outcall_overnight"
                        id="outcall_overnight"
                        onChange={handleChange}
                      >
                        <RateOption />
                      </select>
                    </div>
                  </label>
                  <label
                    className="text-white pt-5 md:items-center md:flex-row flex-col md:justify-between flex max-w-[700px]"
                    htmlFor="outcall_weekend"
                  >
                    <span className="font-semibold text-[14px] md:text-base pb-2 md:pb-1 ">
                      Weekend
                    </span>
                    <div className=" md:w-[80%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none pr-4">
                      <select
                        className="w-[100%] px-4 rounded-xl bg-[#F0F2F5] py-[10px] md:py-[14px] outline-none"
                        name="outcall_weekend"
                        id="outcall_weekend"
                        onChange={handleChange}
                      >
                        <RateOption />
                      </select>
                    </div>
                  </label>
                </div>
              )}
            </div>

            <div className="mt-12 flex md:justify-start justify-between">
              <button
                onClick={handleDelete}
                className="bg-[#CD2727] text-white mr-5 w-[100%] py-3 md:py-4 md:w-[120px] font-medium rounded-xl"
              >
                Delete
              </button>
              <button
                onClick={handleSubmit}
                className="bg-[#E9CB50] block text-center w-[100%] text-[#171717] py-3 md:py-4 md:w-[120px] font-medium rounded-xl"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EscortDetailsFour;
