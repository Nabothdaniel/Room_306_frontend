import React, { useState } from "react";
import Close from "../images/close-icon.svg";
import { Link } from "react-router-dom";
import AdminSupport from "./AdminSupport";

const AdminModel = ({ handleAdmin, adminClass }) => {
  const [openSupport, setOpenSupport] = useState(false);

  const handleSupport = () => {
    setOpenSupport(!openSupport);
  };
  return (
    <>
      <div
        className={`bg-black/40 duration-500 ${adminClass} fixed top-0 z-[999999] left-0 w-[100%] h-screen flex justify-center items-center`}
      >
        <div className="bg-white flex flex-col  w-[380px] z-[9999999] rounded-2xl mx-auto ">
          <div className="border-b-2 p-4 flex justify-between items-center font-semibold px-5 text-[20px] border-[#F1D6D6]">
            <h3>Contact Admin via Email</h3>
            <img
              onClick={handleAdmin}
              className="size-3 cursor-pointer"
              src={Close}
              alt=""
            />
          </div>
          <div className="py-9 px-8">
            <button
              onClick={() => {
                handleAdmin()
                handleSupport()
              }}
              className="bg-[#E9CB50] w-[303px] text-[14px] h-[48px] font-semibold rounded-xl"
            >
              Email Admin
            </button>
            <Link
              onClick={handleAdmin}
              to={"/faqs"}
              className="bg-[#876F0E] block text-center w-[303px] text-[14px] py-[15px] text-white mt-3 font-semibold rounded-xl"
            >
              Go to FAQs
            </Link>
          </div>
        </div>
      </div>
      <AdminSupport
        supportClass={`${
          openSupport ? "translate-x-0" : "-translate-x-[120vw]"
        }`}
        handleSupport={handleSupport}
      />
    </>
  );
};

export default AdminModel;
