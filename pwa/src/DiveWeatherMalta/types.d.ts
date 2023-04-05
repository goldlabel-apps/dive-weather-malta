import {
    PaletteMode,
  } from "@mui/material";


export type HourShape = {
    wind?: string
}

export type ReduxShape = {
    started: boolean
    forecast?: any
    loading?: boolean
    theme: ThemeShape
}

export type ThemeShape = {
    mode: PaletteMode
    primary: string | undefined
    secondary: string | undefined
}

export type ConfigShape = {
    theme?: ThemeShape
}

export interface KeyValueShape {
    key: string
    value: any
}

export type DWMShape = {
    uid?: string
    data?: any
}