import React from "react";
import {Card, CircularProgress, Grid} from "@mui/material";

const LoadingAtom = (
    {
        
    }) => {
    return (
        <Grid
            style={{
                minWidth: "100%",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
            }}
            spacing={0}
            alignSelf="center"
            justifySelf="center"
        >
            <Card style={{
                maxWidth: "40%",
                minHeight: "20vh",
                display: "flex",
                alignItems: "center"
            }}>
                <CircularProgress />
            </Card>
        </Grid>
    );
};

export default LoadingAtom;
