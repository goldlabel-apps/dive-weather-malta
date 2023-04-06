import {FontShape} from "../types"
import React from "react"
import {
  useTheme,
  Typography
} from "@mui/material"

export function Font(props: FontShape) {
  const theme = useTheme()
  const {
      variant,
      fontSize,
      color,
      children,
      align,
      width,
  } = props
  
  let textAlign = "left"
  let w: any = "100%"
  if(width) w = width
  let textfontSize: any = "1rem"
  let textFont = "GothamLight"
  let lineHeight: any = "auto"
  if(align) textAlign = align
  
  if(variant === "black") textFont = "GothamBlack"
  if(variant === "bold") textFont = "GothamBold"
  if(variant === "thin") textFont = "GothamThin"

  if(variant === "title") {
    lineHeight = "1.4rem"
    textfontSize = "1.25rem"
    textFont = "GothamLight"
  }

  if(variant === "hero") {
    lineHeight = "2rem"
    textfontSize = "2rem"
    textFont = "GothamBold"
  }

  if(variant === "heroBlurb") {
    textfontSize = "0.9rem"
    lineHeight = "1rem"
    textFont = "GothamLight"
  }

  if(variant === "navbar") {
    textfontSize = "1.7rem"
    lineHeight = "1.7rem"
    textFont = "GothamBold"
  }
  if(variant === "giant") {
    textfontSize = "2.25rem"
    lineHeight = "2.25rem"
    textFont = "GothamBold"
  }
  if(variant === "bold") {
    textFont = "GothamBold"
  }
  if(variant === "small") {
    lineHeight = "0.8rem"
    textfontSize = "0.8rem"
  }

  if (fontSize) {
    lineHeight = fontSize
    textfontSize = fontSize
  }

  return (
    <Typography component="span" sx={{
      // border: "1px solid gold",
      display: "block",
      textAlign,
      fontFamily: textFont,
      fontSize: textfontSize,
      lineHeight,
      color: color ? color : theme.palette.text.primary,
      width: w,
    }}>
      {children}
    </Typography>    
  )
}
