/***
 * ////////////////
 * SAGA MIDDLEWARE (SAGAミドルウェア)
 * ---------------
 *
 * SAGAミドルウェアは、アクションとリデューサ間のアクションを解析し、アクションのTYPEに基づいてAPI関数を処理します。
 * すべてのSAGAミドルウェアは、<i>watchersSagas.js</i>から呼び出されます。
 * ////////////////
 */


import {call, put} from "redux-saga/effects";
import actions from "./actions";
import {cartRequestApi, modifyCartProduct} from "./api";
import {oAuthSelectors} from "../../shared/oauth";
import {select} from 'redux-saga/effects';

export function* modifyCartItem(data) {
    yield put(actions.modifyCartRequestLoading())
    const access_token = yield select(oAuthSelectors.getOAuthCredentials);
    try {
        yield call(modifyCartProduct, access_token?.access_token, data.payload.product_class_id, data.payload.quantity);
        yield put(actions.modifyCartRequestSuccess());
    } catch (e) {
        console.log(e);
        yield put(actions.modifyCartRequestFailure(e));
    }
}

export function* cartRequest() {
    yield put(actions.cartRequestLoading())
    const access_token = yield select(oAuthSelectors.getOAuthCredentials);
    try {
        const cartData = yield call(cartRequestApi, access_token?.access_token);
        yield put(actions.cartRequestSuccess(cartData.data?.carts));
    } catch (e) {
        console.log(e);
        yield put(actions.cartRequestFailure(e));
    }
}
