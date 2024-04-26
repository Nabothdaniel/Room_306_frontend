import React from "react";
import HoverVideoPlayer from "react-hover-video-player";
import Video from "../images/demo.mp4";

const Hello = () => {
  return (
    <div className="bg-white w-[300px] hove mx-auto mt-32 rounded-xl h-[300px]">
      <HoverVideoPlayer className="rounded-xl w-[200px]" videoSrc={Video} />
    </div>
  );
};

export default Hello;
