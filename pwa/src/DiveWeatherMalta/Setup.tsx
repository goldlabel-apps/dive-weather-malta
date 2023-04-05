import React from "react";
import {ThemeShape} from "./types"
import {
  PaletteMode,
  ThemeProvider,
  CssBaseline,
  createTheme,
  Box,
} from "@mui/material";
import {config} from "./config"
import {useDWMSelect} from "./hooks/useDWMSelect"
import {useDWMDispatch} from "./hooks/useDWMDispatch"
import {selectDWM} from "./redux/dwmSlice"
import {start} from "./redux/actions/start"

export const makeTheme = (
  mode: PaletteMode, 
  primaryColor: string, 
  secondaryColor: string,
) => ({    
  palette: {
      mode,
      primary: {
          main: mode === "light" ? primaryColor : secondaryColor,
      },
      secondary: {
          main: mode === "light" ? secondaryColor : primaryColor,
      },
  },
});

export function Setup(props: any) {
  const dispatch = useDWMDispatch()
  const dwm = useDWMSelect(selectDWM)
  const {children} = props;

  let mode: PaletteMode = "light";
  
  // let theme: ThemeShape = {
  //   mode: "light",
  //   primary: "#2DCB2C",
  //   secondary: "#39F738",
  // }
  
  // if(config){
  //   if (config.theme){
  //     theme.primary = config.theme.primary
  //     theme.secondary = config.theme.secondary
  //     if (config.theme.defaultDark) theme.mode = "dark"
  //   }
  // }
  
  const t = React.useMemo(
    () => 
      createTheme(makeTheme(mode, "#2DCB2C", "#39F738")),
    [mode],
  );

  React.useEffect(() => {
    const {started} = dwm
    if(!started) dispatch(start())
  }, [dispatch, dwm]);

  return (
    <ThemeProvider theme={t}>
      <CssBaseline />
      <Box sx={{position: "relative" }}>
        {children}
      </Box>
    </ThemeProvider>
  )
};

/*
  <pre>debug {JSON.stringify(dwm, null, 2)}</pre>
*/