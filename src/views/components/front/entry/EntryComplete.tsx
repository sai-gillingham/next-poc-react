import React from 'react';
import {useNavigate} from "react-router";
import {Alert, Container} from "@mui/material";


const EntryComplete = (
    {
        t
    }) => {
    const navigation = useNavigate();
    return (
        <Container>
            <Alert key={"primary"} variant={"standard"} >
                <h1>仮会員完了</h1>
            </Alert>
        </Container>
    );
}

export default EntryComplete;
