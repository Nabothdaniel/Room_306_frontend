import { ApiSlice } from "./ApiSlice";

const roomApi = ApiSlice.injectEndpoints({
  endpoints: (build) => ({
    getAllRooms: build.query({
      query: () => "room/all",
    }),
    getMyRooms: build.query({
      query: () => ({
        url: "/room/my_rooms/",
        method: "GET",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      }),
    }),
  }),
});

export const { useGetAllRoomsQuery, useGetMyRoomsQuery } = roomApi;
