import { ApiSlice } from "./ApiSlice";

const eventApi = ApiSlice.injectEndpoints({
  endpoints: (build) => ({
    getAllEvents: build.query({
      query: () => "/events/",
    }),
    getEventById: build.query({
      query: (id) => `/events/${id}/`,
    }),
  }),
});

export const { useGetAllEventsQuery, useGetEventByIdQuery } = eventApi;
