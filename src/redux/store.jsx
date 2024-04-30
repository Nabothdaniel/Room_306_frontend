import { configureStore } from "@reduxjs/toolkit";
import UtilSlice from "./UtilSlice";
import { countryApi } from "./CountryApi";
import { ApiSlice } from "./ApiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    Util: UtilSlice,
    [countryApi.reducerPath]: countryApi.reducer,
    [ApiSlice.reducerPath]: ApiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([countryApi.middleware, ApiSlice.middleware]),
});

setupListeners(store.dispatch);
