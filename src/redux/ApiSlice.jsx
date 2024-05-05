import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const ApiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://room35backend.onrender.com/api/",
  }),
  endpoints: (build) => ({
    registerEscort: build.mutation({
      query: (body) => ({
        url: "auth/register_escort/",
        method: POST,
        body,
      }),
    }),
  }),
});

export const {useRegisterEscortMutation} = ApiSlice