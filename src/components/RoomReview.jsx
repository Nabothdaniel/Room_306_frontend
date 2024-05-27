import React, { useEffect, useState } from "react";
import Close from "../images/close-icon.svg";
import TextArea from "./TextArea";
import axios from "axios";
import toast from "react-hot-toast";

const RoomReview = ({ reviewClass, handleReview, id }) => {
  let users = JSON.parse(localStorage.getItem("details"));
  const [formData, setFormData] = useState({
    room: id,
    rating: "",
    comment: "",
    user: users?.id,
  });
  const [error, setError] = useState("");

  const validateData = (data) => {
    let errors = {};
    if (!data.rating) {
      errors.rating = "Rating is Required";
    }
    if (!data.comment) {
      errors.review = "Review is Required";
    }

    return errors;
  };

  useEffect(() => {
    const validationErrors = validateData(formData);
    setError(validationErrors);
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const validationErrors = validateData(formData);
    setError(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      try {
        const res = await axios.post(
          `https://room35backend.onrender.com/api/room/addreview/${id}/`,
          formData,
          {
            headers: {
              Authorization:
                "Bearer " + JSON.parse(localStorage.getItem("token")),
            },
          }
        );
        toast.success("Reviews Submitted Successfully");
        window.location.reload(true);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div
      className={`bg-black/40 duration-500 ${reviewClass} fixed top-0 z-[999999] flex left-0 w-[100%] h-screen  justify-center`}
    >
      <div className="bg-white w-[80%] md:w-[400px] h-fit mt-28 py-4 rounded-xl">
        <div className="flex items-center justify-between border-b-2 px-6 pb-2 border-[#F1D6D6]">
          <h2 className="md:text-2xl font-semibold text-xl">Leave a Review</h2>
          <img
            onClick={handleReview}
            className="size-4 cursor-pointer"
            src={Close}
            alt=""
          />
        </div>
        <div className="px-4 py-5">
          <label className="text-[#475367] flex flex-col" htmlFor="">
            <span className="font-semibold pb-1">Choose Rating</span>
            <div className=" w-[100%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none pr-4">
              <select
                className="w-[100%] pl-4 rounded-xl bg-[#F0F2F5] py-[14px] outline-none"
                name="rating"
                id="rating"
                onChange={handleChange}
              >
                <option>Select</option>
                <option value={"5"}>5 stars</option>
                <option value={"4"}>4 stars</option>
                <option value={"3"}>3 stars</option>
                <option value={"2"}>2 stars</option>
                <option value={"1"}>1 star</option>
              </select>
            </div>
            {error.rating && (
              <p className="py-1 text-[12px] text-red-500">{error.rating}</p>
            )}
          </label>

          <div>
            <TextArea
              labelValue={"Review"}
              required={"*"}
              labelClass={"text-[#475367] pt-4"}
              inputName={"comment"}
              inputClass={
                "p-3 rounded-xl text-[#102127] bg-[#F0F2F5] placeholder-[#102127]"
              }
              holder={"Write your review here..."}
              col={""}
              row={"5"}
              onchange={handleChange}
            />
            {error.review && (
              <p className="py-1 text-[12px] text-red-500">{error.review}</p>
            )}
          </div>
          <button
            onClick={handleSubmit}
            className="text-center hover:bg-[#ffdc4e] duration-500  bg-[#E9CB50] w-[100%] py-3 md:py-4  font-semibold mt-6 rounded-xl"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomReview;
