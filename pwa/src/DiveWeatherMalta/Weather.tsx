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
    CardActions,
    Button,
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

export default function Weather(props: any) {
    const dwm = useDWMSelect(selectDWM)
    const {forecast, loading, description} = dwm
    // let meta:any = null
    let lat:number | null = null
    let lng:number | null = null
    
    if(forecast){
        // meta = forecast.data.meta  
        lat = forecast.data.meta.lat
        lng = forecast.data.meta.lng
    }
    return <>
        <Container maxWidth="lg" sx={{mt:1}}>
            <Card sx={{}}>
                {loading ? <LinearProgress /> : <Box sx={{height:4}} /> }
                <CardHeader 
                    avatar={<IconButton
                                onClick={(e: React.MouseEvent) => {
                                    window.open("/", "_self")
                                }}>
                                    <Avatar src="/logo512.png" alt={description} />
                                </IconButton>}
                    title={<Font variant="title">
                                Dive Weather Forecast Malta
                            </Font>}
                    subheader={<Font>{description}</Font>}
                    action={<>
                    <IconButton
                        color="primary"
                        onClick={(e: React.MouseEvent) => {
                            // window.open("/", "_self")
                            console.log("share")
                        }}>
                            <Icon icon="share" />
                        </IconButton>
                    </>}
                />
                <CardContent>
                    <pre>lat {JSON.stringify(lat, null, 2)}</pre>
                    <pre>lng {JSON.stringify(lng, null, 2)}</pre>

                    <Grid container spacing={1}>
                        <Grid item xs={12} md={4}><Wind /></Grid>
                        <Grid item xs={12} md={4}><Temperature /></Grid>
                        <Grid item xs={12} md={4}><Visibility /></Grid>
                        <Grid item xs={12} md={4}><Rain /></Grid>
                        <Grid item xs={12} md={4}><Humidity /></Grid>
                        <Grid item xs={12} md={4}><Swell /></Grid>
                    </Grid>


                </CardContent>
                <CardActions>
                    <Button
                        variant="outlined"
                        onClick={(e: React.MouseEvent) => {
                            console.log("internal route")
                        }}
                    >
                        <span style={{marginLeft:8, marginRight:8}}>
                            Call To Action
                        </span>
                        <Icon icon="right" />
                    </Button>
                </CardActions>
            </Card>
        </Container>
    </>
}
