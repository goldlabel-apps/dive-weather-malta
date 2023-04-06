import {dwmStore, AppThunk} from "../dwmStore"
import axios from "axios"
import { 
  setDWMKey,
} from "../dwmSlice"

export const getForecast = (): AppThunk => async (dispatch: any) => {
  try {
    const {loading} = dwmStore.getState().dwm
    if(loading) return false
    dispatch(setDWMKey({ key: 'loading', value: true}))
    axios.get('https://api.listingslab.com/weather')
      .then(function (response) {
        // console.log(response)
        dispatch(setDWMKey({ key: 'loading', value: false}))
        dispatch(setDWMKey({ key: 'forecast', value: response.data.response}))
      })
      .catch(function (error) {
        console.log(error)
      })
      .finally(function () {})
  } catch (error: any) {
  }
}

