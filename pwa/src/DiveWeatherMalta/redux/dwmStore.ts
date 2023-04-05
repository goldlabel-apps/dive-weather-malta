import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import dwmReducer from "./dwmSlice";

export const dwmStore = configureStore({
  reducer: {
    dwm: dwmReducer,
  },
})

export type AppDispatch = typeof dwmStore.dispatch
export type RootState = ReturnType<typeof dwmStore.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
