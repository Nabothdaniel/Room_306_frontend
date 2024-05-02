import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import Arrow from "../images/arrow-left.svg";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import BlacklistedList from "../components/BlacklistedList";

const BlacklistedClients = () => {
  const navigate = useNavigate();
  return (
    <div className="block md:flex overflow-x-clip max-w-[1740px] mx-auto">
      <SideBar />

      <div className="flex-1 md:w-[80%] px-4 pt-6 md:pt-14 md:px-10">
        <Navbar
          Headervalue={"Best Escort Tours"}
          textValue={"Explore our tours and activities"}
        />

        <div className="md:py-5 pb-9 md:pb-12">
          <div className="md:pb-3 pt-2 md:pt-8">
            <h2
              onClick={() => navigate(-1)}
              className="text-white font-semibold cursor-pointer flex items-center"
            >
              <img className="size-5 mr-1" src={Arrow} alt="" />
              Back
            </h2>
          </div>
          <div>
            <h1 className="text-white text-[18px] md:text-2xl font-semibold pt-7 pb-4">
              My Blacklisted Clients
            </h1>
            <div className=" py-4 px-5 bg-[#1e1e1e] rounded-md grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 gap-4">
              <BlacklistedList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlacklistedClients;
