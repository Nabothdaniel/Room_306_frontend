import React, { useReducer } from "react";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import Blog from "../images/blog.jpeg";
import { BlogSwiper } from "../components/BlogSwiper";
import { useNavigate, useParams } from "react-router-dom";
import Arrow from "../images/arrow-left.svg";
import Frame from "../images/Frame.svg";
import { RoomSwiper } from "../components/RoomSwiper";
import Loading from "../components/Loading";
import { useGetRoomByIdQuery } from "../redux/roomApi";

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

const RoomView = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetRoomByIdQuery(id);

  const [state, dispatch] = useReducer(reducer, {
    open1: true,
    open2: false,
    open3: false,
  });
  const navigate = useNavigate();

  if (isLoading) {
    return <Loading />;
  }

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
                className="h-[450px] object-cover md:object-contain rounded-md"
                src={`https://room35backend.onrender.com${data.cover_image}`}
                alt=""
              />
            </div>
            <div className="border-b-2 pt-10 flex px-2 relative  font-semibold items-center text-white border-[#393C49] py-3">
              <p
                onClick={() => dispatch({ type: "Change1" })}
                className={`md:mr-10 mr-4 text-[14px] md:text-base cursor-pointer duration-700 ${
                  state.open1 &&
                  "before:contents-[''] duration-500 before:absolute text-[#E9CB50] before:-bottom-[2px] before:w-[80px] md:before:w-[95px] before:h-[3px] before:rounded-lg before:bg-[#E9CB50]"
                }    `}
              >
                Description
              </p>
              <p
                onClick={() => dispatch({ type: "Change2" })}
                className={`md:mr-10 mr-4 text-[14px] md:text-base cursor-pointer duration-700 ${
                  state.open2 &&
                  "before:contents-[''] duration-500 text-[#E9CB50] before:absolute  before:-bottom-[2px] before:w-[45px] md:before:w-[50px] before:h-[3px] before:rounded-lg before:bg-[#E9CB50]"
                }    `}
              >
                Policy
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
              className={`bg-[#1e1e1e]  py-4 px-4 md:px-8 min-h-[450px] rounded-lg mt-10 ${
                !state.open1 && "hidden"
              } `}
            >
              <div className="grid grid-cols-2 gap-x-3 border-b border-neutral-600 pb-4 pt-5 text-white">
                <h2 className="font-semibold">Property Type</h2>
                <p className="text-[12px]">{data.property_type}</p>
              </div>
              <div className="grid grid-cols-2 border-b gap-x-3 border-neutral-600 pb-4 pt-5 text-white">
                <h2 className="font-semibold">Contacts</h2>
                <p className="text-[12px]">{data.contacts}</p>
              </div>
              <div className="grid grid-cols-2 border-b gap-x-3 border-neutral-600 pb-4 pt-5 text-white">
                <h2 className="font-semibold">Rates</h2>
                <p className="text-[12px]">NGN 700000/ weekly</p>
              </div>
              <div className="grid grid-cols-2 border-b gap-x-3 border-neutral-600 pb-4 pt-5 text-white">
                <h2 className="font-semibold">Location</h2>
                <p className="text-[12px]">
                  {data.city}, {data.state}, {data.country}
                </p>
              </div>
              <div className="grid grid-cols-2 border-b gap-x-3 border-neutral-600 pb-4 pt-5 text-white">
                <h2 className="font-semibold">Services</h2>
                <p className="text-[12px]">{data.services}</p>
              </div>
              <div className="grid grid-cols-2 border-b gap-x-3 border-neutral-600 pb-4 pt-5 text-white">
                <h2 className="font-semibold">Amenities</h2>
                <p className="text-[12px]">{data.amenities}</p>
              </div>
            </div>
            <div
              className={`bg-[#1e1e1e] text-white py-4 px-8 h-fit pb-10 rounded-lg mt-10 ${
                !state.open2 && "hidden"
              } `}
            >
              <h2 className="md:text-3xl text-xl font-semibold pt-4 pb-3">
                Policy
              </h2>
              <p className="md:text-base text-[14px]">{data.policy}</p>
            </div>
            <div
              className={`bg-[#1e1e1e] text-white  py-4 px-4 md:px-8 h-[400px] rounded-lg mt-10 ${
                !state.open3 && "hidden"
              } `}
            >
              <div className="flex items-center">
                <h2 className="md:text-3xl font-semibold">
                  Reviews{" "}
                  <span className="bg-yellow-300 px-2 py-1 text-base rounded-md text-black">
                    0
                  </span>
                </h2>
                <img
                  className="size-7 cursor-pointer ml-2"
                  src={Frame}
                  alt=""
                />
              </div>
            </div>
            <div className="flex text-white pt-10 pb-4">
              <img className="size-20 rounded-md" src={Blog} alt="" />
              <div className="ml-5">
                <h2 className="font-semibold md:text-xl text-base">
                  Adam Fresh
                </h2>
                <p className="text-[12px] text-white/60">
                  May 01, 2024 at 8:12 am
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 lg:mt-0">
            <h2 className="text-center text-white font-medium pb-6 lg:pb-2 text-xl">
              More Rooms
            </h2>
            <div>
              <RoomSwiper />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomView;
