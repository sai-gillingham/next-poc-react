import React, {useEffect} from "react";
import {connect} from "react-redux";
import {withTranslation} from "react-i18next";
import {compose} from "redux";
import {oAuthOperations} from "../../../../../state/ducks/shared/oauth";
import {useNavigate, useParams} from "react-router";
import {useSearchParams} from "react-router-dom";

/**
 * Reduxステート（これはコンポーネントのパラメータに挿入されます。)
 * @param state - reduxルートクラス
 */
const mapStateToProps = state => {
    return {
        
    }
}

/**
 * Reduxアクション（これもコンポーネントのパラメータに挿入されます。)
 */
const mapEventToProps = {
    oAuthReceiveToken: oAuthOperations.oAuthReceiveToken
}

/**
 *
 * @param {Object} managerProfile
 * @param t
 * @returns {JSX.Element}
 * @constructor
 */
const _captureOAuthTokenContainer = (
    {
        t,
        oAuthReceiveToken
    }) => {

    let [searchParameters] = useSearchParams();
    let token = searchParameters.get('code');
    let navigation = useNavigate();
    
    useEffect(() => {
        console.log('token', token)
        oAuthReceiveToken(token, navigation)
    }, [token, oAuthReceiveToken, navigation]);
};


/**
 * Redux
 * i18next Translations
 */
const CaptureOAuthTokenContainer = compose(
    connect(mapStateToProps, mapEventToProps),
    withTranslation('common'))(_captureOAuthTokenContainer)

export default CaptureOAuthTokenContainer;
