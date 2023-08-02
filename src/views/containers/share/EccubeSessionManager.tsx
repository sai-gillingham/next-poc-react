import {Route, Routes} from "react-router-dom";
import React, {useEffect} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {withTranslation} from "react-i18next";
import {oAuthOperations} from "../../../state/ducks/shared/oauth";
import {empty} from "../../../utils/Common";
import {App} from "../../App";

const mapStateToProps = state => {
    return {
        oAuthSessionDetails: state.oAuth.oAuthSessionDetails as null | object,
    }
}

/**
 * Reduxアクション（これもコンポーネントのパラメータに挿入されます。)
 */
const mapEventToProps = {
    oAuthReceiveSessionDetailsSave: oAuthOperations.oAuthReceiveSessionDetailsSave,
}

/**
 * urlに基づいてコンテナをロードする
 * @returns {JSX.Element}
 * @constructor
 */
const _eccubeSessionContainer = ({
                                     t,
                                     oAuthSessionDetails,
                                     oAuthReceiveSessionDetailsSave,
    ...props
                                 }) => {
    useEffect(() => {
            if (empty(oAuthSessionDetails) && !empty(oAuthReceiveSessionDetailsSave) && localStorage.getItem('oAuthCredentials')) {
                oAuthReceiveSessionDetailsSave(JSON.parse(localStorage.getItem('oAuthCredentials')))
            }
        }, [oAuthSessionDetails, oAuthReceiveSessionDetailsSave]
    )
    return (<>
        {props.children}
    </>)
}
const EccubeSessionContainer = compose<any, any, any>(
    connect(mapStateToProps, mapEventToProps),
    withTranslation('common'))(_eccubeSessionContainer)


export default EccubeSessionContainer;
