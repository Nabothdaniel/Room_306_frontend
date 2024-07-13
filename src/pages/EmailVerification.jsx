import React from "react";

const EmailVerification = ({ emailClass }) => {
  return (
    <div
      className={`bg-black/40 duration-500 ${emailClass} fixed top-0 z-[999999] flex left-0 w-[100%] h-screen  justify-center`}
    >
      <div className="bg-white w-[80%] md:w-[400px] h-fit mt-28 py-4 rounded-xl">
        <div className="flex items-center  border-b-2 px-6 pb-2 border-[#F1D6D6]">
          <h2 className="md:text-2xl font-semibold text-xl">Leave a Review</h2>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
