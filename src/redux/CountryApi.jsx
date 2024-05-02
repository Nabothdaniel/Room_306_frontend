import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const countryApi = createApi({
  reducerPath: "country",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates%2Bcities.json",
  }),
  endpoints: (build) => ({
    getCountry: build.query({
      query: () => ({
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCountryQuery } = countryApi;
