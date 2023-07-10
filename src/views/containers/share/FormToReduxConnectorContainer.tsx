import React from 'react'
import {connect} from 'react-redux'
import {FormSpy} from 'react-final-form'
import {requestOperations} from "../../../state/ducks/front/entry";
import {compose} from "redux";
import {withTranslation} from "react-i18next";

const mapStateToProps = state => {
    return {}
}

/**
 * Reduxアクション（これもコンポーネントのパラメータに挿入されます。)
 */
const mapEventToProps = {
    entryFormUpdate: requestOperations.entryFormUpdate
}

const _FormStateToReduxConnector = (
    {
        form,
        entryFormUpdate
    }) => {
    return (
        <FormSpy onChange={(state) => entryFormUpdate(form, state)}/>
    )
};

const FormStateToReduxConnector = compose(
    connect(mapStateToProps, mapEventToProps),
    withTranslation('common'))(_FormStateToReduxConnector)

export default FormStateToReduxConnector;
