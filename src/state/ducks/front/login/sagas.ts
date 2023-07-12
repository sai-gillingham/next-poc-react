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
import {callLogin} from "./api";
/**
 * ログインリクエスト
 * @param data
 */
export function* loginRequest(data) {
    yield put(actions.sendLoginLoading())
    try {
        const requests = yield call(callLogin, data.payload.formData);
        if (requests.data.errors) {
            throw new Error(requests.data.errors);
        }
        yield put(actions.sendLoginSuccess());
        yield put(data.navigate('/mypage'));
    } catch (e) {
        console.log(e);
        yield put(actions.sendLoginFailure(e));
    }
}

