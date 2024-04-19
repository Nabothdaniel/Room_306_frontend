import React from "react";
import User from "../../images/user.jpeg";

const EscortDetailsSecFive = () => {
  return (
    <div className="rounded-xl lg:px-16 px-5 pb-10 bg-[#1E1E1E] ">
      <div className="md:pt-16 pt-5">
        <h2 className="md:text-2xl text-xl font-semibold text-white">
          Verification
        </h2>

        <div className="text-white pt-8">
          <h3 className="md:text-lg pb-4 lg:max-w-[900px]">
            WRITE YOUR USERNAME (EG SHARON101 , BARBIE44 , WHATEVER YOUR
            USERNAME IS) AND CODEDRUNS, ON A PIECE OF PAPER, TAKE A SELFIE
            HOLDING THE PAPER UP
          </h3>
          <ol className="unorder list-decimal pl-8 text-white">
            <li>Your FULL FACE, EYES AND NECK must be clearly visible.</li>
            <li>No wig or weavon covering your face.</li>
            <li>The hand holding your paper up MUST be visible.</li>
            <li>The verification photo must be BRIGHT and Clearly visible.</li>
          </ol>
          <h2 className="md:text-lg text-base pb-4 pt-5">
            Please strictly adhere to this instruction else your account will be
            rejected.
          </h2>
          <div className=" flex flex-col pt-10 mx-auto gap-y-4 md:flex-row gap-x-4">
            <img
              className="h-[330px]  md:max-w-[280px] rounded-xl"
              src={User}
              alt=""
            />
            <div className="bg-[#676767] h-[330px] w-[100%] md:max-w-[280px] rounded-xl "></div>
          </div>
          <div className="mt-4 flex justify-between md:block">
            <button className="bg-[#CD2727] mr-5 w-[100%] py-4 md:w-[120px] font-semibold rounded-xl">
              Delete
            </button>
            <button className="bg-[#E9CB50] w-[100%] text-[#171717] py-4 md:w-[120px] font-semibold rounded-xl">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EscortDetailsSecFive;
