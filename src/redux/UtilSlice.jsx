import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navOpen: true,
};

export const UtilSlice = createSlice({
  name: "Util",
  initialState,
  reducers: {
    navClick: (state, action) => {
      state.navOpen = action.payload
    },
  },
});

export const { navClick } = UtilSlice.actions;
export default UtilSlice.reducer;
