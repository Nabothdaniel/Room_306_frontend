import React, { useState } from "react";
import AllEscortTags from "./AllEscortTags";
import Pagination from "./Pagination";
import EscortItems from "./EscortItems";
import { useGetAllEscortsQuery } from "../redux/EscortApi";
import Loading from "./Loading";

const AllEscort = () => {
  const { data, isLoading } = useGetAllEscortsQuery();
  const [currentPage, setCurrentPage] = useState(0);

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return (
      <div className="py-14 bg-[#121212] px-2">
        <div className="flex pb-4 justify-between px-2 items-center">
          <h1 className="text-white font-semibold text-[18px] md:text-[24px]">
            All Escort
          </h1>
          <p className="text-white cursor-pointer text-[14px] md:text-base">
            See all
          </p>
        </div>
        <div className="overflow-x-scroll md:overflow-x-auto">
          <AllEscortTags />
        </div>
        <div className="h-[30vh] flex justify-center items-center">
          <p className="text-xl font-semibold text-white">
            No Escort Available
          </p>
        </div>
      </div>
    );
  }

  if (data.length == 0) {
    return (
      <div className="py-14 bg-[#121212] px-2">
        <div className="flex pb-4 justify-between px-2 items-center">
          <h1 className="text-white font-semibold text-[18px] md:text-[24px]">
            All Escort
          </h1>
          <p className="text-white cursor-pointer text-[14px] md:text-base">
            See all
          </p>
        </div>
        <div className="overflow-x-scroll md:overflow-x-auto">
          <AllEscortTags />
        </div>
        <div className="h-[30vh] flex justify-center items-center">
          <p className="text-xl font-semibold text-white">
            No Escort Available
          </p>
        </div>
      </div>
    );
  }

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
        <p className="text-white cursor-pointer text-[14px] md:text-base">
          See all
        </p>
      </div>
      <div className="overflow-x-scroll md:overflow-x-auto">
        <AllEscortTags />
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 pt-8">
        {displayUsers}
      </div>
      <Pagination PageCount={pageCount} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default AllEscort;
