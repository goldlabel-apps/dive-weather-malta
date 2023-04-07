import React from "react"
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
import {Icon} from "../@listingslab"
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
                <CardHeader 
                    avatar={<IconButton
                                onClick={(e: React.MouseEvent) => {
                                    window.open("/", "_self")
                                }}>
                                    <Avatar src="/logo512.png" alt={description} />
                                </IconButton>}
                    title={<Hidden smDown>
                            <Font variant="title" color="white">
                                Dive Weather Forecast Malta
                            </Font></Hidden>}
                    subheader={<Hidden smDown>
                                <Font color="white">{description}</Font>
                            </Hidden>
                    }
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