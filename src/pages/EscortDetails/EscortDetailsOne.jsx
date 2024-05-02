import React, { useEffect, useState } from "react";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import SideBar from "../../components/SideBar";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import { useRegisterEscortMutation } from "../../redux/EscortApi";
import Loading from "../../components/Loading";
import { useGetCountryQuery } from "../../redux/CountryApi";
import { useDispatch, useSelector } from "react-redux";
import { details } from "../../redux/UtilSlice";

const EscortDetailsOne = () => {
  const open = useSelector((state) => state.Util.userDetails);
  const dispatch = useDispatch();

  const [register] = useRegisterEscortMutation();

  const [password, setPassword] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [code, setCode] = useState("");
  const [currency, setCurrency] = useState("");
  const [getState, setGetState] = useState([]);
  const [getCities, setGetCities] = useState([]);
  const [country, setCountry] = useState("");
  const [State, setState] = useState("");
  const [cities, setCities] = useState("");
  const [match, setMatch] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [heading, setHeading] = useState("");
  const [display_name, setName] = useState("");
  const [mobile_number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const { data, isLoading } = useGetCountryQuery();

  useEffect(() => {
    if (!(password == confirmPwd)) {
      setError("Password does not match");
      setMatch(false);
    } else {
      setError("");
      setMatch(true);
    }
  }, [confirmPwd]);

  useEffect(() => {
    if (
      (username ||
        match ||
        email ||
        country ||
        State ||
        cities ||
        gender ||
        currency ||
        heading ||
        display_name ||
        dob,
      mobile_number,
      code)
    ) {
      setCorrect(true);
    } else {
      setCorrect(false);
    }
  }, [
    username,
    match,
    email,
    State,
    cities,
    gender,
    currency,
    heading,
    display_name,
    dob,
    mobile_number,
    code,
  ]);

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


  const handleEscortOne = () => {
    dispatch(
      details({
        username,
        email,
        State,
        cities,
        gender,
        currency,
        heading,
        display_name,
        dob,
        mobile_number,
        code,
      })
    );
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
                  value={username}
                  onchange={(e) => setUsername(e.target.value)}
                />
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
                  value={email}
                  onchange={(e) => setEmail(e.target.value)}
                />
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
                  value={password}
                  onchange={(e) => setPassword(e.target.value)}
                />
                <div>
                  <Input
                    labelValue={"Re-Enter Password"}
                    labelClass={"font-semibold py-2"}
                    inputType={"password"}
                    required={"*"}
                    inputName={"password"}
                    inputClass={
                      " rounded-xl text-[#102127]  placeholder-[#102127]"
                    }
                    holder={"Enter Password"}
                    value={confirmPwd}
                    onchange={(e) => setConfirmPwd(e.target.value)}
                  />
                  <p className="py-1 text-[12px] text-red-500">{error}</p>
                </div>
                <Input
                  labelValue={"Display Name"}
                  labelClass={"font-semibold py-2"}
                  inputType={"text"}
                  required={"*"}
                  inputName={"name"}
                  inputClass={
                    " rounded-xl text-[#102127] placeholder-[#102127]"
                  }
                  holder={"Enter Display Name"}
                  value={display_name}
                  onchange={(e) => setName(e.target.value)}
                />

                <label
                  className="text-[#475367] flex flex-col"
                  htmlFor="country"
                >
                  <span className="font-semibold text-white pb-1">Country</span>
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

                <label className="text-[#475367] flex flex-col" htmlFor="state">
                  <span className="font-semibold text-white pb-1">State</span>
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
                      value={cities}
                      onChange={(e) => setCities(e.target.value)}
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

                <Input
                  labelValue={"Date of Birth"}
                  inputType={"date"}
                  labelClass={"font-semibold py-2"}
                  required={""}
                  inputName={"state-date"}
                  inputClass={
                    " rounded-xl text-[#102127] placeholder-[#102127]"
                  }
                  holder={""}
                  value={dob}
                  onchange={(e) => setDob(e.target.value)}
                />
                <div className="text-white flex pt-10 items-center">
                  <label className="container ">
                    Male
                    <input
                      type="radio"
                      name="gender"
                      value={"male"}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <span className="checkmark"></span>
                  </label>

                  <label className="container">
                    Female
                    <input
                      type="radio"
                      name="gender"
                      value={"female"}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <span className="checkmark"></span>
                  </label>
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
                    value={heading}
                    onchange={(e) => setHeading(e.target.value)}
                  />
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
                      name="city"
                      id="city"
                    >
                      <option value="">Select</option>

                      <option>+{code}</option>
                    </select>
                  </div>
                </label>

                <Input
                  labelValue={"Mobile Number"}
                  labelClass={"font-semibold py-2"}
                  inputType={"tel"}
                  required={"*"}
                  inputName={"number"}
                  inputClass={
                    "p-3 rounded-xl text-[#102127] placeholder-[#102127]"
                  }
                  holder={"E.g 12345678881"}
                  value={mobile_number}
                  onchange={(e) => setNumber(e.target.value)}
                />
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
            {correct ? (
              <Link
                onClick={handleEscortOne}
                to={"/additional-details"}
                className="text-center block hover:bg-[#ffdc4e] duration-500  bg-[#E9CB50] w-[100%] py-3 md:py-4 md:w-[120px] font-semibold mt-12 rounded-xl"
              >
                Next
              </Link>
            ) : (
              <button
                disabled
                className="text-center block hover:bg-[#ffdc4e] duration-500  bg-[#E9CB50] w-[100%] py-3 md:py-4 md:w-[120px] font-semibold mt-12 rounded-xl"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EscortDetailsOne;
