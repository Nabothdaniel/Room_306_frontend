import { ApiSlice } from "./ApiSlice";

const roomApi = ApiSlice.injectEndpoints({
  endpoints: (build) => ({
    getAllRooms: build.query({
      query: () => "room/all",
    }),
  }),
});

export const { useGetAllRoomsQuery } = roomApi;
