import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navOpen: false,
  userDetails: {}
};

export const UtilSlice = createSlice({
  name: "Util",
  initialState,
  reducers: {
    navClick: (state, action) => {
      state.navOpen = action.payload
    },
    details: (state, action) => {
      state.userDetails = { ...action.payload, ...state.userDetails}
    }
  },
});

export const { navClick, details } = UtilSlice.actions;
export default UtilSlice.reducer;
