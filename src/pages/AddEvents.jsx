import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import TextArea from "../components/TextArea";
import Input from "../components/Input";
import Upload from "../images/Upload.svg";
import Loading from "../components/Loading";
import { useGetCountryQuery } from "../redux/CountryApi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { LoaderIcon } from "react-hot-toast";
import Footer from "../components/Footer";

const AddEvents = () => {
  let users = JSON.parse(localStorage.getItem("details"));
  let user = users?.profile;

  const events = JSON.parse(localStorage.getItem("events"));

  const { data, isLoading } = useGetCountryQuery();
  const [image, setImage] = useState();
  const [getState, setGetState] = useState([]);
  const [getCities, setGetCities] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [Data, setData] = useState({
    country: events?.country || "",
    state: events?.state || "",
    city: events?.city || "",
    start_date: events?.start_date || "",
    available_ticket: events?.available_ticket || "",
    end_date: events?.end_date || "",
    start_time: events?.start_time || "",
    end_time: events?.end_time || "",
    title: events?.title || "",
    description: events?.description || "",
  });

  const validateData = (data) => {
    let errors = {};

    if (!data.title) {
      errors.title = "Event Title is required";
    }

    if (!data.description) {
      errors.description = "Event Description is required";
    }
    if (!data.end_date) {
      errors.end_date = "End Date is required";
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
    if (!events) {
      if (!image) {
        errors.image = "Please upload Event Cover picture!";
      }
    }

    if (!data.start_date) {
      errors.start_date = "Start Date is required";
    }

    if (!data.end_time) {
      errors.end_time = "End Time is required";
    }

    if (!data.start_time) {
      errors.start_time = "Start Time is required";
    }
    if (!data.available_ticket) {
      errors.ticket = "Available Ticket is required";
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

  const formData = new FormData();
  formData.append("title", Data.title);
  formData.append("start_date", Data.start_date);

  if (image) {
    formData.append("cover_image", image);
  }

  formData.append("country", Data.country);
  formData.append("user", user.id);
  formData.append("city", Data.city);
  formData.append("end_date", Data.end_date);
  formData.append("end_time", Data.end_time);
  formData.append("start_time", Data.start_time);
  formData.append("state", Data.state);
  formData.append("description", Data.description);
  formData.append("available_ticket", Data.available_ticket);

  if (isLoading) {
    return <Loading />;
  }

  let states;
  const handleCountry = (e) => {
    states = data.filter((state) => state.name === e.target.value);

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

  const handleSubmit = async () => {
    const validationErrors = validateData(Data);
    setError(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      if (!events) {
        try {
          const res = await axios.post(
            "https://backend.theroom306.com/api/events/create/",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
                Authorization:
                  "Bearer " + JSON.parse(localStorage.getItem("token")),
              },
            }
          );

          console.log(res);
          toast.success("Event Created Succesfully");
          setData({
            country: "",
            state: "",
            city: "",
            start_date: "",
            available_ticket: "",
            end_date: "",
            start_time: "",
            end_time: "",
            title: "",
            description: "",
          });
          setImage("");
          navigate("/events");
          window.location.reload(true);
        } catch (err) {
          console.log(err);
        }
      }

      if (events) {
        try {
          const res = await axios.put(
            `https://backend.theroom306.com/api/events/${events.id}/update/`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
                Authorization:
                  "Bearer " + JSON.parse(localStorage.getItem("token")),
              },
            }
          );
          localStorage.removeItem("events");
          console.log(res);
          toast.success("Event Updated Succesfully");
          setData({
            country: "",
            state: "",
            city: "",
            start_date: "",
            available_ticket: "",
            end_date: "",
            start_time: "",
            end_time: "",
            title: "",
            description: "",
          });
          setImage("");
          navigate("/events");
          window.location.reload(true);
        } catch (err) {
          console.log(err);
        }
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
              Add New Events
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
                        {getState.map((item, index) => {
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
                <div className="w-full">
                  <Input
                    labelValue={"End Date"}
                    inputType={"date"}
                    labelClass={"font-semibold md:text-base text-[14px] py-2"}
                    required={""}
                    inputName={"end_date"}
                    inputClass={
                      " rounded-xl text-[#102127] placeholder-[#102127]"
                    }
                    holder={""}
                    value={Data.end_date}
                    onchange={handleChange}
                  />
                  <p className="py-1 text-[12px] text-red-500">
                    {error.end_date}
                  </p>
                </div>
                <div className="w-full">
                  <Input
                    labelValue={"Start Time"}
                    inputType={"time"}
                    labelClass={"font-semibold md:text-base text-[14px] py-2"}
                    required={""}
                    inputName={"start_time"}
                    inputClass={
                      " rounded-xl text-[#102127] placeholder-[#102127]"
                    }
                    holder={""}
                    value={Data.start_time}
                    onchange={handleChange}
                  />
                  <p className="py-1 text-[12px] text-red-500">
                    {error.start_time}
                  </p>
                </div>
                <div className="w-full">
                  <Input
                    labelValue={"End Time"}
                    inputType={"time"}
                    labelClass={"font-semibold md:text-base text-[14px] py-2"}
                    required={""}
                    inputName={"end_time"}
                    inputClass={
                      " rounded-xl text-[#102127] placeholder-[#102127]"
                    }
                    holder={""}
                    value={Data.end_time}
                    onchange={handleChange}
                  />
                  <p className="py-1 text-[12px] text-red-500">
                    {error.end_time}
                  </p>
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
                    holder={"Enter Event Title"}
                    value={Data.title}
                    onchange={handleChange}
                  />
                  <p className="py-1 text-[12px] text-red-500">{error.title}</p>
                </div>
                <div>
                  <Input
                    labelValue={"Available Ticket"}
                    labelClass={"font-semibold md:text-base text-[14px] py-2"}
                    inputType={"text"}
                    required={"*"}
                    inputName={"available_ticket"}
                    inputClass={
                      " rounded-xl text-[#102127] placeholder-[#102127]"
                    }
                    holder={"Enter Available Ticket"}
                    value={Data.available_ticket}
                    onchange={handleChange}
                  />
                  <p className="py-1 text-[12px] text-red-500">
                    {error.ticket}
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
                  {events && !image ? (
                    <span>
                      <img
                        className="rounded-xl "
                        src={`https://backend.theroom306.com${events.cover_image}`}
                        alt=""
                      />
                    </span>
                  ) : (
                    <span>
                      {image ? (
                        <img
                          className="rounded-lg max-h-[500px]"
                          src={URL.createObjectURL(image)}
                        />
                      ) : (
                        <img className="rounded-xl " src={Upload} alt="" />
                      )}
                    </span>
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
                {isLoading ? <LoaderIcon /> : "Submit"}
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AddEvents;
