import { ApiSlice } from "./ApiSlice";

const escortApi = ApiSlice.injectEndpoints({
  tagTypes: ["Posts"],
  endpoints: (build) => ({
    getAllEscort: build.query({
      query: ({ gender, country, sexual_orientation, display_name }) =>
        `escort/filter/?sexual_orientation=${sexual_orientation}&country=${country}&display_name=${display_name}&gender=${gender}`,
    }),
    getAllEscorts: build.query({
      query: () => `/escort/escorts/all/`,
    }),

    getAllVideos: build.query({
      query: () => `/escort/allvideos`,
    }),

    getVideoById: build.query({
      query: (id) => `/escort/video/${id}/`,
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

    likeVideo: build.mutation({
      query: (id) => ({
        url: `/escort/like-video/${id}/`,
        method: "PUT",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Posts", id })),
              { type: "Posts", id: "LIST" },
            ]
          : [{ type: "Posts", id: "LIST" }],
    }),

    unlikeVideo: build.mutation({
      query: (id) => ({
        url: `/escort/unlike-video/${id}/`,
        method: "PUT",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Posts", id })),
              { type: "Posts", id: "LIST" },
            ]
          : [{ type: "Posts", id: "LIST" }],
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

    myVideos: build.query({
      query: () => ({
        url: "/escort/myvideos/",
        method: "GET",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      }),
    }),

    editProfile: build.mutation({
      query: (body) => ({
        url: "/profile/escort/edit/",
        method: "PUT",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
        body,
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
  useGetAllEscortQuery,
  useGetAllVideosQuery,
  useGetVideoByIdQuery,
  useLikeVideoMutation,
  useUnlikeVideoMutation,
  useMyVideosQuery,
  useEditProfileMutation,
} = escortApi;
