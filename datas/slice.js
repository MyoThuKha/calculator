import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  current: "",
  previous: "",
  operator: "",
  log: "",
};

const slice = createSlice({
  name: "root",
  initialState,
  reducers: {
    addDigit: (state, action) => {
      if (action.payload === "0" && state.current === "0") return;
      if (action.payload === "." && state.current.includes(".")) return;
      state.current = state.current + action.payload;
    },
    changeOperand: (state) => {
      state.current = parseFloat(state.current) * -1;
    },
    removeDigit: (state) => {
      state.current = state.current.slice(0, state.current.length - 1);
    },
    handleClear: (state) => {
      state.current = "";
      state.operator = "";
      state.previous = "";
    },
    handlePercent: (state) => {
      state.previous = state.current;
      state.operator = "%";
      state.current = parseFloat(state.current) / 100;
    },
    handleOperate: (state, action) => {
      if (state.current === "") return;
      state.log = state.log + state.operator + state.current;
      if (state.previous !== "") {
        state.current = eval(state.previous + state.operator + state.current);
      }
      state.previous = state.current;
      state.operator = action.payload;
      state.current = "";
    },

    handleEvaluate: (state) => {
      let compute;
      if (state.current === "") {
        compute = state.previous;
      } else {
        compute = eval(state.previous + state.operator + state.current);
      }
      state.operator = "=";
      state.current = compute;
      state.previous = "";
    },
  },
});
export const { addDigit, changeOperand } = slice.actions;
export const { handleClear, removeDigit, handlePercent } = slice.actions;
export const { handleOperate, handleEvaluate } = slice.actions;
export default slice.reducer;
