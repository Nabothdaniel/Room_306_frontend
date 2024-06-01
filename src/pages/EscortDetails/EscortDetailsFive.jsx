import React, { useContext, useEffect, useState } from "react";
import Avatar from "../../images/avatar2.png";
import SideBar from "../../components/SideBar";
import Navbar from "../../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import Upload from "../../images/Upload.svg";
import { useDispatch } from "react-redux";
import { Image, details } from "../../redux/UtilSlice";
import { ImageContext } from "../../Hooks/ImageContext";
import toast from "react-hot-toast";

const EscortDetailsFive = () => {
  const { image, setImage } = useContext(ImageContext);
  const [count, setCount] = useState("");
  const navigate = useNavigate();

  // const item = [];

  // for (let i = 0; i < count; i++) {
  //   item.push(i);
  // }

  const handleImage = () => {
    if (image) {
      navigate("/verification");
    } else {
      toast.error("Please Upload a Picture");
    }
  };

  const handleDelete = () => {
    let text =
      "Pressing Delete will cancel your account Creation\nAre you sure? if so press OK.";
    if (confirm(text) == true) {
      navigate("/");
      window.location.reload(true);
    } else {
    }
  };

  return (
    <div className="block md:flex overflow-x-clip max-w-[1740px] mx-auto">
      <SideBar />

      <div className="flex-1 md:w-[80%] px-4 pt-6 md:pt-14 md:px-10">
        <Navbar
          Headervalue={"Welcome to Room 306"}
          textValue={"Explore our escort at your own pace"}
        />

        <div className="md:py-8 pb-8">
          <div className="flex justify-between items-center pt-2 pb-2 md:pb-6 md:pt-8">
            <h2 className="text-white md:py-4 md:text-2xl font-semibold">
              Escort Details
            </h2>

            <p className="text-white md:text-4xl text-3xl font-semibold">
              <span className="text-[#B29A9A] md:text-2xl text-xl">
                Step <span>5/</span>
              </span>
              6
            </p>
          </div>
          <div className="rounded-xl md:px-16 px-4 md:pl-12 pt-14 pb-10 bg-[#1E1E1E] ">
            <div className="pt-16">
              <img
                className="w-[190px] sm:w-[280px] mx-auto"
                src={Avatar}
                alt=""
              />

              <div className="text-white md:px-8 pt-20 font-semibold">
                <h3 className="md:text-lg pb-4">Female Escorts</h3>
                <ol className=" unorder list-disc pl-8 text-white font-semibold">
                  <li>Upload At least x 4 photos</li>
                  <li>
                    Male Clients tend to like Pics of female escorts in pants
                    and bras, holiday pictures, and nice casual picture in
                    beautiful background.
                  </li>
                  <li>You can cover your face with a sticker.</li>
                  <li>But the pics MUST BE OF YOU !!!- NO FAKE PIC!!</li>
                  <li>
                    We do NOT tolerate Fake pictures. That will result to
                    instant disqualification and ban. Not even a second chance.
                    Don't say you weren't warned⚠️.
                  </li>
                  <li>
                    Do NOT use kids photo for face cover, use emoji😊 instead .
                  </li>
                </ol>
                <div className="grid xl:grid-cols-4 gap-5 mt-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                  {/* {item.map((is, index) => {
                    return ( */}
                  <div
                    onClick={() => document.querySelector(".input").click()}
                    className="w-[100%] cursor-pointer"
                  >
                    <input
                      type="file"
                      name="file"
                      id="file"
                      className="input"
                      hidden
                      onChange={({ target: { files } }) => {
                        if (files) {
                          setImage(files[0]);
                        }
                      }}
                    />
                    {image ? (
                      <img
                        className="rounded-lg h-[280px] object-cover"
                        src={URL.createObjectURL(image)}
                      />
                    ) : (
                      <img
                        className="w-[300px] mx-auto md:mx-0 "
                        src={Upload}
                        alt=""
                      />
                    )}
                  </div>

                  {/* })} */}

                  {/* <div
                    onClick={() => setCount(count + 1)}
                    className="bg-[#676767] h-[280px] md:max-w-[300px] flex justify-center items-center text-[20px] rounded-xl "
                  >
                    {" "}
                    Click Me
                  </div> */}
                </div>
                <div className="mt-4 flex md:justify-start justify-between">
                  <button
                    onClick={handleDelete}
                    className="bg-[#CD2727] text-white mr-5 w-[100%] py-4 md:w-[120px] text font-medium rounded-xl"
                  >
                    Delete
                  </button>
                  <button
                    onClick={handleImage}
                    className="bg-[#E9CB50] block text-center w-[100%] text-[#171717] py-4 md:w-[120px] font-medium rounded-xl"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EscortDetailsFive;
