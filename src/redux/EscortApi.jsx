import { ApiSlice } from "./ApiSlice";

const escortApi = ApiSlice.injectEndpoints({
  endpoints: (build) => ({
    getAllEscorts: build.query({
      query: () => "escort/escorts/all/",
    }),
    registerEscort: build.mutation({
      query: (body) => ({
        url: "auth/register_escort/",
        method: POST,
        body,
      }),
    }),
  }),
});

export const { useGetAllEscortsQuery, useRegisterEscortMutation } = escortApi;
