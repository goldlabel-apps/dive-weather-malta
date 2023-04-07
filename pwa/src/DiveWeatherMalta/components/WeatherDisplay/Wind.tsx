import React from "react"
import {
    Box,
} from "@mui/material"
import {
    useDWMSelect,
    selectDWM,
} from "../../"
import {Font} from "../Font"
// import {Icon} from "../../../@listingslab"

export default function Wind(props: any) {
    const dwm = useDWMSelect(selectDWM)
    const {locale} = dwm
    const {wind} = locale
    const {hour} = props
    // console.log("hour", hour.windSpeed[0].value)
    // const {windDirection, gust, windSpeed} = wind
    let speed = {
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
                
            <Font variant="giant" color="white">
                {Math.floor(windSpeed.value)}{windSpeed.suffix}
            </Font>
            <Font variant="small">
                {windSpeed.description}
            </Font>
            <Box sx={{height: 24}}/>
            
            <Font variant="giant" color="white">
                {Math.floor(gust.value)}{gust.suffix}
            </Font>
            <Font variant="small">
                {gust.description}
            </Font>
            <Box sx={{height: 24}}/>


            <Font variant="giant" color="white">
                {speed.value}{speed.suffix}
            </Font>
            <Font variant="small">
                {speed.description}
            </Font>

    </>
}

/* 
            <pre>windDirection{JSON.stringify(wind, null, 2)}</pre>
            <pre>gust{JSON.stringify(gust, null, 2)}</pre>
            <pre>windSpeed{JSON.stringify(windSpeed, null, 2)}</pre> 
*/