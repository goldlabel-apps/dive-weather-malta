import {dwmStore, AppThunk} from "../dwmStore"
import { 
  setDWMKey,
} from "../dwmSlice";
import {getForecast} from "./getForecast"

export const start = (): AppThunk => async (dispatch: any) => {
  try {
    const {started, forecast, loading} = dwmStore.getState().dwm
    if(!forecast && !loading){
      dispatch(getForecast())
      
    }
    if (!started) dispatch(setDWMKey({ key: 'started', value: true}));
  } catch (error: any) {
  }
};
