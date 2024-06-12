import React, { useReducer } from "react";
import ProfileViewAbout from "./ProfileViewAbout";
import ProfileViewGallery from "./ProfileViewGallery";
import ProfileViewReview from "./ProfileViewReview";
import NaughtyProfile from "./NaughtyProfile";
import ProfileService from "./ProfileService";
import Check from "../images/Check.svg";

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

const ProfileViewItems = () => {
  const user = JSON.parse(localStorage.getItem("details"));
  const [state, dispatch] = useReducer(reducer, {
    open1: true,
    open2: false,
    open3: false,
    open4: false,
    open5: false,
  });
  return (
    <>
      <div className="border-b-2 pt-6 flex justify-between md:text-base text-[14px] relative md:justify-normal font-semibold items-center text-white border-[#393C49] py-3">
        <p
          onClick={() => dispatch({ type: "Change1" })}
          className={`md:mr-10 cursor-pointer ${
            state.open1 &&
            "before:contents-[''] duration-500  before:absolute text-[#E9CB50] before:-bottom-[2px] before:w-[45px] md:before:w-[50px] before:h-[3px] before:rounded-lg before:bg-[#E9CB50]"
          }    `}
        >
          About
        </p>
        <p
          onClick={() => dispatch({ type: "Change2" })}
          className={`md:mr-10 cursor-pointer ${
            state.open2 &&
            "before:contents-[''] duration-500  before:absolute text-[#E9CB50] before:-bottom-[2px] before:w-[50px] md:before:w-[56px] before:h-[3px] before:rounded-lg before:bg-[#E9CB50]"
          }    `}
        >
          Gallery
        </p>
        <p
          onClick={() => dispatch({ type: "Change3" })}
          className={`md:mr-10 cursor-pointer ${
            state.open3 &&
            "before:contents-[''] duration-500  before:absolute text-[#E9CB50] before:-bottom-[2px] before:w-[50px] md:before:w-[57px] before:h-[3px] before:rounded-lg before:bg-[#E9CB50]"
          }    `}
        >
          Review
        </p>
        <p
          onClick={() => dispatch({ type: "Change4" })}
          className={`md:mr-10 cursor-pointer ${
            state.open4 &&
            "before:contents-[''] duration-500  before:absolute text-[#E9CB50] before:-bottom-[2px] before:w-[55px] md:before:w-[65px] before:h-[3px] before:rounded-lg before:bg-[#E9CB50]"
          }    `}
        >
          Naughty
        </p>
        <p
          onClick={() => dispatch({ type: "Change5" })}
          className={`md:mr-10 cursor-pointer ${
            state.open5 &&
            "before:contents-[''] duration-500  before:absolute text-[#E9CB50] before:-bottom-[2px] before:w-[55px] md:before:w-[70px] before:h-[3px] before:rounded-lg before:bg-[#E9CB50]"
          }    `}
        >
          services
        </p>
      </div>
      <NaughtyProfile naughtClass={`${!state.open4 ? "hidden" : ""}`} />
      <ProfileViewAbout aboutClass={`${!state.open1 ? "hidden" : ""}`} />
      <ProfileViewReview
        review={user?.profile?.reviews}
        reviewClass={`${!state.open3 ? "hidden" : ""}`}
      />
      <ProfileViewGallery galleryClass={`${!state.open2 ? "hidden" : ""}`} />

      <div
        className={`${
          !state.open5 ? "hidden" : ""
        }  grid md:grid-cols-3 grid-cols-2  bg-[#1e1e1e] gap-5 pt-4 pb-10 px-5 rounded-xl mt-10 `}
      >
        {user?.profile.services?.map((item, index) => {
          return <ProfileService key={index} item={item} />;
        })}
        
      </div>
    </>
  );
};

export default ProfileViewItems;
