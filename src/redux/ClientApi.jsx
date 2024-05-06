import { ApiSlice } from "./ApiSlice";

const clientApi = ApiSlice.injectEndpoints({
  endpoints: (build) => ({
    
  }),
});

export const { useRegisterClientMutation } = clientApi;
