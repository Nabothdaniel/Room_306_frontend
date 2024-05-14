import { ApiSlice } from "./ApiSlice";

const escortApi = ApiSlice.injectEndpoints({
  endpoints: (build) => ({
    getAllEscorts: build.query({
      query: () => "escort/escorts/all/",
    }),
    updateEscort: build.mutation({
      query: (body) => ({
        url: "/profile/escort/edit/",
        method: "PUT",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
        body,
      }),
    }),
  }),
});

export const { useGetAllEscortsQuery, useRegisterEscortMutation, useUpdateEscortMutation } = escortApi;
