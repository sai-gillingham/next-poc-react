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
import {callEntry } from "./api";

/**
 * アカウント取得リクエスト
 * @param data
 */
export function* entryRequest(data) {
    yield put(actions.sendEntryLoading())
    try {
        const requests = yield call(callEntry, data.payload.form);
        yield put(actions.sendEntrySuccess());
    } catch (e) {
        yield put(actions.sendEntryFailure(e));
    }
}
