import React from "react";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import Frame from "../images/Frame.svg";
import Input from "../images/Input.svg";
import Profile from "../images/profile.jpeg";

const Adverts = () => {
  return (
    <div className="block md:flex overflow-x-clip h-screen max-w-[1740px] mx-auto">
      <SideBar />
      <div className="flex-1 h-full md:w-[80%] px-3 pt-8 md:pt-16 md:px-8 lg:px-14 md:pr-12">
        <Navbar
          Headervalue={"Advert for Quality"}
          textValue={"Advert for best escorts and activities"}
        />

        <div className="px-4 md:px-0">
          <div className="flex pb-4 justify-between items-center pt-10">
            <h1 className="text-white font-semibold text-[24px] flex items-center">
              Classified Ads <img className="size-9 ml-3" src={Frame} alt="" />{" "}
            </h1>
            <p className="text-white cursor-pointer">
              <img className="" src={Input} alt="" />
            </p>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div className="bg-[#1E1E1E] relative rounded-3xl p-7 ">
              <div className="flex justify-between">
                <div className="block profile">
                  <img
                    src={Profile}
                    className="object-cover w-full h-full rounded-full"
                    alt=""
                  />
                </div>
                <div>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nesciunt molestiae amet, quibusdam ipsam numquam unde animi
                  vel iure magni minus hic ducimus ratione deleniti consequuntur
                  cumque nihil. Expedita, fuga vel.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adverts;
