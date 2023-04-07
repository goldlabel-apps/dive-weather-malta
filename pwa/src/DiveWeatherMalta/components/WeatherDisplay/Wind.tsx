import React from "react"
import {
    Card,
    CardHeader,
    Typography,
} from "@mui/material"
import {
    useDWMSelect,
    selectDWM,
} from "../../"
import {Font} from "../Font"
// import {Icon} from "../../../@listingslab"

export default function Wind(props: any) {
    const dwm = useDWMSelect(selectDWM)
    const {forecast} = dwm
    if (!forecast) return null
    return <>
        <Card sx={{border: "1px solid white"}}>
            <CardHeader 
                title={<Font>
                        Wind
                        </Font>}
                subheader={<></>}
                action={<></>}
            />
        </Card>
    </>
}
