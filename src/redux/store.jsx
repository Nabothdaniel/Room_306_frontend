import { configureStore } from "@reduxjs/toolkit";
import UtilSlice from "./UtilSlice";
import { countryApi } from "./CountryApi";

export const store = configureStore({
  reducer: {
    Util: UtilSlice,
    [countryApi.reducerPath]: countryApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countryApi.middleware),
});
