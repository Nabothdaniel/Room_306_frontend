import { ApiSlice } from "./ApiSlice";

const eventApi = ApiSlice.injectEndpoints({
  tagTypes: ["Event"],
  endpoints: (build) => ({
    getAllEvents: build.query({
      query: () => "/events/",
    }),
    deleteEvent: build.mutation({
      query: (id) => ({
        url: `/events/${id}/delete/`,
        method: "DELETE",
      }),
    }),

    getEventById: build.query({
      query: (id) => `/events/${id}/`,
    }),

    myEvent: build.query({
      query: () => ({
        url: "/events/user/",
        method: "GET",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      }),
    }),

    addReview: build.mutation({
      query: (id) => ({
        url: `/events/${id}/review/`,
        method: "POST",
      }),
      invalidatesTags: [{ type: "Event", id: "LIST" }],
    }),

    getEventReview: build.query({
      query: (id) => `/events/reviews/${id}/`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Event", id })),
              { type: "Event", id: "LIST" },
            ]
          : [{ type: "Event", id: "LIST" }],
    }),
  }),
});

export const {
  useGetAllEventsQuery,
  useGetEventByIdQuery,
  useGetEventReviewQuery,
  useMyEventQuery,
  useDeleteEventMutation,
  useAddReviewMutation,
} = eventApi;
