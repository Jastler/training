import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadStateFromLocalStorage } from "../utils/storage/loadStateFromLocalStorage";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: loadStateFromLocalStorage().counter?.value || 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    setCounter: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { increment, decrement, setCounter } = counterSlice.actions;

export default counterSlice.reducer;
