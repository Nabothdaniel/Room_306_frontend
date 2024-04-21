import React from "react";

const EscortBanner = () => {
  return (
    <div className="bg-[#1F1A1A] text-white py-8 md:py-14 rounded-3xl">
      <div className="md:w-[75%] md:px-0 px-8 md:ml-20">
        <h3 className="md:text-3xl text-[20px] font-semibold pb-5">
          Our Esteemed Gentlemen
        </h3>
        <p className="lg:text-base text-[14px] text-wrap ">
          Owing to fraudsters making a runner after service, escorts now demand
          tribute before service. No Exception.{" "}
          <span className="block md:inline-block md:pt-0 pt-2">
            {" "}
            Clients are EXPECTED to provide transportation upfront, after
            conﬁrming escort with a video call. Please do not hesitate to report
            any Fraudulent Escort.{" "}
          </span>
        </p>
      </div>
    </div>
  );
};

export default EscortBanner;
