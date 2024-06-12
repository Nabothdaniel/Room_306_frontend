import React, { useContext, useEffect, useState } from "react";
import Close from "../images/close-icon.svg";
import Input from "./Input";
import { useGetCountryQuery } from "../redux/CountryApi";
import { Age } from "./AgeArray";
import Loading from "./Loading";
import { useServicesQuery } from "../redux/ApiSlice";
import { ImageContext } from "../Hooks/ImageContext";
import { useNavigate } from "react-router-dom";
import Ethnicity from "./Ethnicity";

const SearchModel = ({ handleSearch, SearchClass }) => {
  const { setFilter } = useContext(ImageContext);
  const [getState, setGetState] = useState([]);
  const [getCities, setGetCities] = useState([]);
  const [country, setCountry] = useState("");
  const [State, setState] = useState("");
  const [cities, setCities] = useState("");
  const { data, isLoading } = useGetCountryQuery();
  const navigate = useNavigate();
  const { data: service, isLoading: load } = useServicesQuery();
  const [formData, setFormData] = useState({
    display_name: "",
    country: "",
    city: "",
    state: "",
    gender: "",
    ethnicity: "",
    bust_size: "",
    looks: "",
    build: "",
    sexual_orientation: "",
    smoker: true,
    services: 1,
  });

  // if (isLoading || load) {
  //   return (
  //     <div className={`${SearchClass}`}>
  //       <Loading />;
  //     </div>
  //   );
  // }

  const handleChange = (e) => {
    if (e.target.name == "services") {
      setFormData({ ...formData, [e.target.name]: e.target.id });
    } else if (e.target.name == "smoker") {
      if (e.target.value == "true") {
        setFormData({ ...formData, [e.target.name]: e.target.checked });
      } else {
        setFormData({ ...formData, [e.target.name]: !e.target.checked });
      }
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  let states;
  const handleCountry = (e) => {
    states = data?.filter((state) => state.name === e.target.value);

    states = states?.map((item) => item.states);

    states.sort();
    setGetState(states[0]);
  };

  const handleState = (e) => {
    let city = getState?.filter((item) => item.name === e.target.value);
    city = city?.map((item) => item);

    setGetCities(city);
  };

  let newCities = [];

  getCities.forEach((childArray) => {
    childArray?.cities?.forEach((item) => {
      newCities.push(item);
    });
  });

  const handleSub = () => {
    setFilter({ search: formData });
    handleSearch();
    navigate("/search-escort");
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
              inputName={"display_name"}
              inputClass={
                "bg-[#F0F2F5] py-3 px-4 md:mb-5 rounded-xl placeholder-[#102127] text-[#102127]"
              }
              holder={"Enter Name Here"}
              onchange={handleChange}
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
                    handleChange(e);
                  }}
                >
                  <option value="">All Country</option>
                  {data?.map((item) => {
                    return (
                      <option key={item.id} value={item.name}>
                        {item.name}
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
                    handleChange(e);
                  }}
                >
                  <option value="">State(Optional)</option>
                  {getState?.map((item, index) => {
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
              <span className="font-semibold pb-1">City</span>
              <div className=" w-[100%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
                <select
                  className="w-[100%] bg-[#F0F2F5] py-[14px] outline-none"
                  name="city"
                  id="city"
                  value={cities}
                  onChange={(e) => {
                    setCities(e.target.value);
                    handleChange(e);
                  }}
                >
                  <option value="">City(Optional)</option>

                  {newCities?.map((item) => {
                    return (
                      <option key={item.id} value={item.name}>
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
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="gender"
                    value={""}
                  />
                  <span className="checkmark"></span>
                </label>

                <label className="container ">
                  Male
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="gender"
                    value={"male"}
                  />
                  <span className="checkmark"></span>
                </label>

                <label className="container">
                  Female
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="gender"
                    value={"female"}
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>

            {/* <label className="text-[#475367] pt-4 " htmlFor="escort age">
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
            </label> */}

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
                  onChange={handleChange}
                >
                  <Ethnicity />
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
                  name="bust_size"
                  id="bust_size"
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  name="sexual_orientation"
                  id="sexual_orientation"
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

            {/* TESTING */}
            {/* <div className="w-[70%]">
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
            </div> */}

            <div className=" pt-5 ">
              <h4 className="text-[#475367] font-semibold pb-3">Smoker</h4>
              <div className="flex">
                {/* <label className="container">
                  Any
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="smoker"
                    value={""}
                  />
                  <span className="checkmark"></span>
                </label> */}

                <label className="container ">
                  Yes
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="smoker"
                    value={true}
                    checked={formData.smoker}
                  />
                  <span className="checkmark"></span>
                </label>

                <label className="container">
                  No
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="smoker"
                    value={false}
                    checked={!formData.smoker}
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>

            <div className="md:col-span-2 pt-5 ">
              <h4 className="text-[#475367] font-semibold pb-3">Services</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-1 gap-y-3">
                {service?.map((item, index) => {
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
              </div>
            </div>
          </div>
        </div>
        <div className="flex pr-8 pb-6 justify-end pt-6">
          {/* <button className="bg-transparent text-[#171717] mr-1 text-[14px] h-[48px] w-[92px] font-semibold rounded-xl">
            Reset
          </button> */}
          <button
            onClick={handleSub}
            className="bg-[#E9CB50] text-[#171717] text-[14px] h-[48px] w-[92px] font-semibold rounded-xl"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchModel;
