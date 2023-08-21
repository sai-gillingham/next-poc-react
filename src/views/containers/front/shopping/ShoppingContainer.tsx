import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {withTranslation} from "react-i18next";
import {compose} from "redux";
import ShoppingComponent from "../../../components/front/shopping/ShoppingComponent";
import {shoppingOperators} from "../../../../state/ducks/front/shopping";

/**
 * Reduxステート（これはコンポーネントのパラメータに挿入されます。)
 * @param state - reduxルートクラス
 */
const mapStateToProps = state => {
    return {
        order: state.shopping.order as object | null,
        loadingOrder: state.shopping.loadingOrder as boolean,
        orderError: state.shopping.orderError as object | null,
        oAuthSessionDetails: state.oAuth.oAuthSessionDetails as null | object,
        paymentMethods: state.shopping.paymentMethods as object | null,
        selectedPaymentMethod: state.shopping.selectedPaymentMethod as object | null,
        paymentMethodsLoading: state.shopping.paymentMethodsLoading as boolean,
        paymentMethodsError: state.shopping.paymentMethodsError as object | null,
    }
}

/**
 * Reduxアクション（これもコンポーネントのパラメータに挿入されます。)
 */
const mapEventToProps = {
    mutateAndFetchOrder: shoppingOperators.mutateAndFetchOrder,
    mutateAndFetchPaymentMethod: shoppingOperators.mutateAndFetchPaymentMethod,
}


const _shoppingContainer = (
    {
        t,
        mutateAndFetchOrder,
        oAuthSessionDetails,
        paymentMethods,
        selectedPaymentMethod,
        paymentMethodsLoading,
        paymentMethodsError,
        

        order,
        loadingOrder,
        orderError,
        mutateAndFetchPaymentMethod
    }) => {

    const [initialOpen, setInitialOpen] = useState(false);
    const [initialOpenPayment, setInitialOpenPayment] = useState(false);

    // 注文情報を取得する
    useEffect(() => {
            if (initialOpen === false && oAuthSessionDetails?.access_token) {
                setInitialOpen(true);
                mutateAndFetchOrder();
            }
        }, [initialOpen, mutateAndFetchOrder, oAuthSessionDetails]
    )

    // 支払い方法を取得する
    useEffect(() => {
            if (initialOpenPayment === false && oAuthSessionDetails?.access_token) {
                setInitialOpenPayment(true);
                mutateAndFetchPaymentMethod();
            }
        }, [initialOpenPayment, mutateAndFetchPaymentMethod, oAuthSessionDetails]
    )


    return (
        <ShoppingComponent
            t={t}
            order={order}
            loadingOrder={loadingOrder}
            orderError={orderError}
            paymentMethods={paymentMethods}
            selectedPaymentMethod={selectedPaymentMethod}
            paymentMethodsLoading={paymentMethodsLoading}
        />
    )
};


/**
 * Redux
 * i18next Translations
 */
const ShoppingContainer = compose(
    connect(mapStateToProps, mapEventToProps),
    withTranslation('common'))(_shoppingContainer)

export default ShoppingContainer;
