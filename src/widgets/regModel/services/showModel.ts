import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const showModelregisterSlice = createSlice({
  name: "counter",
  initialState: {
    isShow: false,
  },
  reducers: {
    toggleRegisterModel: (state, action: PayloadAction<boolean>) => {
      state.isShow = action.payload;
    },
  },
});

export const { toggleRegisterModel } = showModelregisterSlice.actions;
export default showModelregisterSlice.reducer;
