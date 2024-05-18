import { ApiSlice } from "./ApiSlice";

const blogApi = ApiSlice.injectEndpoints({
  endpoints: (build) => ({
    getBooking: build.query({
      query: () => ({
        url: "/booking/my_bookings/",
        method: "GET",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      }),
    }),
    getEscortBooking: build.query({
      query: () => ({
        url: "/booking/escort_bookings/",
        method: "GET",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      }),
    }),
  }),
});

export const { useGetBookingQuery, useGetEscortBookingQuery } = blogApi;
