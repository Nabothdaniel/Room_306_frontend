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
        review={user.reviews}
        reviewClass={`${!state.open3 ? "hidden" : ""}`}
      />
      <ProfileViewGallery galleryClass={`${!state.open2 ? "hidden" : ""}`} />

      <div
        className={`${
          !state.open5 ? "hidden" : ""
        }  grid md:grid-cols-3 grid-cols-2  bg-[#1e1e1e] gap-5 pt-4 pb-10 px-5 rounded-xl mt-10 `}
      >
        {user.services.map((item, index) => {
          return <ProfileService key={index} item={item} />;
        })}
        {/* {user.services?.sixty_nine && (
          <div className="flex items-center font-semibold text-white text-[14px]">
            <img className="size-4 mr-2" src={Check} alt="" />
            69 (69 sex Position)
          </div>
        )}
        {user.services?.dfk && (
          <div className="flex items-center font-semibold text-white text-[14px]">
            <img className="size-4 mr-2" src={Check} alt="" />
            DFK(Deep French Kissing)
          </div>
        )}
        {user.services?.body_worship && (
          <div className="flex items-center font-semibold text-white text-[14px]">
            <img className="size-4 mr-2" src={Check} alt="" />
            Body Worship
          </div>
        )}
        {user.services?.anal_rimming && (
          <div className="flex items-center font-semibold text-white text-[14px]">
            <img className="size-4 mr-2" src={Check} alt="" />
            Anal Rimming (Licking Anus)
          </div>
        )}
        {user.services?.cof && (
          <div className="flex items-center font-semibold text-white text-[14px]">
            <img className="size-4 mr-2" src={Check} alt="" />
            COF (Cum on Face)
          </div>
        )}

        {user.services?.bdms_receiving && (
          <div className="flex items-center font-semibold text-white text-[14px]">
            <img className="size-4 mr-2" src={Check} alt="" />
            BDMS (receiving)
          </div>
        )}
        {user.services?.cim && (
          <div className="flex items-center font-semibold text-white text-[14px]">
            <img className="size-4 mr-2" src={Check} alt="" />
            CIM (Cum in Mouth)
          </div>
        )}
        {user.services?.domination_receiving && (
          <div className="flex items-center font-semibold text-white text-[14px]">
            <img className="size-4 mr-2" src={Check} alt="" />
            Domination (receiving)
          </div>
        )}
        {user.services?.erotic_massage && (
          <div className="flex items-center font-semibold text-white text-[14px]">
            <img className="size-4 mr-2" src={Check} alt="" />
            Erotic Massage
          </div>
        )}
        {user.services?.face_sitting && (
          <div className="flex items-center font-semibold text-white text-[14px]">
            <img className="size-4 mr-2" src={Check} alt="" />
            Face Sitting
          </div>
        )}
        {user.services?.fist_giving && (
          <div className="flex items-center font-semibold text-white text-[14px]">
            <img className="size-4 mr-2" src={Check} alt="" />
            Fisting (giving)
          </div>
        )}
        {user.services?.foot_fetish && (
          <div className="flex items-center font-semibold text-white text-[14px]">
            <img className="size-4 mr-2" src={Check} alt="" />
            Foot fetish
          </div>
        )}
        {user.services?.gang_bang && (
          <div className="flex items-center font-semibold text-white text-[14px]">
            <img className="size-4 mr-2" src={Check} alt="" />
            Gang Bang
          </div>
        )}
        {user.services?.golden_shower && (
          <div className="flex items-center font-semibold text-white text-[14px]">
            <img className="size-4 mr-2" src={Check} alt="" />
            Golden Shower
          </div>
        )}
        {user.services?.scat_giving && (
          <div className="flex items-center font-semibold text-white text-[14px]">
            <img className="size-4 mr-2" src={Check} alt="" />
            Scat (giving)
          </div>
        )}
        {user.services?.humiliation && (
          <div className="flex items-center font-semibold text-white text-[14px]">
            <img className="size-4 mr-2" src={Check} alt="" />
            Humiliation(giving)
          </div>
        )}
        {user.services?.lap_dancing && (
          <div className="flex items-center font-semibold text-white text-[14px]">
            <img className="size-4 mr-2" src={Check} alt="" />
            Lap dancing
          </div>
        )}
        {user.services?.massage && (
          <div className="flex items-center font-semibold text-white text-[14px]">
            <img className="size-4 mr-2" src={Check} alt="" />
            Massage
          </div>
        )}
        {user.services?.modeling && (
          <div className="flex items-center font-semibold text-white text-[14px]">
            <img className="size-4 mr-2" src={Check} alt="" />
            Modeling
          </div>
        )}
        {user.services?.smoking_fetish && (
          <div className="flex items-center font-semibold text-white text-[14px]">
            <img className="size-4 mr-2" src={Check} alt="" />
            Smoking (Fetish)
          </div>
        )}
        {user.services?.a_level && (
          <div className="flex items-center font-semibold text-white text-[14px]">
            <img className="size-4 mr-2" src={Check} alt="" />
            A-Level(Anal Sex)
          </div>
        )}
        {user.services?.bdms && (
          <div className="flex items-center font-semibold text-white text-[14px]">
            <img className="size-4 mr-2" src={Check} alt="" />
            BDMS (giving)
          </div>
        )}
        {user.services?.being_filmed && (
          <div className="flex items-center font-semibold text-white text-[14px]">
            <img className="size-4 mr-2" src={Check} alt="" />
            Being Filmed
          </div>
        )}
        {user.services?.couples && (
          <div className="flex items-center font-semibold text-white text-[14px]">
            <img className="size-4 mr-2" src={Check} alt="" />
            Couples
          </div>
        )}
        {user.services?.domination_giving && (
          <div className="flex items-center font-semibold text-white text-[14px]">
            <img className="size-4 mr-2" src={Check} alt="" />
            Domination (giving)
          </div>
        )}
        {user.services?.double_penetration && (
          <div className="flex items-center font-semibold text-white text-[14px]">
            <img className="size-4 mr-2" src={Check} alt="" />
            Double Penetration
          </div>
        )}
        {user.services?.fisting_receiving && (
          <div className="flex items-center font-semibold text-white text-[14px]">
            <img className="size-4 mr-2" src={Check} alt="" />
            Fisting (receiving)
          </div>
        )}
        {user?.services?.french_kissing && (
          <div className="flex items-center font-semibold text-white text-[14px]">
            <img className="size-4 mr-2" src={Check} alt="" />
            French Kissing
          </div>
        )}
        {user?.services?.girlfriend_experience && (
          <div className="flex items-center font-semibold text-white text-[14px]">
            <img className="size-4 mr-2" src={Check} alt="" />
            GFE (Girlfriend experience)
          </div>
        )}
        {user?.services?.hand_job && (
          <div className="flex items-center font-semibold text-white text-[14px]">
            <img className="size-4 mr-2" src={Check} alt="" />
            Hand Job
          </div>
        )}
        {user?.services?.attending_corporate_parties && (
          <div className="flex items-center font-semibold text-white text-[14px]">
            <img className="size-4 mr-2" src={Check} alt="" />
            Attending corporate parties
          </div>
        )}
        {user?.services?.beach_parties && (
          <div className="flex items-center font-semibold text-white text-[14px]">
            <img className="size-4 mr-2" src={Check} alt="" />
            Beach parties
          </div>
        )}
        {user?.services?.bondage && (
          <div className="flex items-center font-semibold text-white text-[14px]">
            <img className="size-4 mr-2" src={Check} alt="" />
            Bondage
          </div>
        )}
        {user?.services?.com && (
          <div className="flex items-center font-semibold text-white text-[14px]">
            <img className="size-4 mr-2" src={Check} alt="" />
            COB (Cum on body)
          </div>
        )}
        {user?.services?.domestic_carer && (
          <div className="flex items-center font-semibold text-white text-[14px]">
            <img className="size-4 mr-2" src={Check} alt="" />
            Domestic carer
          </div>
        )}
        {user?.services?.fetish && (
          <div className="flex items-center font-semibold text-white text-[14px]">
            <img className="size-4 mr-2" src={Check} alt="" />
            Fetish
          </div>
        )}
        {user?.services?.humiliation_receiving && (
          <div className="flex items-center font-semibold text-white text-[14px]">
            <img className="size-4 mr-2" src={Check} alt="" />
            Humiliation (receiving)
          </div>
        )}
        {user?.services?.mmf_3somes && (
          <div className="flex items-center font-semibold text-white text-[14px]">
            <img className="size-4 mr-2" src={Check} alt="" />
            MMF 3somes
          </div>
        )}
        {user?.services?.o_level && (
          <div className="flex items-center font-semibold text-white text-[14px]">
            <img className="size-4 mr-2" src={Check} alt="" />
            O-Level (Oral sex)
          </div>
        )}
        {user?.services?.owo && (
          <div className="flex items-center font-semibold text-white text-[14px]">
            <img className="size-4 mr-2" src={Check} alt="" />
            OWO (Oral without condom)
          </div>
        )}
        {user?.services?.porn_star_experience && (
          <div className="flex items-center font-semibold text-white text-[14px]">
            <img className="size-4 mr-2" src={Check} alt="" />
            PSE (Porn Star Experience)
          </div>
        )}
        {user?.services?.parties && (
          <div className="flex items-center font-semibold text-white text-[14px]">
            <img className="size-4 mr-2" src={Check} alt="" />
            Parties (Mandatory sex parties)
          </div>
        )}
        {user?.services?.preparing_a_meal && (
          <div className="flex items-center font-semibold text-white text-[14px]">
            <img className="size-4 mr-2" src={Check} alt="" />
            Preparing a meal
          </div>
        )}
        {user?.services?.prostrate_massage && (
          <div className="flex items-center font-semibold text-white text-[14px]">
            <img className="size-4 mr-2" src={Check} alt="" />
            Prostrate Massage
          </div>
        )}
        {user?.services?.receiving_oral && (
          <div className="flex items-center font-semibold text-white text-[14px]">
            <img className="size-4 mr-2" src={Check} alt="" />
            Receiving Oral
          </div>
        )}
        {user?.services?.rimming_receiving && (
          <div className="flex items-center font-semibold text-white text-[14px]">
            <img className="size-4 mr-2" src={Check} alt="" />
            Rimming (receiving)
          </div>
        )} */}
      </div>
    </>
  );
};

export default ProfileViewItems;
