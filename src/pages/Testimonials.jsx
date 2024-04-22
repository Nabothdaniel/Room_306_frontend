import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Frame from "../images/Frame.svg";
import TestimonialCard from "../components/TestimonialCard";
import Pagination from "../components/Pagination";
import TestimonialModel from "../components/TestimonialModel";

const Testimonials = () => {
  const [openModel, setOpenModel] = useState(false);

  const handleModel = () => {
    setOpenModel(!openModel);
  };

  return (
    <div className="block md:flex overflow-x-clip h-screen max-w-[1740px] mx-auto">
      <SideBar />

      <div className="flex-1 md:w-[80%] pt-6 md:pt-14 px-6 lg:px-10">
        <Navbar
          Headervalue={"How is our Services"}
          textValue={"Explore our rooms and activities"}
        />
        <div className="pb-10">
          <div className="flex pt-6 justify-between items-center pb-6">
            <h2 className="text-white py-4 text-[20px] font-semibold">
              Testimonials
            </h2>

            <p className="text-white flex text-[18px] font-semibold">
              <span className="hidden md:block"> Write a Testimonials </span>
              <img
                onClick={handleModel}
                className="size-7 cursor-pointer ml-2 flex items-center"
                src={Frame}
                alt=""
              />
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:gap-7 md:gap-4 gap-3">
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </div>
          <Pagination />
        </div>
      </div>
      <TestimonialModel
        handleModel={handleModel}
        modelClass={`${openModel ? "translate-x-0" : "translate-x-[120vw]"}`}
      />
    </div>
  );
};

export default Testimonials;
