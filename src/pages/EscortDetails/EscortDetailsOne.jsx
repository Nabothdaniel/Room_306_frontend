import React, { useEffect, useState } from "react";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import SideBar from "../../components/SideBar";
import Navbar from "../../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "../../components/Loading";
import { useGetCountryQuery } from "../../redux/CountryApi";
import { useDispatch, useSelector } from "react-redux";
import { details } from "../../redux/UtilSlice";
import { differenceInYears, parse } from "date-fns";

const EscortDetailsOne = () => {
  const { data, isLoading } = useGetCountryQuery();
  const open = useSelector((state) => state.Util.userDetails);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  //const [register] = useRegisterEscortMutation()

  const [confirmPwd, setConfirmPwd] = useState("");
  const [error, setError] = useState({});
  const [code, setCode] = useState("");
  const [pwdError, setPwdError] = useState("");
  const [currency, setCurrency] = useState("");
  const [getState, setGetState] = useState([]);
  const [getCities, setGetCities] = useState([]);

  const [formData, setFormData] = useState({
    country: "",
    state: "",
    code: "",
    cities: "",
    gender: "",
    dob: "",
    display_name: "",
    heading: "",
    mobile_number: "",
    email: "",
    password: "",
    username: "",
    country_code: "",
  });

  const birthDate = parse(formData.dob, "yyyy-MM-dd", new Date());
  const currentDate = new Date();
  const age = differenceInYears(currentDate, birthDate);

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validateFormData = (data) => {
    let errors = {};
    if (!isValidEmail(data.email)) {
      errors.email = "Email is not valid";
    }
    if (!data.email) {
      errors.email = "Email is required";
    }

    if (data.password.trim().length < 6) {
      errors.password = "Password must be 6 digit long";
    }
    if (!data.password.trim()) {
      errors.password = "Password is required";
    }
    if (!data.username.trim()) {
      errors.username = "Username is required";
    }
    if (!data.state) {
      errors.state = "State is required";
    }
    if (!data.country) {
      errors.country = "Country is required";
    }
    if (!data.cities) {
      errors.cities = "City is required";
    }
    if (!data.gender) {
      errors.gender = "Gender is required";
    }
    if (!data.dob) {
      errors.dob = "Date of Birth is required";
    }
    if (age < 18) {
      errors.dob = "Only Age from 18years and above";
    }
    if (!data.heading.trim()) {
      errors.heading = "Heading is required";
    }
    if (!data.display_name.trim()) {
      errors.name = "Display name is required";
    }

    if (!Number(data.mobile_number) || data.mobile_number.length < 11) {
      errors.number = "Mobile Number is invalid";
    }

    if (!data.mobile_number.trim()) {
      errors.number = "Mobile Number is required";
    }
    if (!data.country_code) {
      errors.code = "Country code is required";
    }
    if (formData.password !== confirmPwd) {
      errors.conpwd = "Password doesn't match";
    }

    return errors;
  };

  useEffect(() => {
    const validationErrors = validateFormData(formData);
    setError(validationErrors);
  }, [formData, confirmPwd]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isLoading) {
    return <Loading />;
  }

  let states;
  const handleCountry = (e) => {
    states = data.filter((state) => state.name === e.target.value);
    setCode(states[0].phone_code);
    setCurrency(states[0].currency);
    states = states.map((item) => item.states);

    states.sort();
    setGetState(states[0]);
  };

  const handleState = (e) => {
    let city = getState.filter((item) => item.name === e.target.value);
    city = city.map((item) => item);

    setGetCities(city);
  };

  let newCities = [];

  getCities.forEach((childArray) => {
    childArray.cities.forEach((item) => {
      newCities.push(item);
    });
  });

  const handleEscortOne = async () => {
    const validationErrors = validateFormData(formData);
    setError(validationErrors);

    try {
      // const hello = await register( formData ).unwrap();
      // console.log(hello);
    } catch (err) {
      console.log(err);
    }

    // if (Object.keys(validationErrors).length === 0) {
    //   dispatch(
    //       details({
    //           ...formData,
    //           currency,
    //           code,
    //         })
    //       );

    navigate("/additional-details");

    // setFormData({
    //   country: "",
    //   state: "",
    //   code: "",
    //   cities: "",
    //   gender: "",
    //   dob: "",
    //   display_name: "",
    //   heading: "",
    //   mobile_number: "",
    //   email: "",
    //   password: "",
    //   username: "",
    // });
    // }
  };

  return (
    <div className="block md:flex overflow-x-clip max-w-[1740px] mx-auto">
      <SideBar />

      <div className="flex-1 md:w-[80%] px-4 pt-6 md:pt-14 md:px-10">
        <Navbar
          Headervalue={"Welcome to Room 306"}
          textValue={"Explore our escort at your own pace"}
        />

        <div className="md:py-8 pb-8">
          <div className="flex justify-between items-center py-2 md:pb-6 md:pt-8">
            <h2 className="text-white md:py-4 md:text-2xl font-semibold">
              Escort Details
            </h2>

            <p className="text-white md:text-4xl text-3xl font-semibold">
              <span className="text-[#B29A9A] text-xl md:text-2xl">
                Step <span>1/</span>
              </span>
              6
            </p>
          </div>
          <div className="rounded-xl lg:px-10 md:px-7 px-4 py-6 md:pl-12 md:py-14 bg-[#1E1E1E] ">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-y-0 lg:gap-x-12 md:gap-x-5">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-x-12 md:gap-x-4 gap-y-3 md:gap-y-8 lg:col-span-2">
                <div>
                  <Input
                    labelValue={"Username"}
                    labelClass={"font-semibold py-2"}
                    inputType={"text"}
                    required={"*"}
                    inputName={"username"}
                    inputClass={
                      " rounded-xl text-[#102127] placeholder-[#102127]"
                    }
                    holder={"Enter username"}
                    value={formData.username}
                    onchange={handleChange}
                  />
                  <p className="py-1 text-[12px] text-red-500">
                    {error.username}
                  </p>
                </div>
                <div>
                  <Input
                    labelValue={"Email"}
                    labelClass={"font-semibold py-2"}
                    inputType={"email"}
                    required={""}
                    inputName={"email"}
                    inputClass={
                      " rounded-xl text-[#102127]  placeholder-[#102127]"
                    }
                    holder={"Enter Email"}
                    value={formData.email}
                    onchange={handleChange}
                  />
                  <p className="py-1 text-[12px] text-red-500">{error.email}</p>
                </div>
                <div>
                  <Input
                    labelValue={"Password"}
                    labelClass={"font-semibold py-2"}
                    inputType={"password"}
                    required={"*"}
                    inputName={"password"}
                    inputClass={
                      " rounded-xl text-[#102127] placeholder-[#102127]"
                    }
                    holder={"Enter Password"}
                    value={formData.password}
                    onchange={handleChange}
                  />
                  <p className="py-1 text-[12px] text-red-500">
                    {error.password}
                  </p>
                </div>
                <div>
                  <Input
                    labelValue={"Re-Enter Password"}
                    labelClass={"font-semibold py-2"}
                    inputType={"password"}
                    required={"*"}
                    inputName={"confirmPwd"}
                    inputClass={
                      " rounded-xl text-[#102127]  placeholder-[#102127]"
                    }
                    holder={"Enter Password"}
                    value={confirmPwd}
                    onchange={(e) => setConfirmPwd(e.target.value)}
                  />
                  <p className="py-1 text-[12px] text-red-500">
                    {error.conpwd}
                  </p>
                </div>
                <div>
                  <Input
                    labelValue={"Display Name"}
                    labelClass={"font-semibold py-2"}
                    inputType={"text"}
                    required={"*"}
                    inputName={"display_name"}
                    inputClass={
                      " rounded-xl text-[#102127] placeholder-[#102127]"
                    }
                    holder={"Enter Display Name"}
                    value={formData.display_name}
                    onchange={handleChange}
                  />
                  <p className="py-1 text-[12px] text-red-500">{error.name}</p>
                </div>

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
                  <p className="py-1 text-[12px] text-red-500">
                    {error.country}
                  </p>
                </label>

                <label className="text-[#475367] flex flex-col" htmlFor="state">
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
                  <p className="py-1 text-[12px] text-red-500">{error.state}</p>
                </label>
                <label className="text-[#475367] flex flex-col" htmlFor="city">
                  <span className="font-semibold text-white pb-1">City</span>
                  <div className=" w-[100%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
                    <select
                      className="w-[100%] bg-[#F0F2F5] py-[14px] outline-none"
                      name="cities"
                      id="cities"
                      value={formData.cities}
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
                  <p className="py-1 text-[12px] text-red-500">
                    {error.cities}
                  </p>
                </label>

                <div>
                  <Input
                    labelValue={"Date of Birth"}
                    inputType={"date"}
                    labelClass={"font-semibold py-2"}
                    required={""}
                    inputName={"dob"}
                    inputClass={
                      " rounded-xl text-[#102127] placeholder-[#102127]"
                    }
                    holder={""}
                    value={formData.dob}
                    onchange={handleChange}
                  />
                  <p className="py-1 text-[12px] text-red-500">{error.dob}</p>
                </div>

                <div>
                  <div className="text-white flex pt-10 items-center">
                    <label className="container ">
                      Male
                      <input
                        type="radio"
                        name="gender"
                        value={"male"}
                        onChange={handleChange}
                      />
                      <span className="checkmark"></span>
                    </label>

                    <label className="container">
                      Female
                      <input
                        type="radio"
                        name="gender"
                        value={"female"}
                        onChange={handleChange}
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <p className="py-1 text-[12px] text-red-500">
                    {error.gender}
                  </p>
                </div>

                <div className="md:col-span-2">
                  <TextArea
                    labelValue={"Heading"}
                    required={"*"}
                    inputName={"heading"}
                    inputClass={
                      "p-3 rounded-xl text-[#102127] placeholder-[#102127]"
                    }
                    holder={"In short, tell your clients what you offer"}
                    col={""}
                    row={"7"}
                    value={formData.heading}
                    onchange={handleChange}
                  />
                  <p className="py-1 text-[12px] text-red-500">
                    {error.heading}
                  </p>
                </div>

                <label
                  className="text-[#475367] pt-2 flex flex-col"
                  htmlFor="city"
                >
                  <span className="font-semibold text-white pb-1">
                    Country Code
                  </span>
                  <div className=" w-[100%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
                    <select
                      className="w-[100%] bg-[#F0F2F5] py-[14px] outline-none"
                      name="country_code"
                      id="country_code"
                      value={formData.country_code}
                      onChange={handleChange}
                    >
                      <option value="">Select</option>

                      {code && (
                        <option>{`${formData.country} +${code}`}</option>
                      )}
                    </select>
                  </div>
                  <p className="py-1 text-[12px] text-red-500">{error.code}</p>
                </label>

                <div>
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
                    value={formData.mobile_number}
                    onchange={handleChange}
                  />
                  <p className="py-1 text-[12px] text-red-500">
                    {error.number}
                  </p>
                </div>
              </div>

              <div className="  pt-4 pb-8 lg:max-w-[300px]">
                <div>
                  <div className="text-[#F1D6D6] text-[14px]">
                    <p>
                      Username is a unique name for admin to identify you. It
                      can be anything or whatever you can remember.
                    </p>
                    <p>
                      Your display name is the important name everybody will see
                      on your profile.
                    </p>
                    <p>So,</p>
                    <p>Don't use your real name as a display name.</p>
                    <p>
                      Use a fancy name like a nice nickname but one your mum and
                      dad don't know about.
                    </p>
                    <p>Date of birth:</p>
                    <p>
                      Pick your date of birth, it Can not be changed once your
                      registration is completed.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={handleEscortOne}
              className="text-center block hover:bg-[#ffdc4e] duration-500  bg-[#E9CB50] w-[100%] py-3 md:py-4 md:w-[120px] font-semibold mt-12 rounded-xl"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EscortDetailsOne;
