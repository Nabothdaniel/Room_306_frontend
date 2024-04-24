import React, { useState } from "react";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import { useGetCountryQuery } from "../redux/CountryApi";
import Upload from "../images/Upload.svg";

const AddTours = () => {
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
          Headervalue={"Best Escort Tours"}
          textValue={"Explore our tours and activities"}
        />

        <div className="md:py-5 pb-9 md:pb-12">
          <div className="md:pb-3 pt-2 md:pt-8">
            <h2 className="text-white py-4 md:text-2xl font-semibold">
              Add New Tour
            </h2>
          </div>
          <div className="rounded-xl lg:px-10 grid lg:grid-cols-2 gap-x-5 gap-y-6 px-4 py-6 md:px-12 md:py-14 bg-[#1E1E1E] ">
            <div>
              <Input
                labelValue={"Title"}
                required={"*"}
                labelClass={"text-white pb-2 font-semibold text-[16px]"}
                inputType={"text"}
                inputName={"name"}
                inputClass={
                  "bg-[#F0F2F5] py-3 px-4 md:mb-5 rounded-xl placeholder-[#102127] text-[#102127]"
                }
                holder={"Enter Tour Title Here"}
              />
              <Input
                labelValue={"Start Date"}
                inputType={"date"}
                labelClass={"font-semibold py-2"}
                required={"*"}
                inputName={"state-date"}
                inputClass={
                  "p-3 rounded-xl text-[#102127] placeholder-[#102127]"
                }
                holder={""}
              />
              <div className="grid md:grid-cols-3 gap-y-3 gap-x-3 pt-5">
                <label className="text-white flex flex-col" htmlFor="country">
                  <span className="font-semibold pb-1">Country</span>
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
                  <span className="font-semibold pb-1">State</span>
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
            </div>
            <div className="w-[100%] cursor-pointer">
              <img className="w-[80%] mx-auto " src={Upload} alt="" />
            </div>
            <button className="bg-[#E9CB50] text-[#171717] mt-4 text-[14px] h-[48px] w-[120px] font-semibold rounded-xl">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTours;
