import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navOpen: false,
  userDetails: {},
  Search: { Roomcountry: "hhh", Roomcity: "" },
  token: localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : "",
  image: [],
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
    roomDetails: (state, action) => {
      state.Search = { ...action.payload, ...state.Search };
    },
    logout: (state) => {
      localStorage.removeItem("details");
      localStorage.removeItem("token");
    },
    Image: (state, action) => {
      state.image.push(action.payload);
    },
  },
});

export const {
  users,
  setCredentials,
  navClick,
  details,
  logout,
  roomDetails,
  Image,
} = UtilSlice.actions;
export default UtilSlice.reducer;
