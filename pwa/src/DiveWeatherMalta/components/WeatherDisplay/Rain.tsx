import React from "react"
import {
    useDWMSelect,
    selectDWM,
} from "../../"
import DataField from "../DataField"

export default function Rain(props: any) {
    const dwm = useDWMSelect(selectDWM)
    const {locale} = dwm
    const {rain} = locale
    const {hour} = props
    
    let rainData = {
        value: hour.humidity[0].value,
        label: locale.humidity.label,
        description: rain.description,
        suffix: rain.suffix
    }

    return <>
        <DataField 
            title={`Rain ${Math.floor(rainData.value)}${rainData.suffix}`}
            tooltip={rainData.description}
        />
    </>;
}
