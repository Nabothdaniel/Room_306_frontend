import React from "react";

const Notice = ({ noticeClass }) => {
  
  return (
    <div  className={`bg-blue-200/90 ${noticeClass} duration-700 rounded-xl py-4 px-6`}>
      <h2 className="lg:text-3xl md:text-2xl text-[22px] text-center font-semibold">
        TGIF, weekend hustle !!
      </h2>
      <h4 className="md:text-2xl text-[20px] text-center pt-3">
        Boost your profile{" "}
      </h4>
      <p className="font-semibold py-2">
        "Increase your profile's visibility for more attention! Boost it now and
        get noticed. 🚀 #ProfileBoost"
      </p>
      <p className="text-center">
        --------------------------------------------------------------
      </p>
      <h3 className="md:text-3xl text-[22px] font-semibold text-center pt-4">
        BEWARE OF FAKE ADMINS.
      </h3>
      <p className="md:text-[26px] text-[20px] py-2 text-center">
        BELOW IS OUR ONLY WHATSAPP NUMBER :
      </p>
      <p className="text-center text-[20px] md:text-[26px]">+234 7052995373</p>
      <p className="md:text-[26px] text-[22px] py-3 text-center">
        Please contact us on this number only for payment issues, for other
        things use email.
      </p>
      <p className="pt-4 pb-10">
        {" "}
        <span className="font-semibold">
          DO NOT REVEAL YOUR RECEIPT TO ANY FAKE ADMIN,
        </span>{" "}
        they will try to use your revealed receipt to boost a fraud account ,
        thereby flagging your own account as a FRAUD.
      </p>
    </div>
  );
};

export default Notice;
