import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Frame from "../images/Frame.svg";
import TestimonialCard from "../components/TestimonialCard";
import Pagination from "../components/Pagination";
import TestimonialModel from "../components/TestimonialModel";
import { useGetTestimonialQuery } from "../redux/ApiSlice";
import Loading from "../components/Loading";
import Footer from "../components/Footer";

const Testimonials = () => {
  const [openModel, setOpenModel] = useState(false);
  const { data, isLoading } = useGetTestimonialQuery();
  const [currentPage, setCurrentPage] = useState(0);
  const handleModel = () => {
    setOpenModel(!openModel);
  };

  if (isLoading) {
    return <Loading />;
  }

  const usersPage = 12;

  const page = currentPage * usersPage;

  const displayTest = data.slice(page, page + usersPage).map((item, index) => {
    return <TestimonialCard key={index} items={item} />;
  });

  const pageCount = Math.ceil(data.length / usersPage);

  return (
    <div className="block md:flex overflow-x-clip h-screen max-w-[1740px] mx-auto">
      <SideBar />

      <div className="flex-1 md:w-[80%] pt-6 md:pt-14 px-6 lg:px-10">
        <Navbar
          Headervalue={"How is our Services"}
          textValue={"Explore our rooms and activities"}
        />
        <div className="pb-10">
          <div className="flex md:pt-8 pt-2 pb-2 justify-between items-center">
            <h2 className="text-white md:py-6 md:text-[20px] font-semibold">
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
            {data?.length == 0 ? (
              <div className="md:col-span-2 col-span-1 h-[40vh] flex justify-center items-center">
                <p className="text-white md:text-xl font-semibold">
                  No Testimonial..
                </p>
              </div>
            ) : (
              <div className="md:col-span-2 col-span-1 grid md:grid-cols-2 grid-cols-1 gap-3 md:gap-4 lg:gap-7">
                {displayTest}
              </div>
            )}
          </div>
          {data.length == 0 || (
            <Pagination PageCount={pageCount} setCurrentPage={setCurrentPage} />
          )}
        </div>
        <Footer />
      </div>
      <TestimonialModel
        handleModel={handleModel}
        modelClass={`${openModel ? "translate-x-0" : "translate-x-[120vw]"}`}
      />
    </div>
  );
};

export default Testimonials;
