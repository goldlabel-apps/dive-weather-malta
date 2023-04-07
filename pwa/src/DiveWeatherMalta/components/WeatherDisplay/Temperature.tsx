import React from "react"
import {
    IconButton,
    CardHeader,
} from "@mui/material";
import {
    useDWMSelect,
    selectDWM,
} from "../../"
import {Font} from "../Font"
import {Icon} from "../../../@listingslab";

export default function Temperature(props: any) {
    const dwm = useDWMSelect(selectDWM)
    const {forecast} = dwm
    if (!forecast) return null
    return <>
            <CardHeader 
                title={<Font color="white">
                        Temperature
                        </Font>}
                subheader={<></>}
                action={<>
                    {/* <IconButton color="inherit">
                        <Icon icon="fullscreen" />
                    </IconButton> */}
                    </>}
            />
    </>;
};
