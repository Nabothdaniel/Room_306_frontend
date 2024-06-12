import React, { useEffect, useState } from "react";
import Input from "../components/Input";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Upload from "../images/Upload.svg";
import axios from "axios";
import { useGetCountryQuery } from "../redux/CountryApi";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";
import { setCredentials } from "../redux/UtilSlice";
import { useDispatch } from "react-redux";
import Footer from "../components/Footer";
import toast, { LoaderIcon } from "react-hot-toast";

const ClientDetails = () => {
  const { data, isLoading } = useGetCountryQuery();
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [error, setError] = useState({});
  const [code, setCode] = useState("");
  const [getState, setGetState] = useState([]);
  const [getCities, setGetCities] = useState([]);
  const [apiError, setApiError] = useState("");
  const dispatch = useDispatch();
  const [load, setLoad] = useState(false);

  const [Data, setData] = useState({
    country: "",
    state: "",
    city: "",
    user_type: "client",
    display_name: "",
    mobile_number: "",
    email: "",
    password: "",
    username: "",
    country_code: "",
  });

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validateData = (data) => {
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
    if (!data.city) {
      errors.cities = "City is required";
    }
    if (!data.image) {
      errors.image = "Please upload your profile picture!";
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
    if (data.password !== confirmPwd) {
      errors.conpwd = "Password doesn't match";
    }

    return errors;
  };

  useEffect(() => {
    const validationErrors = validateData(Data);
    setError(validationErrors);
  }, [Data, confirmPwd]);

  const handleChange = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };

  if (isLoading) {
    return <Loading />;
  }

  const formData = new FormData();
  formData.append("username", Data.username);
  formData.append("mobile_number", Data.mobile_number);
  formData.append("image", image);
  formData.append("country", Data.country);
  formData.append("user_type", "client");
  formData.append("city", Data.city);
  formData.append("email", Data.email);
  formData.append("password", Data.password);
  formData.append("display_name", Data.display_name);
  formData.append("state", Data.state);
  formData.append("country_code", Data.country_code);

  let states;
  const handleCountry = (e) => {
    states = data.filter((state) => state.name === e.target.value);
    setCode(states[0]?.phone_code);

    states = states?.map((item) => item.states);

    states.sort();
    setGetState(states[0]);
  };

  const handleState = (e) => {
    let city = getState.filter((item) => item.name === e.target.value);
    city = city?.map((item) => item);

    setGetCities(city);
  };

  let newCities = [];

  getCities.forEach((childArray) => {
    childArray.cities.forEach((item) => {
      newCities.push(item);
    });
  });

  const handleSubmit = async () => {
    const validationErrors = validateData(Data);
    setError(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setLoad(true);
      try {
        const res = await axios.post(
          "https://backend.theroom306.com/api/auth/register_client/",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setLoad(false);
        dispatch(setCredentials(res.data?.token));

         setData({
           country: "",
           state: "",
           country_code: "",
           city: "",
           image: "",
           display_name: "",
           mobile_number: "",
           email: "",
           password: "",
           username: "",
         });
         setImage("");

        if (res.status == 200) {
          navigate("/");
          window.location.reload(true);
        }
        console.log(res);
        setApiError("");
      } catch (err) {
        setLoad(false);

        if (err.response.status == 500) {
          setApiError("Display name has been taken");
        } else {
          setApiError(err.response?.data?.message);
        }
      }

     
    }
  };

  return (
    <>
      <div className="block md:flex overflow-x-clip max-w-[1740px] mx-auto">
        <SideBar />
        <div className="flex-1 md:w-[80%] pt-6 md:pt-14 px-6 lg:px-10">
          <Navbar
            Headervalue={"Welcome to Room 306"}
            textValue={"Explore our escort at your own pace"}
          />

          <div className="md:py-8 pb-8">
            <h2 className="text-white py-2 md:py-4 md:pb-6 md:text-2xl font-semibold">
              Client Details
            </h2>
            <div className="rounded-xl px-4 md:px-6 lg:px-10 md:pl-12 pt-8 md:py-14 pb-8 bg-[#1E1E1E] ">
              {apiError && (
                <p className=" bg-red-300 mb-3 py-4 px-5 text-center rounded-lg md:text-base text-[14px] font-semibold text-black/80">
                  {apiError}
                </p>
              )}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-y-0 gap-x-12 ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-x-12 gap-x-5 gap-y-4 md:gap-y-8 lg:col-span-2">
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
                      value={Data.username}
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
                      value={Data.email}
                      onchange={handleChange}
                    />
                    <p className="py-1 text-[12px] text-red-500">
                      {error.email}
                    </p>
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
                      value={Data.password}
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
                      value={Data.display_name}
                      onchange={handleChange}
                    />
                    <p className="py-1 text-[12px] text-red-500">
                      {error.name}
                    </p>
                  </div>

                  <label
                    className="text-[#475367] pt-2 flex flex-col"
                    htmlFor="country"
                  >
                    <span className="font-semibold text-white pb-1">
                      Country
                    </span>
                    <div className=" w-[100%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
                      <select
                        className="w-[100%] bg-[#F0F2F5] py-[14px] outline-none"
                        name="country"
                        id="country"
                        value={Data.country}
                        onChange={(e) => {
                          handleCountry(e);
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
                    <p className="py-1 text-[12px] text-red-500">
                      {error.country}
                    </p>
                  </label>

                  <label
                    className="text-[#475367] flex flex-col"
                    htmlFor="state"
                  >
                    <span className="font-semibold text-white pb-1">State</span>
                    <div className=" w-[100%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
                      <select
                        className="w-[100%] bg-[#F0F2F5] py-[14px] outline-none"
                        name="state"
                        id="state"
                        value={Data.state}
                        onChange={(e) => {
                          handleState(e);
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
                    <p className="py-1 text-[12px] text-red-500">
                      {error.state}
                    </p>
                  </label>

                  <label
                    className="text-[#475367] flex flex-col"
                    htmlFor="city"
                  >
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

                        {newCities?.map((item) => {
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
                        value={Data.country_code}
                        onChange={handleChange}
                      >
                        <option value="">Select</option>

                        {code && <option>{`+${code}`}</option>}
                      </select>
                    </div>
                    <p className="py-1 text-[12px] text-red-500">
                      {error.code}
                    </p>
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
                      value={Data.mobile_number}
                      onchange={handleChange}
                    />
                    <p className="py-1 text-[12px] text-red-500">
                      {error.number}
                    </p>
                  </div>
                </div>

                <div className="md:mx-auto md:grid md:gap-x-5 md:grid-cols-2 lg:grid-cols-1 lg:gap-y-0 pb-8 lg:max-w-[300px]">
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
                        className="rounded-lg"
                        src={URL.createObjectURL(image)}
                      />
                    ) : (
                      <img className=" " src={Upload} alt="" />
                    )}
                  </div>
                  <div>
                    {error.image && (
                      <p className="text-[#DC3545] text-[14px]">
                        {error.image}
                      </p>
                    )}

                    <p className="text-[#F1D6D6] pt-4 text-[14px]">
                      Our esteemed gentlemen, owing to fraudsters making a
                      runner after service, escorts now demand tribute before
                      service, No Exception.{" "}
                      <span className="pt-1 block">
                        Clients are EXPECTED to provide transportation upfornt,
                        after confirming escort with a video call. Please do not
                        hesitate to report any Fraudulent Escort.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <button
                onClick={handleSubmit}
                className="bg-[#E9CB50] w-[100%] py-3 md:py-4 md:w-[200px] font-semibold mt-5 md:mt-10 rounded-xl"
              >
                {load ? (
                  <LoaderIcon className="mx-auto" />
                ) : (
                  "Sign up as a client"
                )}
              </button>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ClientDetails;
