import React, { useState } from "react";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import Frame from "../images/Frame.svg";
import Input from "../images/Input.svg";
import AdvertsItem from "../components/AdvertsItem";
import Pagination from "../components/Pagination";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import { useGetAllAdvertsQuery } from "../redux/AdvertSlice";
import Footer from "../components/Footer";

const Adverts = () => {
  const users = JSON.parse(localStorage.getItem("details"));
  const { data, isLoading } = useGetAllAdvertsQuery();
  const [currentPage, setCurrentPage] = useState(0);

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return (
      <div className="block md:flex overflow-x-clip h-screen max-w-[1740px] mx-auto">
        <SideBar />
        <div className="flex-1 h-full md:w-[80%] px-3 pt-6 md:pt-14 md:px-8 lg:px-14 md:pr-12">
          <Navbar
            Headervalue={"Advert for Quality"}
            textValue={"Advert for best escorts and activities"}
          />

          <div className="px-2 md:px-0 pb-10">
            <div className="flex pb-4 justify-between items-center pt-2 md:pt-10">
              <h1 className="text-white font-semibold md:text-[24px] flex items-center">
                Classified Ads{" "}
                {users && (
                  <Link to={"/new-adverts"}>
                    <img className="size-9 ml-3" src={Frame} alt="" />
                  </Link>
                )}
              </h1>
              <p className="text-white cursor-pointer">
                <img className="" src={Input} alt="" />
              </p>
            </div>
            <div className="flex justify-center items-center h-[40vh]">
              <p className="text-xl md:text-3xl font-semibold text-white">
                No Adverts Available
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (data.length == 0) {
    return (
      <div className="block md:flex overflow-x-clip h-screen max-w-[1740px] mx-auto">
        <SideBar />
        <div className="flex-1 h-full md:w-[80%] px-3 pt-6 md:pt-14 md:px-8 lg:px-14 md:pr-12">
          <Navbar
            Headervalue={"Advert for Quality"}
            textValue={"Advert for best escorts and activities"}
          />

          <div className="px-2 md:px-0 pb-10">
            <div className="flex pb-4 justify-between items-center pt-2 md:pt-10">
              <h1 className="text-white font-semibold md:text-[24px] flex items-center">
                Classified Ads{" "}
                {users && (
                  <Link to={"/new-adverts"}>
                    <img className="size-9 ml-3" src={Frame} alt="" />
                  </Link>
                )}
              </h1>
              <p className="text-white cursor-pointer">
                <img className="" src={Input} alt="" />
              </p>
            </div>
            <div className="flex justify-center items-center h-[40vh]">
              <p className="text-xl md:text-3xl font-semibold text-white">
                No Adverts Available
              </p>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }

  const usersPage = 12;

  const page = currentPage * usersPage;

  const displayAdverts = data
    .slice(page, page + usersPage)
    .map((item, index) => {
      return <AdvertsItem key={index} items={item} />;
    });

  const pageCount = Math.ceil(data.length / usersPage);

  return (
    <div className="block md:flex overflow-x-clip h-screen max-w-[1740px] mx-auto">
      <SideBar />
      <div className="flex-1 h-full md:w-[80%] px-3 pt-6 md:pt-14 md:px-8 lg:px-14 md:pr-12">
        <Navbar
          Headervalue={"Advert for Quality"}
          textValue={"Advert for best escorts and activities"}
        />

        <div className="px-2 md:px-0 pb-10">
          <div className="flex pb-4 justify-between items-center pt-2 md:pt-10">
            <h1 className="text-white font-semibold md:text-[24px] flex items-center">
              Classified Ads{" "}
              {users && (
                <Link to={"/new-adverts"}>
                  <img className="size-9 ml-3" src={Frame} alt="" />
                </Link>
              )}
            </h1>
            {/* <p className="text-white cursor-pointer">
              <img className="" src={Input} alt="" />
            </p> */}
          </div>
          <div className="grid xl:grid-cols-2 grid-cols-1 gap-4">
            {displayAdverts}
          </div>
          <Pagination PageCount={pageCount} setCurrentPage={setCurrentPage} />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Adverts;
