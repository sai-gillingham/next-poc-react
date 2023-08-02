import React from 'react';
import {Alert, Container} from "react-bootstrap";
import {useNavigate} from "react-router";


const EntryComplete = (
    {
        t
    }) => {
    const navigation = useNavigate();
    return (
        <Container>
            <Alert key={"primary"} variant={"primary"} >
                <h1>仮会員完了</h1>
            </Alert>
        </Container>
    );
}

export default EntryComplete;
