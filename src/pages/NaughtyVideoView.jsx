import React, { useState } from "react";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import { BlogSwiper } from "../components/BlogSwiper";
import Pagination from "../components/Pagination";
import Arrow from "../images/arrow-left.svg";
import { useNavigate, useParams } from "react-router-dom";
import Video from "../images/demo.mp4";
import Like from "../images/dislike.svg";
import Message from "../images/messages-2.svg";
import Love from "../images/Love.svg";
import Blog from "../images/blog.jpeg";
import NaughtSwiper from "../components/NaughtSwiper";
import Loading from "../components/Loading";
import {
  useGetCommentQuery,
  useGetVideoByIdQuery,
  useLikeVideoMutation,
  useUnlikeVideoMutation,
} from "../redux/EscortApi";
import { format, parseISO } from "date-fns";
import toast from "react-hot-toast";
import Comment from "../components/Comment";
import Footer from "../components/Footer";

const NaughtyVideoView = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [like] = useLikeVideoMutation();
  const [unlike] = useUnlikeVideoMutation();
  const { data: comments, isLoading: load } = useGetCommentQuery(id);
  const { data, isLoading } = useGetVideoByIdQuery(id);
  const [comment, setComment] = useState(false);

  if (isLoading || load) {
    return <Loading />;
  }

  const handleComment = () => {
    setComment(!comment);
  };

  const handleLike = async () => {
    try {
      const res = await like(id).unwrap();

      toast.success(res);
    } catch (err) {
      if (
        err.data.error ==
        "[ErrorDetail(string='You have already liked this video.', code='invalid')]"
      ) {
        toast.error("You have already liked this video");
      } else {
        toast.error(err.data.error);
      }
    }
  };

  const handleUnLike = async () => {
    try {
      const res = await unlike(id).unwrap();

      toast.success(res);
    } catch (err) {
      if (
        err.data.error ==
        "[ErrorDetail(string='You have already unliked this video.', code='invalid')]"
      ) {
        toast.error("You have already unliked this video");
      } else {
        toast.error(err.data.error);
      }
    }
  };

  const postDate = parseISO(data.postedAt);
  const formatDate = format(postDate, "MMMM dd, yyyy 'at' h:mm a");

  return (
    <div className="block md:flex overflow-x-clip h-screen max-w-[1740px] mx-auto">
      <SideBar />

      <div className="flex-1 md:w-[80%] pt-6 md:pt-14 px-3 md:px-6 lg:px-10">
        <Navbar
          Headervalue={"Welcome to Room 306"}
          textValue={"Explore our escort at your own Pace"}
        />
        <div
          className="py-6 md:pt-14 pb-10  grid grid-cols-1
         lg:grid-cols-4 gap-6"
        >
          <div className="lg:col-span-3">
            <h2
              onClick={() => navigate(-1)}
              className="text-white  font-semibold cursor-pointer flex items-center"
            >
              <img className="size-5 mr-1" src={Arrow} alt="" />
              Back
            </h2>
            <div className="pt-4">
              <h1 className="text-white text-xl font-semibold pb-4">
                {data.title}
              </h1>
              <video
                controls
                autoPlay
                className={`md:h-[500px] h-[400px] object-cover w-full `}
                src={`https://room35backend.onrender.com${data.video}`}
              ></video>
              <div className="grid grid-cols-3 text-white pt-4 text-center">
                {/* <div className="cursor-pointer font-semibold">
                  <p>
                    Rating <span>0</span>
                  </p>
                </div> */}
                <div></div>
                <div className="cursor-pointer font-semibold">
                  <p>Viewed</p>
                  <p className="text-white/90 font-normal">{data.view_count}</p>
                </div>
                {/* <div className="cursor-pointer font-semibold">
                  <p>Duration</p>
                  <p className="text-[14px] text-white/90 font-normal">
                    01: 11
                  </p>
                </div> */}
              </div>
              <div className="grid grid-cols-3 gap-x-1 text-white pt-4 ">
                <div
                  onClick={handleLike}
                  className="bg-[#1e1e1e] hover:bg-white/80 duration-500 cursor-pointer flex items-center py-2 px-3 rounded-l-xl"
                >
                  <img
                    className="rotate-180 md:size-8 size-7"
                    src={Like}
                    alt=""
                  />
                  <span className="text-[20px] font-semibold">
                    ({data.like_count})
                  </span>
                </div>
                <div
                  onClick={handleUnLike}
                  className="bg-[#1e1e1e] hover:bg-white/80 duration-500 cursor-pointer flex items-center py-2 px-3"
                >
                  <img className="md:size-8 size-7" src={Like} alt="" />
                  <span className="text-[20px] font-semibold">
                    ({data.un_like_count})
                  </span>
                </div>
                <div
                  onClick={handleComment}
                  className="bg-[#1e1e1e] hover:bg-white/80 duration-500 cursor-pointer flex rounded-r-xl items-center py-2 px-3"
                >
                  <img className="md:size-8 size-7" src={Message} alt="" />
                  <span className="text-[20px] font-semibold">
                    ({comments.length})
                  </span>
                </div>
              </div>
              <div className="flex pt-6 border-b pb-5 border-neutral-600 items-start">
                <div className="flex-1">
                  <p className="bg-yellow-300 rounded-lg w-[90px] cursor-pointer md:text-base text-[14px] text-center text-black  font-semibold py-1">
                    Free
                  </p>
                  <p className="text-white  pt-3 text-[14px]">
                    {data.description}
                  </p>
                </div>
                <div className="text-white/80 md:text-base text-[14px]  pr-4 cursor-pointer font-medium flex items-center">
                  <img className="size-8 mr-2" src={Love} alt="" />
                  <p className="">Add to Favorites</p>
                </div>
              </div>
              <div className="pt-4 border-b pb-5 text-white border-neutral-600 items-start">
                <div className="">
                  <h3 className="font-semibold text-[14px] text-white/70 pb-2">
                    Categories
                  </h3>
                  <p className="pl-3">{data.category}</p>
                </div>
              </div>
              {/* <div className="pt-4 border-b pb-5 text-white border-neutral-600 items-start">
                <div className="">
                  <h3 className="font-semibold text-[14px] text-white/70 pb-2">
                    Tags
                  </h3>
                  <p className="bg-neutral-700 rounded-lg w-[90px] uppercase cursor-pointer md:text-[14x] text-[12px] text-center text-white/70  font-semibold py-1">
                    Amateur
                  </p>
                </div>
              </div> */}

              <div className="pt-4 pb-5 text-white items-start">
                <div className="">
                  <h3 className="font-semibold text-[14px] text-white/70 pb-2">
                    Posted By
                  </h3>
                  <div className="flex">
                    <img
                      className="size-20 rounded-md"
                      src={`https://room35backend.onrender.com${data.escort.user.image}`}
                      alt=""
                    />
                    <div className="ml-5">
                      <h2 className="font-semibold md:text-xl text-base">
                        {data.escort.user.display_name}
                      </h2>
                      <p className="text-[12px] text-white/60">{formatDate}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#0c0c0c] col-span-4 mt-3  py-4 px-3 md:px-5 rounded-lg">
                <h1 className="text-white font-semibold py-2 pb-7 md:text-2xl">
                  Related Videos
                </h1>
                <div className="">
                  <NaughtSwiper />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 lg:mt-0">
            <h2 className="text-center text-white font-medium pb-6 lg:pb-2 text-xl">
              Fresh Escorts
            </h2>
            <div>
              <BlogSwiper />
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <Comment
        commentClass={`${!comment ? "translate-x-[120vw]" : "translate-x-0"}`}
        handleComment={handleComment}
      />
    </div>
  );
};

export default NaughtyVideoView;
