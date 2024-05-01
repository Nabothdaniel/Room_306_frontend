import React, { useReducer } from "react";
import ReviewEscort from "./ReviewEscort";

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

const ProfileViewReview = ({ reviewClass }) => {
  const [state, dispatch] = useReducer(reducer, {
    open1: true,
    open2: false,
    open3: false,
  });

  return (
    <div
      className={`${reviewClass} bg-[#1e1e1e] pt-4 pb-10 px-5 rounded-xl mt-10`}
    >
      <div>
        <button
          onClick={() => dispatch({ type: "Change1" })}
          className={`${
            state.open1 ? "bg-[#E9CB50] text-black" : "bg-black text-white"
          } mr-3   py-2 md:w-[130px] w-[90px] mb-2 md:mb-0 text-[14px] md:text-base rounded-3xl font-semibold `}
        >
          Escort
        </button>
        <button
          onClick={() => dispatch({ type: "Change2" })}
          className={`${
            state.open2 ? "bg-[#E9CB50] text-black" : "bg-black text-white"
          } mr-3   py-2 md:w-[130px] w-[90px] mb-2 md:mb-0 text-[14px] md:text-base rounded-3xl font-semibold `}
        >
          Products
        </button>
        <button
          onClick={() => dispatch({ type: "Change3" })}
          className={`${
            state.open3 ? "bg-[#E9CB50] text-black" : "bg-black text-white"
          } mr-3   py-2 md:w-[130px] w-[90px] mb-2 md:mb-0 text-[14px] md:text-base rounded-3xl font-semibold `}
        >
          Events
        </button>
      </div>
      <div className={`text-white pt-5 text-2xl ${!state.open1 && "hidden"} `}>
        <h2 className="font-semibold pb-8">1 Reviews</h2>
        <ReviewEscort />
      </div>
    </div>
  );
};

export default ProfileViewReview;
