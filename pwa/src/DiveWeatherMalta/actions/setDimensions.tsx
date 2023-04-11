import {DimensionShape} from "./types";
import {AppThunk} from "../../@raaf/raafStore";
import { 
  setSharedKey,
} from "../../@raaf";

export const setDimensions = (): AppThunk => async (dispatch: any) => {
  try {
    const mobileBreakpoint = 600;
    let screenWidth  = window.innerWidth || document.documentElement.clientWidth || 
    document.body.clientWidth;
    let screenHeight = window.innerHeight|| document.documentElement.clientHeight|| 
    document.body.clientHeight;
    let portrait = false;
    if(screenWidth < screenHeight) portrait = true;
    let mobile = false;
    if(screenWidth < mobileBreakpoint) mobile = true;
    const dimensions: DimensionShape = {
      w: screenWidth,
      h: screenHeight,
      portrait,
      mobile,
    };
    dispatch(setSharedKey({ key: 'dimensions', value: dimensions}));
  } catch (error: any) {
    dispatch(setSharedKey({ key: 'notification', value: {
      severity: "error",
      code: "setDimensions 222",
      message: error.toString()
    }}))
  }
};
