import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const slice = createSlice({
  name: "root",
  initialState,
  reducers: {
    addDigit: (state, action) => {
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
    handleAdd: (state) => {
      state.data = state.data.map((digit) => {
        return digit++;
      });
    },
    handleSub: (state) => {},
    handleX: (state) => {},
    handleDivide: (state) => {},
  },
});
export const { changeData } = slice.actions;
export default slice.reducer;
