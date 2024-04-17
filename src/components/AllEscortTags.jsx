import React from 'react'
import { MdOutlineClear } from "react-icons/md";
import { LuFilter } from "react-icons/lu";

const AllEscortTags = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center">
          <p className="bg-[#1F1A1A] mr-3 flex py-3 px-7 items-center justify-between rounded-xl text-[#B29A9A]">
            Lagos <MdOutlineClear className="size-6 ml-3" />
          </p>
          <p className="bg-[#1F1A1A] mr-3 flex py-3 px-7 items-center justify-between rounded-xl text-[#B29A9A]">
            Heterosexual(Straight) <MdOutlineClear className="size-6 ml-3" />
          </p>
          <p className="bg-[#1F1A1A] mr-3 flex py-3 px-7 items-center justify-between rounded-xl text-[#B29A9A]">
            Fresh | New <MdOutlineClear className="size-6 ml-3" />
          </p>
          <p className="bg-[#1F1A1A] flex py-3 px-7 items-center justify-between rounded-xl text-[#B29A9A]">
            Female <MdOutlineClear className="size-6 ml-3" />
          </p>
        </div>
        <div>
          <p className="bg-[#1F1A1A] flex py-3 px-7 items-center justify-between rounded-xl text-[#B29A9A]">
            <LuFilter className="size-6 mr-3" />
            Filter
          </p>
        </div>
      </div>
    </>
  );
}

export default AllEscortTags
