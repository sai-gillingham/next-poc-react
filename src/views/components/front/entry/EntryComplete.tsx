import React from 'react';
import {useNavigate} from "react-router";
import {Alert, Container} from "@mui/material";


const EntryComplete = (
    {
        t
    }) => {
    const navigation = useNavigate();
    return (
        <Container sx={{p: 2}}>
            <Alert key={"primary"} variant={"standard"} >
                <h1>仮会員登録は完了しています。</h1>
            </Alert>
        </Container>
    );
}

export default EntryComplete;
