import React from "react";
import {connect} from "react-redux";
import {withTranslation} from "react-i18next";
import {compose} from "redux";
import {loginOperations} from "../../../../state/ducks/front/login";
import LoginComponent from "../../../components/front/auth/LoginComponent";

/**
 * Reduxステート（これはコンポーネントのパラメータに挿入されます。)
 * @param state - reduxルートクラス
 */
const mapStateToProps = state => {
    return {
        loginForm: state.login.loginForm as object,
        loginFormLoading: state.login.loginFormLoading as boolean,
        loginFormError: state.login.loginFormError as object,
        token: state.oAuth.token as string,
    }
}

/**
 * Reduxアクション（これもコンポーネントのパラメータに挿入されます。)
 */
const mapEventToProps = {
    sendLoginRequest: loginOperations.sendLoginRequest,
    updateLoginForm: loginOperations.updateLoginForm
}

/**
 *
 * @param {Object} managerProfile
 * @param t
 * @returns {JSX.Element}
 * @constructor
 */
const _entryContainer = (
    {
        t,
        loginForm,
        loginFormLoading,
        loginFormError,
        sendLoginRequest,
        updateLoginForm,
        token
    }) => {
    
    return (
        <LoginComponent
            t={t}
            loginForm={loginForm}
            loginFormLoading={loginFormLoading}
            loginFormError={loginFormError}
            sendLoginRequest={sendLoginRequest}
            updateLoginForm={updateLoginForm}
            oAuthToken={token}
        />
    )
};


/**
 * Redux
 * i18next Translations
 */
const EntryContainer = compose(
    connect(mapStateToProps, mapEventToProps),
    withTranslation('common'))(_entryContainer)

export default EntryContainer;
