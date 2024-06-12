import React from "react";
import Naugt from "../images/naught.jpeg";
import Eye from "../images/eye.svg";
import Like from "../images/dislike.svg";
import Message from "../images/messages-2.svg";
import Blog from "../images/blog.jpeg";
import { Link } from "react-router-dom";
import { useDeleteVideoMutation } from "../redux/EscortApi";
import toast, { LoaderIcon } from "react-hot-toast";

const NaughtProfileItem = ({ items }) => {
  const [deleteVideo, { isLoading }] = useDeleteVideoMutation();

  const handleDelete = async () => {
    try {
      const res = await deleteVideo(items.id).unwrap();
      toast.success("Video Deleted");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-black block relative text-white  p-2 rounded-lg">
      <Link to={`/naughty-videos/${items.id}`}>
        <video
          className="h-[300px] w-full object-cover rounded-lg"
          src={`https://backend.theroom306.com${items.video}`}
        ></video>
      </Link>

      <div className=" w-[100%] absolute bottom-0 left-0">
        <div className="mx-auto p-2 z-[999999] rounded-t-3xl md:w-[97%] w-[98%] bg-black">
          <div className="flex z-[999999]">
            <img
              className="size-[40px] rounded-full"
              src={`https://backend.theroom306.com${items.escort.user.image}`}
              alt=""
            />
            <div className="text-white ml-3">
              <p className="text-[14px] font-semibold">
                {items.escort.user.username}
              </p>
              <p className="text-[11px] text-[#DADADA]">{items.title}</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[14px] text-[#E9CB50] py-1">Free video</p>
            <div className="flex">
              <img className=" rotate-180 mr-2 size-[20px]" src={Like} alt="" />
              <img className="size-[20px] mr-2" src={Like} alt="" />
              <img className="size-[20px] mr-2" src={Message} alt="" />
              <img className="size-[20px]" src={Eye} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="  absolute top-3 right-5"> */}
      <span
        onClick={handleDelete}
        className="bg-red-500 cursor-pointer absolute top-3 right-5 px-2 py-[3px] text-black rounded-xl"
      >
        {isLoading ? <LoaderIcon className="mx-auto" /> : "Delete"}
      </span>
      {/* </div> */}
    </div>
  );
};

export default NaughtProfileItem;
