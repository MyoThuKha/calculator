import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: "",
};

const slice = createSlice({
  name: "root",
  initialState,
  reducers: {
    addDigit: (state, action) => {
      const value = action.payload.operand + action.payload.num;
      state.data.push(action.payload);
    },
    removeDigit: (state) => {
      state.data.pop();
    },
    changeSign: (state) => {
      const digit = state.data[state.data.length - 1];
      const change = digit > 0 ? digit + 2 * digit : digit - 2 * digit;
      state.data = state.data.pop().push(change);
    },
    handleClear: (state) => {
      state.data = [];
    },
    handleOperate: (state) => {},
    handleEvaluate: (state) => {},
  },
});
export const { addDigit, handleClear, removeDigit } = slice.actions;
export default slice.reducer;
