import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSideBarMini: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    SET_SIDE_BAR_MINI(state) {
      state.isSideBarMini = !state.isSideBarMini;
    },
  },
});

export const { SET_SIDE_BAR_MINI } = appSlice.actions;

export default appSlice.reducer;
