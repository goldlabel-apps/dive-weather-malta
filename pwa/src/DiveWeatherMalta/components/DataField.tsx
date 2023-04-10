import {DataFieldShape} from "../types"
import React from "react"
import {
    ListItem,
    ListItemText,
} from "@mui/material"
import {Font} from "./Font"

export default function DataField(props: DataFieldShape) {
    const {title, tooltip} = props
    return <>
        <ListItem>
            <ListItemText 
                primary={<Font variant="bold">{title}</Font>}
                secondary={<Font>{tooltip}</Font>}
            />
        </ListItem>
    </>;
};

/*
<Box sx={{display: "flex"}}>
            <Tooltip title={<Font color="white" variant="small">
                                {tooltip}
                            </Font>}>
                <IconButton color="inherit" sx={{mr:1}}>
                    <Icon icon="help" />
                </IconButton>
            </Tooltip>
            <Font>
                {title}
            </Font>
        </Box>
*/