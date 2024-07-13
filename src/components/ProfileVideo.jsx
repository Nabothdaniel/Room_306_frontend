import React from "react";
import NaughtProfileItem from "./NaughtProfileItem";
import { useGetAllVideosQuery } from "../redux/EscortApi";
import Loading from "./Loading";
import { useParams } from "react-router-dom";
import NaugthyItems from "./NaugthyItems";

const ProfileVideo = ({ naughtClass }) => {
  const { username } = useParams();
  const { data, isLoading } = useGetAllVideosQuery();

  if (isLoading) {
    return <Loading />;
  }
  const video = data.filter((item) => item.escort.user.username == username);

  return (
    <div
      className={`${naughtClass} bg-black gap-3 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  pt-4 pb-10 px-5 rounded-xl mt-10`}
    >
      {video?.length == 0 ? (
        <div className="xl:col-span-4 lg:col-span-3 sm:col-span-2 flex justify-center items-center h-[40vh]">
          <p className="text-white md:text-xl font-semibold">No Videos Found</p>
        </div>
      ) : (
        <div className="grid xl:grid-cols-3 xl:col-span-4 lg:col-span-3 sm:col-span-2 col-span-1 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {" "}
          {video.map((item, index) => {
            return <NaugthyItems key={index} items={item} />;
          })}
        </div>
      )}
    </div>
  );
};

export default ProfileVideo;
