import React, { useReducer } from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import { useNavigate } from "react-router-dom";
import Arrow from "../images/arrow-left.svg";
import MyTourItem from "../components/MyTourItem";

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
  }
};

const MyTour = () => {
  const [state, dispatch] = useReducer(reducer, {
    open1: true,
    open2: false,
  });
  const navigate = useNavigate();
  return (
    <div className="block md:flex overflow-x-clip max-w-[1740px] mx-auto">
      <SideBar />

      <div className="flex-1 md:w-[80%] px-4 pt-6 md:pt-14 md:px-10">
        <Navbar
          Headervalue={"Best Escort Tours"}
          textValue={"Explore our tours and activities"}
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
              My Tour
            </h1>
            <div className="border-b-2 pt-6 flex relative font-semibold items-center text-white border-[#393C49]">
              <p
                onClick={() => dispatch({ type: "Change1" })}
                className={`md:w-[250px] w-[200px] py-3 rounded-t-md text-center cursor-pointer  ${
                  state.open1 && "bg-[#1e1e1e]"
                } `}
              >
                Active{" "}
                <span className="bg-white px-2 rounded-full text-black">1</span>
              </p>
              <p
                onClick={() => dispatch({ type: "Change2" })}
                className={`md:w-[250px] w-[200px] py-3 rounded-t-md text-center cursor-pointer  ${
                  state.open2 && "bg-[#1e1e1e]"
                } `}
              >
                History{" "}
                {/* <span className="bg-white px-2 rounded-full text-black">1</span> */}
              </p>
            </div>
            <div className="py-4 px-5 bg-[#1e1e1e] rounded-md">
              <button className="bg-yellow-300 py-2 hover:bg-yellow-200 duration-500 font-semibold mb-4 px-4 text-[14px] rounded-3xl">
                Add New
              </button>
              <div className="  grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 gap-4">
                <MyTourItem tourClass={`${!state.open1 && "hidden"}`} />

                              <div className={`${!state.open2 && "hidden"}`}>
                                  <div>
                                      
                                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTour;
