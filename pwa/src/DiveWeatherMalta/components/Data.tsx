import React from "react"
import {
    Box,
    LinearProgress,
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Button,
    Typography,
} from "@mui/material"
import {Icon} from "../../@listingslab"
import {
    useDWMSelect,
    selectDWM,
} from "../"

export default function Data(props: any) {
    const dwm = useDWMSelect(selectDWM)
    const {forecast, loading} = dwm

    return <>
        <Card sx={{}}>
            {loading ? <LinearProgress /> : <Box sx={{height:6}} /> }
            <CardHeader 
                title={<Typography variant="button">
                            Data
                        </Typography>}
                subheader={<></>}
                action={<></>}
            />
            <CardContent>
                <pre>forecast {JSON.stringify(forecast, null, 2)}</pre>
                <pre>loading {JSON.stringify(loading, null, 2)}</pre>
            </CardContent>
            <CardActions>
                <Button variant="contained">
                    <Icon icon="code" />
                    <span style={{marginLeft:8, marginRight:8}}>
                        Data
                    </span>
                    
                </Button>
            </CardActions>
        </Card>
    </>
}
