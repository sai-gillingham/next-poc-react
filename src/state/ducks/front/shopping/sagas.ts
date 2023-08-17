/***
 * ////////////////
 * SAGA MIDDLEWARE (SAGAミドルウェア)
 * ---------------
 *
 * SAGAミドルウェアは、アクションとリデューサ間のアクションを解析し、アクションのTYPEに基づいてAPI関数を処理します。
 * すべてのSAGAミドルウェアは、<i>watchersSagas.js</i>から呼び出されます。
 * ////////////////
 */
import {call, put, select} from "redux-saga/effects";
import actions from "./actions";
import {oAuthSelectors} from "../../shared/oauth";
import {modifyCartProduct} from "./api";

export function* mutateAndFetchOrder(data) {
    yield put(actions.mutateAndFetchOrderLoading())
    const access_token = yield select(oAuthSelectors.getOAuthCredentials);
    try {
        const order = yield call(modifyCartProduct, access_token?.access_token, data.payload.product_class_id, data.payload.quantity);
        yield put(actions.mutateAndFetchOrderSuccess(order));
    } catch (e) {
        console.log(e);
        yield put(actions.mutateAndFetchOrderFailure(e));
    }
}
