import { createSlice, Slice } from "@reduxjs/toolkit";

interface ToggleState {
  isCartVisible: boolean;
}

const uiSlice = createSlice({
  name: "ui-slice",
  initialState: { isCartVisible: false },
  reducers: {
    toggle(state: ToggleState) {
      state.isCartVisible = !state.isCartVisible;
    },
  },
});

export const uiSliceActions = uiSlice.actions;

export default uiSlice;
