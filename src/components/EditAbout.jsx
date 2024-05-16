import React, { useEffect, useState } from "react";
import TextArea from "./TextArea";
import Input from "./Input";
import { useGetCountryQuery } from "../redux/CountryApi";
import Loading from "./Loading";

const EditAbout = ({ aboutClass, formData, handleChange, setCurrency }) => {
  const [getState, setGetState] = useState([]);
  const [getCities, setGetCities] = useState([]);

  const { data, isLoading } = useGetCountryQuery();
  const [image, setImage] = useState("");
 
  const [code, setCode] = useState("");

  let handleCountry = () => {};
  let handleState = () => {};

  useEffect(() => {
    handleCountry();
    handleState();
  }, [formData, data]);

  if (isLoading) {
    return <Loading />;
  }

  let states;
  handleCountry = (e) => {
    states = data.filter((state) => state.name === formData.country);
    setCode(states[0].phone_code);
    setCurrency(states[0].currency);
    states = states.map((item) => item.states);

    states.sort();
    setGetState(states[0]);
  };

  handleState = (e) => {
    let city = getState.filter((item) => item.name === formData.state);
    city = city.map((item) => item);

    setGetCities(city);
  };

  let newCities = [];

  getCities.forEach((childArray) => {
    childArray.cities.forEach((item) => {
      newCities.push(item);
    });
  });

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
        value={formData.about}
        onchange={handleChange}
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
              value={`+${code}`}
              onChange={handleChange}
            />
            <input
              type="tel"
              className="rounded-xl text-[#102127] placeholder-[#102127] p-3"
              placeholder="e.g 0812346789"
              value={formData.mobile_number}
              onChange={handleChange}
            />
          </div>
        </label>
        <div className="md:col-span-2">
          <p className="text-white font-semibold pt-2 pb-2">Gender</p>
          <div className="text-white lg:w-[50%] items-center flex ">
            <label className="container ">
              Male
              <input
                onChange={handleChange}
                type="radio"
                checked={formData.isMale}
                name="isMale"
                value={true}
              />
              <span className="checkmark"></span>
            </label>

            <label className="container">
              Female
              <input
                onChange={handleChange}
                type="radio"
                checked={!formData.isMale}
                name="isFemale"
                value={true}
              />
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
                <input
                  onChange={handleChange}
                  type="radio"
                  checked={formData.is_smoker}
                  name="is_smoker"
                  value={true}
                />
                <span className="checkmark"></span>
              </label>

              <label className="container text-white">
                No
                <input
                  onChange={handleChange}
                  value={false}
                  type="radio"
                  name="is_smoker"
                  checked={!formData.is_smoker}
                />
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
            value={formData.education}
            onchange={handleChange}
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
            holder={""}
            value={formData.occupation}
            onchange={handleChange}
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
              name="sexual_orientation"
              id="sexual_orientation"
              value={formData.sexual_orientation}
              onChange={handleChange}
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
          <label className="text-[#475367] flex flex-col" htmlFor="country">
            <span className="font-semibold text-white pb-1">Country</span>
            <div className=" w-[100%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
              <select
                className="w-[100%] bg-[#F0F2F5] py-[14px] outline-none"
                name="country"
                id="country"
                value={formData.country}
                onChange={(e) => {
                  handleCountry(e);
                  handleChange(e);
                }}
              >
                <option value="">All Country</option>
                {data.map((item) => {
                  return (
                    <option key={item.id} value={item.name}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </label>
          <label className="text-[#475367]  flex flex-col" htmlFor="state">
            <span className="font-semibold text-white pb-1">State</span>
            <div className=" w-[100%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
              <select
                className="w-[100%] bg-[#F0F2F5] py-[14px] outline-none"
                name="state"
                id="state"
                value={formData.state}
                onChange={(e) => {
                  handleState(e);
                  handleChange(e);
                }}
              >
                <option value="">State(Optional)</option>
                {getState.map((item, index) => {
                  return (
                    <option key={item.id} value={item.name}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </label>
          <label className="text-[#475367] flex flex-col" htmlFor="city">
            <span className="font-semibold text-white pb-1">City</span>
            <div className=" w-[100%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
              <select
                className="w-[100%] bg-[#F0F2F5] py-[14px] outline-none"
                name="city"
                id="city"
                value={formData.city}
                onChange={handleChange}
              >
                <option value="">City(Optional)</option>

                {newCities.map((item) => {
                  return (
                    <option key={item.id} value={item.name}>
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
