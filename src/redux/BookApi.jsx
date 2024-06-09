import { ApiSlice } from "./ApiSlice";

const blogApi = ApiSlice.injectEndpoints({
  endpoints: (build) => ({
    tagTypes: ["Book"],
    getBooking: build.query({
      query: () => ({
        url: "/booking/my_bookings/",
        method: "GET",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Book", id })),
              { type: "Book", id: "LIST" },
            ]
          : [{ type: "Book", id: "LIST" }],
    }),

    book: build.mutation({
      query: (id) => ({
        url: `/booking/book/`,
        method: "POST",
      }),
      invalidatesTags: [{ type: "Book", id: "LIST" }],
    }),

    getEscortBooking: build.query({
      query: () => ({
        url: "/booking/escort_bookings/",
        method: "GET",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Book", id })),
              { type: "Book", id: "LIST" },
            ]
          : [{ type: "Book", id: "LIST" }],
    }),
  }),
});

export const { useGetBookingQuery, useGetEscortBookingQuery, useBookMutation } =
  blogApi;
