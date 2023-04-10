import React from "react"
import moment from "moment"
import {
    Container,
    Grid,
    CardHeader,
    CardContent,
} from "@mui/material"
import {Font} from "./components/Font"
import {
    useDWMSelect,
    selectDWM,
} from "./"
import Wind from "./components/WeatherDisplay/Wind"
import Share from "./components/Share"
import Rain from "./components/WeatherDisplay/Rain"
import Humidity from "./components/WeatherDisplay/Humidity"
// import Temperature from "./components/WeatherDisplay/Temperature"
// import Swell from "./components/WeatherDisplay/Swell"
// import Other from "./components/Other"
// import Mapbox from "./components/Mapbox"
// import Visibility from "./components/WeatherDisplay/Visibility"

export default function Weather(props: any) {
    const dwm = useDWMSelect(selectDWM)
    const {hourIndex, forecast} = dwm
    if (!forecast) return null
    const hour = forecast.data.hours[hourIndex || 0]
    const rightNow = moment().format("ha, dddd Do MMMM, h:mm a")
    return <>
            <Container maxWidth="lg" sx={{mt:1}}>
                <CardHeader
                    title={<Font variant="giant" color="white">
                            {rightNow}
                        </Font>}
                    action={<Share />}
                />
                <CardContent>
                    <Grid container>
                        <Grid item xs={12} md={12}>
                            <Rain hour={hour}/>
                            <Wind hour={hour}/>
                            <Humidity hour={hour}/>
                        </Grid>
                    </Grid>
                </CardContent>
            </Container>
        </>
}
