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
    }
}

/**
 * Reduxアクション（これもコンポーネントのパラメータに挿入されます。)
 */
const mapEventToProps = {
    mutateAndFetchOrder: shoppingOperators.mutateAndFetchOrder
}


const _shoppingContainer = (
    {
        t,
        mutateAndFetchOrder,
        oAuthSessionDetails,

        order,
        loadingOrder,
        orderError
    }) => {

    const [initialOpen, setInitialOpen] = useState(false)

    useEffect(() => {
            if (initialOpen === false && oAuthSessionDetails?.access_token) {
                setInitialOpen(true);
                mutateAndFetchOrder();
            }
        }, [initialOpen, mutateAndFetchOrder, oAuthSessionDetails]
    )


    return (
        <ShoppingComponent
            t={t}
            order={order}
            loadingOrder={loadingOrder}
            orderError={orderError}
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
