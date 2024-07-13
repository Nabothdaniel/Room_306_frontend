import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";
import { Country, State, City } from "country-state-city";

const EditClient = () => {
  let user = JSON.parse(localStorage.getItem("details"));
  let users = user?.profile;
  const [ISOcode, setISOcode] = useState("NG");
  const [StateISOcode, setStateISOcode] = useState();
  const navigate = useNavigate();
  const [code, setCode] = useState("");

  const [Data, setformData] = useState({
    country: users.country,
    state: users.state,
    city: users.city,
    user_type: "client",
    display_name: users.display_name,
    mobile_number: users.mobile_number,
    email: users.email,
    username: users.username,
    country_code: users.country_code,
  });

  const [image, setImage] = useState("");

  console.log(Data);

  const handleChange = (e) => {
    if (e.target.name == "country") {
      const isocode = e.target.value.split(" ");
      const Iso = isocode[isocode.length - 1];
      setCode(Country.getCountryByCode(Iso).phonecode);
      setISOcode(Iso);

      isocode.pop();
      const NewCode = isocode.join(" ");

      setformData({ ...Data, [e.target.name]: NewCode, state: "", city: "" });
    } else if (e.target.name == "state") {
      const isocode = e.target.value.split(" ");
      const Iso = isocode[isocode.length - 1];

      setStateISOcode(Iso);
      isocode.pop();
      const NewCode = isocode.join(" ");

      setformData({ ...Data, [e.target.name]: NewCode, city: "" });
    } else {
      setformData({ ...Data, [e.target.name]: e.target.value });
    }
  };

  const formData = new FormData();
  formData.append("username", Data.username);
  formData.append("mobile_number", Data.mobile_number);
  formData.append("country", Data.country);
  formData.append("user_type", Data.user_type);
  formData.append("city", Data.city);
  formData.append("email", Data.email);
  formData.append("password", Data.password);
  formData.append("display_name", Data.display_name);
  formData.append("state", Data.state);

  if (code) {
    formData.append("country_code", code);
  }

  if (image) {
    formData.append("image", image);
  }

  // let states;
  // handleCountry = (e) => {
  //   states = data.filter((state) => state.name === Data.country);

  //   states = states?.map((item) => item.states);

  //   states.sort();
  //   setGetState(states[0]);
  // };

  // handleState = (e) => {
  //   let city = getState.filter((item) => item.name === Data.state);
  //   city = city?.map((item) => item);

  //   setGetCities(city);
  // };

  // let newCities = [];

  // getCities.forEach((childArray) => {
  //   childArray.cities.forEach((item) => {
  //     newCities.push(item);
  //   });
  // });

  const handleEdit = async () => {
    try {
      const res = await axios.put(
        "https://backend.theroom306.com/api/profile/edit/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
        }
      );

      if (res.data.message == "Profile updated successfully") {
        navigate("/profile");
        window.location.reload(true);
      }
    } catch (err) {
      console.log(err);
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
                name="image"
                id="file"
                className="input"
                hidden
                onChange={(e) => {
                  setImage(e.target.files[0]);

                  handleChange(e);
                }}
              />
              {image ? (
                <img
                  className="rounded-lg h-[300px]"
                  src={URL.createObjectURL(image)}
                />
              ) : (
                <img
                  className="h-[300px] w-full rounded-lg"
                  src={`https://backend.theroom306.com${users.image}`}
                  alt=""
                />
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
                labelClass={"font-semibold py-2"}
                inputType={"email"}
                required={""}
                inputName={"email"}
                inputClass={" rounded-xl text-[#102127]  placeholder-[#102127]"}
                holder={"Enter Email"}
                value={Data.email}
                onchange={handleChange}
              />
              <div className="w-full rounded-xl">
                <Input
                  labelValue={"Date of Birth"}
                  inputType={"date"}
                  labelClass={"font-semibold pr-2 w-full py-2"}
                  required={""}
                  inputName={"dob"}
                  inputClass={
                    " rounded-xl w-full text-[#102127] pr-2 placeholder-[#102127]"
                  }
                  holder={""}
                  value={Data.dob}
                  onchange={handleChange}
                />
              </div>
              <Input
                labelValue={"Mobile Number"}
                labelClass={"font-semibold py-2"}
                inputType={"tel"}
                required={"*"}
                inputName={"mobile_number"}
                inputClass={
                  "p-3 rounded-xl text-[#102127] placeholder-[#102127]"
                }
                holder={"E.g 12345678881"}
                value={Data.mobile_number}
                onchange={handleChange}
              />
              <div className="grid md:grid-cols-2 gap-y-3 gap-x-3 pt-5">
                <label
                  className="text-[#475367] pt-2 flex flex-col"
                  htmlFor="country"
                >
                  <span className="font-semibold text-white pb-1">Country</span>
                  <div className=" w-[100%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
                    <select
                      className="w-[100%] bg-[#F0F2F5] py-[14px] outline-none"
                      name="country"
                      id="country"
                      // value={Data.country}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    >
                      <option value="">All Country</option>
                      {Country?.getAllCountries()?.map((item, index) => {
                        return (
                          <option key={index}>
                            {item.name} {item.isoCode}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </label>

                <label
                  className="text-[#475367] pt-2 flex flex-col"
                  htmlFor="state"
                >
                  <span className="font-semibold text-white pb-1">State</span>
                  <div className=" w-[100%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
                    <select
                      className="w-[100%] bg-[#F0F2F5] py-[14px] outline-none"
                      name="state"
                      id="state"
                      // value={Data.state}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    >
                      <option value="">State(Optional)</option>
                      {State?.getStatesOfCountry(ISOcode)?.map(
                        (item, index) => {
                          return (
                            <option key={index}>
                              {item.name} {item.isoCode}
                            </option>
                          );
                        }
                      )}
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
                      value={Data.city}
                      onChange={handleChange}
                    >
                      <option value="">City(Optional)</option>

                      {City?.getCitiesOfState(ISOcode, StateISOcode)?.map(
                        (item, index) => {
                          return <option key={index}>{item.name}</option>;
                        }
                      )}
                    </select>
                  </div>
                </label>
              </div>
            </div>

            <button
              onClick={handleEdit}
              className="bg-[#E9CB50] float-right mb-8 text-[#171717] mt-4 text-[14px] h-[48px] w-[120px] font-semibold rounded-xl"
            >
              Update
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default EditClient;
