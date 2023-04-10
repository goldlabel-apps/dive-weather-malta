import React from "react"
import {
    useDWMSelect,
    selectDWM,
} from "../../"
import DataField from "../DataField"

export default function Wind(props: any) {
    const dwm = useDWMSelect(selectDWM)
    const {locale} = dwm
    const {wind} = locale
    const {hour} = props
    let direction = {
        value: hour.windDirection[0].value,
        label: wind.windDirection.label,
        description: wind.windDirection.description,
        suffix: wind.windDirection.suffix
    }
    let gust = {
        value: hour.gust[0].value,
        label: wind.gust.label,
        description: wind.gust.description,
        suffix: wind.gust.suffix
    }
    let windSpeed = {
        value: hour.windSpeed[0].value,
        label: wind.windSpeed.label,
        description: wind.windSpeed.description,
        suffix: wind.windSpeed.suffix
    }

    return <>
        <DataField 
            title={`Wind direction ${Math.floor(direction.value)}${direction.suffix}`}
            tooltip={direction.description}
        />  
        <DataField 
            title={`Wind Speed ${Math.floor(windSpeed.value)}${windSpeed.suffix}`}
            tooltip={windSpeed.description}
        />           
        <DataField 
            title={`Gusting to ${Math.floor(gust.value)}${gust.suffix}`}
            tooltip={gust.description}
        /> 
    </>
}
