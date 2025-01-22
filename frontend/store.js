import { configureStore } from "@reduxjs/toolkit";
import authSlice from './src/slices/authSlice.js';
import { apiSlice } from "./src/slices/apiSlice.js";

// setting up store
const store = configureStore({
    reducer: {
        auth: authSlice,
        [apiSlice.reducerPath] : apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: true
})

export default store; 