import {Alert, Container} from '@mui/material';
import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';


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
                <Alert key={"primary"} variant={"standard"}>
                    <h1>仮会員完了</h1>
                </Alert>
            </Container>
            }
            {(validationLoading === true || !validationToken) &&
            // ロード中
            <Container>
                <LinearProgress />
            </Container>
            }
        </>
    );
}

export default EntryValidationComplete;
