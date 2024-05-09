import { ApiSlice } from "./ApiSlice";

const blogApi = ApiSlice.injectEndpoints({
  endpoints: (build) => ({
    getAllBlog: build.query({
      query: () => "blog/list/",
    }),
  }),
});

export const { useGetAllBlogQuery } = blogApi;
