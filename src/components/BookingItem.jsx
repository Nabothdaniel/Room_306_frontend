import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EscortReview from "./EscortReview";
import { useGetAllEscortsQuery } from "../redux/EscortApi";
import Loading from "./Loading";

const BookingItem = ({ book }) => {
  const [review, setReview] = useState(false);

  const [cancel, setCancel] = useState({
    status: "cancelled",
  });



  const handleDecline = async () => {
    try {
      const res = await axios.put(
        `https://backend.theroom306.com/api/booking/accept_decline/${book.id}/`,
        cancel,
        {
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
        }
      );

      window.location.reload(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleReview = () => {
    setReview(!review);
  };

  

  return (
    <div className="flex pt-5 max-h-[400px] overflow-y-scroll duration-500 pb-4 items-center">
      <p className="w-[290px] flex items-center gap-x-3 cursor-pointer font-semibold">
        <Link to={`/escort/${book.escort.username}`}>
          <img
            className="size-[50px] rounded-full"
            src={`https://backend.theroom306.com${book.escort.image}`}
            alt=""
          />
        </Link>
        <Link to={`/escort/${book.escort.username}`}>
          {book.escort.display_name}
        </Link>
      </p>

      <p className="w-[300px] text-center">{book.time}</p>
      <p className="w-[290px] text-center">{book.date}</p>
      <p className="w-[290px] text-center ">{book.message}</p>
      <p
        className={` ${book.status == "cancelled" && "text-red-400"} ${
          book.status == "completed" && "text-green-400"
        } ${book.status == "accepted" && "text-blue-400"} ${
          book.status == "pending" && "text-yellow-400"
        } w-[300px] text-center font-semibold`}
      >
        {book.status}
      </p>
      <div className="w-[300px] text-center flex justify-center gap-x-3">
        {book.status != "completed" && book.status != "cancelled" && (
          <p
            onClick={handleDecline}
            className="bg-red-400 text-[12px] shadow-2xl py-1 text-black px-2 rounded-3xl cursor-pointer font-semibold"
          >
            Cancel
          </p>
        )}
        {book.status == "completed" && (
          <p
            onClick={handleReview}
            className="bg-green-300 text-[12px] shadow-2xl  py-1 text-black px-2 rounded-xl cursor-pointer font-semibold"
          >
            Review Escort
          </p>
        )}
      </div>
      <EscortReview
        id={book.escort.id}
        reviewClass={`${!review ? "translate-x-[120vw]" : "translate-x-0"}`}
        handleReview={handleReview}
      />
    </div>
  );
};

export default BookingItem;
