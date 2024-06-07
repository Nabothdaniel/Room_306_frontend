import React, { useState } from "react";
import Close from "../images/close-icon.svg";
import { Link } from "react-router-dom";
import toast, { LoaderIcon } from "react-hot-toast";
import { useTestimonialsMutation } from "../redux/ApiSlice";

const TestimonialModel = ({ modelClass, handleModel }) => {
  const [load, setLoad] = useState(false);
  const [content, setContent] = useState("");
  const [testimony] = useTestimonialsMutation();
  const users = JSON.parse(localStorage.getItem("details"));

  const handleSubmit = async () => {
    if (users) {
      if (content.trim()) {
        setLoad(true);
        try {
          const res = await testimony({ content: content.trim() }).unwrap();
          setLoad(false);
          handleModel();
          setContent("");
          toast.success("Testimonial Submitted");
        } catch (err) {
          setLoad(false);
          toast.error("Failed");
        }
      } else {
        toast.error("Field is Required");
      }
    } else {
      toast.error("Only signed in user can give a testimonial");
    }
  };

  return (
    <div
      className={`bg-black/40 duration-500 ${modelClass} fixed top-0 z-[999] left-0 w-[100%] h-screen flex justify-center items-center`}
    >
      <div className="bg-white flex flex-col w-[380px] z-[9999] rounded-2xl mx-5 ">
        <div className="border-b-2 p-4 flex justify-between items-center font-semibold px-5 text-[20px] border-[#F1D6D6]">
          <h3>Write a Testimonial</h3>
          <img
            onClick={handleModel}
            className="size-3 cursor-pointer"
            src={Close}
            alt=""
          />
        </div>
        <label className="px-7 pt-6 pb-4" htmlFor="testimonial">
          <span className="text-[#475367] font-semibold">
            Feel free to give us a testimonial
          </span>
          <textarea
            className="bg-[#F0F2F5] mt-2 py-3 px-5 w-[100%] rounded-lg"
            name="testimonial"
            id=""
            rows={4}
            placeholder="Your description"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </label>
        <div className="mr-7 mb-5 flex justify-end">
          <button
            onClick={handleSubmit}
            disabled={load}
            className="text-center block bg-[#E9CB50] py-4 w-[120px] font-semibold rounded-2xl"
          >
            {load ? <LoaderIcon className="mx-auto" /> : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialModel;
