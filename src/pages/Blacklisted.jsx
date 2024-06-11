import React, { useReducer, useState } from "react";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import Filter from "../images/Input.svg";
import BlacklistedList from "../components/BlacklistedList";
import Pagination from "../components/Pagination";
import { useBlackClientQuery, useBlackEscortQuery } from "../redux/ApiSlice";
import Loading from "../components/Loading";
import Footer from "../components/Footer";

const reducer = (state, action) => {
  switch (action.type) {
    case "Change1":
      return {
        open1: true,
      };
    case "Change2":
      return {
        open2: true,
      };
  }
};

const Blacklisted = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    open1: true,
    open2: false,
  });

  const { data: escort, isLoading: loading } = useBlackEscortQuery();
  const { data: client, isLoading: load } = useBlackClientQuery();

  if (loading || load) {
    return <Loading />;
  }

  if (!client || !escort) {
    return (
      <div className="block md:flex overflow-x-clip max-w-[1740px] mx-auto">
        <SideBar />
        <div className="flex-1 md:w-[80%] pt-6 md:pt-14 px-6 lg:px-10">
          <Navbar
            Headervalue={"Welcome to Room 306"}
            textValue={"Explore our escort at your own pace"}
          />

          <div className="pb-10 pt-4 md:pt-0 md:pl-2">
            <div className="flex md:pt-12 md:py-6 pb-2 pl-1 justify-between pt-2 md:items-center">
              <div>
                <h1 className="md:text-2xl text-[18px] text-white font-semibold">
                  {state.open1
                    ? "  Blacklisted Clients"
                    : "  Blacklisted Escorts"}
                </h1>
                <p className="md:text-base text-[14px] text-white/70 font-normal pt-1 md:pt-3">
                  Speak Up, Stay Safe
                </p>
                <div className="pt-6 flex flex-col md:flex-row gap-3 md:items-center">
                  <button
                    onClick={() => dispatch({ type: "Change1" })}
                    className={` ${
                      state.open1 ? "bg-[#E9CB50]" : "bg-[#121212] text-white"
                    } text-[14px] duration-700 border border-[#E9CB50] md:text-base mr-3 py-3 w-[151px] md:w-[175px] rounded-xl`}
                  >
                    Blacklisted Clients
                  </button>
                  <button
                    onClick={() => dispatch({ type: "Change2" })}
                    className={`${
                      state.open2 ? "bg-[#E9CB50]" : "bg-[#121212] text-white"
                    }  duration-700 text-[14px] border border-[#E9CB50] md:text-base py-3 w-[151px] md:w-[175px] rounded-xl`}
                  >
                    Blacklisted Escorts
                  </button>
                </div>
              </div>
              {/* <img className="md:w-40 w-32 cursor-pointer" src={Filter} alt="" /> */}
            </div>
            <div className="rounded-xl lg:px-10 md:px-7 px-4 py-6 md:pl-12 md:py-8 bg-[#1E1E1E] ">
              <div className="text-white pb-8 font-semibold">
                <h2 className="md:text-4xl text-[24px]">Most Wanted</h2>
                <h3 className="md:text-3xl text-white/70 font-medium">
                  Help Us find these people
                </h3>
              </div>
              <div
                className={`${
                  !state.open2 && "hidden"
                }   grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4`}
              >
                <div className="text-white flex justify-center items-center xl:col-span-4 lg:col-span-3 sm:col-span-2 col-span-1 h-[30vh]">
                  <p className="font-semibold md:text-xl">
                    No Blacklisted Escort
                  </p>
                </div>
              </div>
              <div
                className={`${
                  !state.open1 && "hidden"
                }   grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4`}
              >
                <div className="text-white flex justify-center items-center xl:col-span-4 lg:col-span-3 sm:col-span-2 col-span-1 h-[30vh]">
                  <p className="font-semibold md:text-xl">
                    No Blacklisted Client
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }

  const usersPage = 12;

  const page = currentPage * usersPage;

  const displayEscort = escort
    ?.slice(page, page + usersPage)
    ?.filter((item) => item.is_approved == true)
    ?.map((item, index) => {
      return <BlacklistedList key={index} items={item} />;
    });

  const displayClient = client
    ?.slice(page, page + usersPage)
    ?.filter((item) => item.is_approved == true)
    ?.map((item, index) => {
      return <BlacklistedList key={index} items={item} />;
    });

  const escortCount = Math.ceil(
    escort?.filter((item) => item.is_approved == true).length / usersPage
  );
  const clientCount = Math.ceil(
    client?.filter((item) => item.is_approved == true).length / usersPage
  );

  return (
    <div className="block md:flex overflow-x-clip h-screen max-w-[1740px] mx-auto">
      <SideBar />

      <div className="flex-1 md:w-[80%] pt-4 md:pt-14 px-3 md:px-6 lg:px-10">
        <Navbar
          Headervalue={"Welcome to Room 306"}
          textValue={"Explore our escort at your own Pace"}
        />

        <div className="pb-10 pt-4 md:pt-0 md:pl-2">
          <div className="flex md:pt-12 md:py-6 pb-2 pl-1 justify-between pt-2 md:items-center">
            <div>
              <h1 className="md:text-2xl text-[18px] text-white font-semibold">
                {state.open1
                  ? "  Blacklisted Clients"
                  : "  Blacklisted Escorts"}
              </h1>
              <p className="md:text-base text-[14px] text-white/70 font-normal pt-1 md:pt-3">
                Speak Up, Stay Safe
              </p>
              <div className="pt-6 flex flex-col md:flex-row gap-3 md:items-center">
                <button
                  onClick={() => dispatch({ type: "Change1" })}
                  className={` ${
                    state.open1 ? "bg-[#E9CB50]" : "bg-[#121212] text-white"
                  } text-[14px] duration-700 border border-[#E9CB50] md:text-base mr-3 py-3 w-[151px] md:w-[175px] rounded-xl`}
                >
                  Blacklisted Clients
                </button>
                <button
                  onClick={() => dispatch({ type: "Change2" })}
                  className={`${
                    state.open2 ? "bg-[#E9CB50]" : "bg-[#121212] text-white"
                  }  duration-700 text-[14px] border border-[#E9CB50] md:text-base py-3 w-[151px] md:w-[175px] rounded-xl`}
                >
                  Blacklisted Escorts
                </button>
              </div>
            </div>
            {/* <img className="md:w-40 w-32 cursor-pointer" src={Filter} alt="" /> */}
          </div>
          <div className="rounded-xl lg:px-10 md:px-7 px-4 py-6 md:pl-12 md:py-8 bg-[#1E1E1E] ">
            <div className="text-white pb-8 font-semibold">
              <h2 className="md:text-4xl text-[24px]">Most Wanted</h2>
              <h3 className="md:text-3xl text-white/70 font-medium">
                Help Us find these people
              </h3>
            </div>
            <div
              className={`${
                !state.open2 && "hidden"
              }   grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4`}
            >
              {escort?.filter((item) => item.is_approved == true).length ==
              0 ? (
                <div className="text-white flex justify-center items-center xl:col-span-4 lg:col-span-3 sm:col-span-2 col-span-1 h-[30vh]">
                  <p className="font-semibold md:text-xl">
                    No Blacklisted Escort
                  </p>
                </div>
              ) : (
                <div className="grid xl:grid-cols-4 xl:col-span-4 lg:col-span-3 sm:col-span-2 col-span-1 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                  {displayEscort}
                </div>
              )}
            </div>
            <div
              className={`${
                !state.open1 && "hidden"
              }   grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4`}
            >
              {client?.filter((item) => item.is_approved == true).length ==
              0 ? (
                <div className="text-white flex justify-center items-center xl:col-span-4 lg:col-span-3 sm:col-span-2 col-span-1 h-[30vh]">
                  <p className="font-semibold md:text-xl">
                    No Blacklisted Client
                  </p>
                </div>
              ) : (
                <div className="grid xl:grid-cols-4 xl:col-span-4 lg:col-span-3 sm:col-span-2 col-span-1 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                  {displayClient}
                </div>
              )}
            </div>
          </div>
          {state.open1 ? (
            <div>
              <Pagination
                PageCount={clientCount}
                setCurrentPage={setCurrentPage}
              />
            </div>
          ) : (
            <div>
              <Pagination
                PageCount={escortCount}
                setCurrentPage={setCurrentPage}
              />
            </div>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Blacklisted;
