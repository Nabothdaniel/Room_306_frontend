import React, { useState } from "react";
import { MdOutlineClear } from "react-icons/md";
import { LuFilter } from "react-icons/lu";
import Filter from "../images/Input.svg";
import { useGetCountryQuery } from "../redux/CountryApi";
import Loading from "./Loading";
import { countries } from "./COUNTRY_DATA.JS";

const AllEscortTags = () => {
  const [country, setCountry] = useState("");
  const [sexual_orientation, setSexual] = useState("");
  const [display_name, setName] = useState("");
  const [gender, setGender] = useState("");

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center">
          <label className="bg-[#1F1A1A] w-[300px] mr-3 flex items-center pr-7 justify-between rounded-xl text-[#B29A9A]">
            <select
              className="w-[100%] bg-[#1F1A1A] pl-7 py-4 rounded-xl outline-none"
              name="country"
              id="country"
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="">All Country</option>
              {countries.map((item, index) => {
                return (
                  <option key={index} value={item.text}>
                    {item.text}
                  </option>
                );
              })}
            </select>
          </label>
          <label className="bg-[#1F1A1A] w-[300px] mr-3 flex items-center pr-7 justify-between rounded-xl text-[#B29A9A]">
            <select
              className="w-[100%] bg-[#1F1A1A] pl-7 py-4 rounded-xl outline-none"
              name="sexual_orientation"
              id="sexual_orientation"
              onChange={(e) => setSexual(e.target.value)}
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
          </label>

          <label className="bg-[#1F1A1A] w-[200px] mr-3 flex items-center pr-7 justify-between rounded-xl text-[#B29A9A]">
            <select
              className="w-[100%] bg-[#1F1A1A] pl-7 py-4 rounded-xl outline-none"
              name="gender"
              id="gender"
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Male | Female</option>
              <option>Female</option>
              <option>Male</option>
            </select>
          </label>

          <label className="bg-[#1F1A1A] w-[400px] mr-3 flex md:hidden items-center pr-7 justify-between rounded-xl text-[#B29A9A]">
            <input
              className="w-[100%] placeholder:text-[#B29A9A] bg-[#1F1A1A] pl-7 py-4 rounded-xl outline-none"
              type="text"
              placeholder="Search By Name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>

        <label className="bg-[#1F1A1A] w-[400px] mr-3 md:flex hidden items-center pr-7 justify-between rounded-xl text-[#B29A9A]">
          <input
            className="w-[100%] placeholder:text-[#B29A9A] bg-[#1F1A1A] pl-7 py-4 rounded-xl outline-none"
            type="text"
            placeholder="Search By Name"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
    </>
  );
};

export default AllEscortTags;
