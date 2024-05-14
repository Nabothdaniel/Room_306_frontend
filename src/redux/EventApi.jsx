import { ApiSlice } from "./ApiSlice";

const eventApi = ApiSlice.injectEndpoints({
  endpoints: (build) => ({
    getAllEvents: build.query({
      query: () => "blog/list/",
    }),
  }),
});

export const { useGetAllEventsQuery } = eventApi;
