import React, {useEffect} from "react";
import {connect} from "react-redux";
import {withTranslation} from "react-i18next";
import EntryComponent from "../../components/front/EntryComponent";
import {compose} from "redux";

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
        t
    }) => {
    
    return (
        <EntryComponent
            t={t}
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
