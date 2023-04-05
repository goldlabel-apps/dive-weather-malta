import React from "react"
import {DWMShape} from "./types"
import {
    IconButton,
    Typography,
} from "@mui/material";
import {Icon} from "../@listingslab";

export default function DiveWeatherMalta(props: DWMShape) {
    const {data} = props
    console.log("data", data)
    
    const onToggle = (e: React.MouseEvent) => {
        e.preventDefault();
    };
    return <>
        <Typography variant="h2">
            Dive Weather Malta
        </Typography>
        <IconButton
            aria-label="Toggle Color Mode"
            onClick={onToggle}>
            <Icon 
                color="primary"
                icon={"home"}
            />
        </IconButton>
    </>;
};
