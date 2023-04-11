import React from "react"
import {
  Box,
} from "@mui/material"

export type FlashShape = {
  flashId?: string
  children?: React.ReactNode
  width?: number | string
  height?: number | string
  backgroundColor?: string
  overflow?: string
  mobile?: boolean
}

export default function Flash(props: FlashShape) {
  const {
    flashId,
    children, 
    height, 
    width,
    backgroundColor,
    overflow,
  } = props
  let oF = "null"
  if (overflow) oF = overflow
  let h = height
  if (!h) h = "100vh"
  return (
    <Box 
      id={flashId}
      sx={{
        border: "5px solid gold",
        overflow: oF,
        position: "relative",
        background: backgroundColor,
        height: h, 
        width,
    }}>
      {children}
    </Box>
  )
}
