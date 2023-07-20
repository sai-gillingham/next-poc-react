import { Route, Routes } from "react-router-dom";
import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {withTranslation} from "react-i18next";
import {requestOperations} from "../../../state/ducks/front/entry";

const mapStateToProps = state => {
    return {
        token: state.oAuth.oAuthSessionDetails as null | object,
    }
}

/**
 * Reduxアクション（これもコンポーネントのパラメータに挿入されます。)
 */
const mapEventToProps = {
    
}

/**
 * urlに基づいてコンテナをロードする
 * @returns {JSX.Element}
 * @constructor
 */
const _eccubeSessionContainer = (
    t,
    oAuthSessionDetails
) => {
    return (
        <div>
            
        </div>
    )
}
const EccubeSessionContainer = compose(
    connect(mapStateToProps, mapEventToProps),
    withTranslation('common'))(_eccubeSessionContainer)

export default EccubeSessionContainer;
