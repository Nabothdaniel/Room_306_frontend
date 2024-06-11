import { ApiSlice } from "./ApiSlice";

const escortApi = ApiSlice.injectEndpoints({
  tagTypes: ["Posts", "Follow", "Video", "Comment", "Delete"],
  endpoints: (build) => ({
    getAllEscort: build.query({
      query: ({ gender, country, sexual_orientation, display_name }) =>
        `escort/filter/?sexual_orientation=${sexual_orientation}&country=${country}&display_name=${display_name}&gender=${gender}`,
    }),

    getSearchEscort: build.query({
      query: ({
        gender,
        country,
        sexual_orientation,
        display_name,
        looks,
        build,
        city,
        state,
        smoker,
        ethnicity,
        bust_size,
        services,
      }) =>
        `/escort/search/filter/?state=${state}&smoker=${smoker}&services=${services}&display_name=${display_name}&gender=${gender}&country=${country}&city=${city}&sexual_orientation=${sexual_orientation}&build=${build}&looks=${looks}&bust_size=${bust_size}&ethnicity=${ethnicity}`,
    }),

    getAllEscorts: build.query({
      query: () => `/escort/escorts/all/`,
    }),

    getAllVideos: build.query({
      query: () => `/escort/allvideos`,
    }),

    getVideoById: build.query({
      query: (id) => `/escort/video/${id}/`,
      providesTags: [{ type: "Video", id: "LIST" }],
    }),

    comment: build.mutation({
      query: (id) => ({
        url: `/escort/escort/video_comment/${id}/`,
        method: "POST",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      }),
      invalidatesTags: [{ type: "Comment", id: "LIST" }],
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

    getProfileById: build.query({
      query: (username) => `/profile/username/${username}/`,
      providesTags: [{ type: "Follow", id: "LIST" }],
    }),

    follow: build.mutation({
      query: (id) => ({
        url: `/profile/follow_user/${id}/`,
        method: "POST",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      }),
      invalidatesTags: [{ type: "Follow", id: "LIST" }],
    }),

    unfollow: build.mutation({
      query: (id) => ({
        url: `/profile/unfollow_user/${id}/`,
        method: "PUT",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      }),
      invalidatesTags: [{ type: "Follow", id: "LIST" }],
    }),

    following: build.query({
      query: () => ({
        url: "/profile/following/",
        method: "GET",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Follow", id })),
              { type: "Follow", id: "LIST" },
            ]
          : [{ type: "Follow", id: "LIST" }],
    }),

    getComment: build.query({
      query: (id) => ({
        url: `/escort/escort/video/comments/${id}/`,
        method: "GET",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Comment", id })),
              { type: "Comment", id: "LIST" },
            ]
          : [{ type: "Comment", id: "LIST" }],
    }),

    likeVideo: build.mutation({
      query: (id) => ({
        url: `/escort/like-video/${id}/`,
        method: "PUT",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      }),
      invalidatesTags: [{ type: "Video", id: "LIST" }],
    }),

    unlikeVideo: build.mutation({
      query: (id) => ({
        url: `/escort/unlike-video/${id}/`,
        method: "PUT",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      }),
      invalidatesTags: [{ type: "Video", id: "LIST" }],
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
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Delete", id })),
              { type: "Delete", id: "LIST" },
            ]
          : [{ type: "Delete", id: "LIST" }],
    }),

    deleteVideo: build.mutation({
      query: (id) => ({
        url: `/escort/delete/video/${id}/`,
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      }),
      invalidatesTags: [{ type: "Delete", id: "LIST" }],
    }),

    myFavorite: build.query({
      query: () => ({
        url: "escort/escortfavorites/",
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

    addServices: build.mutation({
      query: (body) => ({
        url: "/profile/services/add_services/",
        method: "POST",
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
  useMyFavoriteQuery,
  useFollowingQuery,
  useGetProfileByIdQuery,
  useUnfollowMutation,
  useGetCommentQuery,
  useCommentMutation,
  useAddServicesMutation,
  useDeleteVideoMutation,
  useGetSearchEscortQuery,
} = escortApi;
