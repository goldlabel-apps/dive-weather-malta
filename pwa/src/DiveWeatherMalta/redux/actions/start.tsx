import {dwmStore, AppThunk} from "../dwmStore"
import { 
  setDWMKey,
} from "../dwmSlice";

export const start = (): AppThunk => async (dispatch: any) => {
  try {
    const {started, forecast, loading} = dwmStore.getState().dwm
    if(!forecast && !loading){
      dispatch(setDWMKey({ key: 'loading', value: true}));
    }
    if (!started) dispatch(setDWMKey({ key: 'started', value: true}));
  } catch (error: any) {
  }
};
