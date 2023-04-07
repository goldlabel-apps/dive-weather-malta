import React from "react"
import {
    CardHeader,
    CardContent,
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
    // console.log("wind", wind)

    // const {hour} = props
    // const {windDirection, gust, windSpeed} = wind
    let speed = {
        value: 12,
        label: wind.windDirection.label,
        description: wind.windDirection.description,
        suffix: wind.windDirection.suffix
    }

    let gust = {
        value: 12,
        label: wind.gust.label,
        description: wind.gust.description,
        suffix: wind.gust.suffix
    }

    let windSpeed = {
        value: 12,
        label: wind.windSpeed.label,
        description: wind.windSpeed.description,
        suffix: wind.windSpeed.suffix
    }

    return <>
            
            <CardContent>
                
                <Font variant="bold" color="white">
                    Wind Speed {windSpeed.value}{windSpeed.suffix}
                </Font>
                <Font variant="small">
                    {windSpeed.description}
                </Font>
                <Font variant="bold" color="white">
                    Gust {gust.value}{gust.suffix}
                </Font>
                <Font variant="small">
                    {gust.description}
                </Font>

                <Font variant="bold" color="white">
                    Wind Direction {speed.value}{speed.suffix}
                </Font>
                <Font variant="small">
                    {speed.description}
                </Font>

                

            </CardContent>
    </>
}

/* 
            <pre>windDirection{JSON.stringify(wind, null, 2)}</pre>
            <pre>gust{JSON.stringify(gust, null, 2)}</pre>
            <pre>windSpeed{JSON.stringify(windSpeed, null, 2)}</pre> 
*/