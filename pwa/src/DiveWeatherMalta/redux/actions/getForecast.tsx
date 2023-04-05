import {dwmStore, AppThunk} from "../dwmStore"
import axios from "axios"
// import { 
//   setDWMKey,
// } from "../dwmSlice";

export const getForecast = (): AppThunk => async (dispatch: any) => {
  try {
    const {loading} = dwmStore.getState().dwm
    if(loading) return false

    
  } catch (error: any) {
  }
};
