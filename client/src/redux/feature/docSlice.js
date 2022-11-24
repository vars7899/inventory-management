import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import docService from "../service/docService";

const initialState = {
  isLoading: false,
  isError: false,
  isFetchAllSuccess: false,
  isCreateOneSuccess: false,
  isFetchOneSuccess: false,
  isUpdateOneSuccess: false,
  isDeleteOneSuccess: false,
  message: null,
  docs: null,
  selectedDoc: null,
};

export const GET_ALL_DOCS = createAsyncThunk(
  "GET_ALL_DOCS",
  async (thunkAPI) => {
    try {
      return await docService.fetchAllDocs();
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
export const UPDATE_ONE_DOC = createAsyncThunk(
  "UPDATE_ONE_DOC",
  async (doc, thunkAPI) => {
    try {
      return await docService.updateOneDoc(doc.data, doc.id);
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
export const DELETE_ONE_DOC = createAsyncThunk(
  "DELETE_ONE_DOC",
  async (docId, thunkAPI) => {
    try {
      return await docService.deleteOneDoc(docId);
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
export const CREATE_ONE_DOC = createAsyncThunk(
  "CREATE_ONE_DOC",
  async (docData, thunkAPI) => {
    try {
      return await docService.createOneDoc(docData);
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

const docSlice = createSlice({
  name: "docs",
  initialState,
  reducers: {
    DOCS_RESET(state) {
      state.isLoading = false;
      state.isError = false;
      state.isFetchAllSuccess = false;
      state.isCreateOneSuccess = false;
      state.isFetchOneSuccess = false;
      state.isUpdateOneSuccess = false;
      state.isDeleteOneSuccess = false;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(GET_ALL_DOCS.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GET_ALL_DOCS.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isFetchAllSuccess = true;
        state.message = action.payload.message;
        state.docs = action.payload.documents;
      })
      .addCase(GET_ALL_DOCS.rejected, (state, action) => {
        state.isLoading = false;
        state.isFetchAllSuccess = false;
        state.message = action.payload;
      })
      .addCase(UPDATE_ONE_DOC.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(UPDATE_ONE_DOC.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isUpdateOneSuccess = true;
        state.message = action.payload.message;
        console.log(state.docs);
      })
      .addCase(UPDATE_ONE_DOC.rejected, (state, action) => {
        state.isLoading = false;
        state.isUpdateOneSuccess = false;
        state.message = action.payload;
      })
      .addCase(DELETE_ONE_DOC.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(DELETE_ONE_DOC.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isUpdateOneSuccess = action.payload.success;
        state.message = action.payload.message;
      })
      .addCase(DELETE_ONE_DOC.rejected, (state, action) => {
        state.isLoading = false;
        state.isUpdateOneSuccess = false;
        state.message = action.payload;
      })
      .addCase(CREATE_ONE_DOC.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(CREATE_ONE_DOC.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isCreateOneSuccess = action.payload.success;
        state.message = action.payload.message;
      })
      .addCase(CREATE_ONE_DOC.rejected, (state, action) => {
        state.isLoading = false;
        state.isCreateOneSuccess = false;
        state.message = action.payload;
      });
  },
});

export const { DOCS_RESET } = docSlice.actions;

export default docSlice.reducer;
