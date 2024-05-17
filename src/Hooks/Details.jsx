import React from "react";
import { useNavigate } from "react-router-dom";
import { useProfileQuery } from "../redux/ApiSlice";
import Loading from "../components/Loading";

const Details = () => {
  const token = JSON.parse(localStorage.getItem("token"));

 
    const { data, isLoading } = useProfileQuery();

    if (isLoading) {
      return;
    }

    if (!data) {
      localStorage.removeItem("details");
    } else {
      localStorage.setItem("details", JSON.stringify(data));
    }
   
  

  const dat = "";
  return dat;
};

export default Details;
