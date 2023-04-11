import {AppThunk} from "../redux/dwmStore"
import { 
  setDWMKey,
} from "../"

export const newAction = (payload: any): AppThunk => async (dispatch: any) => {
  try {
    dispatch(setDWMKey({ key: 'newAction', value: payload}))
  } catch (error: any) {
    dispatch(setDWMKey({ key: 'notification', value: {
      code: "newAction",
      severity: "error",
      message: error.toString()
    }}))
  }
}