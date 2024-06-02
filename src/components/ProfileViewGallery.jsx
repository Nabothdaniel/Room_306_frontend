import React, { useEffect, useState } from "react";
import { useGetGalleryQuery } from "../redux/EscortApi";
import Loading from "./Loading";
import toast, { LoaderIcon } from "react-hot-toast";
import axios from "axios";

const ProfileViewGallery = ({ galleryClass }) => {
  const { data, isLoading } = useGetGalleryQuery();
  const [image, setImage] = useState("");
  const [load, setLoad] = useState(false);
  const [upload, setUpLoad] = useState(false);

  const formData = new FormData();
  formData.append("image", image);

  const uploadImage = async () => {
    setUpLoad(true);
    try {
      const res = await axios.post(
        "https://room35backend.onrender.com/api/escort/upload-to-gallery/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
        }
      );
      setUpLoad(false);
      toast.success("Image Uploaded Successfully");
      window.location.reload(true);
    } catch (err) {
      setUpLoad(false);
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    setLoad(true);
    try {
      const res = await axios.delete(
        `https://room35backend.onrender.com/api/escort/delete-gallery-photo/${id}/`,

        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
        }
      );
      setLoad(false);
      toast.success("Image Deleted Successfully");
      window.location.reload(true);
    } catch (err) {
      console.log(err);
      setLoad(false);
    }
  };

  useEffect(() => {
    if (image) {
      uploadImage();
    }
  }, [image]);

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return (
      <p
        className={`text-white text-xl flex justify-center h-[20vh] items-center font-semibold ${galleryClass}`}
      >
        No Photos
      </p>
    );
  }

  return (
    <div className={`${galleryClass} pt-10 `}>
      <button
        onClick={() => document.querySelector(".gallery").click()}
        className="bg-yellow-300 mb-8 h-[35px] rounded-3xl font-semibold hover:bg-yellow-300/80 duration-500 w-[100px]"
      >
        {upload ? <LoaderIcon className="mx-auto" /> : "Upload"}
      </button>
      <input
        type="file"
        name="image"
        id="file"
        className="gallery"
        hidden
        onChange={(e) => {
          setImage(e.target.files[0]);
        }}
      />
      <div className="">
        {data.length == 0 ? (
          <div className="flex justify-center items-center h-[40vh]">
            <p className="text-white md:text-xl font-semibold">No Photos</p>
          </div>
        ) : (
          <div className="grid md:gap-4 gap-2 grid-cols-2 md:grid-cols-4">
            {data.map((item, index) => {
              return (
                <div key={index} className="relative">
                  <img
                    className="rounded-xl h-[300px] object-cover"
                    key={index}
                    src={`https://room35backend.onrender.com${item.photo}`}
                  />
                  <button
                    onClick={() => handleDelete(item.id)}
                    disabled={load}
                    className="bg-red-500 mb-8 h-[25px] absolute top-2 right-3 rounded-3xl font-semibold hover:bg-red-500/80 duration-500 w-[80px]"
                  >
                    {load ? <LoaderIcon className="mx-auto" /> : "Delete"}
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileViewGallery;
