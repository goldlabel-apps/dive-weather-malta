import React from "react"
import moment from "moment"
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    List,
} from "@mui/material"
import {Font} from "./components/Font"
import {Icon} from "../@listingslab";
import {
    useDWMSelect,
    selectDWM,
} from "./"
import DataField from "./components/DataField"

export default function Weather(props: any) {
    const dwm = useDWMSelect(selectDWM)
    const {hourIndex, forecast, locale} = dwm
    if (!forecast) return null
    const hour = forecast.data.hours[hourIndex || 0]
    const rightNow = moment().format("h:mm a, dddd Do MMMM")
    const {
        visibility, 
        temperature,
        rain,
        wind,
        humidity,
    } = locale
    let visibilityData = {
        value: hour.visibility[0].value,
        label: locale.visibility.label,
        description: visibility.description,
        suffix: visibility.suffix
    }
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
    let rainData = {
        value: hour.precipitation[0].value,
        label: locale.humidity.label,
        description: rain.description,
        suffix: rain.suffix
    }

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
    let humidityData = {
        value: hour.humidity[0].value,
        label: locale.humidity.label,
        description: humidity.description,
        suffix: humidity.suffix
    }
    let swellHeightData = {
        value: hour.swellHeight[0].value,
        label: locale.swell.swellHeight.label,
        description: locale.swell.swellHeight.description,
        suffix: locale.swell.swellHeight.suffix
    }
    let swellDirectionData = {
        value: hour.swellDirection[0].value,
        label: locale.swell.swellDirection.label,
        description: locale.swell.swellDirection.description,
        suffix: locale.swell.swellDirection.suffix
    }

    return <>    
        <Accordion>
            <AccordionSummary expandIcon={<Icon icon="expand" />}>
                <Font variant="title">{rightNow}</Font>
            </AccordionSummary>
        <AccordionDetails>
            <List dense>
                <DataField 
                    title={`${Math.floor(direction.value)}${direction.suffix}`}
                    tooltip={direction.description}
                />  
                <DataField 
                    title={`${Math.floor(windSpeed.value)}${windSpeed.suffix}`}
                    tooltip={windSpeed.description}
                />           
                <DataField 
                    title={`${Math.floor(gust.value)}${gust.suffix}`}
                    tooltip={gust.description}
                /> 
                <DataField 
                    title={`${Math.floor(air.value)}${air.suffix}`}
                    tooltip={air.description}
                />
                <DataField 
                    title={`${Math.floor(water.value)}${water.suffix}`}
                    tooltip={water.description}
                />
                <DataField 
                    title={`${Math.floor(visibilityData.value)}${visibilityData.suffix}`}
                    tooltip={visibilityData.description}
                />
                <DataField 
                    title={`${Math.floor(rainData.value)}${rainData.suffix}`}
                    tooltip={rainData.description}
                />
                <DataField 
                    title={`${Math.floor(humidityData.value)}${humidityData.suffix}`}
                    tooltip={humidityData.description}
                />
                <DataField 
                    title={`${Math.floor(swellHeightData.value)}${swellHeightData.suffix}`}
                    tooltip={swellHeightData.description}
                />
                <DataField 
                    title={`${Math.floor(swellDirectionData.value)}${swellDirectionData.suffix}`}
                    tooltip={swellDirectionData.description}
                />
            </List>
        </AccordionDetails>
      </Accordion>
    </>
}
