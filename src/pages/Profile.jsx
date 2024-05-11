import React from "react";
import ClientProfile from "./ClientProfile";
import EscortProfile from "./EscortProfile";
import { useProfileQuery } from "../redux/ApiSlice";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { users } from "../redux/UtilSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useProfileQuery();
  const navigate = useNavigate();
  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return navigate("/");
  }

  if (data !== null) {
    localStorage.setItem("details", JSON.stringify(data));
  }

  return (
    <div>
      {data.user_type == "client" && <ClientProfile />}
      {data.user.user_type == "escort" && <EscortProfile />}
    </div>
  );
};

export default Profile;
