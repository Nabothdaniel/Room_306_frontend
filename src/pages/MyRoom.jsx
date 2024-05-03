import React, { useReducer } from "react";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import Arrow from "../images/arrow-left.svg";
import MyRoomItem from "../components/MyRoomItem";

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

const MyRoom = () => {
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

        <div className="md:py-5 pb-9 md:pb-12">
          <div className="md:pb-3 pt-2 md:pt-8">
            <h2
              onClick={() => navigate(-1)}
              className="text-white font-semibold cursor-pointer flex items-center"
            >
              <img className="size-5 mr-1" src={Arrow} alt="" />
              Back
            </h2>
          </div>
          <div>
            <h1 className="text-white text-[18px] md:text-2xl font-semibold pt-7 pb-4">
              My Room-Let
            </h1>
          </div>
          <div className="border-b-2 pt-6 flex justify-between md:text-base text-[14px] relative md:justify-normal font-semibold items-center text-white border-[#393C49] py-3">
            <p
              onClick={() => dispatch({ type: "Change1" })}
              className={`md:mr-10 cursor-pointer ${
                state.open1 &&
                "before:contents-[''] duration-500  before:absolute text-[#E9CB50] before:-bottom-[2px] before:w-[45px] md:before:w-[80px] before:h-[3px] before:rounded-lg before:bg-[#E9CB50]"
              }    `}
            >
              Publish
            </p>
            <p
              onClick={() => dispatch({ type: "Change2" })}
              className={`md:mr-10 cursor-pointer ${
                state.open2 &&
                "before:contents-[''] duration-500  before:absolute text-[#E9CB50] before:-bottom-[2px] before:w-[50px] md:before:w-[56px] before:h-[3px] before:rounded-lg before:bg-[#E9CB50]"
              }    `}
            >
              Approved
            </p>

            <p
              onClick={() => dispatch({ type: "Change4" })}
              className={`md:mr-10 cursor-pointer ${
                state.open4 &&
                "before:contents-[''] duration-500  before:absolute text-[#E9CB50] before:-bottom-[2px] before:w-[55px] md:before:w-[65px] before:h-[3px] before:rounded-lg before:bg-[#E9CB50]"
              }    `}
            >
              Pending
            </p>
            <p
              onClick={() => dispatch({ type: "Change5" })}
              className={`md:mr-10 cursor-pointer ${
                state.open5 &&
                "before:contents-[''] duration-500  before:absolute text-[#E9CB50] before:-bottom-[2px] before:w-[55px] md:before:w-[70px] before:h-[3px] before:rounded-lg before:bg-[#E9CB50]"
              }    `}
            >
              History
            </p>
            <p
              onClick={() => dispatch({ type: "Change3" })}
              className={`md:mr-10 cursor-pointer ${
                state.open3 &&
                "before:contents-[''] duration-500  before:absolute text-[#E9CB50] before:-bottom-[2px] before:w-[50px] md:before:w-[75px] before:h-[3px] before:rounded-lg before:bg-[#E9CB50]"
              }    `}
            >
              Suspended
            </p>
          </div>

          <div className="mt-10 px-5  rounded-xl py-4 bg-[#1e1e1e]">
            <Link
              //   to={"/new-tours"}
              className="bg-yellow-300 block text-center py-2 hover:bg-yellow-200 duration-500 font-semibold mb-4 w-[100px] text-[14px] rounded-3xl"
            >
              Add New
            </Link>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div className={`${!state.open1 && "hidden"}`}>
              <MyRoomItem />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyRoom;
