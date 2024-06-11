import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import TextArea from "../components/TextArea";
import Input from "../components/Input";
import Upload from "../images/Upload.svg";
import { useGetCountryQuery } from "../redux/CountryApi";
import Loading from "../components/Loading";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const UpdateRoom = () => {
  let useD = JSON.parse(localStorage.getItem("details"));
  let users = useD?.profile;
  const room = JSON.parse(localStorage.getItem("room"));
  const { data, isLoading } = useGetCountryQuery();
  const [image, setImage] = useState();
  const [error, setError] = useState("");
  const [getState, setGetState] = useState([]);
  const [getCities, setGetCities] = useState([]);
  const navigate = useNavigate();

  const [Data, setData] = useState({
    country: room.country,
    state: room.state,
    city: room.city,
    start_date: room.start_date,
    amenities: room.amenities,
    services: room.services,
    contacts: room.contacts,
    title: room.title,
    description: room.description,
    property_type: room.property_type,
    policy: room.policy,
    rate: room.rate,
  });

  if (!room) {
    navigate("/");
    return;
  }

  const validateData = (data) => {
    let errors = {};

    if (!data.title) {
      errors.title = "Event Title is required";
    }

    if (!data.description) {
      errors.description = "Event Description is required";
    }
    if (!data.contacts) {
      errors.contacts = "Contact is required";
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

    if (!data.start_date) {
      errors.start_date = "Start Date is required";
    }

    if (!data.services) {
      errors.services = "Services is required";
    }

    if (!data.property_type) {
      errors.property = "Propert Type is required";
    }
    if (!data.amenities) {
      errors.amenities = "Amenities is required";
    }
    if (!data.policy) {
      errors.policy = "Policy is required";
    }
    if (!data.rate) {
      errors.rate = "Rate is required";
    }

    return errors;
  };

  useEffect(() => {
    const validationErrors = validateData(Data);
    setError(validationErrors);
  }, [Data]);

  const handleChange = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };

  let handleCountry = () => {};
  let handleState = () => {};

  useEffect(() => {
    handleCountry();
    handleState();
  }, [Data, data]);

  const formData = new FormData();
  formData.append("title", Data.title);
  formData.append("start_date", Data.start_date);
  if (image) {
    formData.append("cover_image", image);
  }
  formData.append("country", Data.country);
  formData.append("city", Data.city);
  formData.append("services", Data.services);
  formData.append("contacts", Data.contacts);
  formData.append("policy", Data.policy);
  formData.append("state", Data.state);
  formData.append("description", Data.description);
  formData.append("amenities", Data.amenities);
  formData.append("property_type", Data.property_type);
  formData.append("rate", Data.rate);

  if (isLoading) {
    return <Loading />;
  }

  let states;
  handleCountry = (e) => {
    states = data?.filter((state) => state.name === Data.country);

    states = states?.map((item) => item.states);

    states.sort();
    setGetState(states[0]);
  };

  handleState = (e) => {
    let city = getState?.filter((item) => item.name === Data.state);
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
      try {
        const res = await axios.put(
          `https://room35backend.onrender.com/api/room/${room.id}/update/`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization:
                "Bearer " + JSON.parse(localStorage.getItem("token")),
            },
          }
        );
        localStorage.removeItem("room");
        toast.success("Room Updated Succesfully");
        setData({
          country: "",
          state: "",
          city: "",
          start_date: "",
          amenities: "",
          contacts: "",
          services: "",
          title: "",
          description: "",
          property_type: "",
          policy: "",
          rate: "",
        });
        setImage("");
        navigate("/rooms");
        window.location.reload(true);
      } catch (err) {
        console.log(err);
      }
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
              Update Room
            </h2>
          </div>
          <div className="px-4 py-6 rounded-xl md:px-8 md:py-14 bg-[#1E1E1E]">
            <div className=" grid lg:grid-cols-3 md:gap-x-4 gap-4 md:gap-y-6  ">
              <div className="grid lg:grid-cols-2 gap-x-4 lg:col-span-2">
                <div>
                  <TextArea
                    labelValue={"Description"}
                    labelClass={"md:text-base text-[14px]"}
                    required={"*"}
                    inputName={"description"}
                    inputClass={
                      "p-3 rounded-xl text-[#102127] placeholder-[#102127]"
                    }
                    holder={"In short, tell us about your Event"}
                    col={""}
                    row={"7"}
                    value={Data.description}
                    onchange={handleChange}
                  />
                  <p className="py-1 text-[12px] text-red-500">
                    {error.description}
                  </p>
                </div>
                <div>
                  <label
                    className="text-[#475367] pt-2 flex flex-col"
                    htmlFor="country"
                  >
                    <span className="font-semibold text-white py-1">
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

                  <label
                    className="text-[#475367] flex flex-col"
                    htmlFor="state"
                  >
                    <span className="font-semibold text-white py-1">State</span>
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
                    <span className="font-semibold text-white py-1">City</span>
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
                </div>
                <div>
                  <Input
                    labelValue={"Title"}
                    labelClass={"font-semibold md:text-base text-[14px] py-2"}
                    inputType={"text"}
                    required={"*"}
                    inputName={"title"}
                    inputClass={
                      " rounded-xl text-[#102127] placeholder-[#102127]"
                    }
                    holder={"Enter Here"}
                    value={Data.title}
                    onchange={handleChange}
                  />
                  <p className="py-1 text-[12px] text-red-500">{error.title}</p>
                </div>
                <div className="w-full">
                  <Input
                    labelValue={"Start Date"}
                    inputType={"date"}
                    labelClass={"font-semibold md:text-base text-[14px] py-2"}
                    required={""}
                    inputName={"start_date"}
                    inputClass={
                      " rounded-xl text-[#102127] placeholder-[#102127]"
                    }
                    holder={""}
                    value={Data.start_date}
                    onchange={handleChange}
                  />
                  <p className="py-1 text-[12px] text-red-500">
                    {error.start_date}
                  </p>
                </div>
                <div className="lg:col-span-2">
                  <TextArea
                    labelValue={"Policy"}
                    labelClass={"md:text-base text-[14px]"}
                    required={"*"}
                    inputName={"policy"}
                    inputClass={
                      "p-3 rounded-xl text-[#102127] placeholder-[#102127]"
                    }
                    holder={"Your Policies on the Room..."}
                    col={""}
                    row={"7"}
                    value={Data.policy}
                    onchange={handleChange}
                  />
                  <p className="py-1 text-[12px] text-red-500">
                    {error.policy}
                  </p>
                </div>
                <div>
                  <Input
                    labelValue={"Services"}
                    labelClass={"font-semibold md:text-base text-[14px] py-2"}
                    inputType={"text"}
                    required={"*"}
                    inputName={"services"}
                    inputClass={
                      " rounded-xl text-[#102127] placeholder-[#102127]"
                    }
                    holder={"Enter Here"}
                    value={Data.services}
                    onchange={handleChange}
                  />
                  <p className="py-1 text-[12px] text-red-500">
                    {error.services}
                  </p>
                </div>
                <div>
                  <Input
                    labelValue={"Rate"}
                    labelClass={"font-semibold md:text-base text-[14px] py-2"}
                    inputType={"number"}
                    required={"*"}
                    inputName={"rate"}
                    inputClass={
                      " rounded-xl text-[#102127] placeholder-[#102127]"
                    }
                    holder={"Enter Here"}
                    value={Data.rate}
                    onchange={handleChange}
                  />
                  <p className="py-1 text-[12px] text-red-500">{error.rate}</p>
                </div>
                <div>
                  <Input
                    labelValue={"Contacts"}
                    labelClass={"font-semibold md:text-base text-[14px] py-2"}
                    inputType={"tel"}
                    required={"*"}
                    inputName={"contacts"}
                    inputClass={
                      " rounded-xl text-[#102127] placeholder-[#102127]"
                    }
                    holder={"E.g +2348145267233"}
                    value={Data.contacts}
                    onchange={handleChange}
                  />
                  <p className="py-1 text-[12px] text-red-500">
                    {error.contacts}
                  </p>
                </div>
                <div>
                  <Input
                    labelValue={"Amenities"}
                    labelClass={"font-semibold md:text-base text-[14px] py-2"}
                    inputType={"text"}
                    required={"*"}
                    inputName={"amenities"}
                    inputClass={
                      " rounded-xl text-[#102127] placeholder-[#102127]"
                    }
                    holder={"Enter Here"}
                    value={Data.amenities}
                    onchange={handleChange}
                  />
                  <p className="py-1 text-[12px] text-red-500">
                    {error.amenities}
                  </p>
                </div>
                <div>
                  <Input
                    labelValue={"Property Type"}
                    labelClass={"font-semibold md:text-base text-[14px] py-2"}
                    inputType={"text"}
                    required={"*"}
                    inputName={"property_type"}
                    inputClass={
                      " rounded-xl text-[#102127] placeholder-[#102127]"
                    }
                    holder={"Enter Here"}
                    value={Data.property_type}
                    onchange={handleChange}
                  />
                  <p className="py-1 text-[12px] text-red-500">
                    {error.property}
                  </p>
                </div>
              </div>
              <div>
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
                      className="rounded-lg max-h-[500px]"
                      src={URL.createObjectURL(image)}
                    />
                  ) : (
                    <img
                      className=" "
                      src={`https://room35backend.onrender.com${room.cover_image}`}
                      alt=""
                    />
                  )}
                </div>
                <p className="py-1 text-[12px] text-red-500">{error.image}</p>
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <button
                onClick={handleSubmit}
                className="bg-[#E9CB50] text-[#171717] mt-4 text-[14px] h-[48px] w-[120px] font-semibold rounded-xl"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default UpdateRoom;
