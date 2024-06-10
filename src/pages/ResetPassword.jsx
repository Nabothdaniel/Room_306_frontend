import React, { useState } from "react";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import Arrow from "../images/arrow-left.svg";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import {
  useNewPasswordMutation,
  useResetPasswordMutation,
} from "../redux/ApiSlice";
import toast from "react-hot-toast";
import Footer from "../components/Footer";

const ResetPassword = () => {
  const [reset] = useResetPasswordMutation();
  const [password] = useNewPasswordMutation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [Data, setData] = useState({
    passcode: "",
    new_password: "",
  });
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNewPassword = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await reset(formData).unwrap();

      if (res.message == "Passcode sent to your email.") {
        toast.success(res.message);
        setOpen(!open);
      }
      setFormData({ email: "" });
    } catch (err) {
      toast.error(err.data.detail);
    }
  };

  const handlePassword = async () => {
    try {
      const res = await password(Data).unwrap();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="block md:flex overflow-x-clip max-w-[1740px] mx-auto">
      <SideBar />

      <div className="flex-1 md:w-[80%] px-4 pt-6 md:pb-20 md:pt-14 md:px-10">
        <Navbar
          Headervalue={"Welcome to Room 306"}
          textValue={"Explore our escort at your own pace"}
        />

        <div className="md:py-8 max-w-[1200px] mx-auto">
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
              Reset Password
            </h2>
            <div className="pt-4">
              <Input
                labelValue={"E-mail Address"}
                labelClass={"font-semibold py-2"}
                inputType={"email"}
                required={""}
                inputName={"email"}
                inputClass={" rounded-xl text-[#102127]  placeholder-[#102127]"}
                holder={"Enter Email"}
                value={formData.email}
                onchange={handleChange}
              />
              <div className="text-white/80 py-8 text-[14px] md:text-base">
                <p>
                  Can you please check your email for your new{" "}
                  <span className="font-semibold">Temporary password</span>
                </p>
                <p>
                  (Remember the temporary password expires in 60mins if not
                  used)
                </p>
                <p>
                  Once you have seen it, login into your account using your{" "}
                  <span className="font-semibold">Email</span> and the Copied{" "}
                  <span className="font-semibold">Temporary password</span>.
                </p>
              </div>

              <button
                onClick={handleSubmit}
                className="text-center hover:bg-red-500/80 duration-500 md:text-base text-[14px] text-white bg-red-500 w-[100%] sm:w-[250px] py-3 md:py-4  font-semibold mt-4 rounded-xl"
              >
                Get Reset Password Link
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      {/* CHANGE PASSWORD */}

      <div
        className={`bg-black/40 duration-500 ${
          !open ? "translate-x-[120vw]" : "translate-x-0"
        } fixed top-0 z-[999999] flex left-0 w-[100%] h-screen items-center justify-center`}
      >
        <div className="bg-white w-[80%] md:w-[450px] h-fit py-6 px-5 rounded-xl">
          <Input
            labelValue={"Passcode"}
            labelClass={
              "text-[#475367] pb-2 font-semibold md:text-base text-[14px]"
            }
            inputType={"tel"}
            inputName={"passcode"}
            inputClass={
              "bg-[#F0F2F5] px-4 mb-5 rounded-xl placeholder-[#102127] text-[#102127]"
            }
            holder={"Enter Passcode Here"}
            onchange={handleNewPassword}
          />
          <Input
            labelValue={"New Password"}
            labelClass={
              "text-[#475367] pb-2 font-semibold md:text-base text-[14px]"
            }
            inputType={"tel"}
            inputName={"new_password"}
            inputClass={
              "bg-[#F0F2F5] px-4 mb-5 rounded-xl placeholder-[#102127] text-[#102127]"
            }
            holder={"Enter New Password"}
            onchange={handleNewPassword}
          />

          <button
            onClick={handlePassword}
            className="text-center hover:bg-[#ffdc4e] duration-500 bg-[#E9CB50]  w-[100%] py-2 md:py-4  font-semibold mt-4 rounded-xl"
          >
            Submit
          </button>
        </div>
      </div>

      {/* CHANGE PASSWORD */}
    </div>
  );
};

export default ResetPassword;
