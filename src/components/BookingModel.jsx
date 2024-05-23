import React, { useState } from "react";
import Close from "../images/icon.svg";
import Input from "./Input";
import TextArea from "./TextArea";
import axios from "axios";

const BookingModel = ({ bookClass, handleBook, user }) => {
  const [Data, setData] = useState({
    time: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };

  const formData = new FormData();
  formData.append("time", Data.time);
  formData.append("message", Data.message);
  formData.append("date", Data.date);

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        `https://room35backend.onrender.com/api/booking/book/${user.escort_details.id}/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
        }
      );

      handleBook();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className={`bg-black/40 duration-500 ${bookClass}  fixed top-0 z-[999999] left-0 w-[100%] h-screen flex justify-center items-center`}
    >
      <div className="md:w-[800px] w-[90%] rounded-xl py-6 bg-white">
        <div className="border-b-2 pb-4 flex justify-between items-center px-4 pr-7 md:px-8 font-semibold text-[20px] border-[#F1D6D6]">
          <h2 className="md:text-2xl text-[16px] font-semibold">
            Booking Details{" "}
            <span className="text-blue-300">
              {user.escort_details.user.display_name}
            </span>
          </h2>
          <img
            onClick={handleBook}
            className="size-4 cursor-pointer text-[#F1D6D6]"
            src={Close}
            alt=""
          />
        </div>
        <div className="px-4 py-5">
          <Input
            labelValue={"From Date"}
            inputType={"date"}
            labelClass={"font-semibold text-black py-2"}
            required={""}
            inputName={"date"}
            inputClass={
              " rounded-xl bg-[#F0F2F5]  text-[#102127] placeholder-[#102127]"
            }
            holder={""}
            value={Data.date}
            onchange={handleChange}
          />
          <Input
            labelValue={"Time"}
            inputType={"time"}
            labelClass={"font-semibold text-black py-2"}
            required={""}
            inputName={"time"}
            inputClass={
              " rounded-xl bg-[#F0F2F5]  text-[#102127] placeholder-[#102127]"
            }
            holder={""}
            value={Data.time}
            onchange={handleChange}
          />

          <TextArea
            labelValue={"Message"}
            labelClass={"text-black"}
            required={""}
            inputName={"message"}
            inputClass={
              "p-3 rounded-xl bg-[#F0F2F5] outline-none text-[#102127] placeholder-[#102127]"
            }
            holder={""}
            col={""}
            row={"7"}
            value={Data.message}
            onchange={handleChange}
          />

          <div>
            <button
              onClick={handleSubmit}
              className="bg-[#E9CB50] float-right text-[#171717] mt-4 text-[14px] h-[48px] w-[150px] font-semibold rounded-xl"
            >
              Send Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModel;
