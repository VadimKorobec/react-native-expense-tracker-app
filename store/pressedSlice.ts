import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface pressedState {
  isPressed: boolean;
}

const initialState: pressedState = {
  isPressed: false,
};

const pressedSlice = createSlice({
  name: "button",
  initialState,
  reducers: {
    pressed: (state, action: PayloadAction<boolean>) => {
      state.isPressed = action.payload;
    },
  },
});

export const { pressed } = pressedSlice.actions;
export const pressedReducer = pressedSlice.reducer;
