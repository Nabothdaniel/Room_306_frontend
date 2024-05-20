import { ApiSlice } from "./ApiSlice";

const tourApi = ApiSlice.injectEndpoints({
  endpoints: (build) => ({
    getAllTour: build.query({
      query: () => ({
        url: "/tour/all/",
        method: "GET",
      }),
    }),
    getMyTour: build.query({
      query: () => ({
        url: "/tour/my_tours/",
        method: "GET",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      }),
    }),
  }),
});

export const { useGetAllTourQuery, useGetMyTourQuery } = tourApi;
