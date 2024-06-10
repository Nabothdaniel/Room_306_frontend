import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Arrow from "../images/arrow-left.svg";
import { useNavigate } from "react-router-dom";
import Password from "../images/password.png";
import Input from "../components/Input";
import axios from "axios";
import toast from "react-hot-toast";
import Footer from "../components/Footer";

const ChangePassword = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [apiError, setApiError] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [formData, setFormData] = useState({
    new_password: "",
    old_password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateData = (data) => {
    let errors = {};
    if (data.new_password.trim().length < 6) {
      errors.password = "Password must be 6 digit long";
    }
    if (!data.new_password.trim()) {
      errors.password = "New Password is required";
    }
    if (!data.old_password.trim()) {
      errors.old_password = "Old Password is required";
    }
    if (data.new_password !== confirmPwd) {
      errors.conpwd = "Password doesn't match";
    }

    return errors;
  };

  useEffect(() => {
    const validationErrors = validateData(formData);
    setError(validationErrors);
  }, [formData, confirmPwd]);

  const handleSubmit = async () => {
    const validationErrors = validateData(formData);
    setError(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      try {
        const res = await axios.post(
          "https://room35backend.onrender.com/api/auth/change-password/",
          formData,
          {
            headers: {
              Authorization:
                "Bearer " + JSON.parse(localStorage.getItem("token")),
            },
          }
        );
          toast.success(res.data.message)
        if (res.status == 200) {
          navigate("/");
        }

        setFormData({
          new_password: "",
          old_password: "",
        });

        setApiError("");
      } catch (err) {
        setApiError(err.response.data.detail);
      }
    }
  };

  return (
    <div className="block md:flex overflow-x-clip max-w-[1740px] mx-auto">
      <SideBar />

      <div className="flex-1 md:w-[80%] px-4 pt-6 pb-10 md:pb-20 md:pt-14 md:px-10">
        <Navbar
          Headervalue={"Welcome to Room 306"}
          textValue={"Explore our escort at your own pace"}
        />

        <div className="md:py-8">
          <div className=" md:pb-6 py-2 md:pt-8">
            <h2
              onClick={() => navigate(-1)}
              className="text-white font-semibold cursor-pointer flex items-center"
            >
              <img className="size-5 mr-1" src={Arrow} alt="" />
              Back
            </h2>
          </div>
          <div className="bg-[#1E1E1E] py-5 px-6 rounded-xl">
            <h2 className="text-white/90 text-[18px] pb-4 md:text-[20px] font-semibold">
              Change Password
            </h2>
            {apiError && (
              <p className=" bg-red-300 mb-3 py-4 px-5 text-center rounded-lg md:text-[14px] text-[12px] font-semibold text-black/80">
                {apiError}
              </p>
            )}
            <div className="grid md:grid-cols-2">
              <div>
                <div>
                  <Input
                    labelValue={"Old / Temporary Password"}
                    labelClass={"font-semibold md:text-base text-[14px] py-2"}
                    inputType={"password"}
                    required={"*"}
                    inputName={"old_password"}
                    inputClass={
                      " rounded-xl text-[#102127] placeholder-[#102127]"
                    }
                    holder={"Enter Password"}
                    value={formData.old_password}
                    onchange={handleChange}
                  />
                  <p className="py-1 text-[12px] text-red-500">
                    {error.old_password}
                  </p>
                </div>
                <div>
                  <Input
                    labelValue={"New Password"}
                    labelClass={"font-semibold py-2"}
                    inputType={"password"}
                    required={"*"}
                    inputName={"new_password"}
                    inputClass={
                      " rounded-xl text-[#102127] md:text-base text-[14px] placeholder-[#102127]"
                    }
                    holder={"Enter Password"}
                    value={formData.new_password}
                    onchange={handleChange}
                  />
                  <p className="py-1 text-[12px] text-red-500">
                    {error.password}
                  </p>
                </div>
                <div>
                  <Input
                    labelValue={"Confirm Password"}
                    labelClass={"font-semibold py-2"}
                    inputType={"password"}
                    required={"*"}
                    inputName={"confirmPwd"}
                    inputClass={
                      " rounded-xl text-[#102127] md:text-base text-[14px] placeholder-[#102127]"
                    }
                    holder={"Enter Password"}
                    value={confirmPwd}
                    onchange={(e) => setConfirmPwd(e.target.value)}
                  />
                  <p className="py-1 text-[12px] text-red-500">
                    {error.conpwd}
                  </p>
                </div>
                <button
                  onClick={handleSubmit}
                  className="bg-[#E9CB50] hover:bg-yellow-400 mt-8 w-[100%] py-3 md:py-4 md:w-[135px] font-medium rounded-xl"
                >
                  Save Changes
                </button>
              </div>
              <img
                className="md:h-[600px] object-contain pt-10 md:pt-0"
                src={Password}
                alt=""
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ChangePassword;
