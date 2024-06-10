import React from "react";
import { useProfileQuery } from "../redux/ApiSlice";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import MyBooking from "./MyBooking";
import MyEscortBooking from "./MyEscortBooking";

const Booking = () => {
  const { data, isLoading } = useProfileQuery();
  const navigate = useNavigate();
  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return navigate("/");
  }

  return (
    <div>
      {data?.profile?.user_type == "client" && <MyBooking />}
      {data?.profile?.user?.user_type == "escort" && <MyEscortBooking />}
    </div>
  );
};

export default Booking;
