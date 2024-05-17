import React from "react";
import { useNavigate } from "react-router-dom";
import { useProfileQuery } from "../redux/ApiSlice";
import Loading from "../components/Loading";

const useDetails = () => {
  const token = JSON.parse(localStorage.getItem("token"));
 

  if (token) {
    const { data, isLoading } = useProfileQuery();

    if (isLoading) {
      return <Loading />;
    }

    if (!data) {
      localStorage.removeItem("details");
    } else {
      localStorage.setItem("details", JSON.stringify(data));
    }
  }
};

export default useDetails;
