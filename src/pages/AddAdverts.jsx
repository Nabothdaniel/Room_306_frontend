import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Input from "../components/Input";
import { useGetCountryQuery } from "../redux/CountryApi";
import TextArea from "../components/TextArea";

const AddAdverts = () => {
  const [getState, setGetState] = useState([]);
  const [getCities, setGetCities] = useState([]);
  const [country, setCountry] = useState("");
  const [State, setState] = useState("");
  const [cities, setCities] = useState("");
  const { data, isLoading } = useGetCountryQuery();

  if (isLoading) {
    return <p>loading</p>;
  }

  console.log(data);

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
    <div className="block md:flex overflow-x-clip max-w-[1740px] mx-auto">
      <SideBar />

      <div className="flex-1 md:w-[80%] px-4 pt-6 md:pt-14 md:px-10">
        <Navbar
          Headervalue={"Advert for Quality"}
          textValue={"Advert for best escorts and activities"}
        />

        <div className="md:py-5 pb-9 md:pb-12">
          <div className="md:pb-6 pt-2 md:pt-8">
            <h2 className="text-white py-4 md:text-2xl font-semibold">
              Create Classified Ads
            </h2>
          </div>
          <div className="rounded-xl lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:gap-x-14 md:gap-x-8 gap-x-4 gap-y-3 md:gap-y-6 px-4  md:py-6 md:px-12  bg-[#1E1E1E] ">
            <label
              className="text-[#475367] pt-5 flex flex-col"
              htmlFor="looking"
            >
              <span className="font-semibold text-white pb-1">
                I am <span className="text-[#E9CB50]">*</span>
              </span>
              <div className=" w-[100%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
                <select
                  className="w-[100%] bg-[#F0F2F5] py-[10px] md:py-[14px] outline-none"
                  name="looking"
                  id="looking"
                >
                  <option value="">Looking</option>
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
            <Input
              labelValue={"Start Date"}
              inputType={"date"}
              labelClass={"font-semibold md:pt-4 py-2"}
              required={""}
              inputName={"state-date"}
              inputClass={
                "md:p-3 py-[6px] px-3 rounded-xl text-[#102127] placeholder-[#102127]"
              }
              holder={""}
            />
            <Input
              labelValue={"Title"}
              required={"*"}
              labelClass={"text-white pb-2 font-semibold text-[16px]"}
              inputType={"text"}
              inputName={"title"}
              inputClass={
                "bg-[#F0F2F5] md:py-3 py-[7px] px-4 md:mb-5 rounded-xl placeholder-[#102127] text-[#102127]"
              }
              holder={"E.g Room"}
            />
            <Input
              labelValue={"Amount"}
              required={""}
              labelClass={"text-white pb-2 font-semibold text-[16px]"}
              inputType={"text"}
              inputName={"amount"}
              inputClass={
                "bg-[#F0F2F5] md:py-3 py-[8px] px-4 md:mb-5 rounded-xl placeholder-[#102127] text-[#102127]"
              }
              holder={"E.g 100"}
            />
            <div className="grid md:grid-cols-3  md:col-span-2 gap-x-4 gap-y-4  lg:gap-x-8 md:pt-5">
              <label className="text-white flex flex-col" htmlFor="country">
                <span className="font-semibold pb-1">
                  Country <span className="text-[#E9CB50]">*</span>
                </span>
                <div className=" w-[100%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
                  <select
                    className="w-[100%] bg-[#F0F2F5] py-[10px] md:py-[14px] outline-none"
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
              <label className="text-white flex flex-col" htmlFor="state">
                <span className="font-semibold pb-1">
                  State <span className="text-[#E9CB50]">*</span>
                </span>
                <div className=" w-[100%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
                  <select
                    className="w-[100%] bg-[#F0F2F5] py-[10px] md:py-[14px] outline-none"
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
              <label className="text-white flex flex-col" htmlFor="city">
                <span className="font-semibold pb-1">City</span>
                <div className=" w-[100%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
                  <select
                    className="w-[100%] bg-[#F0F2F5] py-[10px] md:py-[14px] outline-none"
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
            </div>
            <div className="md:col-span-2">
              <TextArea
                labelValue={"Description"}
                required={"*"}
                inputName={"heading"}
                inputClass={
                  "md:p-3 px-3 py-[7px] rounded-xl text-[#102127] placeholder-[#102127]"
                }
                holder={"Your Description"}
                col={""}
                row={"7"}
              />
            </div>
            <button className="bg-[#E9CB50] text-[#171717] mb-4 mt-4 text-[14px] h-[48px] w-[120px] font-semibold rounded-xl">
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAdverts;
