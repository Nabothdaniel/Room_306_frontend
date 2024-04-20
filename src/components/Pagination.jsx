import React from "react";
import ReactPaginate from "react-paginate";
import ChevronRight from "../images/chevron-right.svg";
import ChevronLeft from "../images/chevron-left.svg";

const Pagination = ({ PageCount, setCurrentPage }) => {
  const handleChange = ({ selected }) => {
    setCurrentPage(selected);
  };
  return (
    <div className="text-white">
      <ReactPaginate
        breakLabel={
          <span className="bg-[#F0F1F5] w-[42px] mr-3 px-[15px] py-[12px] text-center rounded-lg text-[#23262A]">
            ...
          </span>
        }
        nextLabel={
          <span className="flex items-center text-[#60656E]">
            Next
            <img className="size-5 ml-1" src={ChevronRight} alt="" />
          </span>
        }
        onPageChange={handleChange}
        pageRangeDisplayed={1}
        pageCount={10}
        previousLabel={
          <span className="flex mr-3 items-center text-[#A0A8B5]">
            <img className="size-5 mr-1" src={ChevronLeft} alt="" />
            Prev
          </span>
        }
        containerClassName="flex justify-center mt-10 items-center"
        pageClassName="bg-[#F0F1F5] mr-3 w-[42px] py-[10px] text-center rounded-lg text-[#23262A]"
        activeClassName="border border-[#0C8CE9] text-[#0C8CE9] font-medium"
      />
    </div>
  );
};

export default Pagination;
