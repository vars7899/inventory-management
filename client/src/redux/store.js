import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./feature/authSlice";
import supplierReducer from "./feature/supplierSlice";
import docReducer from "./feature/docSlice";
import appReducer from "./feature/appSlice";

const store = configureStore({
  // list of reducers
  reducer: {
    auth: authReducer,
    supplier: supplierReducer,
    docs: docReducer,
    app: appReducer,
  },
});

export default store;
