import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {withTranslation} from "react-i18next";
import {Box, Grid, Paper, Stack } from "@mui/material";

const mapStateToProps = state => {
    return {
        is_404: state.siteHealth.is_404 as boolean,
        payload: state.siteHealth.global_error as object | null,
    }
}

/**
 * Reduxアクション（これもコンポーネントのパラメータに挿入されます。)
 */
const mapEventToProps = {}

const _EccubeErrorCatcherContainer = ({
                                          t,
                                          is_404,
                                          payload,
                                          ...props
                                      }) => {
    if (is_404) {        
        // TODO: 404ページを表示する
        return (
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: '100vh' }}
            >
                <Grid item xs={3}>
                <div>
                    <h2 style={{"display": "inline-block"}}>404</h2> | {JSON.stringify(payload)}
                </div>
                </Grid>
            </Grid>
        )
    }
    
    return (<>
        {props.children}
    </>)
}
const EccubeErrorCatcherContainer = compose<any, any, any>(
    connect(mapStateToProps, mapEventToProps),
    withTranslation('common'))(_EccubeErrorCatcherContainer)


export default EccubeErrorCatcherContainer;
