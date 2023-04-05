export type ReduxShape = {
    started: boolean
    colorMode: string
}

export type ThemeShape = {
    primary?: string
    secondary?: string
    defaultDark?: boolean
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