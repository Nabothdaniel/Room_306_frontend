import { ApiSlice } from "./ApiSlice";

const clientApi = ApiSlice.injectEndpoints({
  endpoints: (build) => ({
    registerClient: build.mutation({
      query: (body) => ({
        url: "auth/register_client/",
        method: "POST",
        headers: new HttpHeaders({
          Accept: "*/*",
          Authorization:
            "Bearer " + JSON.parse(sessionStorage.getItem("token")).token,
          "Access-Control-Allow-Origin": this.apiURL,
          "Access-Control-Allow-Methods":
            "GET, POST, OPTIONS, PUT, PATCH, DELETE",
          "Access-Control-Allow-Headers":
            "origin,X-Requested-With,content-type,accept",
          "Access-Control-Allow-Credentials": "true",
        }),
        body,
      }),
    }),
  }),
});

export const { useRegisterClientMutation } = clientApi;
