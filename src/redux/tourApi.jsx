import { ApiSlice } from "./ApiSlice";

const tourApi = ApiSlice.injectEndpoints({
  endpoints: (build) => ({
    getAllTour: build.query({
      query: () => "tour/all/",
      headers: {
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
      },
    }),
  }),
});

export const { useGetAllTourQuery } = tourApi;
