import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: "",
  previous: "",
  operator: "",
  list: [],
};

const slice = createSlice({
  name: "root",
  initialState,
  reducers: {
    addDigit: (state, action) => {
      let result = state.data + action.payload;
      //if key is change operand
      if (action.payload === "+/-") {
        result = parseFloat(state.data) * -1;
      }
      //0 and .
      if (action.payload === "0" && state.data === "0") return;
      if (action.payload === "." && state.data.includes(".")) return;
      state.data = result;
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
    handleOperate: (state, action) => {},
    handleEvaluate: (state) => {},
  },
});
export const { addDigit, handleClear, removeDigit, handlePercent } =
  slice.actions;
export default slice.reducer;
