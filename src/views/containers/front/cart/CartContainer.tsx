import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {withTranslation} from "react-i18next";
import {compose} from "redux";
import {cartOperators} from "../../../../state/ducks/front/cart";
import CartDrawer from "../../../components/front/cart/drawer/CartDrawer";
import CartComponent from "../../../components/front/cart/CartComponent";

/**
 * Reduxステート（これはコンポーネントのパラメータに挿入されます。)
 * @param state - reduxルートクラス
 */
const mapStateToProps = state => {
    return {
        cartDetail: state.cart.cartDetail as object | null,
        cartDetailLoading: state.cart.cartDetailLoading as boolean,
    }
}

/**
 * Reduxアクション（これもコンポーネントのパラメータに挿入されます。)
 */
const mapEventToProps = {
    cartRequest: cartOperators.cartRequest
}


const _cartContainer = (
    {
        t,
        cartDetail,
        cartDetailLoading,

        cartRequest
    }) => {

    const [initialOpen, setInitialOpen] = useState(false)

    useEffect(() => {
            if (initialOpen === false) {
                setInitialOpen(true);
                cartRequest();
            }
        }, [initialOpen, cartRequest]
    )

    return (
        <>
            {
                <CartComponent
                    t={t}
                    cartDetailLoading={cartDetailLoading}
                    cartDetail={cartDetail}
                />
            }
        </>
    )
};


/**
 * Redux
 * i18next Translations
 */
const CartContainer = compose(
    connect(mapStateToProps, mapEventToProps),
    withTranslation('common'))(_cartContainer)

export default CartContainer;
