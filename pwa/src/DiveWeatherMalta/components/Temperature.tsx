import React from "react"
import {
    Card,
    CardHeader,
    IconButton,
    Typography,
} from "@mui/material";
import {Icon} from "../../@listingslab";

export default function Temperature(props: any) {
    // const {data} = props
    const onAction = (e: React.MouseEvent) => {
        e.preventDefault();
    };
    return <>
        <Card sx={{}}>
            <CardHeader 
                title={<Typography variant="body1">
                        Temperature
                        </Typography>}
                subheader={<Typography variant="body2">
                        Air & Water
                        </Typography>}
                action={<IconButton
                            color="primary"
                            onClick={onAction}>
                            <Icon 
                                
                                icon={"close"}
                            />
                        </IconButton>}
            />
        </Card>
    </>;
};
