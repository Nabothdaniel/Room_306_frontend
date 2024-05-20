import React from "react";
import ClientProfile from "./ClientProfile";
import EscortProfile from "./EscortProfile";
import { useProfileQuery } from "../redux/ApiSlice";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { users } from "../redux/UtilSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.Util.token);
  const navigate = useNavigate();

  if (token) {
    const { data, isLoading } = useProfileQuery();
    if (isLoading) {
      return <Loading />;
    }

    if (!data) {
      return navigate("/");
    }
  }
  return (
    <div>
      {data?.user_type == "client" && <ClientProfile />}
      {data?.user?.user_type == "escort" && <EscortProfile />}
    </div>
  );
};

export default Profile;
