import React from "react";
// import {config} from "./config"
// import {ThemeShape} from "./types"
import {
  PaletteMode,
  ThemeProvider,
  CssBaseline,
  createTheme,
  Box,
} from "@mui/material";
import {useDWMSelect} from "./hooks/useDWMSelect"
import {useDWMDispatch} from "./hooks/useDWMDispatch"
import {selectDWM} from "./redux/dwmSlice"
import {start} from "./redux/actions/start"

export const makeTheme = (
  mode: PaletteMode, 
  primary: string, 
  secondary: string,
) => ({    
  palette: {
      mode,
      primary: {
          main: mode === "light" ? primary : secondary,
      },
      secondary: {
          main: mode === "light" ? secondary : primary,
      },
  },
});

export function Setup(props: any) {
  const {children} = props
  const dispatch = useDWMDispatch()
  const dwm = useDWMSelect(selectDWM)
  const {theme} = dwm
  const {mode, primary, secondary} = theme
  const t = React.useMemo(
    () => 
      // @ts-ignore
      createTheme(makeTheme(mode, primary, secondary)),
    [mode, primary, secondary],
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