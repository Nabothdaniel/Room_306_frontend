import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const countryApi = createApi({
  reducerPath: "country",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json",
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
