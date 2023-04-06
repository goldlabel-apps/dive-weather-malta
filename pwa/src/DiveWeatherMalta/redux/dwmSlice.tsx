import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./dwmStore";
import {
  KeyValueShape,
  ReduxShape,
} from "../types";

const initialState: ReduxShape = {
  started: false,
  theme: {
    mode: "dark",
    primary: "#95D3DE",
    secondary: "#F6E281",
  },
  loading: false,
  forecast: null,
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
