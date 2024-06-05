import React from "react";
import { useNavigate } from "react-router-dom";
import { useProfileQuery } from "../redux/ApiSlice";
import Loading from "../components/Loading";
import { setCredentials } from "../redux/UtilSlice";
import { useSelector } from "react-redux";

const Details = () => {
  const token = useSelector((state) => state.Util.token);
  const { data, isLoading } = useProfileQuery();

  if (token) {
    if (isLoading) {
      return;
    }

    if (data == null) {
      localStorage.removeItem("details");
    } else {
      localStorage.setItem("details", JSON.stringify(data));
    }
  }

  const dat = "";
  return dat;
};

export default Details;
