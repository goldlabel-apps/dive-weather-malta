import {dwmStore, AppThunk} from "../dwmStore"
import { 
  setDWMKey,
} from "../dwmSlice";

export const start = (): AppThunk => async (dispatch: any) => {
  try {
    const {started} = dwmStore.getState().dwm
    
    if (!started) dispatch(setDWMKey({ key: 'started', value: true}));
  } catch (error: any) {
  }
};
