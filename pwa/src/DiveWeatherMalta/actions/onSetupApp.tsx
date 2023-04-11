import {AppThunk} from "../../@raaf/raafStore";
import { 
  setSharedKey, 
} from "../../@raaf";
import {
  weatherAS,
} from "../";

export const onSetupApp = (): AppThunk => async (dispatch: any) => {
  try {
    setTimeout(() => {
      dispatch(weatherAS("SETUP"));
    }, 33);
  } catch (error: any) {
    dispatch(setSharedKey({ key: 'notification', value: {
      severity: "error",
      code: "onSetupApp",
      message: error.toString()
    }}))
  }
};
