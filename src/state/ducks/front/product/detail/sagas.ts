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
import {callProductDetailData} from "./api";

export function* pullProductDetailRequest(data) {
    yield put(actions.fetchProductDetailLoading())
    try {
        const requests = yield call(callProductDetailData, data.payload.id);
        yield put(actions.fetchProductDetailSuccess(requests.data.product));
    } catch (e) {
        console.log(e);
        yield put(actions.fetchProductDetailFailure(e));
    }
}
