import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ApiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://room35backend.onrender.com/api/",
  }),
  tagTypes: ["Post", "User"],
  endpoints: (build) => ({
    registerEscort: build.mutation({
      query: (body) => ({
        url: "auth/register_escort/",
        method: "POST",
        body,
      }),
    }),
    profile: build.query({
      query: () => ({
        url: "/profile/",
        method: "GET",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      }),
      providesTags: ["Post"],
    }),
    updateClient: build.mutation({
      query: (body) => ({
        url: "/profile/edit/",
        method: "PUT",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
        body,
      }),
    }),
    UploadImage: build.mutation({
      query: (body) => ({
        url: "/profile/upload-photo/",
        method: "PUT",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
        body,
      }),
    }),
    login: build.mutation({
      query: (body) => ({
        url: "/auth/login/",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useRegisterEscortMutation,
  useProfileQuery,
  useUpdateClientMutation,
  useLoginMutation,
  useUploadImageMutation,
} = ApiSlice;
