import {Box, Button, Card, Container, Divider, Grid, Skeleton, Typography} from "@mui/material";
import React from "react";
import {Link} from "react-router-dom";
import {empty} from "../../../../utils/Common";

const ShoppingCompleteComponent = (
    {
        t
    }) => {

    return (
        <Container>
            <Typography variant={"h4"}>注文ありがとうございます。</Typography>
        </Container>
    )
}

export default ShoppingCompleteComponent;
