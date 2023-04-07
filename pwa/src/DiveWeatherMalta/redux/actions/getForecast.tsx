import {dwmStore, AppThunk} from "../dwmStore"
import axios from "axios"
import moment from "moment"
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
        dispatch(setDWMKey({ key: 'loading', value: false}))
        dispatch(setDWMKey({ key: 'forecast', value: response.data.response}))
        let indexNow = 0;
        const hours = response.data.response.data.hours;
        const rightNow = moment().format("ha, dddd Do MMMM");
        for (let i = 0; i < hours.length; i++){
          if (rightNow === moment(hours[i].time).format("ha, dddd Do MMMM")){
              indexNow = i + 1
              break
          }
        }
        dispatch(setDWMKey({key:'hourIndex', value: indexNow}))
      })
      .catch(function (error) {
        console.log(error)
      })
      .finally(function () {
        dispatch(setDWMKey({ key: 'loading', value: false}))
      })
  } catch (error: any) {
  }
}

