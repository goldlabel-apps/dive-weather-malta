import * as React from "react"
import mapboxgl from "mapbox-gl"
import {
  Card,
} from "@mui/material"
import "mapbox-gl/dist/mapbox-gl.css"
import {useDWMSelect} from "../hooks/useDWMSelect"
import {useDWMDispatch} from "../hooks/useDWMDispatch"
import {selectDWM, setDWMKey} from "../redux/dwmSlice"

// @ts-ignore
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN

export default function Mapbox() {

  const dispatch = useDWMDispatch()
  const dwm = useDWMSelect(selectDWM)
  const id = "mapbox"
  const map = React.useRef(null)
  const zoom = 9.75
  const container = React.useRef(null)

  const onMapLoad = React.useCallback(() => {
    console.warn("onMapLoad", map)
  }, [map])
  
  React.useEffect(() => {
    const center = [14.38, 35.94]
    const {blink} = dwm
    if (blink){
      console.log( "BLINK!" )
      dispatch(setDWMKey({key:'blink', value: false}))
    }
    if (!map.current || blink){
      // @ts-ignore
      map.current = new mapboxgl.Map({
        // @ts-ignore
        container: container.current,
        style: "mapbox://styles/listingslab/cleor6ws4003u01mrhg40x8n7",
        // @ts-ignore
        center,
        zoom: zoom,
        onLoad: onMapLoad,
        interactive: false,
      })
    }
  }, [dispatch, map, dwm, onMapLoad])

  return (
        <Card
          id={id}
          sx={{ height: 400}}
          ref={container}
        />
  )
}
