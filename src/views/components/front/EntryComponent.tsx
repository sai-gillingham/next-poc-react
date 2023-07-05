import React from 'react';
import Page from "../../atoms/Page";
import {Container} from "react-bootstrap";

/**
 *
 * @param {*} t - 翻訳
 * @returns {JSX.Element}
 * @constructor
 */
const EntryComponent = (
    {
        t
    }) => {
    return (
        <Page
            title={t('requests.title_user')}
        >
            <Container>
                Hello World
            </Container>
        </Page>
    );
}

export default EntryComponent;
