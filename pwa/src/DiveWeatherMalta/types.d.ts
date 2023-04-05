export type ReduxShape = {
    started: boolean
    colorMode: string
}

export type ThemeShape = {
    mode?: string
    primary?: string | undefined
    secondary?: string | undefined
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