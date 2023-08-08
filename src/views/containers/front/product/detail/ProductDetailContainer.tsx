import React, {useEffect} from "react";
import {connect} from "react-redux";
import {withTranslation} from "react-i18next";
import {compose} from "redux";
import {useParams} from "react-router";
import {Params} from "react-router-dom";
import {productDetailOperations} from "../../../../../state/ducks/front/product/detail";
import ProductDetailComponent from "../../../../components/front/product/detail/ProductDetailComponent";

/**
 * Reduxステート（これはコンポーネントのパラメータに挿入されます。)
 * @param state - reduxルートクラス
 */
const mapStateToProps = state => {
    return {
        productDetail: state.productDetail.productDetail as object,
        productDetailLoading: state.productDetail.productDetailLoading as boolean,
        productDetailError: state.productDetail.productDetailError as object | null,
        oAuthSessionDetails: state.oAuth.oAuthSessionDetails as null | object,
    }
}

/**
 * Reduxアクション（これもコンポーネントのパラメータに挿入されます。)
 */
const mapEventToProps = {
    fetchProductDetailRequest: productDetailOperations.fetchProductDetailRequest
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
        t,
        fetchProductDetailRequest,
        productDetail,
        productDetailLoading,
        productDetailError,
        oAuthSessionDetails
    }) => {

    let {pid}: Readonly<Params<string>> = useParams();

    useEffect(() => {
        if (productDetailLoading === false && productDetail?.id !== pid && productDetailError === null) {
            fetchProductDetailRequest(pid)
        }
    }, [productDetailLoading, productDetail, pid, fetchProductDetailRequest])
    
    return (
        <ProductDetailComponent
            t={t}
            productDetail={productDetail}
            productDetailLoading={productDetailLoading}
            productDetailError={productDetailError}
            oAuthSessionDetails={oAuthSessionDetails}
        />
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
