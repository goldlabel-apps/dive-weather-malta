export type FlashSlice = {
  initted: boolean;
};
export interface KeyValueShape {
  key: string;
  value: any;
};

import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../raafStore";

const initialState: FlashSlice = {
  initted: false,
}

export const flashSlice = createSlice({
  name: 'flash',
  initialState,
  reducers: {
    setFlashKey: (state, action: PayloadAction<KeyValueShape>) => {
      const { key, value } = action.payload;
      // @ts-ignore
      state[key] = value;
    },
  },
})

export const selectFlash = (state: RootState) => state.flash;
export const { setFlashKey } = flashSlice.actions; 
export default flashSlice.reducer;
