import React from "react";
import { IoMdHand } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-[#1F1A1A] py-5 pl-8 pr-5">
      <div className="flex gap-4 items-center">
        <IoMdHand className="md:size-14 size-10 text-red-600" />
        <span className="md:text-2xl text-[17px] text-orange-400 font-semibold">
          Stop Human Trafficking
        </span>
      </div>
      <p className="text-neutral-300 md:text-base text-[13px] py-8">
        This website only allows adult individuals to advertise their time and
        companionship to other adult individuals. We do not provide a booking
        service nor arrange meetings. Any price indicated relates to time only
        and nothing else. Any service offered or whatever else that may occur is
        the choice of consenting adults and a private matter between them. In
        some countries, individuals do not legally have the choice to decide
        this; it is your responsibility to comply with local laws.
      </p>
    </div>
  );
};

export default Footer;
