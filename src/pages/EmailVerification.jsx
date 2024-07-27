import React, { useState } from "react";
import Input from "../components/Input";
import { useEmailMutation } from "../redux/ApiSlice";
import toast, { LoaderIcon } from "react-hot-toast";

const EmailVerification = ({ emailClass }) => {
  const [passcode] = useEmailMutation();
  const [code, setCode] = useState("");
  const [load, setLoad] = useState(false);

  const handleSubmit = async () => {
    if (code.trim()) {
      setLoad(true);
      try {
        const res = await passcode({ passcode: code.trim() });
        setLoad(false);

        if (res?.error?.data?.detail) {
          toast.error(res.error.data.detail);
        } else {
          toast.success(res.data.message);
          window.location.reload(true);
        }
      } catch (err) {
        setLoad(false);
        toast.error(err?.data?.detail);
      }
    }
  };

  return (
    <div
      className={`bg-black/40 duration-500 ${emailClass} fixed top-0 z-[999999] flex left-0 w-[100%] h-screen  justify-center`}
    >
      <div className="bg-white w-[80%] md:w-[400px] h-fit mt-28 py-4 rounded-xl">
        <div className="flex items-center  border-b-2 px-6 pb-2 border-[#F1D6D6]">
          <h2 className="md:text-2xl font-semibold text-xl">Confirm E-mail</h2>
        </div>
        <div className="px-4 py-6">
          <Input
            labelValue={"PassCode"}
            inputType={"text"}
            labelClass={"font-semibold w-full pr-2 text-black py-2"}
            required={""}
            inputName={"passcode"}
            inputClass={
              " rounded-xl bg-[#F0F2F5] w-full text-[#102127] pr-2 placeholder-[#102127]"
            }
            holder={"Passcode"}
            value={code}
            onchange={(e) => setCode(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="text-center hover:bg-[#ffdc4e] duration-500  bg-[#E9CB50] w-[100%] py-3 md:py-4  font-semibold mt-6 rounded-xl"
          >
            {load ? <LoaderIcon className="mx-auto" /> : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
