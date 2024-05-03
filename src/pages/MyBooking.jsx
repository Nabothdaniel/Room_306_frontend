import React, { useReducer } from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Arrow from "../images/arrow-left.svg";
import { useNavigate } from "react-router-dom";
import BookingItem from "../components/BookingItem";

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
    case "Change4":
      return {
        open4: true,
      };
    case "Change5":
      return {
        open5: true,
      };
  }
};

const MyBooking = () => {
  const [state, dispatch] = useReducer(reducer, {
    open1: true,
    open2: false,
    open3: false,
    open4: false,
    open5: false,
  });

  const navigate = useNavigate();
  return (
    <div className="block md:flex overflow-x-clip max-w-[1740px] mx-auto">
      <SideBar />

      <div className="flex-1 md:w-[80%] px-4 pt-6 md:pt-14 md:px-10">
        <Navbar
          Headervalue={"Welcome to Room 306"}
          textValue={"Explore our escort at your own pace"}
        />

        <div className="md:pb-3 pt-2 md:pt-8">
          <h2
            onClick={() => navigate(-1)}
            className="text-white font-semibold cursor-pointer flex items-center"
          >
            <img className="size-5 mr-1" src={Arrow} alt="" />
            Back
          </h2>
        </div>
        <div className="md:py-5 pb-9 lg:overflow-auto overflow-x-scroll md:pb-12">
          <div className="border-b-2 pt-8 flex relative font-semibold items-center text-white border-[#393C49]">
            <p
              onClick={() => dispatch({ type: "Change1" })}
              className={`cursor-pointer w-[250px] min-w-[200px] md:text-base text-[14px] text-center py-3 rounded-t-md text-black font-normal bg-yellow-300 `}
            >
              All
            </p>
            <p
              onClick={() => dispatch({ type: "Change2" })}
              className={` cursor-pointer w-[250px] min-w-[200px] md:text-base text-[14px] text-center py-3 rounded-t-md text-black font-normal bg-orange-300 `}
            >
              Pending
            </p>
            <p
              onClick={() => dispatch({ type: "Change3" })}
              className={` cursor-pointer w-[250px] min-w-[200px] md:text-base text-[14px]  text-center py-3 rounded-t-md text-black font-normal bg-green-300`}
            >
              Accepted
            </p>
            <p
              onClick={() => dispatch({ type: "Change4" })}
              className={` cursor-pointer w-[250px] min-w-[200px] md:text-base text-[14px]  text-center py-3 rounded-t-md text-black font-normal bg-blue-200  `}
            >
              Completed
            </p>
            <p
              onClick={() => dispatch({ type: "Change5" })}
              className={` cursor-pointer w-[250px] min-w-[200px] md:text-base text-[14px]  text-center py-3 rounded-t-md text-black font-normal bg-red-400/90`}
            >
              Cancelled
            </p>
          </div>

          <div className="bg-yellow-300 min-w-[1300px] py-4 px-5 rounded-b-lg">
            <div className="flex border-b border-[#7D6C6C] pb-4 items-center">
              <p className="w-[300px] text-center">Client</p>
              <p className="w-[300px] text-center">Time</p>
              <p className="w-[300px] text-center">Date</p>
              <p className="w-[300px] text-center">Message</p>
              <p className="w-[300px] ml-4 text-center"></p>
            </div>
            <BookingItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBooking;
