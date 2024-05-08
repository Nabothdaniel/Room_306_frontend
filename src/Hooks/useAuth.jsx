import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { setCredentials } from "../redux/UtilSlice";

const useAuth = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.Util.token);

  if (token) {
    const decode = jwtDecode(token);

    const expire = decode.exp;

    const now = Date.now() / 1000;

    if (expire < now) {
      const user_id = "";
      dispatch(setCredentials(""));

      return user_id;
    } else {
      const { user_id } = decode;

      return { user_id };
    }
  }

  const user_id = "";
  return user_id;
};

export default useAuth;
