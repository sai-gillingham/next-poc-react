import {Route, Routes} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {withTranslation} from "react-i18next";
import {oAuthOperations} from "../../../state/ducks/shared/oauth";
import {empty} from "../../../utils/Common";
import {App} from "../../App";
import {cartOperators} from "../../../state/ducks/front/cart";

const mapStateToProps = state => {
    return {
        oAuthSessionDetails: state.oAuth.oAuthSessionDetails as null | object,
    }
}

/**
 * Reduxアクション（これもコンポーネントのパラメータに挿入されます。)
 */
const mapEventToProps = {
    oAuthReceiveSessionDetailsSave: oAuthOperations.oAuthReceiveSessionDetailsSave,
    cartRequest: cartOperators.cartRequest
}

/**
 * urlに基づいてコンテナをロードする
 * @returns {JSX.Element}
 * @constructor
 */
const _cartContainer = ({
                            t,
                            oAuthSessionDetails,
                            cartRequest,
                            ...props
                        }): JSX.Element => {
    
    useEffect(() => {
        if(oAuthSessionDetails?.access_token) {
            const interval = setInterval(() => {
                cartRequest();
            }, parseInt(process.env.REACT_APP_CART_REFRESH_RATE_SECONDS) * 1000);
            cartRequest();
            return () => clearInterval(interval);
        }
    }, [cartRequest, oAuthSessionDetails]);
    
    return (<>
        {props.children}
    </>)
}
const CartContainer = compose<any, any, any>(
    connect(mapStateToProps, mapEventToProps),
    withTranslation('common'))(_cartContainer)


export default CartContainer;
