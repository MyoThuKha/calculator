import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: "12345",
  previous: "",
  operator: "",
  list: [],
};

const slice = createSlice({
  name: "root",
  initialState,
  reducers: {
    addDigit: (state, action) => {
      state.data += action.payload;
    },
    removeDigit: (state) => {
      state.data = state.data.slice(0, state.data.length - 1);
    },
    handleClear: (state) => {
      state.data = "";
      state.operator = "";
      state.previous = "";
    },
    handlePercent: (state) => {
      state.previous = state.data;
      state.operator = "%";
      state.data = parseFloat(state.data) / 100;
    },
    handleOperate: (state) => {},
    handleEvaluate: (state) => {},
  },
});
export const { addDigit, handleClear, removeDigit, handlePercent } =
  slice.actions;
export default slice.reducer;
