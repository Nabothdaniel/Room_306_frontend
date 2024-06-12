import React, { useReducer } from "react";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import Arrow from "../images/arrow-left.svg";
import ProfileAbout from "../components/ProfileAbout";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { useGetProfileByIdQuery } from "../redux/EscortApi";
import Footer from "../components/Footer";
import ClientReviewView from "../components/ClientReviewView";

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

const ClientView = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, {
    open1: true,
    open2: false,
  });
  const { username } = useParams();
  const { data, isLoading } = useGetProfileByIdQuery(username);

  if (isLoading) {
    return <Loading />;
  }

  const client = data?.profile;

  if (!client || client?.user_type !== "client") {
    navigate("/404");
    return;
  }

  return (
    <div className="block md:flex overflow-x-clip max-w-[1740px] mx-auto">
      <SideBar />

      <div className="flex-1 md:w-[80%] px-4 pt-6 md:pt-14 md:px-10">
        <Navbar
          Headervalue={"Welcome to Room 306"}
          textValue={"Explore our escort at your own pace"}
        />
        <div className="md:py-8">
          <div className="flex justify-between items-center md:pb-6 py-2 md:pt-8">
            <h2
              onClick={() => navigate(-1)}
              className="text-white font-semibold cursor-pointer flex items-center"
            >
              <img className="size-5 mr-1" src={Arrow} alt="" />
              Back
            </h2>

            <button className="bg-[#0A0A0A] text-[14px] text-white font-medium rounded-lg py-3 w-[125px]">
              Client Account
            </button>
          </div>

          <div className="relative">
            <div className="rounded-xl h-[171px]  bg-[#1E1E1E] "></div>
            <div className="absolute top-20 md:top-3 lg:top-20 flex flex-col md:flex-row md:justify-end md:items-center w-[100%]">
              <div className="md:w-[30%]">
                <img
                  className="lg:size-[268px] ml-14 md:ml-0 object-cover md:size-[170px] sm:size-[140px] size-[130px] rounded-full "
                  src={`https://backend.theroom306.com${client.image}`}
                  alt=""
                />
              </div>
              <div className="md:w-[65%] md:ml-6 mt-8 grid grid-cols-3 md:mt-44 lg:mt-28">
                <div className="col-span-2 grid gap-y-4 text-white">
                  <h3 className="text-[20px] font-semibold">
                    {client.display_name}
                  </h3>
                  {/* <p className="text-[#DADADA] md:w-[70%] text-[12px] lg:text-[14px]">
                    Am here to satisfy ur pleasure I love sex most especially
                    blow job (cum in my mouth) AVAILABLE FOR INCALL
                  </p> */}
                  <div className="md:flex hidden justify-between text-white">
                    <div className="flex flex-col items-center">
                      <p className="text-[24px] font-semibold">
                        {client.followers_count}
                      </p>
                      <p className="text-[#B29A9A] text-[13px]">Followers</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <p className="text-[24px] font-semibold">
                        {client.following_count}
                      </p>
                      <p className="text-[#B29A9A] text-[13px]">Following</p>
                    </div>
                    {/* <div className="flex flex-col items-center">
                      <p className="text-[24px] font-semibold">{Book.length}</p>
                      <p className="text-[#B29A9A] text-[13px]">Bookings</p>
                    </div> */}
                  </div>
                </div>
                <div className="flex justify-end ">
                  {/* <Link
                    to={"/edit-client"}
                    className="bg-[#0A0A0A] flex items-center justify-center text-center text-[14px] text-white font-medium rounded-lg h-[40px] w-[125px]"
                  >
                    Edit Profile
                  </Link> */}
                </div>
              </div>
              <div className="flex justify-between px-3 md:hidden mt-4 text-white">
                <div className="flex flex-col items-center">
                  <p className="text-[24px] font-semibold">
                    {client.followers_count}
                  </p>
                  <p className="text-[#B29A9A] text-[14px]">Followers</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-[24px] font-semibold">
                    {client.following_count}
                  </p>
                  <p className="text-[#B29A9A] text-[14px]">Following</p>
                </div>
                {/* <div className="flex flex-col items-center">
                  <p className="text-[24px] font-semibold">{Book.length}</p>
                  <p className="text-[#B29A9A] text-[14px]">Bookings</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="border-b-2 pt-6 mt-64 md:mt-48 flex relative font-semibold items-center text-white border-[#393C49] py-3">
          <p
            onClick={() => dispatch({ type: "Change1" })}
            className={`md:mr-10 mr-6 cursor-pointer ${
              state.open1 &&
              "before:contents-[''] duration-500  before:absolute text-[#E9CB50] before:-bottom-[2px] before:w-[45px] md:before:w-[50px] before:h-[3px] before:rounded-lg before:bg-[#E9CB50]"
            }    `}
          >
            About
          </p>
          <p
            onClick={() => dispatch({ type: "Change2" })}
            className={`md:mr-10 cursor-pointer ${
              state.open2 &&
              "before:contents-[''] duration-500  before:absolute text-[#E9CB50] before:-bottom-[2px] before:w-[50px] md:before:w-[57px] before:h-[3px] before:rounded-lg before:bg-[#E9CB50]"
            }    `}
          >
            Review
          </p>
        </div>
        <ProfileAbout
          client={client}
          aboutClass={`${!state.open1 ? "hidden" : ""}`}
        />
        <ClientReviewView
          review={data.reviews}
          reviewClass={`${!state.open2 ? "hidden" : ""}`}
        />
        <div className="pt-10">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ClientView;
