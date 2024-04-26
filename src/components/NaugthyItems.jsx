import React from "react";
import HoverVideoPlayer from "react-hover-video-player";
import Video from "../images/video.jpeg";
import Naugt from "../images/naught.jpeg";
import Blog from "../images/blog.jpeg";

const NaugthyItems = () => {
  return (
    <div className="bg-[#1E1E1E] overflow-x-hidden w-[300px] text-white mb-14  p-3 rounded-lg">
      <img src={Video} alt="" />

      <div className=" w-[100%]">
        <div className="mx-auto p-2 z-[999999] rounded-t-3xl w-[94%] bg-[#1E1E1E]">
          <div className="flex z-[999999]">
            <img className="size-[40px] rounded-full" src={Naugt} alt="" />
            <div className="text-white ml-3">
              <p className="text-[14px] font-semibold">Sandra Kiss</p>
              <p className="text-[11px] text-[#DADADA]">
                Horny and bored, let's fuck
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NaugthyItems;
