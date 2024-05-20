import { ApiSlice } from "./ApiSlice";

const tourApi = ApiSlice.injectEndpoints({
  tagTypes: ["Post", "User"],
  endpoints: (build) => ({
    getAllTour: build.query({
      query: () => ({
        url: "/tour/all/",
        method: "GET",
      }),
      providesTags: (result) =>
        result
          ? [
              { type: "Post", id: "LIST" },
              ...result.map(({ id }) => ({ type: "Post", id })),
            ]
          : [{ type: "Post", id: "LIST" }],
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
