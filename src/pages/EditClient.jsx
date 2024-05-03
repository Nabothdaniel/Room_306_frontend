import React, { useState } from "react";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import { useGetCountryQuery } from "../redux/CountryApi";
import Upload from "../images/Upload.svg";
import TextArea from "../components/TextArea";

const EditClient = () => {
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
    <div className="block md:flex overflow-x-clip max-w-[1740px] mx-auto">
      <SideBar />

      <div className="flex-1 md:w-[80%] px-4 pt-6 md:pt-14 md:px-10">
        <Navbar
          Headervalue={"Welcome to Room 306"}
          textValue={"Explore our escort at your own pace"}
        />

        <div className="md:py-5 pb-9 md:pb-12">
          <div className="md:pb-3 pt-2 md:pt-8">
            <h2 className="text-white py-4 md:text-2xl font-semibold">
              Edit Account
            </h2>
          </div>
          <div className="rounded-xl lg:px-10 grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 px-4 py-6 md:px-12 md:py-14 bg-[#1E1E1E] ">
            <div
              onClick={() => document.querySelector(".input").click()}
              className="w-[100%] cursor-pointer"
            >
              <input
                type="file"
                name="file"
                id="file"
                className="input"
                hidden
                onChange={({ target: { files } }) => {
                  if (files) {
                    setImage(URL.createObjectURL(files[0]));
                  }
                }}
              />
              {image ? (
                <img className="rounded-lg" src={image} />
              ) : (
                <img className=" md:float-start " src={Upload} alt="" />
              )}
            </div>
            <div className="col-span-2">
              <TextArea
                labelValue={"Headline"}
                required={"*"}
                inputName={"headline"}
                inputClass={
                  "p-3 rounded-xl text-[#102127] placeholder-[#102127]"
                }
                holder={""}
                col={""}
                row={"5"}
              />
              <Input
                labelValue={"Email"}
                labelClass={"pt-3 font-semibold"}
                inputType={"email"}
                required={""}
                inputName={"email"}
                inputClass={
                  "p-3 rounded-xl text-[#102127]  placeholder-[#102127]"
                }
                holder={""}
              />
              <Input
                labelValue={"Date Of Birth"}
                inputType={"date"}
                labelClass={"font-semibold py-2"}
                required={""}
                inputName={"date-of-birth"}
                inputClass={
                  "p-3 rounded-xl w-[100%] text-[#102127] placeholder-[#102127]"
                }
                holder={""}
              />
              <Input
                labelValue={"Mobile Number"}
                labelClass={"pt-3 font-semibold"}
                inputType={"tel"}
                required={""}
                inputName={"number"}
                inputClass={
                  "p-3 rounded-xl text-[#102127] placeholder-[#102127]"
                }
                holder={"E.g 12345678881"}
              />
              <div className="grid md:grid-cols-2 gap-y-3 gap-x-3 pt-5">
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

            <button className="bg-[#E9CB50] float-right mb-8 text-[#171717] mt-4 text-[14px] h-[48px] w-[120px] font-semibold rounded-xl">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditClient;
