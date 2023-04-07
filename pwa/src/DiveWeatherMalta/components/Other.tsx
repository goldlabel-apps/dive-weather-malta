import React from "react"
import {
    IconButton,
    CardHeader,
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
            <CardHeader 
                title={<Font color="white">
                        Other
                    </Font>}
                subheader={<></>}
                action={<>
                <IconButton color="inherit">
                        <Icon icon="fullscreen" />
                    </IconButton>
                </>}
            />
    </>;
};
