import React from "react"
import {
    Box,
} from "@mui/material";
import {
    useDWMSelect,
    selectDWM,
} from "../../"
import {Font} from "../Font"

export default function Temperature(props: any) {
    const dwm = useDWMSelect(selectDWM)
    const {forecast} = dwm
    if (!forecast) return null
    const {locale} = dwm
    const {temperature} = locale
    const {hour} = props
    let air = {
        value: hour.airTemperature[0].value,
        label: temperature.airTemperature.label,
        description: temperature.airTemperature.description,
        suffix: temperature.airTemperature.suffix
    }
    let water = {
        value: hour.waterTemperature[0].value,
        label: temperature.waterTemperature.label,
        description: temperature.waterTemperature.description,
        suffix: temperature.waterTemperature.suffix
    }

    return <>
        
        <Font variant="small">
            {air.description}
        </Font>
        <Box sx={{my: 1}}/>
        <Font variant="giant" color="white">
            {Math.floor(air.value)}{air.suffix}
        </Font>
        <Box sx={{my: 2}}/>

        
        <Font variant="small">
            {water.description}
        </Font>
        <Box sx={{my: 1}}/>
        <Font variant="giant" color="white">
            {Math.floor(water.value)}{water.suffix}
        </Font>
    </>;
};
