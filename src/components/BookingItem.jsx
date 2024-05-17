import React, { useState } from "react";
import Blog from "../images/blog.jpeg";
import axios from "axios";

const BookingItem = ({ book }) => {
  const [formData, setformData] = useState({
    status: "accepted",
  });

  const [complete, setComplete] = useState({
    status: "completed",
  });

  const handleAccept = async () => {
    try {
      const res = await axios.put(
        `https://room35backend.onrender.com/api/booking/accept/${book.id}/`,
        formData,
        {
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
        }
      );

      window.location.reload(true);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDecline = async () => {
    try {
      const res = await axios.delete(
        `https://room35backend.onrender.com/api/booking/delete/${book.id}/`,

        {
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
        }
      );

      window.location.reload(true);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const handleComplete = async () => {
    try {
      const res = await axios.put(
        `https://room35backend.onrender.com/api/booking/complete/${book.id}/`,
        complete,
        {
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
        }
      );

      window.location.reload(true);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  

  return (
    <div className="flex pt-5 duration-500 pb-4 items-center">
      <p className="w-[300px] flex items-center justify-center gap-x-3 cursor-pointer font-semibold">
        <img className="size-[50px] rounded-full" src={Blog} alt="" />
        {book.client_name}
      </p>
      <p className="w-[300px] text-center">{book.time}</p>
      <p className="w-[300px] text-center">{book.date}</p>
      <p className="w-[300px] text-center">{book.message}</p>
      <div className="w-[300px] text-center flex justify-center gap-x-3">
        {book.status == "pending" && (
          <p
            onClick={handleAccept}
            className="bg-green-300 text-[12px] shadow-2xl  py-1 text-black px-2 rounded-3xl cursor-pointer font-semibold"
          >
            Accept
          </p>
        )}

        {book.status == "accepted" && (
          <p
            onClick={handleComplete}
            className="bg-green-300 text-[12px] shadow-2xl  py-1 text-black px-2 rounded-3xl cursor-pointer font-semibold"
          >
            Complete
          </p>
        )}
        {book.status !== "completed" && (
          <p
            onClick={handleDecline}
            className="bg-red-400 text-[12px] shadow-2xl py-1 text-black px-2 rounded-3xl cursor-pointer font-semibold"
          >
            Cancel
          </p>
        )}
      </div>
    </div>
  );
};

export default BookingItem;
