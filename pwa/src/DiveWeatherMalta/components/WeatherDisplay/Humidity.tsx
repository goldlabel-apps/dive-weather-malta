import React from "react"
import {
    useDWMSelect,
    selectDWM,
} from "../../"
import DataField from "../DataField"

export default function Humidity(props: any) {
    const dwm = useDWMSelect(selectDWM)
    const {locale} = dwm
    const {humidity} = locale
    const {hour} = props
    
    let humidityData = {
        value: hour.humidity[0].value,
        label: locale.humidity.label,
        description: humidity.description,
        suffix: humidity.suffix
    }

    return <>
        <DataField 
            title={`Humidity ${Math.floor(humidityData.value)}${humidityData.suffix}`}
            tooltip={humidityData.description}
        />
    </>;
};

/*
<pre>{JSON.stringify(humidityData, null, 2)}</pre>
*/