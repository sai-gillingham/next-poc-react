import React from 'react';
import {Alert, Container, Spinner} from "react-bootstrap";


const EntryValidationComplete = (
    {
        t,
        validationToken,
        validationLoading
    }) => {
    return (
        <>
            {((validationToken && validationLoading === false) || validationToken) &&
            <Container>
                <Alert key={"primary"} variant={"primary"}>
                    <h1>仮会員完了</h1>
                </Alert>
            </Container>
            }
            {(validationLoading === true || !validationToken) &&
            // ロード中
            <Container>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Container>
            }
        </>
    );
}

export default EntryValidationComplete;
