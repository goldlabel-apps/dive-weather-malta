import {AppThunk} from "../../@raaf/raafStore";
import { 
  setSharedKey, 
} from "../../@raaf";

export const onScrollApp = (): AppThunk => async (dispatch: any) => {
  try {    
    console.log("onScrollApp");
  } catch (error: any) {
    dispatch(setSharedKey({ key: 'notification', value: {
      severity: "error",
      code: "onScrollApp",
      message: error.toString()
    }}))
  }
};
