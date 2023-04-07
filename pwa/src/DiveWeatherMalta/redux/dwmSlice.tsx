import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./dwmStore";
import {
  KeyValueShape,
  ReduxShape,
} from "../types";

const initialState: ReduxShape = {
  started: false,
  loading: false,
  forecast: null,
  theme: {
    mode: "light",
    primary: "#265874",
    secondary: "#489FD8",
  },
  description: "An easy to use app displaying a 5 Day Marine weather forecast for Malta",
}

export const dwmSlice = createSlice({
  name: 'dwm',
  initialState,
  reducers: {
    setDWMKey: (state, action: PayloadAction<KeyValueShape>) => {
      const { key, value } = action.payload;
      // @ts-ignore
      state[key] = value;
    },
  },
})

export const selectDWM = (state: RootState) => state.dwm;
export const { setDWMKey } = dwmSlice.actions; 
export default dwmSlice.reducer;
