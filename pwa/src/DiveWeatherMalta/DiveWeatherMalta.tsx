import pJSON from "../../package.json"
import React from "react"
import {
  Container,
  Grid,
} from "@mui/material";
import { Provider } from "react-redux"
import { dwmStore } from "./redux/dwmStore"
import { Setup } from "./Setup"

import Data from "./components/Data"

import Wind from "./components/WeatherDisplay/Wind"
import Temperature from "./components/WeatherDisplay/Temperature"
import Visibility from "./components/WeatherDisplay/Visibility"
import Rain from "./components/WeatherDisplay/Rain"
import Humidity from "./components/WeatherDisplay/Humidity"
import Swell from "./components/WeatherDisplay/Swell"

export function DiveWeatherMalta() {
  console.log("@DWM", pJSON.version)
  return (<>
      <Provider store={dwmStore}>
        <Setup>
          <Container maxWidth="md" sx={{mt:1}}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Data />
              </Grid>
              <Grid item xs={12} md={4}><Wind /></Grid>
              <Grid item xs={12} md={4}><Temperature /></Grid>
              <Grid item xs={12} md={4}><Visibility /></Grid>
              <Grid item xs={12} md={4}><Rain /></Grid>
              <Grid item xs={12} md={4}><Humidity /></Grid>
              <Grid item xs={12} md={4}><Swell /></Grid>
            </Grid>
          </Container>
        </Setup>
      </Provider>
    </>
  )
}
