import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ButtonState {
  isPressed: boolean;
}

const initialState: ButtonState = {
  isPressed: false,
};

const buttonSlice = createSlice({
  name: "button",
  initialState,
  reducers: {
    pressButton: (state, action: PayloadAction<boolean>) => {
      state.isPressed = action.payload
    },
  },
});

export const { pressButton } = buttonSlice.actions;
export const buttonReducer = buttonSlice.reducer