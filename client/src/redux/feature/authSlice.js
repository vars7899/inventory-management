import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "../service/authService";

// Get user name from local storage
const userName = JSON.parse(localStorage.getItem("userName"));
console.log(userName);

const initialState = {
  isLoggedIn: false,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: null,
  name: {
    firstName: userName.firstName ? userName.firstName : "",
    lastName: userName.lastName ? userName.lastName : "",
  },
  user: null,
};

// Extra reducers thunk
export const registerUser = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const loginUser = createAsyncThunk(
  "auth/login",
  async (user, thunkAPI) => {
    try {
      return await authService.login(user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const logoutUser = createAsyncThunk("auth/logout", async (thunkAPI) => {
  try {
    return await authService.logout();
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    RESET(state) {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        localStorage.setItem(
          "userName",
          JSON.stringify({
            firstName: action.payload.user.firstName,
            lastName: action.payload.user.lastName,
          })
        );
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload.user;
        state.name.firstName = action.payload.user.firstName;
        state.name.lastName = action.payload.user.lastName;
        state.message = action.payload.message;
        state.isLoggedIn = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
        state.isLoggedIn = false;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.message;
        state.user = action.payload.user;
        state.name.firstName = action.payload.user?.firstName;
        state.name.lastName = action.payload.user?.lastName;
        state.isLoggedIn = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
        state.isLoggedIn = false;
      })
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.message;
        state.user = null;
        state.name.firstName = null;
        state.name.lastName = null;
        state.isLoggedIn = false;
        // remove name from local storage
        localStorage.removeItem("userName");
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      });
  },
});

export const { SET_LOGIN, SET_NAME, SET_USER, RESET } = authSlice.actions;

export default authSlice.reducer;
