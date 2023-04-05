import pJSON from "../../package.json"
import React from "react"
import {
  Grid,
} from "@mui/material";

import { Provider } from "react-redux"
import { dwmStore } from "./redux/dwmStore"
import { Setup } from "./Setup"
import Wind from "./components/Wind"
import Temperature from "./components/Temperature"
import Visibility from "./components/Visibility"
import Rain from "./components/Rain"
import Humidity from "./components/Humidity"
import Swell from "./components/Swell"

export function DiveWeatherMalta() {
  console.log("@DWM", pJSON.version)
  return (<>
      <Provider store={dwmStore}>
        <Setup>
          <Grid container spacing={1}>
            <Grid item xs={12} md={4}>
              <Wind />
            </Grid>
            <Grid item xs={12} md={4}>
              <Temperature />
            </Grid>
            <Grid item xs={12} md={4}>
              <Visibility />
            </Grid>
            <Grid item xs={12} md={4}>
              <Rain />
            </Grid>
            <Grid item xs={12} md={4}>
              <Humidity />
            </Grid>
            <Grid item xs={12} md={4}>
              <Swell />
            </Grid>
          </Grid>
        </Setup>
      </Provider>
    </>
  )
}
