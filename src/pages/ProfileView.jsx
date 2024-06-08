import React, { useState } from "react";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import { BlogSwiper } from "../components/BlogSwiper";
import Arrow from "../images/arrow-left.svg";
import ProfileViewItem from "../components/ProfileViewItem";
import { useNavigate, useParams } from "react-router-dom";
import BookingModel from "../components/BookingModel";
import Loading from "../components/Loading";
import ProfileEscort from "../components/ProfileEscort";
import toast from "react-hot-toast";
import ReportModel from "../components/ReportModel";
import { useGetProfileByIdQuery } from "../redux/EscortApi";

const ProfileView = () => {
  const user = JSON.parse(localStorage.getItem("details"));
  const { username } = useParams();
  const { data, isLoading } = useGetProfileByIdQuery(username);
  const [openBook, setOpenBook] = useState(false);
  const [openReport, setOpenReport] = useState(false);

  const navigate = useNavigate();

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    navigate("/");
    return;
  }

  const handleReport = () => {
    setOpenReport(!openReport);
  };

  const handleBook = () => {
    if (user?.user_type == "client") {
      setOpenBook(!openBook);
    } else {
      toast.error("Only Client can Book an Escort");
    }
  };
  return (
    <div className="block md:flex overflow-x-clip h-screen max-w-[1740px] mx-auto">
      <SideBar />

      <div className="flex-1 md:w-[80%] pt-2 md:pt-14 px-5 lg:px-10">
        <Navbar
          Headervalue={"Welcome to Room 306"}
          textValue={"Explore our escort at your own pace"}
        />
        <div
          className="md:pb-6 md:pt-10  grid grid-cols-1
         lg:grid-cols-4 gap-6"
        >
          <div className="lg:col-span-3  pb-10">
            <h2
              onClick={() => navigate(-1)}
              className="text-white pb-4 font-semibold cursor-pointer flex items-center"
            >
              <img className="size-5 mr-1" src={Arrow} alt="" />
              Back
            </h2>
            <ProfileViewItem
              handleReport={handleReport}
              user={data}
              handleBook={handleBook}
            />
            <ProfileEscort user={data} />
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
      </div>
      <BookingModel
        handleBook={handleBook}
        user={data}
        bookClass={`${!openBook ? "translate-x-[120vw]" : "translate-x-0"}`}
      />
      <ReportModel
        handleReport={handleReport}
        reportClass={`${!openReport ? "translate-x-[120vw]" : "translate-x-0"}`}
        user={data}
      />
    </div>
  );
};

export default ProfileView;
