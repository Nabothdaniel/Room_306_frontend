import React, { useContext, useState } from "react";
import User from "../../images/user.jpeg";
import SideBar from "../../components/SideBar";
import Navbar from "../../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import Upload from "../../images/Upload.svg";
import { useDispatch, useSelector } from "react-redux";
import toast, { LoaderIcon } from "react-hot-toast";
import { ImageContext } from "../../Hooks/ImageContext";
import axios from "axios";
import { setCredentials } from "../../redux/UtilSlice";

const EscortDetailsSecFive = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { image } = useContext(ImageContext);
  const [VImage, setVimage] = useState("");
  const [load, setLoad] = useState(false);
  const data = useSelector((state) => state.Util.userDetails);

  const handleSubmit = async () => {
    if (VImage) {
      setLoad(true);
      try {
        const res = await axios.post(
          "https://room35backend.onrender.com/api/auth/register_escort/",
          {
            ...data,
            verification_image: VImage,
            image: image,
            user_type: "escort",
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setLoad(false);
        dispatch(setCredentials(res.data?.token));
        navigate("/services");
        window.location.reload(true);
      } catch (err) {
        console.log(err);
        setLoad(false);
      }
    } else {
      toast.error("A Picture of yourself is needed");
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
          <div className="flex justify-between items-center md:pb-6 pt-2 pb-2 md:pt-8">
            <h2 className="text-white md:py-4  md:text-2xl font-semibold">
              Escort Details
            </h2>

            <p className="text-white md:text-4xl text-3xl font-semibold">
              <span className="text-[#B29A9A] md:text-2xl text-xl">
                Step <span>5/</span>
              </span>
              6
            </p>
          </div>
          <div className="rounded-xl lg:px-16 px-5 pb-10 bg-[#1E1E1E] ">
            <div className="md:pt-16 pt-5">
              <h2 className="md:text-2xl text-xl font-semibold text-white">
                Verification
              </h2>

              <div className="text-white pt-8">
                <h3 className="md:text-lg pb-4 lg:max-w-[900px]">
                  WRITE YOUR USERNAME (EG SHARON101 , BARBIE44 , WHATEVER YOUR
                  USERNAME IS) AND CODEDRUNS, ON A PIECE OF PAPER, TAKE A SELFIE
                  HOLDING THE PAPER UP
                </h3>
                <ol className="unorder list-decimal pl-8 text-white">
                  <li>
                    Your FULL FACE, EYES AND NECK must be clearly visible.
                  </li>
                  <li>No wig or weavon covering your face.</li>
                  <li>The hand holding your paper up MUST be visible.</li>
                  <li>
                    The verification photo must be BRIGHT and Clearly visible.
                  </li>
                </ol>
                <h2 className="md:text-lg text-base pb-4 pt-5">
                  Please strictly adhere to this instruction else your account
                  will be rejected.
                </h2>
                <div className=" flex items-center md:items-start flex-col pt-10 mx-auto gap-y-4 md:flex-row gap-x-4">
                  <img
                    className="h-[330px]  max-w-[280px] rounded-xl"
                    src={User}
                    alt=""
                  />
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
                          setVimage(files[0]);
                        }
                      }}
                    />
                    {VImage ? (
                      <img
                        className="rounded-lg h-[330px] object-cover max-w-[280px]"
                        src={URL.createObjectURL(VImage)}
                      />
                    ) : (
                      <img
                        className="w-[300px] mx-auto md:mx-0 "
                        src={Upload}
                        alt=""
                      />
                    )}
                  </div>
                </div>
                <div className="mt-4 flex justify-between md:justify-start">
                  <button
                    onClick={handleDelete}
                    className="bg-[#CD2727] text-white mr-5 w-[100%] py-4 md:w-[120px] font-semibold rounded-xl"
                  >
                    Delete
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={load}
                    className="bg-[#E9CB50] text-center block w-[100%] text-[#171717] py-4 md:w-[120px] font-semibold rounded-xl"
                  >
                    {load ? <LoaderIcon className="mx-auto" /> : "Submit"}
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

export default EscortDetailsSecFive;
