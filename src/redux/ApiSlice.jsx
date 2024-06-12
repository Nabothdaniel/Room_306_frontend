import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ApiSlice = createApi({
  reducerPath: "Api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://backend.theroom306.com/api/",
  }),
  refetchOnReconnect: true,
  refetchOnFocus: true,
  keepUnusedDataFor: 60,
  tagTypes: ["Posts", "Tests", "Tour", "Note"],
  endpoints: (build) => ({
    wallet: build.query({
      query: () => ({
        url: "/profile/userwallet/",
        method: "GET",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      }),
    }),

    channelById: build.query({
      query: (id) => ({
        url: `channels/${id}/`,
        method: "GET",
      }),
    }),

    sendMessage: build.mutation({
      query: (id) => ({
        url: `channels/${id}/messages/send/`,
        method: "POST",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      }),
      invalidatesTags: [{ type: "Posts", id: "LIST" }],
    }),

    channelMessages: build.query({
      query: (id) => ({
        url: `channels/${id}/messages/`,
        method: "GET",
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

    conversationMessages: build.query({
      query: (id) => ({
        url: `/conversations/${id}/messages/`,
        method: "GET",
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

    channel: build.query({
      query: () => ({
        url: "/channels",
        method: "GET",
      }),
    }),

    conversation: build.query({
      query: () => ({
        url: "/conversations/",
        method: "GET",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      }),
    }),

    blackEscort: build.query({
      query: () => ({
        url: "/blacklisted/escorts/",
        method: "GET",
      }),
    }),

    services: build.query({
      query: () => ({
        url: "/services/",
        method: "GET",
      }),
    }),

    getTestimonial: build.query({
      query: () => ({
        url: "/testimonies/",
        method: "GET",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Tests", id })),
              { type: "Tests", id: "LIST" },
            ]
          : [{ type: "Tests", id: "LIST" }],
    }),

    blackClient: build.query({
      query: () => ({
        url: "/blacklisted/clients/",
        method: "GET",
      }),
    }),

    transaction: build.query({
      query: () => ({
        url: "/escort/mytransactions/",
        method: "GET",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      }),
    }),

    profile: build.query({
      query: () => ({
        url: "/profile/",
        method: "GET",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      }),
    }),

    updateClient: build.mutation({
      query: (body) => ({
        url: "/profile/edit/",
        method: "PUT",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
        body,
      }),
    }),

    UploadImage: build.mutation({
      query: (body) => ({
        url: "/profile/upload-photo/",
        method: "PUT",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
        body,
      }),
    }),
    login: build.mutation({
      query: (body) => ({
        url: "/auth/login/",
        method: "POST",
        body,
      }),
    }),

    ResetPassword: build.mutation({
      query: (body) => ({
        url: "/auth/forgot-password/",
        method: "POST",
        body,
      }),
    }),

    NewPassword: build.mutation({
      query: (body) => ({
        url: "/auth/reset-password/",
        method: "POST",
        body,
      }),
    }),

    Notification: build.query({
      query: () => ({
        url: "/notifications/user/",
        method: "GET",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Note", id })),
              { type: "Note", id: "LIST" },
            ]
          : [{ type: "Note", id: "LIST" }],
    }),

    NotificationById: build.query({
      query: (id) => ({
        url: `/notifications/${id}/`,
        method: "GET",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      }),
    }),

    Note: build.mutation({
      query: (body) => ({
        url: "/auth",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Note", id: "LIST" }],
    }),

    testimonials: build.mutation({
      query: (body) => ({
        url: "/testimonies/create/",
        method: "POST",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
        body,
      }),
      invalidatesTags: [{ type: "Tests", id: "LIST" }],
    }),
  }),
});

export const {
  useProfileQuery,
  useUpdateClientMutation,
  useLoginMutation,
  useUploadImageMutation,
  useResetPasswordMutation,
  useNewPasswordMutation,
  useTransactionQuery,
  useWalletQuery,
  useChannelQuery,
  useChannelByIdQuery,
  useChannelMessagesQuery,
  useSendMessageMutation,
  useBlackEscortQuery,
  useBlackClientQuery,
  useConversationQuery,
  useConversationMessagesQuery,
  useTestimonialsMutation,
  useGetTestimonialQuery,
  useServicesQuery,
  useNotificationQuery,
  useNotificationByIdQuery,
  useNoteMutation,
} = ApiSlice;
