import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import { useGetCountryQuery } from "../redux/CountryApi";
import Upload from "../images/Upload.svg";
import Loading from "../components/Loading";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { LoaderIcon } from "react-hot-toast";
import Footer from "../components/Footer";

const AddTours = () => {
  const navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("details"));
  let users = user?.profile;

  const [getState, setGetState] = useState([]);
  const [getCities, setGetCities] = useState([]);

  useEffect(() => {
    if (users?.user?.user_type !== "escort") {
      navigate("/");
      return;
    }
  }, []);
  const [load, setLoad] = useState(false);
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const [apiError, setApiError] = useState("");
  const { data, isLoading } = useGetCountryQuery();

  const [Data, setData] = useState({
    country: "",
    title: "",
    city: "",
    state: "",
    start_date: "",
    end_date: "",
    user: users?.id,
  });

  const validateFormData = (data) => {
    let errors = {};
    if (!data.title) {
      errors.title = "Title is required";
    }

    if (!data.start_date) {
      errors.date = "Date is Required";
    }
    if (!data.country) {
      errors.country = "Country is required";
    }
    if (!data.state) {
      errors.state = "State is required";
    }
    if (!data.city) {
      errors.city = "City is required";
    }
    if (!data.end_date) {
      errors.end_date = "End Date is required";
    }
    if (!image) {
      errors.image = "An Image is required";
    }
    return errors;
  };

  useEffect(() => {
    const validationErrors = validateFormData(Data);
    setError(validationErrors);
  }, [Data]);

  const handleChange = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };

  if (isLoading) {
    return <Loading />;
  }

  const formData = new FormData();
  formData.append("title", Data.title);
  formData.append("start_date", Data.start_date);
  formData.append("end_date", Data.end_date);
  formData.append("cover_image", image);
  formData.append("country", Data.country);
  formData.append("user", Data.user);
  formData.append("city", Data.city);
  formData.append("state", Data.state);

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

  const handleSubmit = async () => {
    const validationErrors = validateFormData(Data);
    setError(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setLoad(true);
      try {
        const res = await axios.post(
          "https://room35backend.onrender.com/api/tour/create/",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",

              Authorization:
                "Bearer " + JSON.parse(localStorage.getItem("token")),
            },
          }
        );
        setLoad(false);
        toast.success("Tour Created Succesfully");
        navigate("/tours");
        window.location.reload(true);

        setData({
          country: "",
          title: "",
          city: "",
          start_date: "",
        });

        setApiError("");
      } catch (err) {
        setLoad(false);
        console.log(err);
        setApiError(err.response.data.detail);
      }
    }
  };

  return (
    <div className="block md:flex overflow-x-clip max-w-[1740px] mx-auto">
      <SideBar />

      <div className="flex-1 md:w-[80%] px-4 pt-6 md:pt-14 md:px-10">
        <Navbar
          Headervalue={"Best Escort Tours"}
          textValue={"Explore our tours and activities"}
        />

        <div className="md:py-5 pb-9 md:pb-12">
          <div className="md:pb-3 pt-2 md:pt-8">
            <h2 className="text-white py-4 md:text-2xl font-semibold">
              Add New Tour
            </h2>
          </div>

          <div className="bg-[#1E1E1E] rounded-xl">
            {apiError && (
              <p className=" bg-red-300 mb-3 py-4 px-5 text-center rounded-lg md:text-base text-[14px] font-semibold text-black/80">
                {apiError}
              </p>
            )}
            <div className=" lg:px-10 grid lg:grid-cols-2 gap-x-5 gap-y-6 px-4 py-6 md:px-12 md:py-14 ">
              <div>
                <div>
                  <Input
                    labelValue={"Title"}
                    required={"*"}
                    labelClass={"text-white pb-2 font-semibold text-[16px]"}
                    inputType={"text"}
                    inputName={"title"}
                    inputClass={
                      "bg-[#F0F2F5] py-3 px-4 rounded-xl placeholder-[#102127] text-[#102127]"
                    }
                    holder={"Enter Tour Title Here"}
                    value={Data.title}
                    onchange={handleChange}
                  />
                  <p className="py-1 text-[12px] text-red-500">{error.title}</p>
                </div>
                <div>
                  <Input
                    labelValue={"Start Date"}
                    inputType={"date"}
                    labelClass={"font-semibold py-2"}
                    required={"*"}
                    inputName={"start_date"}
                    inputClass={
                      " rounded-xl text-[#102127] placeholder-[#102127]"
                    }
                    holder={""}
                    value={Data.start_date}
                    onchange={handleChange}
                  />
                  <p className="py-1 text-[12px] text-red-500">{error.date}</p>
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
                <div className="grid md:grid-cols-3 gap-y-3 gap-x-3 pt-5">
                  <label
                    className="text-[#475367] flex flex-col"
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
                      {error.city}
                    </p>
                  </label>
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
                      className="rounded-lg"
                      src={URL.createObjectURL(image)}
                    />
                  ) : (
                    <img className=" " src={Upload} alt="" />
                  )}
                </div>
                <p className="py-1 text-[12px] text-red-500">{error.image}</p>
              </div>
              <button
                onClick={handleSubmit}
                disabled={load}
                className="bg-[#E9CB50] hover:bg-yellow-300 text-[#171717] mt-4 text-[14px] h-[48px] w-[120px] font-semibold rounded-xl"
              >
                {load ? <LoaderIcon className="mx-auto" /> : "Submit"}
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AddTours;
