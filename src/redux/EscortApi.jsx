import { ApiSlice } from "./ApiSlice";

const escortApi = ApiSlice.injectEndpoints({
  
  endpoints: (build) => ({
    getAllEscorts: build.query({
      query: () => "escort/escorts/all/",
    }),
    updateEscort: build.mutation({
      query: (body) => ({
        url: "/profile/escort/edit/",
        method: "PUT",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
        body,
      }),
    }),
    follow: build.mutation({
      query: (id) => ({
        url: `/profile/follow_user/${id}/`,
        method: "POST",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      }),
    }),
    favorite: build.mutation({
      query: (id) => ({
        url: `/profile/addfavorite/${id}/`,
        method: "POST",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      }),
    }),

    getGallery: build.query({
      query: () => ({
        url: "/escort/myphotos/",
        method: "GET",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      }),
    }),
  }),
});

export const {
  useGetAllEscortsQuery,
  useRegisterEscortMutation,
  useUpdateEscortMutation,
  useGetGalleryQuery,
  useFollowMutation,
  useFavoriteMutation,
} = escortApi;
