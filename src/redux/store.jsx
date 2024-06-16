import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import UtilSlice from "./UtilSlice";
import { countryApi } from "./CountryApi";
import { ApiSlice } from "./ApiSlice";

export const store = configureStore({
  reducer: {
    Util: UtilSlice,
    [countryApi.reducerPath]: countryApi.reducer,
    [ApiSlice.reducerPath]: ApiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([countryApi.middleware, ApiSlice.middleware]),

  devTools: false,
});

setupListeners(store.dispatch);
