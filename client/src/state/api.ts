import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: (build) => ({}),
  tagTypes: [],
});

export const {} = api;
