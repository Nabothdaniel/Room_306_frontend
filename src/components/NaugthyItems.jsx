import React, { useEffect, useState } from "react";
import Naugt from "../images/naught.jpeg";
import Eye from "../images/eye.svg";
import Like from "../images/dislike.svg";
import Message from "../images/messages-2.svg";
import Blog from "../images/blog.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../Hooks/firebase";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import toast from "react-hot-toast";

const NaugthyItems = ({ items, premium }) => {
  const navigate = useNavigate();
  let users = JSON.parse(localStorage.getItem("details"));
  let user = users?.profile;

  const [User, setUser] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const user = collection(db, "video");
      const userSnapshot = await getDocs(user);
      const users = userSnapshot.docs.map((doc) => doc.data());
      setUser(users);
    };
    getUser();
  }, []);

  const newUser = User?.filter((item) => item.name == user.display_name);
  const newUsers = newUser?.filter((item) => item.video_id == items.id);

  const handlePremium = () => {
    if (user) {
      if (newUsers[0]?.video_id == items.id) {
        navigate(`/naughty-videos/${items.id}`);
      } else {
        localStorage.setItem("id", JSON.stringify(items.id));
        premium();
      }
    } else {
      toast.error("Only Signed In User Can view premium video");
    }
  };

  if (items.is_premium) {
    return (
      <div
        onClick={handlePremium}
        className="bg-[#1E1E1E] cursor-pointer block relative text-white  p-2 rounded-lg"
      >
        <video
          className="h-[300px] w-full object-cover rounded-lg"
          src={`https://backend.theroom306.com${items.video}`}
        ></video>

        <div className=" w-[100%] absolute bottom-0 left-0">
          <div className="mx-auto p-2 z-[999999] rounded-t-3xl md:w-[97%] w-[98%] bg-[#1E1E1E]">
            <div className="flex z-[999999]">
              <img
                className="size-[40px] rounded-full"
                src={`https://backend.theroom306.com${items.escort.user.image}`}
                alt=""
              />
              <div className="text-white ml-3">
                <p className="text-[14px] font-semibold">
                  {items.escort.user.display_name}
                </p>
                <p className="text-[11px] text-[#DADADA]">{items.title}</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[14px] text-[#E9CB50] py-2">20 Coins</p>
              <div className="flex">
                <img
                  className=" rotate-180 mr-2 size-[20px]"
                  src={Like}
                  alt=""
                />
                <img className="size-[20px] mr-2" src={Like} alt="" />
                <img className="size-[20px] mr-2" src={Message} alt="" />
                <img className="size-[20px]" src={Eye} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link
      to={`/naughty-videos/${items?.id}`}
      className="bg-[#1E1E1E] block relative text-white  p-2 rounded-lg"
    >
      <video
        className="h-[300px] w-full object-cover rounded-lg"
        src={`https://backend.theroom306.com${items.video}`}
      ></video>

      <div className=" w-[100%] absolute bottom-0 left-0">
        <div className="mx-auto p-2 z-[999999] rounded-t-3xl md:w-[97%] w-[98%] bg-[#1E1E1E]">
          <div className="flex z-[999999]">
            <img
              className="size-[40px] rounded-full"
              src={`https://backend.theroom306.com${items.escort.user.image}`}
              alt=""
            />
            <div className="text-white ml-3">
              <p className="text-[14px] font-semibold">
                {items.escort.user.display_name}
              </p>
              <p className="text-[11px] text-[#DADADA]">{items.title}</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[14px] text-[#E9CB50] py-2">Free video</p>
            <div className="flex">
              <img className=" rotate-180 mr-2 size-[20px]" src={Like} alt="" />
              <img className="size-[20px] mr-2" src={Like} alt="" />
              <img className="size-[20px] mr-2" src={Message} alt="" />
              <img className="size-[20px]" src={Eye} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NaugthyItems;
