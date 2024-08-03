import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Input from "../components/Input";
import { useGetCountryQuery } from "../redux/CountryApi";
import TextArea from "../components/TextArea";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";
import toast, { LoaderIcon } from "react-hot-toast";
import { useCreateAdvertMutation } from "../redux/AdvertSlice";
import Footer from "../components/Footer";

const AddAdverts = () => {
  let user = JSON.parse(localStorage.getItem("details"));

  let users = user?.profile;

  const navigate = useNavigate();
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");
  const [getState, setGetState] = useState([]);
  const [getCities, setGetCities] = useState([]);
  const [country, setCountry] = useState("");
  const [State, setState] = useState("");
  const [cities, setCities] = useState("");
  const { data, isLoading } = useGetCountryQuery();
  const [advert] = useCreateAdvertMutation();

  useEffect(() => {
    if (!users) {
      navigate("/");
      return;
    }
  }, []);

  const [Data, setData] = useState({
    i_am: "",
    country: "",
    title: "",
    city: "",
    state: "",
    description: "",
    amount: "",
    start_date: "",
    end_date: "",
    user: users?.id,
  });

  const validateFormData = (data) => {
    let errors = {};
    if (!data.title) {
      errors.title = "Title is required";
    }
    if (!data.description) {
      errors.description = "Description is required";
    }
    if (!data.i_am) {
      errors.i_am = "Field is required";
    }
    if (!data.amount) {
      errors.amount = "Amount is required";
    }
    if (!data.start_date) {
      errors.date = "Date is Required";
    }
    if (!data.end_date) {
      errors.edate = "Date is Required";
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

  let states;
  const handleCountry = (e) => {
    states = data?.filter((state) => state.name === e.target.value);
    states = states?.map((item) => item.states);

    states.sort();
    setGetState(states[0]);
  };

  const handleState = (e) => {
    let city = getState?.filter((item) => item.name === e.target.value);
    city = city.map((item) => item);

    setGetCities(city);
  };

  let newCities = [];

  getCities?.forEach((childArray) => {
    childArray.cities.forEach((item) => {
      newCities.push(item);
    });
  });

  const handleSubmit = async () => {
    const validationErrors = validateFormData(Data);
    setError(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setLoad(true);
      try {
        const res = await advert(Data).unwrap();

        setLoad(false);
        toast.success("Adverts Created Succesfully");
        navigate("/adverts");
        window.location.reload(true);

        setData({
          country: "",
          title: "",
          city: "",
          start_date: "",
          end_date: "",
        });
      } catch (err) {
        setLoad(false);
        console.log(err);
      }
    }
  };

  return (
    <div className="block md:flex overflow-x-clip max-w-[1740px] mx-auto">
      <SideBar />

      <div className="flex-1 md:w-[80%] px-4 pt-6 md:pt-14 md:px-10">
        <Navbar
          Headervalue={"Advert for Quality"}
          textValue={"Advert for best escorts and activities"}
        />

        <div className="md:py-5 pb-9 md:pb-12">
          <div className="md:pb-6 pt-2 md:pt-8">
            <h2 className="text-white py-4 md:text-2xl font-semibold">
              Create Classified Ads
            </h2>
          </div>
          <div className="rounded-xl lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:gap-x-14 md:gap-x-8 gap-x-4 gap-y-3 md:gap-y-6 px-4  md:py-6 md:px-12  bg-[#1E1E1E] ">
            <div>
              <label
                className="text-[#475367] pt-5 flex flex-col"
                htmlFor="looking"
              >
                <span className="font-semibold text-white pb-1">
                  I am <span className="text-[#E9CB50]">*</span>
                </span>
                <div className=" w-[100%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
                  <select
                    className="w-[100%] bg-[#F0F2F5] py-[10px] md:py-[14px] outline-none"
                    name="i_am"
                    id="i_am"
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option>Looking</option>
                    <option>Offering</option>
                  </select>
                </div>
              </label>
              {error.i_am && (
                <p className="py-1 text-[12px] text-red-500">{error.i_am}</p>
              )}
            </div>
            <div>
              <Input
                labelValue={"Start Date"}
                inputType={"date"}
                labelClass={"font-semibold md:pt-4 py-2"}
                required={""}
                inputName={"start_date"}
                onchange={handleChange}
                inputClass={
                  "md:p-3 py-[6px] px-3 rounded-xl text-[#102127] placeholder-[#102127]"
                }
                holder={""}
              />
              {error.date && (
                <p className="py-1 text-[12px] text-red-500">{error.date}</p>
              )}
            </div>
            <div>
              <Input
                labelValue={"End Date"}
                inputType={"date"}
                labelClass={"font-semibold md:pt-4 py-2"}
                required={""}
                inputName={"end_date"}
                onchange={handleChange}
                inputClass={
                  "md:p-3 py-[6px] px-3 rounded-xl text-[#102127] placeholder-[#102127]"
                }
                holder={""}
              />
              {error.edate && (
                <p className="py-1 text-[12px] text-red-500">{error.edate}</p>
              )}
            </div>
            <div>
              <Input
                labelValue={"Title"}
                required={"*"}
                labelClass={"text-white pb-2 font-semibold text-[16px]"}
                inputType={"text"}
                inputName={"title"}
                onchange={handleChange}
                inputClass={
                  "bg-[#F0F2F5] md:py-3 py-[7px] px-4 rounded-xl placeholder-[#102127] text-[#102127]"
                }
                holder={"E.g Room"}
              />
              {error.title && (
                <p className="py-1 text-[12px] text-red-500">{error.title}</p>
              )}
            </div>
            <div>
              <Input
                labelValue={"Amount"}
                required={""}
                labelClass={"text-white pb-2 font-semibold text-[16px]"}
                inputType={"text"}
                inputName={"amount"}
                onchange={handleChange}
                inputClass={
                  "bg-[#F0F2F5] md:py-3 py-[8px] px-4 rounded-xl placeholder-[#102127] text-[#102127]"
                }
                holder={"E.g 100"}
              />
              {error.amount && (
                <p className="py-1 text-[12px] text-red-500">{error.amount}</p>
              )}
            </div>
            <div className="grid md:grid-cols-3  md:col-span-2 gap-x-4 gap-y-4  lg:gap-x-8 md:pt-5">
              <label className="text-[#475367] flex flex-col" htmlFor="country">
                <span className="font-semibold text-white pb-1">Country</span>
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
                {error.country && (
                  <p className="py-1 text-[12px] text-red-500">
                    {error.country}
                  </p>
                )}
              </label>
              <label className="text-[#475367] flex flex-col" htmlFor="state">
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
                {error.state && (
                  <p className="py-1 text-[12px] text-red-500">{error.state}</p>
                )}
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

                    {newCities?.map((item) => {
                      return (
                        <option key={item.id} value={item.name}>
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                {error.city && (
                  <p className="py-1 text-[12px] text-red-500">{error.city}</p>
                )}
              </label>
            </div>
            <div className="md:col-span-2">
              <TextArea
                labelValue={"Description"}
                required={"*"}
                inputName={"description"}
                inputClass={
                  "md:p-3 px-3 py-[7px] rounded-xl text-[#102127] placeholder-[#102127]"
                }
                holder={"Your Description"}
                col={""}
                row={"7"}
                onchange={handleChange}
              />
              {error.description && (
                <p className="py-1 text-[12px] text-red-500">
                  {error.description}
                </p>
              )}
            </div>
            <button
              onClick={handleSubmit}
              className="bg-[#E9CB50] text-[#171717] mb-4 mt-4 text-[14px] h-[48px] w-[120px] font-semibold rounded-xl"
            >
              {load ? <LoaderIcon className="mx-auto" /> : "Create"}
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AddAdverts;
