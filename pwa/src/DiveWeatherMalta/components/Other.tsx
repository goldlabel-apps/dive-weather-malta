import React from "react"
import {
    IconButton,
    CardHeader,
    List,
    ListItemButton,
    ListItemAvatar,
    ListItemText,
    Avatar,
} from "@mui/material"
import {
    useDWMSelect,
    selectDWM,
} from "../"
import {Font} from "./Font"
import {Icon} from "../../@listingslab";

export default function Other(props: any) {
    const dwm = useDWMSelect(selectDWM)
    const {forecast} = dwm
    if (!forecast) return null
    return <>
        <List>
            <ListItemButton
                onClick={(e: React.MouseEvent) => {
                    e.preventDefault()
                    console.log("Other")
                }}>
                <ListItemText 
                    primary={<Font color="white">
                        The Um El Faroud
                    </Font>}
                />
                <ListItemAvatar>
                    <Icon icon="right" />
                </ListItemAvatar>
            </ListItemButton>

            <ListItemButton
                onClick={(e: React.MouseEvent) => {
                    e.preventDefault()
                    console.log("Other")
                }}>
                <ListItemText 
                    primary={<Font color="white">
                        The Rozi
                    </Font>}
                />
                <ListItemAvatar>
                    <Icon icon="right" />
                </ListItemAvatar>
            </ListItemButton>

        </List>
    </>;
};
