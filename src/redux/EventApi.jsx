import { ApiSlice } from "./ApiSlice";


const eventApi = ApiSlice.injectEndpoints({
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

    getEventReview: build.query({
      query: (id) => `/events/reviews/${id}/`,
    }),
  }),
});

export const {
  useGetAllEventsQuery,
  useGetEventByIdQuery,
  useGetEventReviewQuery,
  useMyEventQuery,
  useDeleteEventMutation,
 
} = eventApi;
