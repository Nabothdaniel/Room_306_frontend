import { ApiSlice } from "./ApiSlice";

const tourApi = ApiSlice.injectEndpoints({
  tagTypes: ["Post", "User"],
  endpoints: (build) => ({
    getAllTour: build.query({
      query: () => ({
        url: "/tour/all/",
        method: "GET",
      }),
    }),
    tourFavorite: build.mutation({
      query: (id) => ({
        url: `tour/tours/favorite/${id}/`,
        method: "POST",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
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

    getTourById: build.query({
      query: (id) => ({
        url: `/tour/${id}/`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllTourQuery, useGetMyTourQuery, useGetTourByIdQuery, useTourFavoriteMutation } =
  tourApi;
