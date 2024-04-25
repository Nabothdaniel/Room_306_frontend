import React, { useEffect, useState } from "react";
import Close from "../images/close-icon.svg";
import Input from "./Input";
import { useGetCountryQuery } from "../redux/CountryApi";
import { Age } from "./AgeArray";

const SearchModel = ({ handleSearch, SearchClass }) => {
  const [getState, setGetState] = useState([]);
  const [getCities, setGetCities] = useState([]);
  const [country, setCountry] = useState("");
  const [State, setState] = useState("");
  const [cities, setCities] = useState("");
  const { data, isLoading } = useGetCountryQuery();

  if (isLoading) {
    return <p>loading</p>;
  }

  

  const countries = [...new Set(data.map((item) => item.country))];

  countries.sort();

  

  const handleCountry = (e) => {
    let states = data.filter((state) => state.country === e.target.value);

    states = [...new Set(states.map((item) => item.subcountry))];
    states.sort();
    setGetState(states);
  };

  const handleState = (e) => {
    const cities = data.filter((item) => item.subcountry === e.target.value);
    setGetCities(cities);
  };

  return (
    <div
      className={`bg-black/40 duration-500 ${SearchClass} fixed top-0 z-[999999] left-0 w-[100%] h-screen flex justify-center items-center`}
    >
      <div className="bg-white overflow-hidden flex flex-col md:h-[680px] h-[580px] -mt-6 md:w-[680px] w-[90%] z-[9999999] rounded-3xl mx-auto ">
        <div className="border-b-2 p-4 flex justify-between items-center font-semibold px-8 text-[20px] border-[#F1D6D6]">
          <h3>Search For Escort</h3>
          <img
            onClick={handleSearch}
            className="size-3 cursor-pointer"
            src={Close}
            alt=""
          />
        </div>
        <div className="overflow-y-scroll">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5 px-4 md:px-9 py-4">
            <Input
              labelValue={"Escort Name"}
              labelClass={"text-[#475367] pb-2 font-semibold text-[16px]"}
              inputType={"text"}
              inputName={"name"}
              inputClass={
                "bg-[#F0F2F5] py-3 px-4 md:mb-5 rounded-xl placeholder-[#102127] text-[#102127]"
              }
              holder={"Enter Name Here"}
            />

            <label className="text-[#475367] flex flex-col" htmlFor="country">
              <span className="font-semibold pb-1">Country</span>
              <div className=" w-[100%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
                <select
                  className="w-[100%] bg-[#F0F2F5] py-[14px] outline-none"
                  name="country"
                  id="country"
                  value={country}
                  onChange={(e) => {
                    handleCountry(e);
                    setCountry(e.target.value);
                  }}
                >
                  <option value="">All Country</option>
                  {countries.map((item) => {
                    return (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
            </label>
            <label className="text-[#475367] flex flex-col" htmlFor="state">
              <span className="font-semibold pb-1">State</span>
              <div className=" w-[100%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
                <select
                  className="w-[100%] bg-[#F0F2F5] py-[14px] outline-none"
                  name="state"
                  id="state"
                  value={State}
                  onChange={(e) => {
                    handleState(e);
                    setState(e.target.value);
                  }}
                >
                  <option value="">State(Optional)</option>
                  {getState.map((item) => {
                    return (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
            </label>
            <label className="text-[#475367] flex flex-col" htmlFor="city">
              <span className="font-semibold pb-1">City</span>
              <div className=" w-[100%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
                <select
                  className="w-[100%] bg-[#F0F2F5] py-[14px] outline-none"
                  name="city"
                  id="city"
                  value={cities}
                  onChange={(e) => setCities(e.target.value)}
                >
                  <option value="">City(Optional)</option>
                  {getCities.map((item) => {
                    return (
                      <option key={item.name} value={item.name}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </label>

            <div className="md:col-span-2 pt-5 ">
              <h4 className="text-[#475367] font-semibold pb-3">Gender</h4>
              <div className="flex md:w-[70%]">
                <label className="container">
                  Both
                  <input type="radio" name="gender" />
                  <span className="checkmark"></span>
                </label>

                <label className="container ">
                  Male
                  <input type="radio" name="gender" />
                  <span className="checkmark"></span>
                </label>

                <label className="container">
                  Female
                  <input type="radio" name="gender" />
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>

            <label className="text-[#475367] pt-4 " htmlFor="escort age">
              <span className="font-semibold ">Escort Age</span>
              <div className="grid gap-x-4 pt-2 grid-cols-2">
                <div className=" w-[100%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
                  <select
                    className="w-[100%] bg-[#F0F2F5] py-[14px] outline-none"
                    name="escort age"
                    id="escort age"
                  >
                    <option value="">From</option>
                    {Age.map((item) => {
                      return (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className=" w-[100%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
                  <select
                    className="w-[100%] bg-[#F0F2F5] py-[14px] outline-none"
                    name="escort age"
                    id="escort age"
                  >
                    <option value="">To</option>
                    {Age.map((item) => {
                      return (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </label>

            <label
              className="text-[#475367] pt-5 flex flex-col"
              htmlFor="ethnicity"
            >
              <span className="font-semibold pb-1">Ethnicity</span>
              <div className=" w-[100%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
                <select
                  className="w-[100%] bg-[#F0F2F5] py-[14px] outline-none"
                  name="ethnicity"
                  id="ethnicity"
                >
                  <option value="">Your Ethnicity</option>
                  <option value="all">All</option>
                  <option value="asian">Asian</option>
                  <option value="black">Black</option>
                  <option value="indian">Indian</option>
                  <option value="latino">Latino</option>
                  <option value="middle eastern">Mid Eastern</option>
                  <option value="mix-race">Mix Race</option>
                  <option value="other">Other</option>
                  <option value="others">Others</option>
                  <option value="white">White</option>
                </select>
              </div>
            </label>

            <label
              className="text-[#475367] pt-5 flex flex-col"
              htmlFor="bust-size"
            >
              <span className="font-semibold pb-1">Bust Size</span>
              <div className=" w-[100%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
                <select
                  className="w-[100%] bg-[#F0F2F5] py-[14px] outline-none"
                  name="bust-size"
                  id="bust-size"
                >
                  <option value="">Choose here</option>
                  <option>All</option>
                  <option>Enormous(E+)</option>
                  <option>Large(C-cup)</option>
                  <option>Large(D-cup)</option>
                  <option>Medium(B-cup)</option>
                  <option>None</option>
                  <option>Small A</option>
                  <option>Very Large(DD-cup)</option>
                  <option>Very Small</option>
                </select>
              </div>
            </label>

            <label
              className="text-[#475367] pt-5 flex flex-col"
              htmlFor="build"
            >
              <span className="font-semibold pb-1">Build</span>
              <div className=" w-[100%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
                <select
                  className="w-[100%] bg-[#F0F2F5] py-[14px] outline-none"
                  name="build"
                  id="build"
                >
                  <option value="">Choose here</option>
                  <option>All</option>
                  <option>Athletic</option>
                  <option>Chubby</option>
                  <option>Curvy</option>
                  <option>Elegant</option>
                  <option>Fat</option>
                  <option>Fluffy</option>
                  <option>Gym Buddy</option>
                  <option>Heavy</option>
                  <option>Huge</option>
                  <option>Muscular</option>
                  <option>Regular</option>
                  <option>Robust</option>
                  <option>Skinny</option>
                  <option>Slender</option>
                  <option>Slim</option>
                </select>
              </div>
            </label>

            <label
              className="text-[#475367] pt-5 flex flex-col"
              htmlFor="looks"
            >
              <span className="font-semibold pb-1">Looks</span>
              <div className=" w-[100%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
                <select
                  className="w-[100%] bg-[#F0F2F5] py-[14px] outline-none"
                  name="looks"
                  id="looks"
                >
                  <option value="">Choose here</option>
                  <option>All</option>
                  <option>Average</option>
                  <option>Corporate type</option>
                  <option>Dominatrix</option>
                  <option>Eye Candy</option>
                  <option>Goddess</option>
                  <option>Naugthy Teacher</option>
                  <option>PornStar</option>
                  <option>Pretty Boy with Red lips</option>
                  <option>Sexy</option>
                  <option>Sexy Tranny</option>
                  <option>Slutty Nurse</option>
                  <option>Stripper</option>
                </select>
              </div>
            </label>

            <label
              className="text-[#475367] pt-5 flex flex-col"
              htmlFor="sexual-orientation"
            >
              <span className="font-semibold pb-1">Sexual Orientation</span>
              <div className=" w-[100%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
                <select
                  className="w-[100%] bg-[#F0F2F5] py-[14px] outline-none"
                  name="sexual-orientation"
                  id="sexual-orientation"
                >
                  <option value="">Sexual Orientation</option>
                  <option>HetroSexual(Straight)</option>
                  <option>Bisexual</option>
                  <option>Lesian</option>
                  <option>Gay</option>
                  <option>Trans-Sexual</option>
                  <option>Mistress(Domination)</option>
                  <option>Master(Domination)</option>
                </select>
              </div>
            </label>

            {/* TESTING */}
            <div className="w-[70%]">
              <h3 className="text-[#475367] pb-4 pt-5 font-semibold">
                Availability
              </h3>
              <div className="flex justify-between">
                <label className="checkContainer">
                  Incall
                  <input type="checkbox" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer">
                  Outcall
                  <input type="checkbox" />
                  <span className="checkmate"></span>
                </label>
              </div>
            </div>

            <div className=" pt-5 ">
              <h4 className="text-[#475367] font-semibold pb-3">Smoker</h4>
              <div className="flex">
                <label className="container">
                  Any
                  <input type="radio" name="smoker" />
                  <span className="checkmark"></span>
                </label>

                <label className="container ">
                  Yes
                  <input type="radio" name="smoker" />
                  <span className="checkmark"></span>
                </label>

                <label className="container">
                  No
                  <input type="radio" name="smoker" />
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>

            <div className="md:col-span-2 pt-5 ">
              <h4 className="text-[#475367] font-semibold pb-3">Services</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-1 gap-y-3">
                <label className="checkContainer">
                  69 (69 sex Position)
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer ">
                  Anal Rimming (Licking Anus)
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  BDMS (receiving)
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  Body Worship
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  CIM (Cum in Mouth)
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  COF (Cum on Face)
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  DFK(Deep French Kissing)
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  Domination (receiving)
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer  flex items-center">
                  Erotic Massage
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  Face Sitting
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  Fisting (giving)
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  Foot fetish
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  Gang Bang
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  Golden Shower
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  Scat (giving)
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  Humiliation(giving)
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  Lap dancing
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  Massage
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  Modeling
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  Smoking (Fetish)
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  A-Level(Anal Sex)
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  BDMS (giving)
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  Being Filmed
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  Couples
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  DFK(Deep French Kissing)
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  Domination (receiving)
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  Double Penetration
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  Fisting (receiving)
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  French Kissing
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  GFE (Girlfriend experience)
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  Hand Job
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  Attending corporate parties
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  Beach parties
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  Bondage
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  COB (Cum on body)
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  Domestic carer
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  Fetish
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  Humiliation (receiving)
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  MMF 3somes
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  O-Level (Oral sex)
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  OWO (Oral without condom)
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  PSE (Porn Star Experience)
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  Parties (Mandatory sex parties)
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  Preparing a meal
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  Prostrate Massage
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  Receiving Oral
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  Rimming (receiving)
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  Role Play & Fantasy
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  Sex Toys
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  Erotic Spanking (giving)
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  Erotic Spanking (receiving)
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  Pegging
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  Sub games
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  Swallow
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  Swallow (at discretion)
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  Tantric Massage
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  Threesome
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  Tie & Tease
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  Travel Companion
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  Watersports (giving)
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  Watersports (receiving)
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  Oral with condom
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  Rimming (giving)
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  INSEMINATION
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  Period Play
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  Pregnant
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  Swinging
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  SURROGATE
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  Male Stripper
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  Scat (receiving)
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  Female Stripper
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  Food Play
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
                <label className="checkContainer flex items-center">
                  Blow Job
                  <input type="radio" name="" />
                  <span className="checkmate"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex pr-8 pb-6 justify-end pt-6">
          <button className="bg-transparent text-[#171717] mr-1 text-[14px] h-[48px] w-[92px] font-semibold rounded-xl">
            Reset
          </button>
          <button className="bg-[#E9CB50] text-[#171717] text-[14px] h-[48px] w-[92px] font-semibold rounded-xl">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchModel;
