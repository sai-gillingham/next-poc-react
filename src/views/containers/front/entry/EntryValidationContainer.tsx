import React, {useEffect} from "react";
import {connect} from "react-redux";
import {withTranslation} from "react-i18next";
import {compose} from "redux";
import {requestOperations} from "../../../../state/ducks/front/entry";
import {useLocation, useParams} from "react-router";
import EntryValidationComplete from "../../../components/front/entry/EntryValidationComplete";

/**
 * Reduxステート（これはコンポーネントのパラメータに挿入されます。)
 * @param state - reduxルートクラス
 */
const mapStateToProps = state => {
    return {
        validationLoading: state.entry.validationLoading as boolean,
        validationToken: state.entry.validationToken as string,
    }
}

/**
 * Reduxアクション（これもコンポーネントのパラメータに挿入されます。)
 */
const mapEventToProps = {
    sendEntryValidationRequest: requestOperations.sendEntryValidationRequest,
}

/**
 *
 * @param {Object} managerProfile
 * @param t
 * @returns {JSX.Element}
 * @constructor
 */
const _entryValidationContainer = (
    {
        t,
        validationToken,
        validationLoading,
        sendEntryValidationRequest
    }) => {

    let { token } = useParams();
    
    const location = useLocation()

    useEffect(() => {
            if (token !== validationToken && validationLoading !== true) {
                sendEntryValidationRequest(token)
            }
        }, [token, validationToken, validationLoading, sendEntryValidationRequest]
    )

    // @ts-ignore
    return (
        <EntryValidationComplete
            t={t}
            validationToken={validationToken}
            validationLoading={validationLoading}
        />
    )
};


/**
 * Redux
 * i18next Translations
 */
const EntryValidationContainer = compose(
    connect(mapStateToProps, mapEventToProps),
    withTranslation('common'))(_entryValidationContainer)

export default EntryValidationContainer;
