import React from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="block md:flex overflow-x-clip max-w-[1740px] mx-auto">
      <SideBar />
      <div className="flex-1 md:w-[80%] pt-6 md:pt-14 px-6 lg:px-10">
        <Navbar
          Headervalue={"Welcome to Room 306"}
          textValue={"Explore our escort at your own pace"}
        />

        <div className="md:py-8">
          <div className="flex h-[65vh] text-white justify-center items-center">
            <div className="flex gap-3 flex-col items-center">
              <h1 className="md:text-[200px] text-[100px] text-yellow-400 font-serif">
                Oops!
              </h1>
              <p className="uppercase md:text-3xl text-neutral-200 font-semibold">
                404 - Not found
              </p>
              <p className="text-wrap md:w-[70%] md:text-base text-[14px] text-neutral-400 text-center">
                The page you are looking for might have been removed or had it
                name changed or it's temporarily unavailable.
              </p>
              <button
                onClick={() => navigate("/")}
                className="uppercase bg-yellow-500 hover:bg-yellow-400/90 md:text-base text-[13px] duration-500 py-2 w-[155px] md:w-[200px] font-semibold shadow-2xl rounded-3xl"
              >
                go to homepage
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default NotFound;
