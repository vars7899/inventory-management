import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./feature/authSlice";
import supplierReducer from "./feature/supplierSlice";

const store = configureStore({
  // list of reducers
  reducer: {
    auth: authReducer,
    supplier: supplierReducer,
  },
});

export default store;
