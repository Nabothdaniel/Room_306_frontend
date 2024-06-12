import React, { useState } from "react";
import Close from "../images/close-icon.svg";
import TextArea from "./TextArea";
import Input from "./Input";
import axios from "axios";
import toast, { LoaderIcon } from "react-hot-toast";

const ReportModel = ({ handleReport, reportClass, user }) => {
  let useD = JSON.parse(localStorage.getItem("details"));
  let users = useD?.profile;

  const [image, setImage] = useState("");
  const [load, setLoad] = useState(false);
  const [formData, setFormData] = useState({
    description: "",
    detail: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (users) {
      setLoad(true);
      try {
        const res = await axios.post(
          `https://backend.theroom306.com/api/blacklisted/create/`,
          {
            ...formData,
            images: image,
            reporter: users.id,
            reported_user: user?.profile.id,
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setLoad(false);
        handleReport();
        setFormData({
          description: "",
          detail: "",
        });
        setImage("");
        toast.success("Report Submitted Successfully");
      } catch (err) {
        setLoad(false);

        console.log(err);
      }
    } else {
      handleReport();

      toast.error("Only Signed user can report a fellow user");
    }
  };

  return (
    <div
      className={`bg-black/40 duration-500 ${reportClass} fixed top-0 z-[999999] flex left-0 w-[100%] h-screen  justify-center`}
    >
      <div className="bg-white w-[80%] md:w-[600px] h-fit mt-28 py-4 rounded-xl">
        <div className="flex items-center justify-between border-b-2 px-6 pb-2 border-[#F1D6D6]">
          <h2 className="md:text-2xl font-semibold text-xl">
            Report <span className="text-red-500">{user.profile.username}</span>
          </h2>
          <img
            onClick={handleReport}
            className="size-4 cursor-pointer"
            src={Close}
            alt=""
          />
        </div>
        <div className="px-7 pb-6">
          <Input
            labelValue={"Crime Committed"}
            inputType={"text"}
            labelClass={"text-[#475367] font-semibold pt-4"}
            required={"*"}
            inputName={"description"}
            inputClass={
              " rounded-xl text-[#102127] bg-[#F0F2F5]  placeholder-[#102127]"
            }
            holder={"Enter Here"}
            onchange={handleChange}
            value={formData.description}
          />
          <TextArea
            labelValue={"Full Details"}
            required={"*"}
            labelClass={"text-[#475367] pt-4"}
            inputName={"detail"}
            inputClass={
              "p-3 rounded-xl text-[#102127] bg-[#F0F2F5] placeholder-[#102127]"
            }
            holder={""}
            col={""}
            row={"5"}
            onchange={handleChange}
            value={formData.detail}
          />
          <input
            onChange={(e) => setImage(e.target.files[0])}
            className="pt-4"
            multiple
            accept="image/*"
            type="file"
          />
        </div>
        <div className="flex justify-end px-7 pb-8">
          <button
            onClick={handleSubmit}
            disabled={load}
            className="bg-red-500 hover:bg-red-500/90 py-2 px-3 rounded-2xl text-white font-semibold"
          >
            {load ? <LoaderIcon className="mx-auto" /> : "Submit Report"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportModel;
