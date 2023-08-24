import { takeLeading } from "redux-saga/effects";
import {default as types} from "./types";
import {cartRequest, modifyCartItem} from "./sagas";

/**
 * //////////////////////////////////////////
 * SAGA WATCHERS (サガ・ウォッチャー)
 * --------------------
 * actions.jsからのすべてのアクションは、ここで読み込まれてからreducerに送られます。
 * イベントタイプが一致した場合、下記の第2パラメータの関数が呼び出され、任意のアクションデータを使用することができます。
 * ////////////////////////////////////////////
 */

export function* fetchRequests() {
    yield takeLeading(types.FRONT_CART_MODIFY_PRODUCT_REQUEST, modifyCartItem);
    yield takeLeading(types.FRONT_CART_REQUEST, cartRequest);
}

