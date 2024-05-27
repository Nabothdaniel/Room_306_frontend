import { ApiSlice } from "./ApiSlice";

const eventApi = ApiSlice.injectEndpoints({
  endpoints: (build) => ({
    getAllEvents: build.query({
      query: () => "/events/",
    }),
    getEventById: build.query({
      query: (id) => `/events/${id}/`,
    }),
    getEventReview: build.query({
      query: (id) => `/events/reviews/${id}/`,
    }),
  }),
});

export const {
  useGetAllEventsQuery,
  useGetEventByIdQuery,
  useGetEventReviewQuery,
} = eventApi;
