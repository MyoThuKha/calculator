import { configureStore } from "@reduxjs/toolkit";
import rootSlice from "./slice";

const store = configureStore({
  reducer: {
    root: rootSlice,
  },
});

export default store;
