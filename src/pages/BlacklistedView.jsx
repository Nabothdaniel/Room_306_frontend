import React from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Arrow from "../images/arrow-left.svg";
import Placeholder from "../images/green-arrow-capital-profilo.png";
import BlacklistSwiper from "../components/BlacklistSwiper";
import { useNavigate, useParams } from "react-router-dom";
import BlacklistImageSwipe from "../components/BlacklistImageSwipe";
import User from "../images/blog.jpeg";
import TextArea from "../components/TextArea";
import Footer from "../components/Footer";
import { useBlacklistedByIdQuery } from "../redux/EscortApi";
import Loading from "../components/Loading";

const BlacklistedView = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useBlacklistedByIdQuery(id);

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    navigate("/404");
    return;
  }

  const items = data.reported_user;

  return (
    <div className="block md:flex overflow-x-clip max-w-[1740px] mx-auto">
      <SideBar />
      <div className="flex-1 md:w-[80%] pt-6 md:pt-14 px-3 md:px-6 lg:px-10">
        <Navbar
          Headervalue={"Welcome to Room 306"}
          textValue={"Explore our escort at your own pace"}
        />

        <div className="md:pt-14 pt-3">
          <div
            className="px-1  grid pb-10 grid-cols-1
         lg:grid-cols-4 gap-6"
          >
            <div className="lg:col-span-3">
              <h2
                onClick={() => navigate(-1)}
                className="text-white font-semibold md:pb-4 pb-2 cursor-pointer flex items-center"
              >
                <img className="size-5 mr-1" src={Arrow} alt="" />
                Back
              </h2>
              <div className="md:col-span-3 mb-6 md:mb-0 bg-[#1E1E1E] rounded-2xl px-2 pt-2 pb-12 md:pb-10">
                <BlacklistImageSwipe items={data.report.images} />
                {!items?.images && (
                  <img
                    className="rounded-lg md:h-[500px] h-[350px] object-cover"
                    src={Placeholder}
                    alt=""
                  />
                )}
                <div className="text-white md:pl-10 pl-6 pt-6">
                  <h2 className="md:text-3xl text-[20px] font-semibold pb-4">
                    {items.display_name}
                  </h2>
                  <div className="flex flex-col gap-y-2">
                    <p className="font-semibold ">
                      Location:{" "}
                      <span className="font-normal text-[14px] text-white/80">
                        {items.city}, {items.country}
                      </span>
                    </p>
                    <p className="font-semibold ">
                      Phone:{" "}
                      <span className="font-normal text-[14px] text-white/80">
                        {items.mobile_number}
                      </span>
                    </p>

                    <p className="font-semibold ">
                      Crime Committed:{" "}
                      <span className="font-normal text-[14px] text-white/80">
                        {data.report.description}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="border-2 border-neutral-600 py-5 px-6 rounded-xl mx-4 mt-6">
                  <h2 className="md:text-xl text-white text-[17px] font-semibold pb-4">
                    Full Details
                  </h2>
                  <p className="text-white/80 text-[14px]">
                    {data?.report?.description}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-center text-white font-medium lg:pb-3 text-xl">
                More Blacklisted
              </h2>
              <BlacklistSwiper />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default BlacklistedView;
