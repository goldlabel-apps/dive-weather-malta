import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {RootState} from "./dwmStore"
import {locale} from "./locale"
import {
  KeyValueShape,
  ReduxShape,
} from "../types"

const initialState: ReduxShape = {
  description: "An easy to use PWA displaying a 5 Day Marine weather forecast for Diving in Malta",
  started: false,
  locale,
  loading: false,
  forecast: null,
  hourIndex: 0,
  theme: {
    mode: "dark",
    primary: "#265874",
    secondary: "#489FD8",
  },
}

export const dwmSlice = createSlice({
  name: 'dwm',
  initialState,
  reducers: {
    setDWMKey: (state, action: PayloadAction<KeyValueShape>) => {
      const { key, value } = action.payload
      // @ts-ignore
      state[key] = value
    },
  },
})

export const selectDWM = (state: RootState) => state.dwm
export const { setDWMKey } = dwmSlice.actions 
export default dwmSlice.reducer
