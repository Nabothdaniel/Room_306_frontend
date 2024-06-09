import React, { useState } from "react";
import SideBar from "../../components/SideBar";
import Navbar from "../../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { details } from "../../redux/UtilSlice";
import { useNavigate } from "react-router-dom";
import { useServicesQuery } from "../../redux/ApiSlice";
import Loading from "../../components/Loading";

const EscortDetailsThree = () => {
  const [formData, setFormData] = useState([]);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { data, isLoading } = useServicesQuery();
  const navigate = useNavigate();

  let services = [];
  const handleChange = (e) => {
    if (e.target.checked) {
      services.push(Number(e.target.id));
    } else if (e.target.checked == false) {
      services = services.filter((item) => item != Number(e.target.id));
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  const handleEscortThree = () => {
    if (services.length >= 5) {
      dispatch(
        details({
          ...formData,
        })
      );
      navigate("/rates");
      setError("");
      setFormData({});
    } else {
      setError("Select at least five services");
    }
  };

  const handleDelete = () => {
    let text =
      "Pressing Delete will cancel your account Creation\nAre you sure? if so press OK.";
    if (confirm(text) == true) {
      navigate("/");
      window.location.reload(true);
    } else {
    }
  };

  return (
    <div className="block md:flex overflow-x-clip max-w-[1740px] mx-auto">
      <SideBar />

      <div className="flex-1 md:w-[80%] px-4 pt-6 md:pt-14 md:px-10">
        <Navbar
          Headervalue={"Welcome to Room 306"}
          textValue={"Explore our escort at your own pace"}
        />

        <div className="md:py-8 pb-10">
          <div className="flex justify-between items-center md:pb-6 py-2 md:pt-8">
            <h2 className="text-white md:py-4  md:text-2xl font-semibold">
              Escort Details
            </h2>

            <p className="text-white md:text-4xl text-3xl font-semibold">
              <span className="text-[#B29A9A] md:text-2xl text-xl">
                Step <span>3/</span>
              </span>
              6
            </p>
          </div>
          <div className="rounded-xl md:px-10 px-8 lg:px-14 pt-6 md:py-12 pb-8 bg-[#1E1E1E] ">
            <h3 className="text-xl pb-6 font-semibold text-white">
              Services
              <p className="text-[15px] font-normal text-[#B29A9A]">
                Choose at least 5 or more services
              </p>
            </h3>

            <div className="grid md:grid-cols-2 text-white lg:grid-cols-3 gap-x-1 gap-y-3">
              {data.map((item, index) => {
                return (
                  <label key={index} className="checkContainer">
                    {item.name}
                    <input
                      onChange={handleChange}
                      type="checkbox"
                      name="services"
                      id={item.id}
                    />
                    <span className="checkmate"></span>
                  </label>
                );
              })}

              {/* <label className="checkContainer ">
                Anal Rimming (Licking Anus)
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="anal_rimming"
                />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                BDMS (receiving)
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="bdms_receiving"
                />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                Body Worship
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="body_worship"
                />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                CIM (Cum in Mouth)
                <input onChange={handleChange} type="checkbox" name="cim" />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                COF (Cum on Face)
                <input onChange={handleChange} type="checkbox" name="cof" />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                DFK(Deep French Kissing)
                <input onChange={handleChange} type="checkbox" name="dfk" />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                Domination (receiving)
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="domination_receiving"
                />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer  flex items-center">
                Erotic Massage
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="erotic_massage"
                />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                Face Sitting
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="face_sitting"
                />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                Fisting (giving)
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="fisting_giving"
                />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                Foot fetish
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="foot_fetish"
                />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                Gang Bang
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="gang_bang"
                />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                Golden Shower
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="golden_shower"
                />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                Scat (giving)
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="scat_giving"
                />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                Humiliation(giving)
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="humiliation"
                />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                Lap dancing
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="lap_dancing"
                />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                Massage
                <input onChange={handleChange} type="checkbox" name="massage" />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                Modeling
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="modeling"
                />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                Smoking (Fetish)
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="smoking_fetish"
                />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                A-Level(Anal Sex)
                <input onChange={handleChange} type="checkbox" name="a_level" />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                BDMS (giving)
                <input onChange={handleChange} type="checkbox" name="bdms" />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                Being Filmed
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="being_filmed"
                />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                Couples
                <input onChange={handleChange} type="checkbox" name="couples" />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                Domination (giving)
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="domination_giving"
                />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                Double Penetration
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="double_penetration"
                />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                Fisting (receiving)
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="fisting_receiving"
                />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                French Kissing
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="french_kissing"
                />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                GFE (Girlfriend experience)
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="girlfriend_experience"
                />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                Hand Job
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="hand_job"
                />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                Attending corporate parties
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="attending_corporate_parties"
                />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                Beach parties
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="beach_parties"
                />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                Bondage
                <input onChange={handleChange} type="checkbox" name="bondage" />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                COB (Cum on body)
                <input onChange={handleChange} type="checkbox" name="cob" />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                Domestic carer
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="domestic_carer"
                />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                Fetish
                <input onChange={handleChange} type="checkbox" name="fetish" />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                Humiliation (receiving)
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="humiliation_receiving"
                />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                MMF 3somes
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="mmf_3somes"
                />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                O-Level (Oral sex)
                <input onChange={handleChange} type="checkbox" name="o_level" />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                OWO (Oral without condom)
                <input onChange={handleChange} type="checkbox" name="owo" />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                PSE (Porn Star Experience)
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="porn_star_experience"
                />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                Parties (Mandatory sex parties)
                <input onChange={handleChange} type="checkbox" name="parties" />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                Preparing a meal
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="preparing_a_meal"
                />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                Prostrate Massage
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="prostrate_massage"
                />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                Receiving Oral
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="receiving_oral"
                />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                Rimming (receiving)
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="rimming_receiving"
                />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                Role Play & Fantasy
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="role_play"
                />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                Sex Toys
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="sex_toys"
                />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                Erotic Spanking (giving)
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="erotic_spanking_giving"
                />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                Erotic Spanking (receiving)
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="erotic_spanking_receiving"
                />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                Pegging
                <input onChange={handleChange} type="checkbox" name="pegging" />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                Sub games
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="sub_games"
                />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                Swallow
                <input onChange={handleChange} type="checkbox" name="swallow" />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                Swallow (at discretion)
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="swallow_at_discretion"
                />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                Tantric Massage
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="tantric_massage"
                />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                Threesome
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="threesome"
                />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                Tie & Tease
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="tie_tease"
                />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                Travel Companion
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="travel_companion"
                />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                Watersports (giving)
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="watersports_giving"
                />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                Watersports (receiving)
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="watersports_receiving"
                />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                Oral with condom
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="oral_with_condom"
                />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                Rimming (giving)
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="rimming_giving"
                />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                INSEMINATION
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="insemination"
                />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                Period Play
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="period_play"
                />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                Pregnant
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="pregnant"
                />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                Swinging
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="swinging"
                />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                SURROGATE
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="surrogate"
                />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                Male Stripper
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="male_stripper"
                />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                Scat (receiving)
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="scat_receiving"
                />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                Female Stripper
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="female_stripper"
                />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                Food Play
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="food_play"
                />
                <span className="checkmate"></span>
              </label>
              <label className="checkContainer flex items-center">
                Blow Job
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="blow_job"
                />
                <span className="checkmate"></span>
              </label> */}
              <p className="py-1 text-[12px] text-red-500">{error}</p>
            </div>
            <div className="mt-8 flex gap-x-3">
              <button
                onClick={handleDelete}
                className="bg-[#CD2727] text-white mr-5 w-[100%] py-3 md:w-[120px] font-medium rounded-xl"
              >
                Delete
              </button>
              <button
                onClick={handleEscortThree}
                className="bg-[#E9CB50] text-center block w-[100%] text-[#171717] py-3 md:w-[120px] font-medium rounded-xl"
              >
                Next
              </button>
            </div>
          </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-x-16 md:gap-x-6 gap-y-8"></div> */}
        </div>
      </div>
    </div>
  );
};

export default EscortDetailsThree;
