import React from "react";
import Erotic from "../images/Ellipse4.svg";

const NaugthyChannel = ({ images, text }) => {
  const own = " ";
  return (
    <div className="bg-[#202D2C]  text-white">
      <div className="text-[14px] pb-4 flex">
        <img className="size-[30px] rounded-full" src={Erotic} alt="" />
        {/* user name */}
        <div className="flex flex-col mt-1 ml-4">
          <div className="flex">
            <p className="text-[#DADADA] mr-4">PrettyD</p>
            <p className="text-[#A0A8B5] ">11:23</p>
          </div>

          <div
            className={`bg-[#1F2928] mt-2 w-fit ${
              !(text || images) && "hidden"
            } rounded-t-[10px] rounded-br-[10px] rounded-bl-[4px] p-2`}
          >
            {images && (
              <img
                className="size-[200px] rounded-[10px] object-cover"
                src={images}
              />
            )}
            {text && <p className="pt-1">{text}</p>}
          </div>
        </div>
      </div>

      {/* OWN */}

      <div className={`${own && "justify-end"} text-[14px]  flex`}>
        <div
          className={`bg-[#00AE79] mt-2 w-fit ${
            !(text || images) && "hidden"
          } rounded-t-[10px] rounded-br-[10px] rounded-bl-[4px] px-2 py-[12px]`}
        >
          {images && (
            <img
              className="size-[200px] rounded-[10px] object-cover"
              src={images}
            />
          )}
          {text && <p className="pt-1">{text}</p>}
        </div>
      </div>
    </div>
  );
};

export default NaugthyChannel;
