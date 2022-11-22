import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./feature/authSlice";

const store = configureStore({
  // list of reducers
  reducer: {
    auth: authReducer,
  },
});

export default store;
