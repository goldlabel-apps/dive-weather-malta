import React from "react"
import moment from "moment"
import {
    Container,
    Avatar,
    IconButton,
    Hidden,
    Grid,
    CardHeader,
    CardContent,
} from "@mui/material"
import {Font} from "./components/Font"

// import {Icon} from "../@listingslab"
import {
    useDWMSelect,
    selectDWM,
} from "./"
import Wind from "./components/WeatherDisplay/Wind"
import Temperature from "./components/WeatherDisplay/Temperature"
import Visibility from "./components/WeatherDisplay/Visibility"
import Rain from "./components/WeatherDisplay/Rain"
import Humidity from "./components/WeatherDisplay/Humidity"
import Swell from "./components/WeatherDisplay/Swell"
import Share from "./components/Share"
import Other from "./components/Other"
import Mapbox from "./components/Mapbox"

export default function Weather(props: any) {
    const dwm = useDWMSelect(selectDWM)
    const {description, hourIndex, forecast} = dwm
    if (!forecast) return null
    const hour = forecast.data.hours[hourIndex || 0]
    const rightNow = moment().format("ha, dddd Do MMMM")
    return <>
            <Container maxWidth="lg" sx={{mt:1}}>
                <CardHeader
                    title={<Font variant="bold" color="white">
                            {rightNow}
                        </Font>}
                    subheader={<Font color="white">
                                Dive Weather Forecast Malta
                            </Font>}
                    
                    action={<Share />}
                />
                <CardContent>
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <Grid container>
                                <Grid item xs={12} md={6}>
                                    <Wind hour={hour}/>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Temperature hour={hour}/>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Visibility hour={hour} />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Rain hour={hour} />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Humidity hour={hour} />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Swell hour={hour}/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Mapbox />
                            <Other />
                        </Grid>
                    </Grid>
                </CardContent>
        </Container>
    </>
}

/*
<pre>lat {JSON.stringify(lat, null, 2)}</pre>
<pre>lng {JSON.stringify(lng, null, 2)}</pre>
*/