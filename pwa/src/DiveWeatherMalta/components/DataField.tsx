import {DataFieldShape} from "../types"
import React from "react"
import {
    Box,
    Tooltip,
    IconButton,
} from "@mui/material"
// import {
//     useDWMSelect,
//     selectDWM,
// } from "../"
import {Font} from "./Font"
import {Icon} from "../../@listingslab";

export default function DataField(props: DataFieldShape) {
    const {title, tooltip} = props
    return <>
        <Box sx={{display: "flex"}}>
            <Tooltip title={<Font color="white" variant="small">
                                {tooltip}
                            </Font>}>
                <IconButton color="inherit" sx={{mr:1}}>
                    <Icon icon="help" />
                </IconButton>
            </Tooltip>
            <Font variant="giant" color="white">
                {title}
            </Font>
        </Box>
    </>;
};
