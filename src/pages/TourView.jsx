import React, { useReducer, useState } from "react";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import Blog from "../images/blog.jpeg";
import { BlogSwiper } from "../components/BlogSwiper";
import { useNavigate, useParams } from "react-router-dom";
import Arrow from "../images/arrow-left.svg";
import Frame from "../images/Frame.svg";
import Loading from "../components/Loading";
import { format, parseISO } from "date-fns";
import Reviews from "../components/Reviews";
import toast from "react-hot-toast";
import { useGetTourByIdQuery, useGetTourReviewQuery } from "../redux/tourApi";
import TourReviews from "../components/TourReviews";
import Footer from "../components/Footer";

const reducer = (state, action) => {
  switch (action.type) {
    case "Change1":
      return {
        open1: true,
      };
    case "Change2":
      return {
        open2: true,
      };
    case "Change3":
      return {
        open3: true,
      };
  }
};

const TourView = () => {
  let useD = JSON.parse(localStorage.getItem("details"));
  let users = useD?.profile;
  const { id } = useParams();
  const [review, setReview] = useState(false);
  const { data: reviews } = useGetTourReviewQuery(id);
  const { data, isLoading } = useGetTourByIdQuery(id);

  const [state, dispatch] = useReducer(reducer, {
    open1: true,
    open2: false,
    open3: false,
  });
  const navigate = useNavigate();

  if (isLoading) {
    return <Loading />;
  }

  const handleReview = () => {
    if (users) {
      setReview(!review);
    } else {
      toast.error("You're not a user, Sign In Or Sign Up");
    }
  };

  if (!data) {
    navigate("/404");
    return;
  }

  const postDate = parseISO(data.user.createdAt);
  const formatDate = format(postDate, "MMMM dd, yyyy 'at' h:mm a");

  const parsedDate = parseISO(data.start_date);
  const Start_Date = format(parsedDate, "d MMMM");

  const parsedEndDate = parseISO(data.end_date);
  const End_Date = format(parsedEndDate, "d MMMM");

  return (
    <div className="block md:flex overflow-x-clip h-screen max-w-[1740px] mx-auto">
      <SideBar />

      <div className="flex-1 md:w-[80%] pt-6 md:pt-14 px-6 lg:px-10">
        <Navbar
          Headervalue={"Welcome to Room 306"}
          textValue={"Explore our escort at your own Pace"}
        />
        <div
          className="py-6 md:pt-14  grid grid-cols-1
         lg:grid-cols-4 gap-6"
        >
          <div className="lg:col-span-3">
            <h2
              onClick={() => navigate(-1)}
              className="text-white   font-semibold cursor-pointer flex items-center"
            >
              <img className="size-5 mr-1" src={Arrow} alt="" />
              Back
            </h2>
            <div className="pt-5">
              <h1 className="md:text-3xl font-semibold text-white pb-5 text-xl">
                {data.title}
              </h1>
              <img
                className="h-[450px] object-fit rounded-md"
                src={`https://backend.theroom306.com${data.cover_image}`}
                alt=""
              />
            </div>
            <div className="border-b-2 pt-10 flex px-2 relative  font-semibold items-center text-white border-[#393C49] py-3">
              <p
                onClick={() => dispatch({ type: "Change1" })}
                className={`md:mr-10 mr-4 text-[14px] md:text-base cursor-pointer duration-700 ${
                  state.open1 &&
                  "before:contents-[''] duration-500 before:absolute text-[#E9CB50] before:-bottom-[2px] before:w-[90px] md:before:w-[110px] before:h-[3px] before:rounded-lg before:bg-[#E9CB50]"
                }    `}
              >
                Tour Details
              </p>

              <p
                onClick={() => dispatch({ type: "Change3" })}
                className={`md:mr-10 mr-4 text-[14px] md:text-base cursor-pointer duration-700 ${
                  state.open3 &&
                  "before:contents-[''] duration-500  before:absolute text-[#E9CB50] before:-bottom-[2px] before:w-[60px] md:before:w-[70px] before:h-[3px] before:rounded-lg before:bg-[#E9CB50]"
                }    `}
              >
                Reviews
              </p>
            </div>
            <div
              className={`bg-[#1e1e1e]  py-4 px-4 md:px-8 h-[400px] rounded-lg mt-10 ${
                !state.open1 && "hidden"
              } `}
            >
              <div className="grid grid-cols-2 gap-x-3 border-b border-neutral-600 pb-4 pt-5 text-white">
                <h2 className="font-semibold">Tour Dates</h2>
                <p className="text-[12px]">
                  {Start_Date} - {End_Date}
                </p>
              </div>
              <div className="grid grid-cols-2 border-b gap-x-3 border-neutral-600 pb-4 pt-5 text-white">
                <h2 className="font-semibold">Tour Location</h2>
                <p className="text-[12px]">
                  {data.city}, {data.state}, {data.country}
                </p>
              </div>
              <div className="grid grid-cols-2 border-b gap-x-3 border-neutral-600 pb-4 pt-5 text-white">
                <h2 className="font-semibold">Mobile Number</h2>
                <p className="text-[12px]">{data.user.mobile_number}</p>
              </div>
            </div>

            <div
              className={`bg-[#1e1e1e] text-white  py-4 px-4 pb-8 md:px-8 h-fit rounded-lg mt-10 ${
                !state.open3 && "hidden"
              } `}
            >
              <div className="flex items-center">
                <h2 className="md:text-3xl font-semibold">
                  Reviews{" "}
                  <span className="bg-yellow-300 px-2 py-1 text-base rounded-md text-black">
                    {reviews?.length}
                  </span>
                </h2>
                <img
                  onClick={handleReview}
                  className="size-7 cursor-pointer ml-2"
                  src={Frame}
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-y-2 mt-8">
                {reviews?.map((item, index) => {
                  const reviewDate = parseISO(item.created_at);
                  const formattedDate = format(
                    reviewDate,
                    "MMMM dd, yyyy 'at' h:mm a"
                  );

                  return (
                    <div
                      key={index}
                      className="flex text-white bg-black rounded-xl px-5 py-4"
                    >
                      <img
                        className="size-20 rounded-md"
                        src={`https://backend.theroom306.com${item.user.image}`}
                        alt=""
                      />
                      <div className="ml-5">
                        <h2 className="font-semibold md:text-xl text-base">
                          {item.user.display_name}
                        </h2>
                        <p className="text-[12px] text-white/60">
                          {formattedDate}
                        </p>
                        <p className="pt-2">{item.comment}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex text-white pt-10 pb-4">
              <img
                className="size-20 rounded-md"
                src={`https://backend.theroom306.com${data.user.image}`}
                alt=""
              />
              <div className="ml-5">
                <h2 className="font-semibold md:text-xl text-base">
                  {data.user.display_name}
                </h2>
                <p className="text-[12px] text-white/60">{formatDate}</p>
              </div>
            </div>
          </div>

          <div className="mt-5 lg:mt-0">
            <h2 className="text-center text-white font-medium pb-6 lg:pb-2 text-xl">
              Fresh Escorts
            </h2>
            <div>
              <BlogSwiper />
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <TourReviews
        id={data.id}
        reviewClass={`${!review ? "translate-x-[120vw]" : "translate-x-0"}`}
        handleReview={handleReview}
      />
    </div>
  );
};

export default TourView;
