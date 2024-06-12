import React, { useEffect, useState } from "react";
import Users from "../images/user-square.svg";
import Video from "../images/video.svg";
import Book from "../images/book-saved.svg";
import Frame from "../images/Frame.svg";
import { useNavigate } from "react-router-dom";
import { useUploadImageMutation } from "../redux/ApiSlice";
import axios from "axios";
import toast from "react-hot-toast";

const Media = ({ mediaClass }) => {
  const user = JSON.parse(localStorage.getItem("details"));
  const [image, setImage] = useState("");

  const formData = new FormData();
  formData.append("image", image);
  formData.append("userId", user.id);

  const navigate = useNavigate();

  const handleVideo = () => {
    navigate("/add-naughty");
  };

  const uploadImage = async () => {
    try {
      const res = await axios.put(
        "https://theroom306.com/api/profile/upload-photo/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success(res.data);
      window.location.reload(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (image) {
      uploadImage();
    }
  }, [image]);

  return (
    <div className={`bg-[#1E1E1E] rounded-xl ${mediaClass} py-8 px-5 md:px-12`}>
      <div className="flex pb-[15px] md:text-base text-[14px] font-semibold text-white items-center">
        <img className="size-8 mr-2" src={Users} alt="" />
        Profile Picture
        <input
          type="file"
          name="image"
          id="file"
          className="input"
          hidden
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
        <img
          onClick={() => document.querySelector(".input").click()}
          className="size-7 cursor-pointer ml-3"
          src={Frame}
          alt=""
        />
      </div>
      {/* <hr />
      <div className="flex pb-[15px] md:text-base text-[14px] pt-4 font-semibold text-white items-center">
        <img className="size-8 mr-2" src={Book} alt="" />
        Story
        <img className="size-7 cursor-pointer ml-3" src={Frame} alt="" />
      </div> */}
      <hr />
      <div className="flex pb-[15px] md:text-base text-[14px] pt-4 font-semibold text-white items-center">
        <img className="size-8 mr-2" src={Video} alt="" />
        Naughty Video
        <img
          onClick={handleVideo}
          className="size-7 cursor-pointer ml-3"
          src={Frame}
          alt=""
        />
      </div>

      <hr />
    </div>
  );
};

export default Media;
