import pJSON from "../../package.json"
import "./theme/style.css"
import React from "react"
import { Provider } from "react-redux"
import { dwmStore } from "./redux/dwmStore"
import { Setup } from "./Setup"
import Weather from "./Weather"

export function DiveWeatherMalta() {
  console.log("@DWM", pJSON.version)
  return (<>
      <Provider store={dwmStore}>
        <Setup>
          <Weather />
        </Setup>
      </Provider>
    </>
  )
}
