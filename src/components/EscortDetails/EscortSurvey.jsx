import React from "react";
import Survey from "../../images/survey.png";

const EscortSurvey = () => {
  return (
    <div className="rounded-xl px-10 py-36 pl-12 bg-[#1E1E1E] ">
      <div className="flex flex-col justify-center items-center">
        <img className="w-[600px] min-w-[580px]" src={Survey} alt="" />
        <p className="text-white px-[15px] text-lg text-center font-semibold py-5">
          All details has been survey, you can continue your activities
        </p>
        <button className="bg-[#E9CB50] text-[#171717] py-4 w-[150px] font-medium rounded-xl">
          Go to Profile
        </button>
      </div>
    </div>
  );
};

export default EscortSurvey;
