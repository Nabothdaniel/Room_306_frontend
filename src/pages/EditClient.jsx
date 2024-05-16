import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import { useGetCountryQuery } from "../redux/CountryApi";
import Upload from "../images/Upload.svg";
import TextArea from "../components/TextArea";
import Loading from "../components/Loading";
import { useUpdateClientMutation } from "../redux/ApiSlice";
import { useNavigate } from "react-router-dom";

const EditClient = () => {
  let users = JSON.parse(localStorage.getItem("details"));
const navigate = useNavigate()
  const [formData, setformData] = useState({
    country: users.country,
    state: users.state,
    city: users.city,
    user_type: "client",
    display_name: users.display_name,
    mobile_number: users.mobile_number,
    email: users.email,
    username: users.username,
    country_code: "",
    image: null,
  });

  const [success, setSuccess] = useState('')

  const [update] = useUpdateClientMutation();

  const [getState, setGetState] = useState([]);
  const [getCities, setGetCities] = useState([]);
  const { data, isLoading } = useGetCountryQuery();
  const [image, setImage] = useState("");

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  let handleCountry = () => {};
  let handleState = () => {};

  useEffect(() => {
    handleCountry();
    handleState();
  }, [formData, data]);

  if (isLoading) {
    return <Loading />;
  }

  let states;
   handleCountry = (e) => {
    states = data.filter((state) => state.name === formData.country);

    states = states.map((item) => item.states);

    states.sort();
    setGetState(states[0]);
  };

   handleState = (e) => {
    let city = getState.filter((item) => item.name === formData.state);
    city = city.map((item) => item);

    setGetCities(city);
  };

  let newCities = [];

  getCities.forEach((childArray) => {
    childArray.cities.forEach((item) => {
      newCities.push(item);
    });
  });

  const handleEdit = async () => {
    try {
      const res = await update(formData).unwrap();
     
      if (res.message == "Profile updated successfully") {
        navigate('/profile')
        window.location.reload(true)
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
                labelClass={"font-semibold py-2"}
                inputType={"email"}
                required={""}
                inputName={"email"}
                inputClass={" rounded-xl text-[#102127]  placeholder-[#102127]"}
                holder={"Enter Email"}
                value={formData.email}
                onchange={handleChange}
              />
              <Input
                labelValue={"Date of Birth"}
                inputType={"date"}
                labelClass={"font-semibold py-2"}
                required={""}
                inputName={"dob"}
                inputClass={" rounded-xl text-[#102127] placeholder-[#102127]"}
                holder={""}
                value={formData.dob}
                onchange={handleChange}
              />
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
              <div className="grid md:grid-cols-2 gap-y-3 gap-x-3 pt-5">
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
                </label>
                <label className="text-[#475367]  flex flex-col" htmlFor="state">
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
                </label>
                <label className="text-[#475367] flex flex-col" htmlFor="city">
                  <span className="font-semibold text-white pb-1">City</span>
                  <div className=" w-[100%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
                    <select
                      className="w-[100%] bg-[#F0F2F5] py-[14px] outline-none"
                      name="city"
                      id="city"
                      value={formData.city}
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
      </div>
    </div>
  );
};

export default EditClient;
