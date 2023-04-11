import {AppThunk, raafStore} from "../../@raaf/raafStore";
import { 
  setSharedKey, 
} from "../../@raaf";
import {
  align,
  fadeIn,
  getElement,
} from "../../@raaf/Flash";
const flashId = "weatherStage";

const setup = (dispatch: any) => {
  setTimeout(() => {
    play(dispatch);
  }, 100);
};

const play = (dispatch: any) => {
  const {mobile} = raafStore.getState().shared.dimensions;
  if (getElement("mcHomeClip")){
    align("mcHomeClip", flashId, "topmiddle");
    fadeIn("mcHomeClip");
  };

  if (getElement("mcRain")){
    align("mcRain", flashId, "topright");
    fadeIn("mcRain");
  };

  if (getElement("mcFluxCapacitor")){
    align("mcFluxCapacitor", flashId, "bottomleft");
    fadeIn("mcFluxCapacitor");
  };  
};

const resize = (dispatch: any) => {
  setTimeout(() => {
    dispatch(setSharedKey({
      key: "blink", 
      value: true,
    }));
    setTimeout(() => {
      dispatch(setSharedKey({
        key: "blink", 
        value: false,
      }));
      setTimeout(() => {play(dispatch);},50);
    }, 50);
  }, 50);
};

export const weatherAS = (action: string): AppThunk => async (dispatch: any) => {
  try {
      if (action === "SETUP") setup(dispatch);
      if (action === "RESIZE") resize(dispatch);
  } catch (error: any) {
      dispatch(setSharedKey({ key: "notification", value: {
        code: "Error 137",
        severity: "error",
        message: error.toString(),  
      } 
    }));
  };
};
