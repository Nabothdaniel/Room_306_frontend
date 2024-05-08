import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navOpen: false,
  userDetails: {},
  token: localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : "",
};

export const UtilSlice = createSlice({
  name: "Util",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.token += action.payload;
      localStorage.setItem("token", JSON.stringify(action.payload));
    },
    navClick: (state, action) => {
      state.navOpen = action.payload;
    },
    details: (state, action) => {
      state.userDetails = { ...action.payload, ...state.userDetails };
    },
    logout: (state) =>  {
      localStorage.removeItem("token")
      localStorage.removeItem("details")
    },
  },
});

export const { users, setCredentials, navClick, details, logout } = UtilSlice.actions;
export default UtilSlice.reducer;
