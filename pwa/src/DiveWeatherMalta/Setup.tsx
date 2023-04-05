import React from "react";
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
  let mode: any = "light";
  let pColor:any = "#2DCB2C";
  let sColor:any = "#39F738";
  if(config){
    if (config.theme){
      pColor = config.theme.primary
      sColor = config.theme.secondary
      if(config.theme.defaultDark) mode = "dark"
    }
  }
  
  const t = React.useMemo(
    () =>
      createTheme(makeTheme(mode, pColor, sColor)),
    [mode, pColor, sColor],
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