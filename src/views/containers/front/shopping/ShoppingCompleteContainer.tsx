import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {withTranslation} from "react-i18next";
import {compose} from "redux";
import ShoppingComponent from "../../../components/front/shopping/ShoppingComponent";
import {shoppingOperators} from "../../../../state/ducks/front/shopping";
import ShoppingConfirmComponent from "../../../components/front/shopping/ShoppingConfirmComponent";
import ShoppingCompleteComponent from "../../../components/front/shopping/ShoppingCompleteComponent";

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


const _shoppingCompleteContainer = (
    {
        t
    }) => {
    
    return (
        <ShoppingCompleteComponent
            t={t}
        />
    )
};


/**
 * Redux
 * i18next Translations
 */
const ShoppingCompleteContainer = compose(
    connect(mapStateToProps, mapEventToProps),
    withTranslation('common'))(_shoppingCompleteContainer)

export default ShoppingCompleteContainer;
