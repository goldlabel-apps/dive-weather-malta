import React from "react"
import {
    Container,
    Box,
    Avatar,
    IconButton,
    LinearProgress,
    Card,
    Grid,
    CardHeader,
    CardContent,
} from "@mui/material"
import {Icon} from "../@listingslab"
import {Font} from "./components/Font"
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
    const {loading, description} = dwm
    return <>
        <Container maxWidth="lg" sx={{mt:1}}>
            <>
                {loading ? <LinearProgress /> : <Box sx={{height:4}} /> }
                <CardHeader 
                    avatar={<IconButton

                                onClick={(e: React.MouseEvent) => {
                                    window.open("/", "_self")
                                }}>
                                    <Avatar src="/logo512.png" alt={description} />
                                </IconButton>}
                    title={<Font variant="title" color="white">
                                Dive Weather Forecast Malta
                            </Font>}
                    subheader={<Font color="white">{description}</Font>}
                    action={<Share />}
                />
                <CardContent>
                    <Grid container>
                        <Grid item xs={12} md={8}>
                            <Grid container>
                                <Grid item xs={12}><Mapbox /></Grid>
                                <Grid item xs={12} md={4}><Wind /></Grid>
                                <Grid item xs={12} md={4}><Temperature /></Grid>
                                <Grid item xs={12} md={4}><Visibility /></Grid>
                                <Grid item xs={12} md={4}><Rain /></Grid>
                                <Grid item xs={12} md={4}><Humidity /></Grid>
                                <Grid item xs={12} md={4}><Swell /></Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Other />
                        </Grid>
                    </Grid>
                </CardContent>
            </>
        </Container>
    </>
}

/*
<pre>lat {JSON.stringify(lat, null, 2)}</pre>
<pre>lng {JSON.stringify(lng, null, 2)}</pre>
*/