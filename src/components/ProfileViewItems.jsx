import React, { useReducer } from "react";
import ProfileViewAbout from "./ProfileViewAbout";
import ProfileViewGallery from "./ProfileViewGallery";
import ProfileViewReview from "./ProfileViewReview";

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
  const [state, dispatch] = useReducer(reducer, {
    open1: true,
    open2: false,
    open3: false,
    open4: false,
    open5: false
  });
  return (
    <>
      <div className="border-b-2 pt-6 flex justify-between relative md:justify-normal font-semibold items-center text-white border-[#393C49] py-3">
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
            "before:contents-[''] duration-500  before:absolute text-[#E9CB50] before:-bottom-[2px] before:w-[45px] md:before:w-[56px] before:h-[3px] before:rounded-lg before:bg-[#E9CB50]"
          }    `}
        >
          Gallery
        </p>
        <p
          onClick={() => dispatch({ type: "Change3" })}
          className={`md:mr-10 cursor-pointer ${
            state.open3 &&
            "before:contents-[''] duration-500  before:absolute text-[#E9CB50] before:-bottom-[2px] before:w-[45px] md:before:w-[57px] before:h-[3px] before:rounded-lg before:bg-[#E9CB50]"
          }    `}
        >
          Review
        </p>
        <p
          onClick={() => dispatch({ type: "Change4" })}
          className={`md:mr-10 cursor-pointer ${
            state.open4 &&
            "before:contents-[''] duration-500  before:absolute text-[#E9CB50] before:-bottom-[2px] before:w-[45px] md:before:w-[65px] before:h-[3px] before:rounded-lg before:bg-[#E9CB50]"
          }    `}
        >
          Naughty
        </p>
        <p
          onClick={() => dispatch({ type: "Change5" })}
          className={`md:mr-10 cursor-pointer ${
            state.open5 &&
            "before:contents-[''] duration-500  before:absolute text-[#E9CB50] before:-bottom-[2px] before:w-[45px] md:before:w-[70px] before:h-[3px] before:rounded-lg before:bg-[#E9CB50]"
          }    `}
        >
          Services
        </p>
      </div>

      <ProfileViewAbout aboutClass={`${!state.open1 ? "hidden" : ""}`} />
      <ProfileViewGallery galleryClass={`${!state.open2 ? "hidden" : ""}`} />
      <ProfileViewReview reviewClass={`${!state.open3 ? "hidden" : ""}`} />
    </>
  );
};

export default ProfileViewItems;
