// thunk middleware is built-in
// uses RTK query - library for interacting with backend API.
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// baseUrl is empty string because we've already set proxy as http://localhost:5000, otherwise we can set that here
const baseQuery = fetchBaseQuery({ baseUrl: "" });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User"],
  endpoints: (builder) => ({}),
});

