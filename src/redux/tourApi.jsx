import { ApiSlice } from "./ApiSlice";

const tourApi = ApiSlice.injectEndpoints({
  tagTypes: ["Tour", "Tours"],
  endpoints: (build) => ({
    getAllTour: build.query({
      query: () => ({
        url: "/tour/all/",
        method: "GET",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Tour", id })),
              { type: "Tour", id: "LIST" },
            ]
          : [{ type: "Tour", id: "LIST" }],
    }),

    
    tourFavorite: build.mutation({
      query: (id) => ({
        url: `tour/tours/favorite/${id}/`,
        method: "POST",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      }),
      invalidatesTags: [{ type: "Tour", id: "LIST" }],
    }),

    addTourReview: build.mutation({
      query: (id) => ({
        url: `/tour/addreview/${id}/`,
        method: "POST",
      }),
      invalidatesTags: [{ type: "Tours", id: "LIST" }],
    }),

    getTourReview: build.query({
      query: (id) => `/tour/tour_reviews/${id}/`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Tours", id })),
              { type: "Tours", id: "LIST" },
            ]
          : [{ type: "Tours", id: "LIST" }],
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

    favoriteTour: build.query({
      query: () => ({
        url: "/tour/my_favorite_tours/",
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

export const {
  useGetAllTourQuery,
  useGetMyTourQuery,
  useGetTourByIdQuery,
  useTourFavoriteMutation,
  useFavoriteTourQuery,
  useGetTourReviewQuery,
  useAddTourReviewMutation,
} = tourApi;
