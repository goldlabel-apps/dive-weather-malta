import React from "react"
import {
    Card,
    CardHeader,
} from "@mui/material"
import {
    useDWMSelect,
    selectDWM,
} from "../"
import {Font} from "./Font"
// import {Icon} from "../../../@listingslab";

export default function Other(props: any) {
    const dwm = useDWMSelect(selectDWM)
    const {forecast} = dwm
    if (!forecast) return null
    return <>
        <Card sx={{}}>
            <CardHeader 
                title={<Font>
                        Other
                    </Font>}
                subheader={<></>}
                action={<></>}
            />
        </Card>
    </>;
};
