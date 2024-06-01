import { ApiSlice } from "./ApiSlice";

const blogApi = ApiSlice.injectEndpoints({
  endpoints: (build) => ({
    getAllBlog: build.query({
      query: () => "blog/list/",
    }),

    getSingleBlog: build.query({
      query: (slug) => `/blog/details/${slug}/`,
    }),
  }),
});

export const { useGetAllBlogQuery, useGetSingleBlogQuery } = blogApi;
