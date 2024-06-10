import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Expire from "../images/Expire.svg";
import Latest from "../images/Container.svg";
import Filter from "../images/Input.svg";
import Pagination from "../components/Pagination";
import Frame from "../images/Frame.svg";
import { Link } from "react-router-dom";
import { useGetAllTourQuery, useGetFilteredTourQuery } from "../redux/tourApi";
import Loading from "../components/Loading";
import EscortOneItems from "../components/EscortOneItems";
import TourFilter from "../components/TourFilter";
import { ImageContext } from "../Hooks/ImageContext";
import Footer from "../components/Footer";

const Tours = () => {
  const { filter } = useContext(ImageContext);

  const country = filter.tourCountry;
  const city = filter.tourCity;

  const [filters, setFilters] = useState(false);
  let useD = JSON.parse(localStorage.getItem("details"));
  let users = useD?.profile;
  const [currentPage, setCurrentPage] = useState(0);

  const { data, isLoading } = useGetFilteredTourQuery({ country, city });

  const handleFilter = () => {
    setFilters(!filters);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return (
      <div className="block md:flex overflow-x-clip h-screen max-w-[1740px] mx-auto">
        <SideBar />

        <div className="flex-1 md:w-[80%] pt-4 md:pt-14 px-3 md:px-6 lg:px-10">
          <Navbar
            Headervalue={"Best Escort Tours"}
            textValue={"Explore our tours and activities"}
          />
          <div className="pb-10 px-3 md:pl-2">
            <div className="flex pb-2 pt-3 md:pt-6 md:hidden justify-between items-center">
              <h1 className="text-white font-semibold text-[18px] md:text-[24px]">
                Tours Happening Now
              </h1>
              <p className="text-white cursor-pointer text-[14px] md:text-base">
                See all
              </p>
            </div>
            <div className="flex md:pt-10 pb-4 flex-col md:flex-row md:justify-between items-end md:items-center">
              <p className="text-white md:min-w-[230px] flex items-center md:py-4 py-2 lg:text-[20px] font-semibold">
                <span className="hidden md:block"> Tours Happening Now </span>
                <Link to={"/new-tours"}>
                  {users?.user?.user_type == "escort" && (
                    <img
                      className="size-10 cursor-pointer md:ml-2 flex items-center"
                      src={Frame}
                      alt=""
                    />
                  )}
                </Link>
              </p>
              <div className="flex md:justify-end overflow-x-scroll md:overflow-x-auto md:gap-x-3 gap-x-2">
                {/* <img className="w-auto " src={Latest} alt="" /> */}
                {/* <img className=" w-auto" src={Expire} alt="" /> */}
                <img
                  onClick={handleFilter}
                  className=" w-auto cursor-pointer"
                  src={Filter}
                  alt=""
                />
              </div>
            </div>
            <div className=" bg-[#121212]">
              <div className="flex justify-center items-center h-[40vh]">
                <p className="text-xl md:text-3xl font-semibold text-white">
                  No Tour Available
                </p>
              </div>
            </div>
          </div>
        </div>
        <TourFilter
          Filter={handleFilter}
          TourClass={`${!filters ? "translate-x-[120vw]" : "translate-x-0"}`}
        />
      </div>
    );
  }

  if (data.length == 0) {
    return (
      <div className="block md:flex overflow-x-clip h-screen max-w-[1740px] mx-auto">
        <SideBar />

        <div className="flex-1 md:w-[80%] pt-4 md:pt-14 px-3 md:px-6 lg:px-10">
          <Navbar
            Headervalue={"Best Escort Tours"}
            textValue={"Explore our tours and activities"}
          />
          <div className="pb-10 px-3 md:pl-2">
            <div className="flex pb-2 pt-3 md:pt-6 md:hidden justify-between items-center">
              <h1 className="text-white font-semibold text-[18px] md:text-[24px]">
                Tours Happening Now
              </h1>
              <p className="text-white cursor-pointer text-[14px] md:text-base">
                See all
              </p>
            </div>
            <div className="flex md:pt-10 pb-4 flex-col md:flex-row md:justify-between items-end md:items-center">
              <p className="text-white md:min-w-[230px] flex items-center md:py-4 py-2 lg:text-[20px] font-semibold">
                <span className="hidden md:block"> Tours Happening Now </span>
                <Link to={"/new-tours"}>
                  {users?.user?.user_type == "escort" && (
                    <img
                      className="size-10 cursor-pointer md:ml-2 flex items-center"
                      src={Frame}
                      alt=""
                    />
                  )}
                </Link>
              </p>
              <div className="flex md:justify-end overflow-x-scroll md:overflow-x-auto md:gap-x-3 gap-x-2">
                {/* <img className="w-auto " src={Latest} alt="" /> */}
                {/* <img className=" w-auto" src={Expire} alt="" /> */}
                <img
                  onClick={handleFilter}
                  className=" w-auto cursor-pointer"
                  src={Filter}
                  alt=""
                />
              </div>
            </div>
            <div className=" bg-[#121212]">
              <div className="flex justify-center items-center h-[40vh]">
                <p className="text-xl md:text-3xl font-semibold text-white">
                  No Tour Available
                </p>
              </div>
            </div>
          </div>
          <Footer />
        </div>
        <TourFilter
          Filter={handleFilter}
          TourClass={`${!filters ? "translate-x-[120vw]" : "translate-x-0"}`}
        />
      </div>
    );
  }

  const usersPage = 12;

  const page = currentPage * usersPage;

  const displayUsers = data.slice(page, page + usersPage).map((item, index) => {
    return <EscortOneItems key={index} items={item} />;
  });

  const pageCount = Math.ceil(data.length / usersPage);

  return (
    <div className="block md:flex overflow-x-clip h-screen max-w-[1740px] mx-auto">
      <SideBar />

      <div className="flex-1 md:w-[80%] pt-4 md:pt-14 px-3 md:px-6 lg:px-10">
        <Navbar
          Headervalue={"Best Escort Tours"}
          textValue={"Explore our tours and activities"}
        />
        <div className="pb-10 px-3 md:pl-2">
          <div className="flex pb-2 pt-3 md:pt-6 md:hidden justify-between items-center">
            <h1 className="text-white font-semibold text-[18px] md:text-[24px]">
              Tours Happening Now
            </h1>
            <p className="text-white cursor-pointer text-[14px] md:text-base">
              See all
            </p>
          </div>
          <div className="flex md:pt-10 pb-4 flex-col md:flex-row md:justify-between items-end md:items-center">
            <p className="text-white md:min-w-[230px] flex items-center md:py-4 py-2 lg:text-[20px] font-semibold">
              <span className="hidden md:block"> Tours Happening Now </span>
              <Link to={"/new-tours"}>
                {users?.user?.user_type == "escort" && (
                  <img
                    className="size-10 cursor-pointer md:ml-2 flex items-center"
                    src={Frame}
                    alt=""
                  />
                )}
              </Link>
            </p>
            <div className="flex md:justify-end overflow-x-scroll md:overflow-x-auto md:gap-x-3 gap-x-2">
              {/* <img className="w-auto" src={Latest} alt="" /> */}
              {/* <img className="w-auto" src={Expire} alt="" /> */}
              <img
                onClick={handleFilter}
                className="w-auto cursor-pointer"
                src={Filter}
                alt=""
              />
            </div>
          </div>
          <div className=" bg-[#121212]">
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
              {displayUsers}
            </div>
            <Pagination PageCount={pageCount} setCurrentPage={setCurrentPage} />
          </div>
        </div>
        <Footer />
      </div>
      <TourFilter
        Filter={handleFilter}
        TourClass={`${!filters ? "translate-x-[120vw]" : "translate-x-0"}`}
      />
    </div>
  );
};

export default Tours;
