import React, { useReducer } from "react";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import Arrow from "../images/arrow-left.svg";
import FavoriteEscort from "../components/FavoriteEscort";
import FavoriteVideo from "../components/FavoriteVideo";

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

const MyFavorite = () => {
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
              My Favourites
            </h1>
            <div>
              <div className="border-b-2 pt-6 flex relative font-semibold items-center text-white border-[#393C49]">
                <p
                  onClick={() => dispatch({ type: "Change1" })}
                  className={`md:w-[250px] w-[200px] py-3 rounded-t-md text-center cursor-pointer  ${
                    state.open1 && "bg-[#1e1e1e]"
                  } `}
                >
                  Escort{" "}
                  <span className="bg-white px-2 rounded-full text-black">
                    1
                  </span>
                </p>
                <p
                  onClick={() => dispatch({ type: "Change2" })}
                  className={`md:w-[250px] w-[200px] py-3 rounded-t-md text-center cursor-pointer  ${
                    state.open2 && "bg-[#1e1e1e]"
                  } `}
                >
                  Video{" "}
                  <span className="bg-white px-2 rounded-full text-black">
                    1
                  </span>
                </p>
              </div>
              <div
                className={`bg-[#1e1e1e] ${
                  !state.open1 ? "hidden" : ""
                } py-4 px-5 rounded-b-md grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 gap-4`}
              >
                <FavoriteEscort />
              </div>
              <div
                className={`bg-[#1e1e1e] ${
                  !state.open2 ? "hidden" : ""
                } py-4 px-5 rounded-b-md grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 gap-4`}
              >
                <FavoriteVideo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFavorite;
