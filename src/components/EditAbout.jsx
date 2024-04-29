import React, { useState } from "react";
import TextArea from "./TextArea";
import Input from "./Input";
import { useGetCountryQuery } from "../redux/CountryApi";

const EditAbout = ({aboutClass}) => {
  const [getState, setGetState] = useState([]);
  const [getCities, setGetCities] = useState([]);
  const [country, setCountry] = useState("");
  const [State, setState] = useState("");
  const [cities, setCities] = useState("");
  const { data, isLoading } = useGetCountryQuery();
  const [image, setImage] = useState("");

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
    <div className={`bg-[#1E1E1E] ${aboutClass} rounded-xl py-5 px-7`}>
      <TextArea
        labelValue={"About"}
        required={"*"}
        inputName={"about"}
        inputClass={"p-3 rounded-xl text-[#102127] placeholder-[#102127]"}
        holder={""}
        col={""}
        row={"6"}
      />
      <p className="py-3 font-semibold text-white">About You</p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-2">
          <Input
            labelValue={"Date Of Birth"}
            inputType={"date"}
            labelClass={"font-semibold py-2"}
            required={""}
            inputName={"date-of-birth"}
            inputClass={" rounded-xl text-[#102127] placeholder-[#102127]"}
            holder={""}
          />
        </div>
        <label className=" md:col-span-2" htmlFor="">
          <p className="text-white font-semibold pt-2 pb-1">Mobile Number</p>
          <div className="grid text-white lg:gap-x-8 gap-4  md:col-span-2 md:grid-cols-2">
            <input
              type="tel"
              className="rounded-xl text-[#102127] placeholder-[#102127] p-3"
            />
            <input
              type="tel"
              className="rounded-xl text-[#102127] placeholder-[#102127] p-3"
              placeholder="e.g 0812346789"
            />
          </div>
        </label>
        <div className="md:col-span-2">
          <p className="text-white font-semibold pt-2 pb-2">Gender</p>
          <div className="text-white lg:w-[50%] items-center flex ">
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
        <div className="md:col-span-2">
          <div className=" ">
            <h4 className="text-white pt-2 font-semibold pb-3">
              Smoker<span className="text-[#E9CB50]">*</span>
            </h4>
            <div className="flex lg:w-[50%]">
              <label className="container text-white ">
                Yes
                <input type="radio" name="smoker" />
                <span className="checkmark"></span>
              </label>

              <label className="container text-white">
                No
                <input type="radio" name="smoker" />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 grid">
          <Input
            labelValue={"Education"}
            labelClass={"font-semibold"}
            inputType={"text"}
            required={"*"}
            inputName={"education"}
            inputClass={" rounded-xl text-[#102127] placeholder-[#102127]"}
            holder={""}
          />
        </div>
        <div className="md:col-span-2">
          <Input
            labelValue={"Occupation"}
            labelClass={"font-semibold"}
            inputType={"text"}
            required={"*"}
            inputName={"education"}
            inputClass={" rounded-xl text-[#102127] placeholder-[#102127]"}
            holder={"Select"}
          />
        </div>
        <label
          className="text-white md:col-span-4 flex flex-col"
          htmlFor="sexual-orientation"
        >
          <span className="font-semibold pb-1">
            Sexual Orientation<span className="text-[#E9CB50]">*</span>
          </span>
          <div className=" w-[100%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
            <select
              className="w-[100%] bg-[#F0F2F5] py-[10px] md:py-[14px] outline-none"
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
        <p className="font-semibold pt-2 text-[18px] text-white">Location</p>
        <div className="grid md:col-span-4 md:grid-cols-3 gap-y-3 gap-x-3 ">
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
    </div>
  );
};

export default EditAbout;
