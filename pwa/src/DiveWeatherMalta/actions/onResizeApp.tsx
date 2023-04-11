import {AppThunk} from "../../@raaf/raafStore";
import { 
  setSharedKey, 
} from "../../@raaf";
import { 
  getElement,
} from "../../@raaf/Flash";
import {
  weatherAS,
  setAppKey,
} from "../";

export const onResizeApp = (): AppThunk => async (dispatch: any) => {
  try {
    if (getElement("weatherStage")) dispatch(weatherAS("RESIZE"));
    setTimeout(() => {
      dispatch(setAppKey({key:'blink', value: true}));
      // dispatch(weatherAS("SETUP"));
    }, 33);


  } catch (error: any) {
    dispatch(setSharedKey({ key: 'notification', value: {
      severity: "error",
      code: "onResizeApp",
      message: error.toString()
    }}))
  }
};
