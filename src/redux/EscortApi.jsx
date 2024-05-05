import { ApiSlice } from "./ApiSlice";

const escortApi = ApiSlice.injectEndpoints({
  endpoints: (build) => ({
    getAllEscorts: build.query({
      query: () => "escort/escorts/all/",
    }),
   
  }),
});

export const { useGetAllEscortsQuery, useRegisterEscortMutation } = escortApi;
