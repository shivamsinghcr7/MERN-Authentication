// thunk middleware is built-in
// uses RTK query - library for interacting with backend API.
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RENDER_URL } from "../../url.js";

// baseUrl is empty string because we've already set proxy as http://localhost:5000, otherwise we can set that here
//const baseQuery = fetchBaseQuery({ baseUrl: "" });
const baseQuery = fetchBaseQuery({ baseUrl: RENDER_URL });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User"],
  endpoints: (builder) => ({}),
});
