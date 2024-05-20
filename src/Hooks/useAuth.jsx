import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { useProfileQuery } from "../redux/ApiSlice";

const useAuth = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.Util.token);
  const { data, isLoading } = useProfileQuery();

  if (token) {
    const decode = jwtDecode(token);

    const expire = decode.exp;

    const now = Date.now() / 1000;

    if (expire < now) {
      const user_id = "";
      localStorage.removeItem("token");
      localStorage.removeItem("details");

      return user_id;
    } else {
      if (isLoading) {
        const { user_id } = decode;

        return { user_id };
      } else {
        if (!data) {
          localStorage.removeItem("details");
        } else {
          localStorage.setItem("details", JSON.stringify(data));
        }
        const { user_id } = decode;

        return { user_id };
      }
    }
  }

  localStorage.removeItem("details");
  const user_id = "";
  return user_id;
};

export default useAuth;
