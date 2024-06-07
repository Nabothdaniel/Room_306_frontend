import { ApiSlice } from "./ApiSlice";

const roomApi = ApiSlice.injectEndpoints({
  tagTypes: ["Room"],
  endpoints: (build) => ({
    getAllRooms: build.query({
      query: () => "room/all",
    }),
    getFilteredRoom: build.query({
      query: ({ country, city }) =>
        `room/filter/?country=${country}&city=${city}`,
    }),
    getMyRooms: build.query({
      query: () => ({
        url: "/room/my_rooms/",
        method: "GET",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Room", id })),
              { type: "Room", id: "LIST" },
            ]
          : [{ type: "Room", id: "LIST" }],
    }),

    deleteRoom: build.mutation({
      query: (id) => ({
        url: `/room/${id}/delete/`,
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      }),
      invalidatesTags: [{ type: "Room", id: "LIST" }],
    }),

    getRoomById: build.query({
      query: (id) => ({
        url: `/room/${id}/`,
        method: "GET",
      }),
    }),
    getRoomReview: build.query({
      query: (id) => `room/room_reviews/${id}/`,
    }),
  }),
});

export const {
  useGetAllRoomsQuery,
  useGetMyRoomsQuery,
  useGetRoomByIdQuery,
  useGetFilteredRoomQuery,
  useGetRoomReviewQuery,
  useDeleteRoomMutation,
} = roomApi;
// /room/{room_id}/delete/
