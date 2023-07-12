import React from "react";
import {connect} from "react-redux";
import {withTranslation} from "react-i18next";
import EntryComponent from "../../../components/front/entry/EntryComponent";
import {compose} from "redux";
import {requestOperations} from "../../../../state/ducks/front/entry";
import {useLocation} from "react-router";
import EntryComplete from "../../../components/front/entry/EntryComplete";

/**
 * Reduxステート（これはコンポーネントのパラメータに挿入されます。)
 * @param state - reduxルートクラス
 */
const mapStateToProps = state => {
    return {
        entryForm: state.entry.entryForm as object,
        entryData: state.entry.entryFormError as object,
        entryFormLoading: state.entry.entryFormLoading as boolean
    }
}

/**
 * Reduxアクション（これもコンポーネントのパラメータに挿入されます。)
 */
const mapEventToProps = {
    sendEntryRequest: requestOperations.sendEntryRequest,
    entryFormUpdate: requestOperations.entryFormUpdate
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
        sendEntryRequest,
        entryForm,
        entryFormLoading,
        entryFormUpdate
    }) => {

    const location = useLocation()

    return (
        (location.pathname === '/entry' &&
            <EntryComponent
                t={t}
                registerEvent={sendEntryRequest}
                entryData={entryForm}
                registerLoading={entryFormLoading}
                entryFormUpdate={entryFormUpdate}
            />
        ) || (location.pathname === '/entry/complete' &&
            <EntryComplete
                t={t}
            />
        )
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
