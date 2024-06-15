import React, { useState } from "react";
import AllEscortTags from "./AllEscortTags";
import Pagination from "./Pagination";
import EscortItems from "./EscortItems";
import { useGetAllEscortQuery } from "../redux/EscortApi";
import Loading from "./Loading";
import { countries } from "./COUNTRY_DATA.JS";
import FailEscort from "./FailEscort";

const AllEscort = () => {
  const [country, setCountry] = useState("");
  const [sexual_orientation, setSexual] = useState("");
  const [display_name, setName] = useState("");
  const [gender, setGender] = useState("");
  const { data, isLoading } = useGetAllEscortQuery({
    country,
    sexual_orientation,
    display_name,
    gender,
  });

  
  const [currentPage, setCurrentPage] = useState(0);

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return <FailEscort />;
  }

  if (data.length == 0) {
    return <FailEscort />;
  }

  const clear = () => {
    setCountry("");
    setSexual("");
    setName("");
    setGender("");
  };

  const usersPage = 8;

  const page = currentPage * usersPage;

  const displayUsers = data.slice(page, page + usersPage).map((item, index) => {
    return <EscortItems key={index} items={item} />;
  });

  const pageCount = Math.ceil(data.length / usersPage);

  return (
    <div className="py-14 bg-[#121212] px-2">
      <div className="flex pb-4 justify-between px-2 items-center">
        <h1 className="text-white font-semibold text-[18px] md:text-[24px]">
          All Escort
        </h1>
        <p
          onClick={clear}
          className="text-white cursor-pointer text-[14px] md:text-base"
        >
          See all
        </p>
      </div>
      <div className="overflow-x-scroll md:overflow-x-auto">
        {/* <AllEscortTags /> */}

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
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 pt-8">
        {displayUsers}
      </div>
      <Pagination PageCount={pageCount} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default AllEscort;
