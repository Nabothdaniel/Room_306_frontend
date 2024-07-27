import React, { useEffect, useState } from "react";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import SideBar from "../../components/SideBar";
import Navbar from "../../components/Navbar";
import { details } from "../../redux/UtilSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const EscortDetailsTwo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    education: "",
    occupation: "",
    about: "",
    ethnicity: "",
    bust_size: "",
    height: "",
    weight: "",
    build: "",
    looks: "",
    sexual_orientation: "",
    language_spoken: "",
    language_influence: "",
  });
  const [is_smoker, setSmoker] = useState(false);
  const [available_incall, setIncall] = useState(false);
  const [available_outcall, setOutcall] = useState(false);
  const [error, setError] = useState("");

  const validateFormData = (data) => {
    let errors = {};
    if (!data.education.trim()) {
      errors.education = "Education is required";
    }
    if (!data.occupation.trim()) {
      errors.occupation = "Occupation is required";
    }
    if (!data.about.trim()) {
      errors.about = "About is required";
    }
    if (!data.ethnicity) {
      errors.ethnicity = "Ethnicity is required";
    }
    if (!data.bust_size) {
      errors.bust_size = "Bust Size is required";
    }
    if (!data.height) {
      errors.height = "Height is required";
    }
    if (!data.weight) {
      errors.weight = "Weight is required";
    }
    if (!data.build) {
      errors.build = "Build is required";
    }
    if (!data.looks) {
      errors.looks = "Looks is required";
    }
    if (!data.language_spoken) {
      errors.language = "Your Language name is required";
    }
    if (!data.sexual_orientation) {
      errors.sexual = "Sexual Orientation is required";
    }
    if (!data.language_influence) {
      errors.level = "Language Level is required";
    }
    if (!available_incall) {
      errors.call = "In Call is required";
    }
    if (!available_outcall) {
      errors.outcall = "Outcall is required";
    }

    if (is_smoker == "") {
      errors.smoker = "This field is required";
    }

    return errors;
  };

  useEffect(() => {
    const validationErrors = validateFormData(formData);
    setError(validationErrors);
  }, [formData, available_incall, available_outcall, is_smoker]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEscortTwo = () => {
    const validationErrors = validateFormData(formData);
    setError(validationErrors);

    if (Object.keys(validationErrors).length == 0) {
      dispatch(
        details({
          ...formData,
          available_incall,
          available_outcall,
          is_smoker,
        })
      );

      navigate("/rates");

      setFormData({
        education: "",
        occupation: "",
        about: "",
        ethnicity: "",
        bust_size: "",
        height: "",
        weight: "",
        build: "",
        looks: "",
        sexual_orientation: "",
        language_spoken: "",
        language_influence: "",
      });
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

        <div className="md:py-8 pb-8">
          <div className="flex justify-between items-center md:pb-6 py-2 md:pt-8">
            <h2 className="text-white md:py-4  md:text-2xl font-semibold">
              Escort Details
            </h2>

            <p className="text-white md:text-4xl text-3xl font-semibold">
              <span className="text-[#B29A9A] md:text-2xl text-xl">
                Step <span>2/</span>
              </span>
              5
            </p>
          </div>
          <div className="rounded-xl md:px-6 px-4 lg:px-10 md:pl-12 pt-6 md:py-14 pb-8 bg-[#1E1E1E] ">
            <h3 className="text-xl pb-8 font-semibold text-white">
              Additional Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-x-16 md:gap-x-6 gap-y-4 md:gap-y-8">
              <div>
                <Input
                  labelValue={"Education"}
                  inputType={"text"}
                  required={"*"}
                  inputName={"education"}
                  inputClass={
                    " rounded-xl text-[#102127] placeholder-[#102127]"
                  }
                  holder={"Select"}
                  onchange={handleChange}
                />
                <p className="py-1 text-[12px] text-red-500">
                  {error.education}
                </p>
              </div>
              <div>
                <Input
                  labelValue={"Occupation"}
                  inputType={"text"}
                  required={"*"}
                  inputName={"occupation"}
                  inputClass={
                    " rounded-xl text-[#102127]  placeholder-[#102127]"
                  }
                  holder={"Enter Here"}
                  onchange={handleChange}
                />
                <p className="py-1 text-[12px] text-red-500">
                  {error.occupation}
                </p>
              </div>
              <div className="md:col-span-2">
                <TextArea
                  labelValue={"About"}
                  required={"*"}
                  inputName={"about"}
                  inputClass={
                    "p-3 rounded-xl text-[#102127] placeholder-[#102127]"
                  }
                  holder={"Enter Here"}
                  col={""}
                  row={"6"}
                  onchange={handleChange}
                />
                <p className="py-1 text-[12px] text-red-500">{error.about}</p>
              </div>

              <h3 className="text-xl font-semibold  text-white pt-3">
                Body Details <span className="text-[#E9CB50]">*</span>
              </h3>
              <div className="grid md:col-span-2 lg:gap-x-16 md:gap-x-6 gap-y-4 md:gap-y-8 md:grid-cols-2">
                <label className="text-white flex flex-col" htmlFor="ethnicity">
                  <span className="font-semibold pb-1 ">
                    Ethnicity<span className="text-[#E9CB50]">*</span>
                  </span>
                  <div className=" w-[100%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
                    <select
                      className="w-[100%] bg-[#F0F2F5] py-[10px] md:py-[14px] outline-none"
                      name="ethnicity"
                      id="ethnicity"
                      onChange={handleChange}
                    >
                      <option value="">Your Ethnicity</option>
                      <option>All</option>
                      <option>Asian</option>
                      <option>Black</option>
                      <option>Indian</option>
                      <option>Latino</option>
                      <option>Mid Eastern</option>
                      <option>Mix Race</option>
                      <option>Other</option>
                      <option>Others</option>
                      <option>White</option>
                    </select>
                  </div>
                  <p className="py-1 text-[12px] text-red-500">
                    {error.ethnicity}
                  </p>
                </label>
                <label className="text-white flex flex-col" htmlFor="bust_size">
                  <span className="font-semibold pb-1">
                    Bust Size<span className="text-[#E9CB50]">*</span>
                  </span>
                  <div className=" w-[100%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
                    <select
                      className="w-[100%] bg-[#F0F2F5] py-[10px] md:py-[14px] outline-none"
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
                  <p className="py-1 text-[12px] text-red-500">
                    {error.bust_size}
                  </p>
                </label>
                <label className="text-white flex flex-col" htmlFor="height">
                  <span className="font-semibold pb-1">
                    Height<span className="text-[#E9CB50]">*</span>
                  </span>
                  <div className=" w-[100%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
                    <select
                      className="w-[100%] bg-[#F0F2F5] py-[10px] md:py-[14px] outline-none"
                      name="height"
                      id="height"
                      onChange={handleChange}
                    >
                      <option value="">Choose here</option>
                      <option>Average</option>
                      <option>Not too Tall</option>
                      <option>Portable</option>
                      <option>Tall</option>
                      <option>Very Tall</option>
                    </select>
                  </div>
                  <p className="py-1 text-[12px] text-red-500">
                    {error.height}
                  </p>
                </label>
                <label className="text-white flex flex-col" htmlFor="weight">
                  <span className="font-semibold pb-1">
                    Weight<span className="text-[#E9CB50]">*</span>
                  </span>
                  <div className=" w-[100%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
                    <select
                      className="w-[100%] bg-[#F0F2F5] py-[10px] md:py-[14px] outline-none"
                      name="weight"
                      id="weight"
                      onChange={handleChange}
                    >
                      <option value="">Choose here</option>
                      <option>Average</option>
                      <option>BBW</option>
                      <option>Fluffy Light</option>
                      <option>HEAVY</option>
                      <option>Heavy Duty</option>
                      <option>Light</option>
                      <option>SSBBW</option>
                    </select>
                  </div>
                  <p className="py-1 text-[12px] text-red-500">
                    {error.weight}
                  </p>
                </label>
                <label className="text-white flex flex-col" htmlFor="build">
                  <span className="font-semibold pb-1">
                    Build<span className="text-[#E9CB50]">*</span>
                  </span>
                  <div className=" w-[100%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
                    <select
                      className="w-[100%] bg-[#F0F2F5] py-[10px] md:py-[14px] outline-none"
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
                  <p className="py-1 text-[12px] text-red-500">{error.build}</p>
                </label>
                <label className="text-white flex flex-col" htmlFor="looks">
                  <span className="font-semibold pb-1">
                    Looks<span className="text-[#E9CB50]">*</span>
                  </span>
                  <div className=" w-[100%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
                    <select
                      className="w-[100%] bg-[#F0F2F5] py-[10px] md:py-[14px] outline-none"
                      name="looks"
                      id="looks"
                      onChange={handleChange}
                    >
                      <option value="">Choose here</option>
                      <option>All</option>
                      <option>Average</option>console.log(available_incall);
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
                  <p className="py-1 text-[12px] text-red-500">{error.looks}</p>
                </label>
                <div className=" ">
                  <h4 className="text-white font-semibold pb-3">
                    Smoker<span className="text-[#E9CB50]">*</span>
                  </h4>
                  <div className="flex md:w-[50%]">
                    <label className="container text-white ">
                      Yes
                      <input
                        value={"True"}
                        onChange={(e) => setSmoker(e.target.value)}
                        type="radio"
                        name="smoker"
                      />
                      <span className="checkmark"></span>
                    </label>

                    <label className="container text-white">
                      No
                      <input
                        value={"False"}
                        onChange={(e) => setSmoker(e.target.value)}
                        type="radio"
                        name="smoker"
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <p className="py-1 text-[12px] text-red-500">
                    {error.smoker}
                  </p>
                </div>
                <label
                  className="text-white flex flex-col"
                  htmlFor="sexual_orientation"
                >
                  <span className="font-semibold pb-1">
                    Sexual Orientation<span className="text-[#E9CB50]">*</span>
                  </span>
                  <div className=" w-[100%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
                    <select
                      className="w-[100%] bg-[#F0F2F5] py-[10px] md:py-[14px] outline-none"
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
                  <p className="py-1 text-[12px] text-red-500">
                    {error.sexual}
                  </p>
                </label>
                <div className=" ">
                  <h4 className="text-white font-semibold pb-3">
                    Availability for Incall
                    <span className="text-[#E9CB50]">*</span>
                  </h4>
                  <div className="flex md:w-[50%]">
                    <label className="container text-white ">
                      Yes
                      <input
                        onChange={(e) => setIncall(true)}
                        value={true}
                        type="radio"
                        name="incall"
                      />
                      <span className="checkmark"></span>
                    </label>

                    <label className="container text-white">
                      No
                      <input
                        onChange={(e) => setIncall(false)}
                        value={false}
                        type="radio"
                        name="incall"
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <p className="py-1 text-[12px] text-red-500">{error.call}</p>
                </div>
                <div className=" ">
                  <h4 className="text-white font-semibold pb-3">
                    Availability for Outcall
                    <span className="text-[#E9CB50]">*</span>
                  </h4>
                  <div className="flex md:w-[50%]">
                    <label className="container text-white ">
                      Yes
                      <input
                        onChange={(e) => setOutcall(true)}
                        value={true}
                        type="radio"
                        name="outcall"
                      />
                      <span className="checkmark"></span>
                    </label>

                    <label className="container text-white">
                      No
                      <input
                        onChange={(e) => setOutcall(false)}
                        value={false}
                        type="radio"
                        name="outcall"
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <p className="py-1 text-[12px] text-red-500">
                    {error.outcall}
                  </p>
                </div>
                <div>
                  <Input
                    labelValue={"Language Spoken"}
                    required={"*"}
                    labelClass={"text-white pb-2 font-semibold text-[16px]"}
                    inputType={"text"}
                    inputName={"language_spoken"}
                    inputClass={
                      "bg-[#F0F2F5] py-3 px-4 rounded-xl placeholder-[#102127] text-[#102127]"
                    }
                    holder={"Enter Here"}
                    onchange={handleChange}
                  />
                  <p className="py-1 text-[12px] text-red-500">
                    {error.language}
                  </p>
                </div>
                <label
                  className="text-white flex pt-7 flex-col"
                  htmlFor="language_influence"
                >
                  <span className="font-semibold pb-1">
                    {/* <span className="text-[#E9CB50]">*</span> */}
                  </span>
                  <div className=" w-[100%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
                    <select
                      className="w-[100%] bg-[#F0F2F5] py-[10px] md:py-[14px] outline-none"
                      name="language_influence"
                      id="language_influence"
                      onChange={handleChange}
                    >
                      <option value="">Select Level</option>
                      <option>Minimal</option>
                      <option>Conversational</option>
                      <option>Fluent</option>
                    </select>
                  </div>
                  <p className="py-1 text-[12px] text-red-500">{error.level}</p>
                </label>
              </div>
            </div>

            <button
              onClick={handleEscortTwo}
              className="bg-[#E9CB50] block text-center w-[100%] py-3 md:py-4 md:w-[120px] font-semibold mt-12 rounded-xl"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EscortDetailsTwo;
