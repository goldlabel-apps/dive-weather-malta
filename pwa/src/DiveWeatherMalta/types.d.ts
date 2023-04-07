import {
    PaletteMode,
} from "@mui/material";

export type ReduxShape = {
    locale: any
    started: boolean
    forecast?: any
    loading?: boolean
    theme: ThemeShape
    description: string
    blink?: boolean
    hourIndex?: number
}

export type FontShape = {
    wind?: string
    variant?: string
    fontSize?: string | number
    color?: string
    children?: any
    align?: string
    width?: string | number
}

export type HourShape = {
    wind?: string
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