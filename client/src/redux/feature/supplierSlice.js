import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import supplierService from "../service/supplierService";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  isDeletedSuccess: false,
  isUpdatedSuccess: false,
  isReadSuccess: false,
  message: null,
  supplierList: null,
  supplier: {
    name: "",
    street: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
    phone: "",
    fax: "",
    email: "",
    website: "",
  },
};

export const fetchAllSupplier = createAsyncThunk(
  "supplier/getAllSupplier",
  async (thunkAPI) => {
    try {
      return await supplierService.getAllSupplier();
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
export const CREATE_NEW_SUPPLIER = createAsyncThunk(
  "supplier/CREATE_NEW_SUPPLIER",
  async (supplier, thunkAPI) => {
    try {
      return await supplierService.createNewSupplier(supplier);
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
export const GET_SUPPLIER = createAsyncThunk(
  "supplier/GET_SUPPLIER",
  async (supplier, thunkAPI) => {
    try {
      return await supplierService.getSupplier(supplier);
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
export const UPDATE_SUPPLIER = createAsyncThunk(
  "supplier/UPDATE_SUPPLIER",
  async (supplier, thunkAPI) => {
    try {
      return await supplierService.updateSupplier({
        supplierData: supplier.supplierData,
        supplierId: supplier.supplierId,
      });
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
export const DELETE_SUPPLIER = createAsyncThunk(
  "supplier/DELETE_SUPPLIER",
  async (supplierId, thunkAPI) => {
    try {
      return await supplierService.deleteSupplier(supplierId);
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
const supplierSlice = createSlice({
  name: "supplier",
  initialState,
  reducers: {
    RESET(state) {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = null;
      state.isDeletedSuccess = false;
      state.isUpdatedSuccess = false;
      state.isReadSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllSupplier.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllSupplier.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.message;
        state.supplierList = action.payload.supplier;
      })
      .addCase(fetchAllSupplier.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(CREATE_NEW_SUPPLIER.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(CREATE_NEW_SUPPLIER.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.message;
        state.supplierList = [...state.supplierList, action.payload.supplier];
      })
      .addCase(CREATE_NEW_SUPPLIER.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(DELETE_SUPPLIER.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(DELETE_SUPPLIER.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isDeletedSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(DELETE_SUPPLIER.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(UPDATE_SUPPLIER.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(UPDATE_SUPPLIER.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isUpdatedSuccess = action.payload.success;
        state.message = action.payload.message;
      })
      .addCase(UPDATE_SUPPLIER.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(GET_SUPPLIER.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GET_SUPPLIER.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isReadSuccess = false;
        state.message = action.payload.message;
        state.supplier = action.payload.supplier;
      })
      .addCase(GET_SUPPLIER.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { RESET } = supplierSlice.actions;

export default supplierSlice.reducer;
