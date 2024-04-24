import React, { useState } from "react";
import AllEscortTags from "./AllEscortTags";
import { countries } from "./COUNTRY_DATA.JS";
import Pagination from "./Pagination";
import EscortItems from "./EscortItems";

const AllEscort = () => {
  const [data, setData] = useState(countries.slice(0, 100));
  const [currentPage, setCurrentPage] = useState(0);

  const usersPage = 8;

  const page = currentPage * usersPage;

  const displayUsers = data.slice(page, page + usersPage).map((item) => {
    return <EscortItems key={item.value} {...item} />;
  });

  const pageCount = Math.ceil(data.length / usersPage);

  return (
    <div className="py-14 bg-[#121212] px-2">
      <div className="flex pb-4 justify-between items-center">
        <h1 className="text-white font-semibold text-[24px]">All Escort</h1>
        <p className="text-white cursor-pointer">See all</p>
      </div>
      <AllEscortTags />
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 pt-8">
        {displayUsers}
      </div>
      <Pagination PageCount={pageCount} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default AllEscort;
