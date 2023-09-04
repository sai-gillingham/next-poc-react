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
import {callEntry, callValidationEntry} from "./api";
import {useNavigate} from "react-router-dom";

/**
 * アカウント取得リクエスト
 * @param data
 */
export function* entryRequest(data) {
    yield put(actions.sendEntryLoading())
    try {
        // fixme
        data.payload.formData.address_pref = parseInt(data.payload.formData.address_pref);
        const requests = yield call(callEntry, { 'input': data.payload.formData });
        if(requests.data.errors) {
            throw new Error(requests.data.errors);
        }
        yield put(actions.sendEntrySuccess());
        yield put(data.navigate('/entry/complete'));
    } catch (e) {
        console.log(e);
        yield put(actions.sendEntryFailure(e));
    }
}

export function* entryValidationRequest(data) {
    yield put(actions.sendEntryValidationLoading())
    try {
        const requests = yield call(callValidationEntry, data.payload.formData);
        if(requests.data.errors) {
            throw new Error(requests.data.errors);
        }
        yield put(actions.sendEntryValidationSuccess());
    } catch (e) {
        console.log(e);
        yield put(actions.sendEntryValidationFailure(e));
    }
}
