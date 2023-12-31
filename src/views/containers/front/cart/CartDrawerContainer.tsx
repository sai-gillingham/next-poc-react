import React, {useEffect} from "react";
import {connect} from "react-redux";
import {withTranslation} from "react-i18next";
import {compose} from "redux";
import {cartOperators} from "../../../../state/ducks/front/cart";
import CartDrawer from "../../../components/front/cart/drawer/CartDrawer";

/**
 * Reduxステート（これはコンポーネントのパラメータに挿入されます。)
 * @param state - reduxルートクラス
 */
const mapStateToProps = state => {
    return {
        cartDetail: state.cart.cartDetail as object | null,
        cartSliderShow: state.cart.cartSliderShow as boolean,
        initialCartSliderShow: state.cart.initialCartSliderShow as boolean,
        cartDetailLoading: state.cart.cartDetailLoading as boolean,
    }
}

/**
 * Reduxアクション（これもコンポーネントのパラメータに挿入されます。)
 */
const mapEventToProps = {
    cartRequest: cartOperators.cartRequest,
    cartSliderHide: cartOperators.cartSliderHide,
    cartSliderInitialShow: cartOperators.cartSliderInitialShow
}


const _cartDrawerContainer = (
    {
        t,
        cartDetail,
        cartSliderShow,
        initialCartSliderShow,
        cartDetailLoading,

        cartRequest,
        cartSliderHide,
        cartSliderInitialShow
    }) => {

    useEffect(() => {
            if (cartSliderShow === true && initialCartSliderShow === true) {
                cartSliderInitialShow();
                cartRequest();
            }
        }, [initialCartSliderShow, cartSliderShow, cartRequest]
    )

    console.log(cartSliderShow)

    return (
        <>
            <CartDrawer
                t={t}
                cartDetail={cartDetail}
                cartSliderHide={cartSliderHide}
                cartSliderShowState={cartSliderShow}
                cartDetailLoading={cartDetailLoading}
            />
        </>
    )
};


/**
 * Redux
 * i18next Translations
 */
const CartDrawerContainer = compose(
    connect(mapStateToProps, mapEventToProps),
    withTranslation('common'))(_cartDrawerContainer)

export default CartDrawerContainer;
