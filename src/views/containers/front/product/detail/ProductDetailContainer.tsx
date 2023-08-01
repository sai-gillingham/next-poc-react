import React from "react";
import {connect} from "react-redux";
import {withTranslation} from "react-i18next";
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
const _productDetailContainer = (
    {
        t
    }) => {

    return (
        <></>
    )
};


/**
 * Redux
 * i18next Translations
 */
const ProductDetailContainer = compose(
    connect(mapStateToProps, mapEventToProps),
    withTranslation('common'))(_productDetailContainer)

export default ProductDetailContainer;
